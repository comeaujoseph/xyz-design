import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconInformation = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="information" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 7a.75.75 0 0 0 0 1.5h.25v2h-1a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-1V7H7z"/>
        </svg>
    );
};

IconInformation.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconInformation;
