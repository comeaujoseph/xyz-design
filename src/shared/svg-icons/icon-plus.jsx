import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconPlus = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="plus" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M8 3a1 1 0 0 0-1 1v3H4a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0V9h3a1 1 0 1 0 0-2H9V4a1 1 0 0 0-1-1z"/>
        </svg>
    );
};

IconPlus.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconPlus;
