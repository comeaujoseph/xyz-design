import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export const ButtonGroupRow = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-button-group-row',
        {},
        className
    );

    return (
        <div id={id} className={classNameList} {...rest}>
            { props.children }
        </div>
    );
};
ButtonGroupRow.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
ButtonGroupRow.defaultProps = {};


export const ButtonGroupItem = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-button-group-item',
        {},
        className
    );

    return (
        <div id={id} className={classNameList} {...rest}>
            { props.children }
        </div>
    );
};
ButtonGroupItem.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
ButtonGroupItem.defaultProps = {};

