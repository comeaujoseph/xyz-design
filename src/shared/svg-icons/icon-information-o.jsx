import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconInformationO = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="information-o" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0 5a1 1 0 0 1 .993.883L9 8v3a1 1 0 0 1-1.993.117L7 11V8a1 1 0 0 1 1-1zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
    );
};

IconInformationO.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconInformationO;
