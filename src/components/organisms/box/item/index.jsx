import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';



export const BoxItem = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-box-item',
        {},
        className
    );

    return (
        <li {...rest} id={id} className={classNameList}>
            <a>{ props.children }</a>
        </li>
    );
};
BoxItem.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
BoxItem.defaultProps = {};

