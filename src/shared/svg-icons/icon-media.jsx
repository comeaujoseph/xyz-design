import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconMedia = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="media" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zm0 2H3v10h10V3zM9.5 8l2.5 2.857V12H4v-1.2L5.5 9l1.524 1.83L9.5 8zm-3-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
        </svg>
    );
};

IconMedia.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconMedia;
