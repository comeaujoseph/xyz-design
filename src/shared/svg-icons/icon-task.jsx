import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// https://css-tricks.com/creating-svg-icon-system-react/

const IconTask = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="task" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" d="M2 3h4a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zm9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM2 7h4a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/>
        </svg>
    );
};

IconTask.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconTask;
