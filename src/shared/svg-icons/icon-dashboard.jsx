import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconDashboard = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="dashboard" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 11.998a2 2 0 0 1 4 0v2.004A1.994 1.994 0 0 1 12 16a2 2 0 0 1-2-1.998v-2.004zM5 1.994C5 .893 5.888 0 7 0c1.105 0 2 .895 2 1.994v12.012A1.992 1.992 0 0 1 7 16c-1.105 0-2-.895-2-1.994V1.994zM0 8c0-1.105.888-2 2-2 1.105 0 2 .887 2 2v6c0 1.105-.888 2-2 2-1.105 0-2-.887-2-2V8z"/>
        </svg>
    );
};

IconDashboard.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconDashboard;
