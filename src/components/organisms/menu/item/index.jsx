import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export const MenuItem = (props) => {
    const {
        id,
        className,
        icon,
        name,
        isActive,
        isCenter,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-menu-item',
        {
            'xyz-menu-item_active': isActive,
            'xyz-menu-item_center': isCenter
        },
        className
    );

    return (
        <li {...rest} id={id} className={classNameList}>
            <a className="xyz-menu-item__container">
                {icon && (
                    <div className="xyz-menu-item__icon">{ icon }</div>
                )}
                <div className="xyz-menu-item__name">
                    { name }
                </div>
            </a>
            { props.children }
        </li>
    );
};
MenuItem.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    icon: function (props, propName, componentName) {
        var prop = props[propName];
        var types = ['svg'];

        // Only accept a single child, of the appropriate type
        if (React.Children.count(prop) !== 1 || types.indexOf(prop.type) === -1) {
            return new Error(
                '`' + componentName + '` ' +
                'should have a single child of the following types: ' +
                ' `' + types.join('`, `') + '`.'
            );
        }
    },
    name: PropTypes.string,
    isActive: PropTypes.bool,
    isCenter: PropTypes.bool
};
MenuItem.defaultProps = {};

