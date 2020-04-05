import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// https://css-tricks.com/creating-svg-icon-system-react/

const IconStatusRunning = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="status-running" width="1rem" height="1rem" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
            <g xmlns="http://www.w3.org/2000/svg" fillRule="evenodd">
                <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z"/>
                <path d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z" fill="#FFF"/>
                <path d="M7 3c2.2 0 4 1.8 4 4s-1.8 4-4 4c-1.3 0-2.5-.7-3.3-1.7L7 7V3"/>
            </g>
        </svg>
    );
};

IconStatusRunning.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconStatusRunning;
