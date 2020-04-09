import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconAngleDown = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="angle-down" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M12.293 5.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L8 9.586l4.293-4.293z"/>
        </svg>
    );
};

IconAngleDown.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconAngleDown;
