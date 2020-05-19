import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconOverview = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="overview" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M6 9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4zm8 4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h4zm-9-2H3v2h2v-2zm9-2a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h4zM6 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h4zm8 4a1 1 0 0 1 .117 1.993L14 7h-4a1 1 0 0 1-.117-1.993L10 5h4zM5 3H3v2h2V3zm9-2a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2h4z"/>
        </svg>
    );
};

IconOverview.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconOverview;
