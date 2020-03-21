import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Wrapper = props => {
    const {
        id,
        className,
        hasError,
        isStacked,
        isHorizontal,
        column,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-form-item',
        {
            'xyz-has-error': hasError,
            'xyz-form-item_stacked': isStacked,
            'xyz-form-item_horizontal': isHorizontal,
        },
        column && `xyz-form-item_${column}-col`,
        className
    );

    return (
        <div {...rest} id={id} className={classNameList}>
            { props.children }
        </div>
    );
};
Wrapper.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    hasError: PropTypes.bool,
    isStacked: PropTypes.bool,
    isHorizontal: PropTypes.bool,
    column: PropTypes.number,
};


const Control = props => {
    const {
        className
    } = props;

    var classNameList = classNames(
        'xyz-form-item__control',
        {},
        className
    );

    return (
        <div className={classNameList}>
            { props.children }
        </div>
    );
};
Control.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};


const Label = props => {
    const {
        id,
        className,
        inputId,
        labelContent,
        isRequired,
    } = props;

    var classNameList = classNames(
        'xyz-form-item__label',
        {},
        className
    );

    return (
        <label id={id} className={classNameList} htmlFor={inputId} >
            {isRequired && (
                <abbr className="xyz-required" title="required">
                * {' '}
                </abbr>
            )}
            { labelContent }
        </label>
    );
};
Label.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    inputId: PropTypes.string,
    labelContent: PropTypes.node,
    isRequired: PropTypes.bool
};


const HelpMessage = props => {
    const {
        errorId,
    } = props;

    return (
        <div className="xyz-form-item__help" id={errorId}>
            { props.children }
        </div>
    );
};
HelpMessage.propTypes = {
    children: PropTypes.node,
    errorId: PropTypes.string,
};


const FormItem = (props) => {
    const {
        // wrapper
        id,
        formElementClassName,
        hasError,
        isStacked,
        isHorizontal,
        column,
        // label
        labelId,
        inputId,
        labelClassName,
        labelContent,
        isRequired,
        // control
        formControlClassName,
        hasLeftIcon,
        hasRightIcon,
        // help message
        inlineMessage,
        errorId,
        ...rest
    } = props;

    let inputIconPositionClasses;
    if (hasLeftIcon && hasRightIcon) {
        inputIconPositionClasses =
        'xyz-input-has-icon xyz-input-has-icon_left-right';
    } else if (hasLeftIcon) {
        inputIconPositionClasses = 'xyz-input-has-icon xyz-input-has-icon_left';
    } else if (hasRightIcon) {
        inputIconPositionClasses = 'xyz-input-has-icon xyz-input-has-icon_right';
    }

    return (
        <Wrapper
            {...rest}
            className={classNames(formElementClassName)}
            hasError={hasError}
            isStacked={isStacked}
            isHorizontal={isHorizontal}
            column={column}
        >
            {labelContent && (
                <Label
                    labelId={labelId}
                    inputId={inputId}
                    labelClassName={labelClassName}
                    labelContent={labelContent}
                    isRequired={isRequired}
                />
            )}
            <Control className={classNames(inputIconPositionClasses, formControlClassName)}>
                { props.children }
            </Control>
            {inlineMessage && (
                <HelpMessage errorId={errorId}>
                    {inlineMessage}
                </HelpMessage>
            )}
        </Wrapper>
    );
};

FormItem.propTypes = {
    children: PropTypes.node,
    // wrapper
    id: PropTypes.string,
    formElementClassName: PropTypes.string,
    hasError: PropTypes.bool,
    isStacked: PropTypes.bool,
    isHorizontal: PropTypes.bool,
    column: PropTypes.number,
    // label
    labelId: PropTypes.string,
    labelClassName: PropTypes.string,
    inputId: PropTypes.string,
    labelContent: PropTypes.node,
    isRequired: PropTypes.bool,
    // control
    formControlClassName: PropTypes.string,
    hasLeftIcon: PropTypes.bool,
    hasRightIcon: PropTypes.bool,
    // help message
    inlineMessage: PropTypes.string,
    errorId: PropTypes.string,
};

FormItem.defaultProps = {}

export default FormItem;