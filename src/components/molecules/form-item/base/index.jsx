import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Wrapper = props => {
    const {
        id,
        className,
        hasError,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-form-item',
        {
            'xyz-has-error': hasError,
        },
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
    hasError: PropTypes.bool
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


const FormItem = (props) => {
    const {
        // wrapper
        id,
        formElementClassName,
        hasError,
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
        >
            {labelContent ? (
                <Label
                    labelId={labelId}
                    inputId={inputId}
                    labelClassName={labelClassName}
                    labelContent={labelContent}
                    isRequired={isRequired}
                />
            ) : (
                null
            )}
            <Control className={classNames(inputIconPositionClasses, formControlClassName)}>
                { props.children }
            </Control>
        </Wrapper>
    );
};

FormItem.propTypes = {
    children: PropTypes.node,
    // wrapper
    id: PropTypes.string,
    formElementClassName: PropTypes.string,
    hasError: PropTypes.bool,
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
};

FormItem.defaultProps = {}

export default FormItem;