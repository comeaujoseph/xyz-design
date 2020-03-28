import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconTag = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="tag" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M0 4.994V2.006C0 .886.898 0 2.006 0h2.988c1.12 0 2.638.632 3.418 1.412l5.176 5.176a1.996 1.996 0 0 1-.005 2.829l-4.166 4.166a2 2 0 0 1-2.829.005L1.412 8.412C.628 7.628 0 6.102 0 4.994zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
        </svg>
    );
};

IconTag.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconTag;
