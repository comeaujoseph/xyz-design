import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconFolderO = (props) => {
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
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M9 4h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.586a1 1 0 0 1 .707.293L9 4zm-6 8V6h10v6H3z"/>
        </svg>
    );
};

IconFolderO.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconFolderO;
