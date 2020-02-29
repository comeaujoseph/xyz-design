
import combineMediaQuery from 'postcss-combine-media-query';
import gulp from 'gulp';
import gulpPlumber from 'gulp-plumber';
import gulpSourcemaps from 'gulp-sourcemaps';

import * as gulpHelpers from '../../helpers/gulp';


export const sass = () =>
    gulp.src(['src/index.scss'])
        .pipe(gulpPlumber())
        .pipe(gulpSourcemaps.init())
        .pipe(gulpHelpers.writeScss())
        .pipe(gulpHelpers.writePostCss())
        .pipe(gulpHelpers.writeMinifyCss())
        .pipe(gulpSourcemaps.write('.'))
        .pipe(gulp.dest('assets/styles'));

export const sassTouch = () =>
    gulp.src(['src/touch.scss'])
        .pipe(gulpPlumber())
        .pipe(gulpSourcemaps.init())
        .pipe(gulpHelpers.writeScss())
        .pipe(gulpHelpers.writePostCss([combineMediaQuery]))
        .pipe(gulpHelpers.writeMinifyCss())
        .pipe(gulpSourcemaps.write('.'))
        .pipe(gulp.dest('assets/styles'));

// Quick check that all variants compile correctly to CSS
export const sassTest = () =>
    gulp.src('src/index-*.scss')
        .pipe(gulpHelpers.writeScss())
        .pipe(gulp.dest('assets/styles/.test'));