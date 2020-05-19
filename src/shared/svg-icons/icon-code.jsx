import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconCode = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="code" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M3 1h6.172a2 2 0 0 1 1.284.467l.13.119 2.828 2.828a2 2 0 0 1 .578 1.239l.008.175V14a1 1 0 0 1-.883.993L13 15H3a1 1 0 0 1-.993-.883L2 14V2a1 1 0 0 1 .883-.993L3 1h6.172H3zm6 2H4v10h8V6h-2a1 1 0 0 1-.993-.883L9 5V3zm0 7h1a1 1 0 0 1 .117 1.993L10 12H9a1 1 0 0 1-.117-1.993L9 10zM6.613 5.21l.094.083 2 2a1 1 0 0 1 .083 1.32l-.083.094-2 2a1 1 0 0 1-1.497-1.32l.083-.094L6.586 8 5.293 6.707a1 1 0 0 1 1.32-1.497z"/>
        </svg>
    );
};

IconCode.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconCode;
