import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconHistory = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="history" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" d="M10.697.468a8 8 0 1 1-9.92 10.97 1 1 0 1 1 1.805-.86A6 6 0 1 0 3.965 3.56l.733.733C5.328 4.923 4.882 6 3.99 6H0V2.01c0-.892 1.077-1.338 1.707-.708l.842.842A8 8 0 0 1 10.697.468zM8 4a1 1 0 0 1 1 1v2.586l1.707 1.707a1 1 0 0 1-1.414 1.414L7 8.414V5a1 1 0 0 1 1-1z"/>
        </svg>
    );
};

IconHistory.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconHistory;
