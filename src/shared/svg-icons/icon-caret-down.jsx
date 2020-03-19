import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconCaretDown = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="caret-down" width="1rem" height="1rem" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" d="M3.8 6.5h16.4c.4 0 .8.6.4 1l-8 9.8c-.3.3-.9.3-1.2 0l-8-9.8c-.4-.4-.1-1 .4-1z"/>
        </svg>
    );
};

IconCaretDown.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconCaretDown;
