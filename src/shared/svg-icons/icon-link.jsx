import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconLink = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="link" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" d="M5.172 6.586a1 1 0 0 1 0 1.414L3.757 9.414a2 2 0 1 0 2.829 2.829L8 10.828a1 1 0 0 1 1.414 1.415L8 13.657A4 4 0 1 1 2.343 8l1.414-1.414a1 1 0 0 1 1.415 0zm5.364-1.122a1 1 0 0 1 0 1.415l-3.657 3.657A1 1 0 0 1 5.464 9.12l3.657-3.657a1 1 0 0 1 1.415 0zm3.12-3.12a4 4 0 0 1 0 5.656l-1.413 1.414A1 1 0 1 1 10.828 8l1.415-1.414a2 2 0 0 0-2.829-2.829L8 5.172a1 1 0 0 1-1.414-1.415L8 2.343a4 4 0 0 1 5.657 0z"/>
        </svg>
    );
};

IconLink.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconLink;
