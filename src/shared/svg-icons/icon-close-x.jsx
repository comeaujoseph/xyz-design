import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconCloseX = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="close-x" width="1rem" height="1rem" viewBox="0 0 10 10" fill="none" stroke="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" d="M1 1l8 8M1 9l8-8"/>
        </svg>
    );
};

IconCloseX.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconCloseX;
