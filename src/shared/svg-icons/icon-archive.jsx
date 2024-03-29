import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconArchive = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="archive" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5v-2h13v2h-13zM1 6a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6zm1.5 0v7.5h11V6h-11zM4 8.75A.75.75 0 0 1 4.75 8h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8.75z"/>
        </svg>
    );
};

IconArchive.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconArchive;