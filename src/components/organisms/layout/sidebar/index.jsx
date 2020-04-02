import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ButtonIcon from '../../../atoms/button-icon/base';
import IconCaretDoubleLeft from '../../../../shared/svg-icons/icon-caret-double-left';
import IconCaretDoubleRight from '../../../../shared/svg-icons/icon-caret-double-right';


const SidebarHeader = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-layout-sidebar-header',
        {

        },
        className,
    );

    return (
        <div id={id} className={classNameList} {...rest}>
            <div className="xyz-layout-sidebar-header__inner">
                { props.children }
            </div>
        </div>
    );
};
SidebarHeader.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
SidebarHeader.defaultProps = {};


const SidebarBody = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-layout-sidebar-body',
        {

        },
        className,
    );

    return (
        <div id={id} className={classNameList} {...rest}>
            <div className="xyz-layout-sidebar-body__inner">
                { props.children }
            </div>
        </div>
    );
};
SidebarBody.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
SidebarBody.defaultProps = {};


const SidebarToggle = (props) => {
    const {
        id,
        className,
        isRightSidebar,
        isCollapsed,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-layout-sidebar-toggle',
        {},
        className,
    );

    // default left panel;
    var icon = <IconCaretDoubleLeft />;
    var iconCollapsed = <IconCaretDoubleRight />;

    if (isRightSidebar) {
        icon = <IconCaretDoubleRight />;
        iconCollapsed = <IconCaretDoubleLeft />;
    }

    return (
        <div id={id} className={classNameList}>
            <ButtonIcon {...rest} size="small" isNeutral>
                {isCollapsed ? (
                    iconCollapsed
                ) : (
                    icon
                )}
            </ButtonIcon>
        </div>
    );
};
SidebarToggle.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    isRightSidebar: PropTypes.bool,
    isCollapsed: PropTypes.bool
};
SidebarToggle.defaultProps = {
    isRightSidebar: false,
    isCollapsed: false
};


export const Sidebar = (props) => {
    const {
        id,
        className,
        position,
        isCollapsed,
        isCollapsible,
        header,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-layout-sidebar',
        {
            'xyz-layout-sidebar_collapsed': isCollapsed,
            'xyz-layout-sidebar_has-header': header,
            'xyz-layout-sidebar_has-toggle': isCollapsible,
        },
        'xyz-layout-sidebar_' + position,
        className,
    );

    return (
        <aside id={id} className={classNameList}>
            {header && (
                <SidebarHeader>{ header }</SidebarHeader>
            )}
            <SidebarBody>{ props.children }</SidebarBody>
            {isCollapsible && (
                <SidebarToggle {...rest} isRightSidebar={ position === 'right'} isCollapsed={isCollapsed} />
            )}
        </aside>
    );
};
Sidebar.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    isCollapsed: PropTypes.bool,
    position: PropTypes.oneOf(['left', 'right']),
    header: PropTypes.node,
    isCollapsible: PropTypes.bool
};
Sidebar.defaultProps = {
    position: 'left'
};
