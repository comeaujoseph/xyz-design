import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Input = (props) => {
    const {
        id,
        className,
        type,
        placeholder,
        readOnly,
        defaultValue,
        disabled,
        required,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-input',
        {},
        className
    );

    return (
        <input {...rest} id={id} className={classNameList}
            type={type}
            placeholder={placeholder}
            readOnly={readOnly}
            defaultValue={defaultValue}
            disabled={disabled}
            required={required}
        />
    );
};

Input.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.oneOf([
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week'
    ]),
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
};


Input.defaultProps = {
    type: 'text'
}


export default Input;