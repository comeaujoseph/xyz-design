import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export const DetailedOption = (props) => {
    const {
        id,
        className,
        title,
        description,
        value,
        isSelected,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-option',
        'xyz-option-detailed',
        {
            'xyz-option_selected': isSelected,
        },
        className
    );

    return (
        <li {...rest} id={id} className={classNameList}>
            <div className="xyz-option-detailed__container">
                <div className="xyz-option-detailed__inner">
                    <label>
                        <div>{ title }</div>
                    </label>
                    <div role="checkbox" aria-checked="false" className="xyz-option__checkbox" />
                    <div className="xyz-option-detailed__summary">{ description }</div>
                    <div className="xyz-option-detailed__value">
                        { value }
                    </div>
                </div>
            </div>
        </li>
    );
};

DetailedOption.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.node,
    isSelected: PropTypes.bool
};
DetailedOption.defaultProps = {}


export const SimpleOption = (props) => {
    const {
        id,
        className,
        title,
        value,
        isSelected,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-option',
        'xyz-option-simple',
        {
            'xyz-option_selected': isSelected,
        },
        className
    );

    return (
        <li {...rest} id={id} className={classNameList}>
            <div role="checkbox" aria-checked="false" className="xyz-option__checkbox" />
            <div>{ title }</div>
            <div className="xyz-option-simple__value">{ value }</div>
        </li>
    );
};

SimpleOption.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.node,
    isSelected: PropTypes.bool
};
SimpleOption.defaultProps = {}

