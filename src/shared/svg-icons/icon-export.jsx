import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconExport = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="export" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M14 9.004a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a1 1 0 0 1 2 0v3h10v-3a1 1 0 0 1 1-1zM8 1.59l3.707 3.707a1 1 0 0 1-1.414 1.414L9 5.418v4.586a1 1 0 1 1-2 0V5.418L5.707 6.711a1 1 0 0 1-1.414-1.414L8 1.59z"/>
        </svg>
    );
};

IconExport.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconExport;
