import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { MenuItem } from '../item';
import DropdownTrigger from '../../../molecules/dropdown/trigger';
import Dropdown from '../../../molecules/dropdown/base';

export const SubMenu = (props) => {
    const {
        id,
        className,
        icon,
        name,
        mode,
        position,
        size,
        isActive,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-submenu',
        {
            'xyz-submenu_active': isActive
        },
        'xyz-submenu_' + mode,
        'xyz-submenu_' + position,
        className
    );

    return (
        <DropdownTrigger {...rest} id={id} className={classNameList}
            customTrigger={
                <MenuItem name={name} icon={icon} isActive={isActive} />
            }
            isClickable
            isOpen={isActive}
        >
            <Dropdown size={size} isInline={ mode === 'inline' }>
                { props.children }
            </Dropdown>
        </DropdownTrigger>
    );
};
SubMenu.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    mode: PropTypes.oneOf([
        'vertical', 'horizontal', 'inline'
    ]),
    position: PropTypes.oneOf([
        'left', 'right'
    ]),
    size: PropTypes.string,
    isActive: PropTypes.bool
};
SubMenu.defaultProps = {
    mode: 'vertical',
    position: 'left'
};

