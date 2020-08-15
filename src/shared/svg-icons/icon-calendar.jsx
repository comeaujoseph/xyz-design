import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconCalendar = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="calendar" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M11 1a1 1 0 0 1 1 1v1h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V2a1 1 0 1 1 2 0v1h4V2a1 1 0 0 1 1-1zm2 7H3v5h10V8zm0-3H3v1h10V5z"/>
        </svg>
    );
};

IconCalendar.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconCalendar;
