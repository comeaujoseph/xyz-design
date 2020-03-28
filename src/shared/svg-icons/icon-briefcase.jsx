import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconBriefcase = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="briefcase" width="1rem" height="1rem" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M6.503 2h4.994c.098 0 .252.119.275.21l.758 3.033L13.5 4h-9l.97 1.243.758-3.032c.024-.094.173-.211.275-.211zm7.778 2l-.569-2.274C13.466.74 12.51 0 11.497 0H6.503c-1.02 0-1.97.743-2.215 1.726L3.719 4H1.995C.893 4 0 4.9 0 6.009v7.982C0 15.098.893 16 1.995 16h14.01C17.107 16 18 15.1 18 13.991V6.01A2.004 2.004 0 0 0 16.005 4H14.28z" />
        </svg>
    );
};

IconBriefcase.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconBriefcase;
