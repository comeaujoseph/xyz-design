import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconComments = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="comments" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M4 10.41l-2.5 1.445A1 1 0 0 1 0 10.99V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8.99a1 1 0 0 1-1.5.865L11.29 14H6a2 2 0 0 1-2-2v-1.59zM4 8.1L2 9.258V2h8v2H6a2 2 0 0 0-2 2v2.1zM6 12h5.825L14 13.257V6H6v6z"/>
        </svg>
    );
};

IconComments.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconComments;
