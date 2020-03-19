import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconHelp = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="help" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-8c.683 0 1.068.57.955 1.1-.077.362-.2.53-.623.908l-.052.046c-.83.741-1.202 1.316-1.278 2.416a1 1 0 1 0 1.996.138c.032-.476.135-.634.613-1.061l.053-.048c.711-.634 1.062-1.113 1.247-1.982A2.914 2.914 0 0 0 8 3c-1.572 0-2.501.84-3.057 2.145a1 1 0 0 0 1.84.784C7.057 5.285 7.373 5 8 5z"/>
        </svg>
    );
};

IconHelp.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconHelp;
