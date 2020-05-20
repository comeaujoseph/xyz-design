import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// https://css-tricks.com/creating-svg-icon-system-react/

const IconStatusWarning = (props) => {

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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="status-warning" width="1rem" height="1rem" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
            <g fillRule="evenodd">
                <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z"/>
                <path d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z" fill="var(--svg-status-bg, #fff)"/>
                <path d="M6 3.5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v4c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-4m0 6c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-1"/>
            </g>
        </svg>
    );
};

IconStatusWarning.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconStatusWarning;
