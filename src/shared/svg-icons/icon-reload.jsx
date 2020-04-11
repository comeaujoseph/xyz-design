import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconReload = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="reload" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" d="M14.955 7.986l.116.01a1 1 0 0 1 .85 1.13 8 8 0 0 1-13.374 4.728l-.84.84c-.63.63-1.707.184-1.707-.707V10h3.987c.89 0 1.337 1.077.707 1.707l-.731.731a5.998 5.998 0 0 0 8.347-.264 6 6 0 0 0 1.63-3.33 1 1 0 0 1 1.131-.848l-.116-.01zM11.514.813a8 8 0 0 1 1.942 1.336l.837-.837c.63-.63 1.707-.184 1.707.707V6h-3.981c-.89 0-1.337-1.077-.707-1.707l.728-.729a6 6 0 0 0-9.98 3.591 1 1 0 1 1-1.98-.281A8 8 0 0 1 11.514.813z"/>
        </svg>
    );
};

IconReload.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconReload;
