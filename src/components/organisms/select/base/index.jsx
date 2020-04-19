import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Dropdown from '../../../molecules/dropdown/base';
import DropdownTrigger from '../../../molecules/dropdown/trigger';
import Menu from '../../menu/base';
import ButtonIcon from '../../../atoms/button-icon/base';


export const SelectTitle = (props) => {
    const {
        id,
        className,
        title,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-select-title',
        {},
        className,
    );

    return (
        <div {...rest} id={id} className={classNameList}>
            <span>{ title }</span>
        </div>
    );
};
SelectTitle.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string
};
SelectTitle.defaultProps = {};


const Trigger = (props) => {
    const {
        id,
        className,
        triggerName,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-select__trigger',
        {},
        className,
    );

    return (
        <ButtonIcon id={id} className={classNameList} {...rest} hasDropdown isNeutral>
            <div className="xyz-select__trigger-content">{ props.children }</div>
        </ButtonIcon>
    );
};
Trigger.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    triggerName: PropTypes.string
};
Trigger.defaultProps = {};


const Select = (props) => {
    const {
        id,
        className,
        title,
        selected,
        isOpen,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-select',
        {},
        className
    );

    return (
        <div id={id} className={classNameList}>
            <div className="xyz-select__inner">
                <DropdownTrigger {...rest} customTrigger={<Trigger>{selected}</Trigger>} isOpen={isOpen}>
                    <Dropdown size={props.size}>
                        <Menu>
                            { props.children }
                        </Menu>
                    </Dropdown>
                </DropdownTrigger>
            </div>
        </div>
    );
};

Select.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    selected: PropTypes.string,
    isOpen: PropTypes.bool
};

Select.defaultProps = {
    selected: "All"
}

export default Select;