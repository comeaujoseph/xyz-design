import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import _ from '../../../../shared/helpers';


const CheckboxPrimitive = (props) => {
    const uniqueId = _.uniqueId('checkbox-');

    const {
        id,
        name,
        isDisabled,
        isChecked,
        isRequired,
    } = props;

    var classNameList = classNames(
        'xyz-checkbox-primitive',
        {},
    );

    return (
        <input type="checkbox" id={id || uniqueId} className={classNameList}
            name={name || 'options'}
            value={id || uniqueId}
            disabled={isDisabled}
            defaultChecked={isChecked}
            required={isRequired}
        />
    );
};
CheckboxPrimitive.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    isDisabled: PropTypes.bool,
    isChecked: PropTypes.bool,
    isRequired: PropTypes.bool,
};
CheckboxPrimitive.defaultProps = {}


const Checkbox = (props) => {
    const uniqueId = _.uniqueId('checkbox-');

    const {
        id,
        className,
        labelId,
        label,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-checkbox',
        {},
        className
    );

    return (
        <div {...rest} className={classNameList}>
            {props.isRequired && (
                <abbr className="xyz-required" title="required">
                    * {' '}
                </abbr>
            )}
            <CheckboxPrimitive {...rest} id={id || uniqueId} />
            <label
                className={classNames('xyz-checkbox__label')}
                htmlFor={id || uniqueId}
                id={labelId}
            >
                <span className="xyz-checkbox_faux" />
                {label && (
                    <span className="xyz-form-item__label">
                        {label}
                    </span>
                )}
            </label>
        </div>
    );
};
Checkbox.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    labelId: PropTypes.string,
};
Checkbox.defaultProps = {}
export default Checkbox;