import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconCaretDoubleLeft = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="caret-double-left" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M9.828 8.064l4.243 4.243a1 1 0 1 1-1.414 1.414l-4.95-4.95a1 1 0 0 1 0-1.414l4.95-4.95a1 1 0 0 1 1.414 1.414L9.828 8.064zm-6 0l4.243 4.243a1 1 0 1 1-1.414 1.414l-4.95-4.95a1 1 0 0 1 0-1.414l4.95-4.95A1 1 0 0 1 8.07 3.821L3.828 8.064z" />
        </svg>
    );
};

IconCaretDoubleLeft.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconCaretDoubleLeft;
