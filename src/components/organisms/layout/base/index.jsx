import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Layout = (props) => {
    const {
        id,
        className,
        hasHeader,
        hasLeftSidebar,
        isLeftSidebarCollapsed,
        hasRightSidebar,
        isRightSidebarCollapsed,
        ...rest
    } = props;

    let sidebarPositionClasses;
    if (hasLeftSidebar && hasRightSidebar) {
        sidebarPositionClasses = 'xyz-layout-has-sidebar xyz-layout-has-sidebar_left-right';
    } else if (hasLeftSidebar) {
        sidebarPositionClasses = 'xyz-layout-has-sidebar xyz-layout-has-sidebar_left';
    } else if (hasRightSidebar) {
        sidebarPositionClasses = 'xyz-layout-has-sidebar xyz-layout-has-sidebar_right';
    }

    var classNameList = classNames(
        'xyz-layout',
        {
            'xyz-layout-has-header': hasHeader
        },
        sidebarPositionClasses,
        (hasLeftSidebar && isLeftSidebarCollapsed) && 'xyz-layout-has-sidebar_left-collapsed',
        (hasRightSidebar && isRightSidebarCollapsed) && 'xyz-layout-has-sidebar_right-collapsed',
        className
    );

    return (
        <section {...rest} id={id} className={classNameList}>
            {props.children}
        </section>
    );
};

Layout.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    hasHeader: PropTypes.bool,
    hasLeftSidebar: PropTypes.bool,
    isLeftSidebarCollapsed: PropTypes.bool,
    hasRightSidebar: PropTypes.bool,
    isRightSidebarCollapsed: PropTypes.bool,
};


Layout.defaultProps = {}


export default Layout;