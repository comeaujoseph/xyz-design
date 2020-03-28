import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconFolder = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="folder" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M0 6h16v4.994A2.001 2.001 0 0 1 14.006 13H1.994A1.993 1.993 0 0 1 0 10.994V6zm0-4a2 2 0 0 1 2.004-2h3.05c1.107 0 2.004.895 2.004 2h6.935C15.102 2 16 2.895 16 4H0V2z"/>
        </svg>
    );
};

IconFolder.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconFolder;
