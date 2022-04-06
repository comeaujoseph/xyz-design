import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FormItem from '../../../molecules/form-item/base';
import Input from '../../../atoms/input/base';


const LookupFormItem = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-lookup',
        'xyz-dropdown-trigger xyz-dropdown-trigger_click',
        {
            'xyz-is-open': props.isOpen,
        },
        className
    );

    return (
        <div id={id} className={classNameList} {...rest}>
            { props.children }
        </div>
    );
};
LookupFormItem.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
LookupFormItem.defaultProps = {};

const LookupInput = (props) => {
    const {
        id,
        className,
    } = props;

    const hasInputIcon = props.leftInputIcon || props.rightInputIcon || props.showCloseButton;

    var classNameList = classNames(
        'xyz-lookup__form-item',
        {
            'xyz-input-has-icon': hasInputIcon,
            'xyz-has-selection': props.hasSelection
        },
        props.leftInputIcon && 'xyz-input-has-icon_left',
        props.rightInputIcon && 'xyz-input-has-icon_right',
        className
    );

    return (
        <div className={classNameList}>
            {props.leftInputIcon && props.leftInputIcon}
            <Input
                className={classNames(
                    'xyz-lookup__input',
                    {},
                )}
                id={id}
                role="textbox"
                type="text"
                placeholder={
                    !props.placeholder
                        ? 'Search...'
                        : props.placeholder
                }
                readOnly={props.readOnly}
                defaultValue={props.value}
                disabled={props.isDisabled}
            />
            {props.rightInputIcon && props.rightInputIcon}
        </div>
    );
};
LookupInput.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
LookupInput.defaultProps = {};

const Lookup = (props) => {
    const {
        id,
        results,
        // form item
        formClassName,
        label,
        isRequired,
        isStacked,
        isHorizontal,
        // lookup form item
        staticListbox,
        isOpen,
        // lookup input
        inputContainerClassName,
        placeholder,
        value,
        readOnly,
        isDisabled,
        leftInputIcon,
        rightInputIcon,
        hasSelection,
        ...rest
    } = props;


    return (
        <FormItem
            inputId={id}
            labelContent={label}
            isRequired={isRequired}
            className={formClassName}
            isHorizontal={isHorizontal}
            isStacked={isStacked}
        >
             <LookupFormItem
                staticListbox={staticListbox}
                isOpen={isOpen}
                {...rest}
            >
                <LookupInput
                    id={id}
                    className={inputContainerClassName}
                    placeholder={placeholder}
                    value={value}
                    readOnly={readOnly}
                    isDisabled={isDisabled}
                    leftInputIcon={leftInputIcon}
                    rightInputIcon={rightInputIcon}
                    hasSelection={hasSelection}
                />
                { results }
            </LookupFormItem>
        </FormItem>
    );
};
Lookup.propTypes = {
    id: PropTypes.string,
    results: PropTypes.element.isRequired,
    // form item
    formClassName: PropTypes.string,
    label: PropTypes.string,
    isRequired: PropTypes.bool,
    isStacked: PropTypes.bool,
    isHorizontal: PropTypes.bool,
    // lookup form item
    staticListbox: PropTypes.bool,
    isOpen: PropTypes.bool,
    // lookup input
    inputContainerClassName: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    readOnly: PropTypes.bool,
    isDisabled: PropTypes.bool,
    leftInputIcon: PropTypes.element,
    rightInputIcon: PropTypes.element,
    hasSelection: PropTypes.bool
};
Lookup.defaultProps = {}
export default Lookup;


const LookupGroupContainer = (props) => {
    const {
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-lookup-group',
        {
            'xyz-has-selection': props.hasSelection
        },
        className
    );

    return (
        <div className={classNameList} {...rest}>
            { props.children }
        </div>
    );
};
LookupGroupContainer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
LookupGroupContainer.defaultProps = {};


export const LookupGroup = (props) => {
    const {
        id,
        results,
        addon,
        addonPosition,
        listboxOfSelections,
        // form item
        formClassName,
        label,
        isRequired,
        isStacked,
        isHorizontal,
        // lookup form item
        staticListbox,
        isOpen,
        // lookup input
        inputContainerClassName,
        placeholder,
        value,
        readOnly,
        isDisabled,
        leftInputIcon,
        rightInputIcon,
        hasSelection,
    } = props;

    return (
        <FormItem
            inputId={id}
            labelContent={label}
            isRequired={isRequired}
            className={formClassName}
            isHorizontal={isHorizontal}
            isStacked={isStacked}
        >
            <LookupGroupContainer hasSelection={listboxOfSelections}>
                {addonPosition === 'start' && addon}
                <LookupFormItem
                    staticListbox={staticListbox}
                    isOpen={isOpen}
                >
                    <LookupInput
                        id={id}
                        className={inputContainerClassName}
                        placeholder={placeholder}
                        value={value}
                        readOnly={readOnly}
                        isDisabled={isDisabled}
                        leftInputIcon={leftInputIcon}
                        rightInputIcon={rightInputIcon}
                        hasSelection={hasSelection}
                    />
                    { results }
                </LookupFormItem>
                {addonPosition === 'end' && addon}
            </LookupGroupContainer>
            {listboxOfSelections && listboxOfSelections}
        </FormItem>
    );
};
LookupGroup.propTypes = {
    id: PropTypes.string,
    results: PropTypes.element.isRequired,
    addon: PropTypes.element.isRequired,
    addonPosition: PropTypes.oneOf(['start', 'end']).isRequired,
    listboxOfSelections: PropTypes.element,
    // form item
    formClassName: PropTypes.string,
    label: PropTypes.string,
    isRequired: PropTypes.bool,
    isStacked: PropTypes.bool,
    isHorizontal: PropTypes.bool,
    // lookup form item
    staticListbox: PropTypes.bool,
    isOpen: PropTypes.bool,
    // lookup input
    inputContainerClassName: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    readOnly: PropTypes.bool,
    isDisabled: PropTypes.bool,
    leftInputIcon: PropTypes.element,
    rightInputIcon: PropTypes.element,
    hasSelection: PropTypes.bool
};
LookupGroup.defaultProps = {};