import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Dropdown from '../../../molecules/dropdown/base';
import DropdownTrigger from '../../../molecules/dropdown/trigger';

export const ColorOption = (props) => {
    const {
        id,
        className,
        title,
        color,
        isSelected,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-color-picker-option',
        {
            'xyz-color-picker-option_selected': isSelected
        },
        className
    );

    return (
        <div {...rest} id={id} className={classNameList} style={{backgroundColor: color}} data-color={color} />
    );
};
ColorOption.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    isSelected: PropTypes.bool
};
ColorOption.defaultProps = {
    color: "#E20505"
};


export const ColorPickerTrigger = (props) => {
    const {
        id,
        className,
        title,
        isCollapsed,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-color-picker-trigger',
        {},
        className
    );

    return (
        <div {...rest} id={id} className={classNameList}>
            <ColorOption color={props.color} />
        </div>
    );
};
ColorPickerTrigger.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    isCollapsed: PropTypes.bool
};
ColorPickerTrigger.defaultProps = {};


const ColorPicker = (props) => {
    const {
        id,
        className,
        title,
        color,
        isOpen,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-color-picker',
        {},
        className
    );

    return (
        <div  id={id} className={classNameList}>
            <DropdownTrigger {...rest} customTrigger={<ColorPickerTrigger color={color} />} isOpen={isOpen}>
                <Dropdown position={props.position} size="x-small">
                    <div className="xyz-color-picker__grid">
                        { props.children }
                    </div>
                </Dropdown>
            </DropdownTrigger>
        </div>
    );
};

ColorPicker.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    isOpen: PropTypes.bool,
};

ColorPicker.defaultProps = {};

export default ColorPicker;