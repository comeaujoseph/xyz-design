import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconRedo = (props) => {
    const {
        className,
        id,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-icon',
        {},
        className
    );

    return (
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="redo" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" d="M10.767.494a8 8 0 0 0-8.22 1.652l-.84-.84C1.077.676 0 1.122 0 2.013V6h3.987c.891 0 1.337-1.077.707-1.707l-.731-.732a6 6 0 1 1-1.378 7.024 1 1 0 0 0-1.805.861A8 8 0 1 0 10.767.494z"/>
        </svg>
    );
};

IconRedo.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconRedo;
