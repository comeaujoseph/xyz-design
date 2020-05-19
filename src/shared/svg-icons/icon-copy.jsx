import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconCopy = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="copy" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M14 5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8zm-1 2H7v6h6V7zm-3-6a1 1 0 0 1 1 1v2H9V3H3v6h1v2H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8z"/>
        </svg>
    );
};

IconCopy.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconCopy;
