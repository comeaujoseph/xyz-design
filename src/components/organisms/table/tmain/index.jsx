import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const TableMain = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-table',
        'xyz-table-main',
        {

        },
        className,
    );

    return (
        <main id={id} className={classNameList} {...rest}>
            <table cellSpacing="0">
                { props.children }
            </table>
        </main>
    );
};
TableMain.displayName = "TableMain";
TableMain.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
TableMain.defaultProps = {};

export const TBody = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-tbody',
        {

        },
        className,
    );

    return <tbody id={id} className={classNameList} {...rest}>{ props.children }</tbody>;
};

TBody.displayName = "TBody";
TBody.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
TBody.defaultProps = {};

export const TBodyTr = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-tbody__tr',
        {

        },
        className,
    );

    return <tr id={id} className={classNameList} {...rest}>{ props.children }</tr>;
};

TBodyTr.displayName = "TBodyTr";
TBodyTr.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
TBodyTr.defaultProps = {};

export const Td = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-td',
        {

        },
        className,
    );

    return (
        <td id={id} className={classNameList} {...rest}>
            <div className="xyz-table-cell">
                { props.children }
            </div>
        </td>
    );
};

Td.displayName = "Td";
Td.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
Td.defaultProps = {};
