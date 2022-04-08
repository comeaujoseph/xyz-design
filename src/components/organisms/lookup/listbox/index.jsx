import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Dropdown from '../../../molecules/dropdown/base';
import _ from '../../../../shared/helpers';


const ListboxWrapper = (props) => {
    const {
        id,
        className,
        isOpen
    } = props;

    var classNameList = classNames(
        {
            'xyz-listbox_open': isOpen
        },
        className
    );

    return (
        <Dropdown id={id} className={classNameList} size="fluid">
            {props.children}
        </Dropdown>
    );
};
ListboxWrapper.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    isOpen: PropTypes.bool
};
ListboxWrapper.defaultProps = {
    id: 'please-provide-a-unique-id'
};


const ListboxList = (props) => {
    const {
        className
    } = props;

    var classNameList = classNames(
        'xyz-listbox',
        {
            'xyz-listbox_vertical': props.vertical,
            'xyz-listbox_horizontal': props.horizontal,
            'xyz-listbox_inline': props.inline
        },
        className,
    );

    return (
        <div className={classNameList}>
            {props.children}
        </div>
    );
};
ListboxList.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    vertical: PropTypes.bool,
    horizontal: PropTypes.bool,
    inline: PropTypes.bool
};
ListboxList.defaultProps = {};


const ListboxItem = (props) => {
    const {
        className,
        idx,
        handleSelection
    } = props;

    var classNameList = classNames(
        'xyz-listbox__item',
        {
            'xyz-is-selected': props.selected,
        },
        className,
    );

    return (
        <div className={classNameList} onClick={() => (typeof handleSelection === 'function') ? handleSelection(idx) : () => false }>
            {props.children}
        </div>
    );
};
ListboxItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    idx: PropTypes.number,
    handleSelection: PropTypes.func,
};
ListboxItem.defaultProps = {};


const ListboxOption = (props) => {
    const {
        id,
        className,
    } = props;

    var classNameList = classNames(
        'xyz-listbox__option',
        {},
        className,
    );

    return (
        <div id={id} className={classNameList} tabIndex={props.tabIndex}>
            {props.children}
        </div>
    );
};
ListboxOption.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
ListboxOption.defaultProps = {
    id: 'please-provide-a-unique-id'
};


const Option = (props) => {
    const {
        className
    } = props;

    var classNameList = classNames(
        'xyz-listbox__option',
        {
            'xyz-is-selected': props.selected,
            'xyz-has-focus': props.focused
        },
        className,
    );

    return (
        <ListboxOption
            id={props.id}
            label={props.label}
            focused={props.focused}
            isDisabled={props.isDisabled}
            className={classNameList}
        >
            <span className="xyz-media__body">
                <span>
                    { props.name }
                </span>
            </span>
        </ListboxOption>
    );
};
Option.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
Option.defaultProps = {};


const Listbox = (props) => {

    const {
        id,
        className,
        type,
        snapshot,
        count,
        ...rest
    } = props;

    const renderPlainOptions = (key) => {
        const uniqueId = props.hasUniqueId ? _.uniqueId('listbox-option-id-') : null;
        const option = props.snapshot[key];
        return (
            <ListboxItem key={key} idx={key} selected={option.selected} handleSelection={props.handleSelection}>
                <Option
                    id={uniqueId || key}
                    name={option.name}
                    selected={option.selected}
                    focused={option.focused}
                    tabIndex={option.tabIndex}
                    visualSelection={props.visualSelection}
                    term={option.term}
                    label={option.label}
                    beforeTerm={option.beforeTerm}
                    afterTerm={option.afterTerm}
                    icon={option.icon}
                    meta={option.meta}
                    isDisabled={option.isDisabled}
                />
            </ListboxItem>
        );
    };

    var classNameList = classNames(
        'xyz-listbox',
        {},
        className
    );

    return (
        <ListboxWrapper {...rest} id={id} className={classNameList}>
            <ListboxList>
                { Object.keys(snapshot).slice(0, count).map(renderPlainOptions) }
            </ListboxList>
        </ListboxWrapper>
    );
};

Listbox.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    snapshot: PropTypes.object.isRequired,
    count: PropTypes.number,
    handleSelected: PropTypes.handleSelected
};

Listbox.defaultProps = {}

export default Listbox;