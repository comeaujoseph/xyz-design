import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconTemplate = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="template" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.237 1l7.84 1.237-1.201 7.61L11.5 6.15 9.424 9.38 6 8.84 7.237 1zM5.545 5.31a4 4 0 1 0 2.29 4.832l-2.979-.47.689-4.363zM7 15l4.5-7 4.5 7H7z" />
        </svg>
    );
};

IconTemplate.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconTemplate;
