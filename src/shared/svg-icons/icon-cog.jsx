import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconCog = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="cog" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M8 11a3 3 0 100-6 3 3 0 000 6zM5.182 2.702c.337-.18.693-.328 1.065-.442L6.778.666C6.9.299 7.313 0 7.7 0h.6c.387 0 .8.298.922.666l.531 1.594c.372.114.728.262 1.065.442l1.504-.752c.346-.173.85-.093 1.122.18l.425.426c.274.273.354.775.181 1.122l-.752 1.504c.18.337.328.693.442 1.065l1.594.531c.367.122.666.535.666.922v.6c0 .387-.298.8-.666.922l-1.594.531a5.963 5.963 0 01-.442 1.065l.752 1.504c.173.346.093.85-.18 1.122l-.426.425c-.273.274-.775.354-1.122.181l-1.504-.752c-.337.18-.693.328-1.065.442l-.531 1.594C9.1 15.701 8.687 16 8.3 16h-.6c-.388 0-.8-.298-.922-.666l-.531-1.594a5.963 5.963 0 01-1.065-.442l-1.504.752c-.346.173-.85.093-1.122-.18l-.425-.426c-.274-.273-.354-.775-.181-1.122l.752-1.504a5.963 5.963 0 01-.442-1.065L.666 9.222C.299 9.1 0 8.687 0 8.3v-.6c0-.388.298-.8.666-.922l1.594-.531c.114-.372.262-.728.442-1.065L1.95 3.678c-.173-.346-.093-.85.18-1.122l.426-.425c.273-.274.775-.354 1.122-.181l1.504.752z" />
        </svg>
    );
};

IconCog.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconCog;
