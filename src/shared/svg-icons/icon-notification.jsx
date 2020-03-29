import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// https://css-tricks.com/creating-svg-icon-system-react/

const IconNotification = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="notification" width="1rem" height="1rem" viewBox="0 0 14 16" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M6 2.1a5.001 5.001 0 00-4 4.894v1.003c0 .565-.198 1.4-.444 1.89L.444 12.113c-.245.49.007.888.563.888h11.986c.557 0 .809-.397.563-.888l-1.112-2.224C12.2 9.398 12 8.55 12 7.998V6.993A4.996 4.996 0 008 2.1V.99A1 1 0 007 0c-.556 0-1 .444-1 .99V2.1zM7 16a2 2 0 01-2-2h4a2 2 0 01-2 2z" />
        </svg>
    );
};

IconNotification.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconNotification;
