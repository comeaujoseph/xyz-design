
import gulp from 'gulp';
import cache from 'gulp-cached';
import eslint from 'gulp-eslint';
import lintspaces from 'gulp-lintspaces';
import stylelint from 'gulp-stylelint';


export const spaces = () =>
    gulp.src([
        '*.{js,json,md,yml,txt}',
        '.*',
        '!.DS_Store',
        '!LICENSE-icons-images.txt',
        '!CONTRIBUTING.md',
        'src/**/*.*',
        'scripts/**/*.{js,sh,jsx}',
        '!**/__snapshots__/*'
    ])
    .pipe(cache('lintspaces'))
    .pipe(
        lintspaces({
            editorconfig: '.editorconfig',
            ignores: [
                /\/\*[\s\S]*?\*\//g // Ignore comments
            ]
        })
    )
    .pipe(lintspaces.reporter({ breakOnWarning: true }));

export const sass = () =>
    gulp.src(['src/**/*.scss'])
    .pipe(cache('stylelint'))
    .pipe(
        stylelint({
            reporters: [
                {
                    formatter: 'string',
                    console: true
                }
            ],
            failAfterError: true
        })
    );

export const javascript = (files, options) =>
    gulp.src([
        '*.js',
        'shared/**/*.{js,jsx}',
        'src/**/*.{js,jsx}',
        '!**/*.spec.{js,jsx}'
    ])
    .pipe(cache('lintjs'))
    .pipe(eslint())
    .pipe(eslint.format('codeframe'))
    .pipe(eslint.failAfterError());
