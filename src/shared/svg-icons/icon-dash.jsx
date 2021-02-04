import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconDash = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="dash" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" d="M2 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1z"/>
        </svg>
    );
};

IconDash.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconDash;
