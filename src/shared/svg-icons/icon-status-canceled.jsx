import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// https://css-tricks.com/creating-svg-icon-system-react/

const IconStatusCanceled = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="status-canceled" width="1rem" height="1rem" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
            <g xmlns="http://www.w3.org/2000/svg" fillRule="evenodd">
                <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z"/>
                <path d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z" fill="#FFF"/>
                <path d="M5.2 3.8l4.9 4.9c.2.2.2.5 0 .7l-.7.7c-.2.2-.5.2-.7 0L3.8 5.2c-.2-.2-.2-.5 0-.7l.7-.7c.2-.2.5-.2.7 0"/>
            </g>
        </svg>
    );
};

IconStatusCanceled.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconStatusCanceled;
