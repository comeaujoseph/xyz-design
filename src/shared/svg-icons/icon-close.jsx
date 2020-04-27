import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconClose = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="close" width="1rem" height="1rem" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm2.3 11.5l3.6 3.6c.1.2.1.4 0 .6l-1.3 1.3c-.2.2-.5.2-.7 0l-3.6-3.6c-.2-.2-.4-.2-.6 0l-3.6 3.6c-.2.2-.5.2-.7 0l-1.3-1.3c-.1-.2-.1-.4 0-.6l3.6-3.6c.2-.2.2-.5 0-.7L6.1 8.1c-.2-.2-.2-.5 0-.7l1.3-1.3c.2-.1.4-.1.6 0l3.7 3.7c.2.2.4.2.6 0l3.6-3.6c.2-.2.5-.2.7 0l1.3 1.3c.1.2.1.4 0 .6l-3.6 3.6c-.2.2-.2.5 0 .7z"/>
        </svg>
    );
};

IconClose.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconClose;
