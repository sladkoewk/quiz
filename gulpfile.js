const gulp = require('gulp');
const del = require('del');
const rename = require('gulp-rename');
const tinypng = require('gulp-tinypng');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const cleanCSS = require('gulp-clean-css');
const gulpIf = require('gulp-if');
const gulplog = require('gulplog');
const browserSync = require('browser-sync');
const webpackStream = require('webpack-stream');
const named = require('vinyl-named');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const realFavicon = require('gulp-real-favicon');
const fs = require('fs');

const status = process.env.STATUS || 'development';
const isDevelopment = status === 'development';
const isProduction = status === 'production';

const path = {
  src: {
    base: 'src/',
    favicon: 'src/favicon.png',
    img: 'src/img/**/*.*',
    font: 'src/fonts/**/*.*',
    html: ['src/index.html', 'src/pages/**/*.html'],
    style: 'src/styles/main.scss',
    jsVendor: 'src/js/vendor/**/*.*',
    jsBase: 'src/js/*.*',
  },
  out: {
    root: 'public/',
    img: 'public/img',
    font: 'public/font',
    html: 'public/',
    css: 'public/',
    js: 'public/',
  },
  watch: {
    style: 'src/styles/**/*.*',
    js: 'src/js/**/*.*',
  },
};

const config = {
  outputCssMinName: 'bundle.min.css',
  outputCssName: 'bundle.css',
};

const FAVICON = 'faviconData.json';

function clean() {
  return del(path.out.root);
}

function assetImg() {
  return gulp
    .src(path.src.img)
    .pipe(gulpIf(isProduction, tinypng('API Key'))) // https://tinypng.com/dashboard/api
    .pipe(rename({ dirname: path.out.img }))
    .pipe(gulp.dest('.'));
}

function assetFont() {
  return gulp
    .src(path.src.font)
    .pipe(rename({ dirname: path.out.font }))
    .pipe(gulp.dest('.'));
}

function assetHtml() {
  return gulp
    .src(path.src.html, { base: path.src.base })
    .pipe(rename({ dirname: path.out.html }))
    .pipe(gulp.dest('.'));
}

function styles() {
  return gulp
    .src(path.src.style)
    .pipe(
      plumber({
        errorHandler: notify.onError(() => {
          const notifyErrorTemplate = {
            title: 'Styles error',
            message: 'Error: <%= error.message %>',
          };
          return notifyErrorTemplate;
        }),
      }),
    )
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(sass())
    .pipe(
      gulpIf(
        isDevelopment,
        concat(config.outputCssName),
        concat(config.outputCssMinName),
      ),
    )
    .pipe(autoprefixer())
    .pipe(gulpIf(isProduction, cleanCSS({ compatibility: 'ie8' })))
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(gulp.dest(path.out.css))
    .pipe(browserSync.stream());
}

function webpack(callback) {
  let firstBuildReady = false;

  function done(err, stats) {
    firstBuildReady = true;
    if (err) {
      return;
    }
    gulplog[stats.hasErrors() ? 'error' : 'info'](
      stats.toString({
        colors: true,
      }),
    );
  }

  const conf = {
    mode: status,
    watch: isDevelopment,
    watchOptions: {
      aggregateTimeout: 100,
    },
    devtool: isDevelopment ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    optimization: {
      minimizer: [new UglifyJsPlugin()],
      noEmitOnErrors: true,
    },
  };

  return gulp
    .src([path.src.jsVendor, path.src.jsBase])
    .pipe(
      plumber({
        errorHandler: notify.onError(() => {
          const notifyErrorTemplate = {
            title: 'Webpack error',
            message: 'Error: <%= error.message %>',
          };
          return notifyErrorTemplate;
        }),
      }),
    )
    .pipe(named())
    .pipe(webpackStream(conf, null, done))
    .pipe(gulp.dest(path.out.js))
    .on('data', () => {
      if (firstBuildReady) {
        callback();
      }
    });
}

function favicon(callback) {
  realFavicon.generateFavicon(
    {
      masterPicture: path.src.favicon,
      dest: path.out.root,
      iconsPath: '/',
      design: {
        ios: {
          pictureAspect: 'backgroundAndMargin',
          backgroundColor: '#ffffff',
          margin: '14%',
          assets: {
            ios6AndPriorIcons: false,
            ios7AndLaterIcons: false,
            precomposedIcons: false,
            declareOnlyDefaultIcon: true,
          },
        },
        desktopBrowser: {},
        windows: {
          pictureAspect: 'noChange',
          backgroundColor: '#ffffff',
          onConflict: 'override',
          assets: {
            windows80Ie10Tile: false,
            windows10Ie11EdgeTiles: {
              small: false,
              medium: true,
              big: false,
              rectangle: false,
            },
          },
        },
        androidChrome: {
          pictureAspect: 'noChange',
          themeColor: '#ffffff',
          manifest: {
            display: 'standalone',
            orientation: 'notSet',
            onConflict: 'override',
            declared: true,
          },
          assets: {
            legacyIcon: false,
            lowResolutionIcons: false,
          },
        },
        safariPinnedTab: {
          pictureAspect: 'silhouette',
          themeColor: '#5bbad5',
        },
      },
      settings: {
        scalingAlgorithm: 'Mitchell',
        errorOnImageTooSmall: false,
      },
      markupFile: FAVICON,
    },
    () => {
      callback();
    },
  );
}

function injectFavicon() {
  return gulp
    .src(path.src.html)
    .pipe(
      realFavicon.injectFaviconMarkups(
        JSON.parse(fs.readFileSync(FAVICON)).favicon.html_code,
      ),
    )
    .pipe(gulp.dest(path.out.html));
}

function watch() {
  gulp.watch(path.src.img, gulp.series(assetImg));
  gulp.watch(path.src.font, gulp.series(assetFont));
  gulp.watch(path.src.html, gulp.series(assetHtml, injectFavicon));
  gulp.watch(path.watch.style, gulp.series(styles));
}

function serve() {
  browserSync.init({
    server: path.out.root,
  });
  browserSync.watch(path.out.root).on('change', browserSync.reload);
}

exports.clean = clean;
exports.assetImg = assetImg;
exports.assetFont = assetFont;
exports.assetHtml = assetHtml;

const assets = gulp.parallel(assetImg, assetFont, assetHtml);
exports.assets = assets;

exports.styles = styles;
exports.webpack = webpack;

const build = gulp.series(clean, gulp.parallel(assets, styles, webpack));
exports.build = build;

exports.watch = watch;
exports.serve = serve;

const faviconSetup = gulp.series(favicon, injectFavicon);
exports.faviconSetup = faviconSetup;

exports.default = gulp.series(build, faviconSetup, gulp.parallel(watch, serve));

exports.production = gulp.series(clean, build, faviconSetup, serve);
