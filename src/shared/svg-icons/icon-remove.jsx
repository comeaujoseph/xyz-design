import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// https://css-tricks.com/creating-svg-icon-system-react/

const IconRemove = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="remove" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" d="M14 3a1 1 0 0 1 0 2h-.154l-.704 9.153A2 2 0 0 1 11.148 16H4.852a2 2 0 0 1-1.994-1.847L2.154 5H2a1 1 0 1 1 0-2h3V2A2 2 0 0 1 6.85.005L7 0h2a2 2 0 0 1 1.995 1.85L11 2v1h3zm-2.16 2H4.159l.693 9h6.296l.692-9zM9 2H7v1h2V2z"/>
        </svg>
    );
};

IconRemove.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconRemove;
