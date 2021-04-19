import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconBack = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="back" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M4.297 3.293L.59 7l3.707 3.707a1 1 0 0 0 1.414-1.414L4.418 8h7.086a1.5 1.5 0 0 1 0 3h-1.5a1 1 0 1 0 0 2h1.5a3.5 3.5 0 1 0 0-7H4.418l1.293-1.293a1 1 0 1 0-1.414-1.414z"/>
        </svg>
    );
};

IconBack.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconBack;
