
import gulp from 'gulp';
import cache from 'gulp-cached';
import eslint from 'gulp-eslint';
import htmlhint from 'gulp-htmlhint';
import lintspaces from 'gulp-lintspaces';
import stylelint from 'gulp-stylelint';


export const spaces = () =>
    gulp.src([
        '*.{js,json,md,yml,txt}',
        '.*',
        '!.DS_Store',
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
        'src/**/*.{js,jsx}',
    ])
    .pipe(cache('lintjs'))
    .pipe(eslint())
    .pipe(eslint.format('codeframe'))
    .pipe(eslint.failAfterError());


export const html = () =>
    gulp.src('.html/*.html')
    .pipe(
        htmlhint({
            // Rules documentation:
            // https://github.com/yaniswang/HTMLHint/wiki/Rules
            'alt-require': true,
            'attr-lowercase': [
                'viewBox',
                'preserveAspectRatio',
                'filterUnits',
                'gradientTransform',
                'stdDeviation',
                'autoComplete'
            ],
            'attr-no-duplication': true,
            'attr-unsafe-chars': true,
            'attr-value-double-quotes': true,
            'attr-value-not-empty': true,
            'doctype-html5': true,
            'id-class-ad-disabled': true,
            'id-unique': true,
            'inline-script-disabled': false,
            'src-not-empty': true,
            'tag-pair': true,
            'tag-self-close': true,
            'tagname-lowercase': false,
            'title-require': true,
            // TODO: enable when https://github.com/yaniswang/HTMLHint/issues/139 is fixed
            // as <div>&lt;div></div> raises errors at the moment
            'spec-char-escape': false
        })
    )
    .pipe(htmlhint.failReporter());