import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconPause = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="pause" width="2rem" height="2rem" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" d="M7.386 8.329c0-.315.157-.472.471-.472h1.414c.315 0 .472.157.472.472v5.342c0 .315-.157.472-.472.472H7.857c-.314 0-.471-.157-.471-.472V8.33m4.714 0c0-.315.157-.472.471-.472h1.415c.314 0 .471.157.471.472v5.342c0 .315-.157.472-.471.472H12.57c-.314 0-.471-.157-.471-.472V8.33"/>
        </svg>
    );
};

IconPause.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconPause;
