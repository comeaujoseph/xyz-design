import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconHome = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="home" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.38 1.353L8 1.131l-.38.222-7.25 4.25a.75.75 0 0 0 .76 1.294l.87-.51V14h12V6.387l.87.51a.75.75 0 1 0 .76-1.294l-7.25-4.25zm4.12 4.154L8 2.87 3.5 5.507V12.5H6V8h4v4.5h2.5V5.507zM8.5 9.5v3h-1v-3h1z"/>
        </svg>
    );
};

IconHome.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconHome;