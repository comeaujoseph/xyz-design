import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconWarning = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="warning" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M9.71 1.972c-.776-1.296-2.653-1.296-3.43 0L.288 11.968c-.8 1.333.16 3.028 1.715 3.028h11.985c1.554 0 2.515-1.695 1.715-3.028L9.711 1.972zM7.997 9.996l1.069-3.563a1.116 1.116 0 1 0-2.138 0l1.069 3.563zm0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
    );
};

IconWarning.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconWarning;
