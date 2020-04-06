import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconCancel = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="cancel" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.523 4.89A6 6 0 0 1 3.11 4.524l8.367 8.368zm1.414-1.414L4.524 3.11a6 6 0 0 1 8.367 8.367z"/>
        </svg>
    );
};

IconCancel.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconCancel;
