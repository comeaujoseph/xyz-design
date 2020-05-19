import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconEllipsisVertical = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="ellipsis-vertical" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
        </svg>
    );
};

IconEllipsisVertical.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconEllipsisVertical;
