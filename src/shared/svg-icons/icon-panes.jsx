import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconPanes = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="panes" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M1 1v14h14V1H1zm12 2H3v2h10V3zm0 4H7v6h6V7zM5 7H3v6h2V7z"/>
        </svg>
    );
};

IconPanes.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconPanes;
