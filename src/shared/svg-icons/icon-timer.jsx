import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconTimer = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="timer" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" d="M9 0a1 1 0 1 1 0 2v.07c1.19.171 2.282.64 3.2 1.33.028-.038.059-.073.093-.107l1-1a1 1 0 1 1 1.414 1.414l-1 1c-.034.034-.07.065-.107.093A7 7 0 1 1 7 2.07V2a1 1 0 0 1 0-2h2zM8 4a5 5 0 1 0 0 10A5 5 0 0 0 8 4zm0 1a1 1 0 0 1 1 1v2.586l1.707 1.707a1 1 0 0 1-1.414 1.414L7 9.414V6a1 1 0 0 1 1-1z"/>
        </svg>
    );
};

IconTimer.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconTimer;
