import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconFilePDF = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="file-pdf" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fill="none" d="M0 0h16v16H0z" />
            <path d="M13 5v10H3V1h6l4 4zM4 2v12h8V5.414L8.586 2H4z" fill="currentColor" />
            <path d="M8.5 1.5v4h3.982M8.233 9.183c.473.663 1.943 3.214 2.5 1.769.418-1.085-1.997-.683-2.805-.338-.826.352-3.383.939-2.405 1.943.703.679 1.483-1.932 1.824-2.886.322-.898 1.067-3.106-.125-2.968-.996.18.537 1.816 1.011 2.48z" stroke="currentColor" fill="none" />
        </svg>
    );
};

IconFilePDF.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconFilePDF;
