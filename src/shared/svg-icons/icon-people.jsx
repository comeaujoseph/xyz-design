import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconPeople = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="people" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M11.572 8.295C11.282 7.678 10.5 7 10.5 6c0-1.5.5-3 2.5-3s2.5 1.5 2.5 3-1 1.5-1 3c0 2 3.5.5 3.5 3v.5c0 .821-.67 1.5-1.499 1.5H12v-2.072c0-1.683 0-2.72-.428-3.633zM4 7c0-1-1.5-1.5-1.5-3.5C2.5 2 3 0 5.5 0s3 2 3 3.5C8.5 5.5 7 6 7 7c0 2.5 4 1 4 5v.5c0 .821-.674 1.5-1.506 1.5H1.506A1.502 1.502 0 0 1 0 12.5V12c0-4 4-2.5 4-5z"/>
        </svg>
    );
};

IconPeople.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconPeople;
