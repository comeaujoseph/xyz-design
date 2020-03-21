import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconSearch = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="search" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M9.331 9.331a3.088 3.088 0 1 0-4.368-4.368 3.088 3.088 0 0 0 4.368 4.368zm.655 2.11a5.149 5.149 0 0 1-6.478-7.933 5.147 5.147 0 0 1 7.934 6.478l2.256 2.257a1.03 1.03 0 1 1-1.455 1.455l-2.257-2.256z"/>
        </svg>
    );
};

IconSearch.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconSearch;
