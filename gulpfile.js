
import del from 'del';
import gulp from 'gulp';
import path from 'path';

// tasks
import * as lint from './scripts/gulp/lint';
import * as styles from './scripts/gulp/styles';

import paths from './scripts/helpers/paths';


const withName = name => fn => {
    const f = (...args) => fn(...args);
    f.displayName = name;
    return f;
};


// ==================
// clean
// ==================

gulp.task('clean', () =>
    del([
        paths.generated,
        paths.tmp,
        paths.logs,
        paths.build,
        paths.html,
        paths.css,
        path.join(paths.designTokens, 'dist')
    ])
);

// ==================
// lint
// ==================

gulp.task('lint:sass', lint.sass);
gulp.task('lint:spaces', lint.spaces);
gulp.task('lint:javascript', lint.javascript);
gulp.task('lint:html', lint.html);

gulp.task(
    'lint',
    gulp.parallel(
        withName('lint:sass')(lint.sass),
        withName('lint:spaces')(lint.spaces),
        withName('lint:javascript')(lint.javascript),
        withName('lint:html')(lint.html)
    )
);

// ==================
// styles
// ==================

gulp.task('styles:sass', styles.sass);
gulp.task('styles:sassTouch', styles.sassTouch);
gulp.task('styles:test', styles.sassTest);
gulp.task(
    'styles',
    gulp.series(
        gulp.parallel(
            'styles:sass',
            'styles:sassTouch',
            'styles:test',
        )
    )
);

// ==================
// builds
// ==================
