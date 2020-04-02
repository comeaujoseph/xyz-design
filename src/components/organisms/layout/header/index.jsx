import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export const HeaderItem = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-layout-header-section__item',
        {

        },
        className,
    );

    return (
        <li id={id} className={classNameList} {...rest}>
            { props.children }
        </li>
    );
};
HeaderItem.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
HeaderItem.defaultProps = {};


export const HeaderSection = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-layout-header-section',
        {

        },
        className,
    );

    return (
        <div id={id} className={classNameList} {...rest}>
            <ul className="xyz-layout-header-section__inner">
                { props.children }
            </ul>
        </div>
    );
};
HeaderSection.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
HeaderSection.defaultProps = {};


export const Header = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-layout-header',
        {

        },
        className,
    );

    return (
        <header id={id} className={classNameList} {...rest}>
            <div className="xyz-layout-header__inner">
                { props.children }
            </div>
        </header>
    );
};
Header.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
Header.defaultProps = {};
