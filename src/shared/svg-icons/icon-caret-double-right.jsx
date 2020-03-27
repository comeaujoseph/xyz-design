import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconCaretDoubleRight = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="caret-double-right" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.95 8.064L1.707 3.821a1 1 0 0 1 1.414-1.414l4.95 4.95a1 1 0 0 1 0 1.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L5.95 8.064zm6 0L7.707 3.821a1 1 0 0 1 1.414-1.414l4.95 4.95a1 1 0 0 1 0 1.414l-4.95 4.95a1 1 0 0 1-1.414-1.414l4.243-4.243z" />
        </svg>
    );
};

IconCaretDoubleRight.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconCaretDoubleRight;
