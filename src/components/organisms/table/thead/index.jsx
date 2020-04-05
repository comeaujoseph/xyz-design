import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export const TableHeader = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-table-header',
        {

        },
        className,
    );

    return (
        <div id={id} className={classNameList} {...rest}>
            <table cellSpacing="0" cellPadding="0" border="0">
                { props.children }
            </table>
        </div>
    );
};
TableHeader.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
TableHeader.defaultProps = {};


export const THead = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-thead',
        {

        },
        className,
    );

    return <thead id={id} className={classNameList} {...rest}>{ props.children }</thead>;
};
THead.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
THead.defaultProps = {};


export const THeadTr = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-thead__tr',
        {

        },
        className,
    );

    return <tr id={id} className={classNameList} {...rest}>{ props.children }</tr>;
};
THeadTr.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
THeadTr.defaultProps = {};


export const THeadTh = (props) => {
    const {
        id,
        className,
        isSortable,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-thead__th',
        {
            'xyz-thead__th_sortable': isSortable
        },
        className,
    );

    return (
        <th id={id} className={classNameList} {...rest}>
            <div className="xyz-thead__th-cell">
                { props.children }
            </div>
        </th>
    );
};
THeadTh.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    isSortable: PropTypes.bool
};
THeadTh.defaultProps = {};


