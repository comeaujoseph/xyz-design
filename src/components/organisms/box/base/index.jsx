import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconAngleRight from '../../../../shared/svg-icons/icon-angle-right';
import IconAngleDown from '../../../../shared/svg-icons/icon-angle-down';
import Input from '../../../atoms/input/base';


const BoxHeader = (props) => {
    const {
        id,
        className,
        title,
        isCollapsed,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-box-header',
        {},
        className
    );

    return (
        <div id={id} className={classNameList} {...rest}>
            { title && <h4 className="xyz-box-header__title">{ title }</h4> }
            {isCollapsed ? ( <IconAngleRight /> ) : ( <IconAngleDown /> )}
        </div>
    );
};
BoxHeader.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
};
BoxHeader.defaultProps = {};


const Box = (props) => {
    const {
        id,
        className,
        title,
        isCollapsed,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-box',
        {
            'xyz-box_collapsed': isCollapsed
        },
        className
    );

    return (
        <div id={id} className={classNameList}>
            <div className="xyz-box__inner">
                <BoxHeader {...rest} title={ title } isCollapsed={ isCollapsed } />
                <div className="xyz-box__main">
                    <div className="xyz-box__filter">
                        <Input placeholder="Search or filter options..." />
                    </div>
                    <ul className="xyz-box__items">
                        { props.children }
                    </ul>
                </div>
            </div>
        </div>
    );
};

Box.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    isCollapsed: PropTypes.bool
};

Box.defaultProps = {}

export default Box;