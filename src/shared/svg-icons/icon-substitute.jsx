import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconSubstitute = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="substitute" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M11.297 8.293a1 1 0 0 1 1.414 0L15.418 11l-2.707 2.707a1 1 0 0 1-1.414-1.414L11.59 12H2.004a1 1 0 1 1 0-2h9.586l-.293-.293a1 1 0 0 1 0-1.414zm-8-6a1 1 0 0 1 1.414 1.414L4.418 4h9.586a1 1 0 1 1 0 2H4.418l.293.293a1 1 0 0 1-1.414 1.414L.59 5l2.707-2.707z"/>
        </svg>
    );
};

IconSubstitute.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconSubstitute;
