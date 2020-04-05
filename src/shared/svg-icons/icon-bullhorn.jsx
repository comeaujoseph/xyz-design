import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// https://css-tricks.com/creating-svg-icon-system-react/

const IconBullhorn = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="bullhorn" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M4 5a3 3 0 0 0 0 6h.113l2.024 3.505a.997.997 0 0 0 1.726-.996L6.415 11H8l5.504 3.145A1 1 0 0 0 15 13.277V2.723a1 1 0 0 0-1.496-.868L8 5H4zm0 2h3v2H4a1 1 0 0 1 0-2zm9 4.554L9 9.268V6.732l4-2.286v7.108z"/>
        </svg>
    );
};

IconBullhorn.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconBullhorn;
