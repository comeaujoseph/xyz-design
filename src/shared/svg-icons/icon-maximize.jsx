import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconMaximize = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="maximize" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M5.293 9.272a1 1 0 0 1 1.414 1.415L4.394 13H5a1 1 0 1 1 0 2H1v-4a1 1 0 1 1 2 0v.565l2.293-2.293zM15 1v4a1 1 0 0 1-2 0v-.565l-2.293 2.293a1 1 0 0 1-1.414-1.414L11.607 3H11a1 1 0 1 1 0-2h4z"/>
        </svg>
    );
};

IconMaximize.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconMaximize;
