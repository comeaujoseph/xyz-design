import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export const FormRowItem = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-form-row__item',
        {

        },
        className,
    );

    return (
        <div id={id} className={classNameList} {...rest}>
            { props.children }
        </div>
    );
};
FormRowItem.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
FormRowItem.defaultProps = {};


export const FormRow = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-form-row',
        {

        },
        className,
    );

    return (
        <div id={id} className={classNameList} {...rest}>
            { props.children }
        </div>
    );
};
FormRow.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
FormRow.defaultProps = {};