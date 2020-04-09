import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconAngleRight = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="angle-right" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M5.293 3.707a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L9.586 8 5.293 3.707z"/>
        </svg>
    );
};

IconAngleRight.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconAngleRight;
