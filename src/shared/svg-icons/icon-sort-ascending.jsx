import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconSortAscending = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="sort-ascending" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M3 2a1 1 0 0 1 1 1v7.586l.293-.293a1 1 0 1 1 1.414 1.414L3 14.414.293 11.707a1 1 0 1 1 1.414-1.414l.293.293V3a1 1 0 0 1 1-1zm6 9h1a1 1 0 0 1 .117 1.993L10 13H9a1 1 0 0 1-.117-1.993L9 11h1-1zm0-4h4a1 1 0 0 1 .117 1.993L13 9H9a1 1 0 0 1-.117-1.993L9 7zm6-4a1 1 0 0 1 .117 1.993L15 5H9a1 1 0 0 1-.117-1.993L9 3h6z"/>
        </svg>
    );
};

IconSortAscending.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconSortAscending;
