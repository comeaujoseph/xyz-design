import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconDownload = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="download" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M14 9a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a1 1 0 0 1 2 0v3h10v-3a1 1 0 0 1 1-1zM8 1a1 1 0 0 1 1 1v4.586l1.293-1.293a1 1 0 1 1 1.414 1.414L8 10.414 4.293 6.707a1 1 0 0 1 1.414-1.414L7 6.586V2a1 1 0 0 1 1-1z"/>
        </svg>
    );
};

IconDownload.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconDownload;
