
import del from 'del';
import gulp from 'gulp';
import packageJSON from '../../package.json';

const XYZ_VERSION = packageJSON.version;
const DISPLAY_NAME = 'XYZ Design System';
const MODULE_NAME = 'xyz-design-system';


export const cleanBefore = () => del([paths.dist]);
export const cleanAfter = () => del([distPath('README-dist.md')]);


export const copyDesignTokens = () => {
    gulp.src('**/*.*', {
        base: `${paths.designTokens}`,
        cwd: `${paths.designTokens}`
    })
    .pipe(gulp.dest(distPath('design-tokens')));
}


export const copyComponentDesignTokens = () => {
    gulp.src('components/**/tokens/**/*.yml', {
        base: path.resolve(paths.ui),
        cwd: path.resolve(paths.ui)
    })
    .pipe(gulp.dest(distPath('ui')));
}
