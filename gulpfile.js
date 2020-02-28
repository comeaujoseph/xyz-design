
import gulp from 'gulp';

// tasks
import * as lint from './scripts/gulp/lint';


const withName = name => fn => {
    const f = (...args) => fn(...args);
    f.displayName = name;
    return f;
};


// ==================
// clean
// ==================

// ==================
// tokens
// ==================


// ==================
// lint
// ==================

gulp.task('lint:sass', lint.sass);
gulp.task('lint:spaces', lint.spaces);
gulp.task('lint:javascript', lint.javascript);

gulp.task(
    'lint',
    gulp.parallel(
        withName('lint:sass')(lint.sass),
        withName('lint:spaces')(lint.spaces),
        withName('lint:javascript')(lint.javascript),
    )
);

// ==================
// builds
// ==================
