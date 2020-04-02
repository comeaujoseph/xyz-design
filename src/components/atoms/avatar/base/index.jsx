import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Avatar = (props) => {
    const {
        id,
        className,
        text,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-avatar',
        {},
        className,
    );

    return (
        <div {...rest} id={id} className={classNameList}>
            <div className="xyz-avatar__inner">
                <span>{ text }</span>
            </div>
        </div>
    );
};

Avatar.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    text: PropTypes.string
};

Avatar.defaultProps = {};

export default Avatar;
