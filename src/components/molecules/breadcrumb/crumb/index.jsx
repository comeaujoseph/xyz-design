import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconAngleRight from '../../../../shared/svg-icons/icon-angle-right';


export const Crumb = (props) => {
    const {
        id,
        className,
        isLast,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-breadcrumb-crumb',
        {},
        className
    );

    return (
        <li id={id} className={classNameList} {...rest}>
            <a className="xyz-breadcrumb-crumb__text">{ props.children }</a>
            { !isLast ? <IconAngleRight className="xyz-breadcrumb-crumb__pointer" /> : null }
        </li>
    );
};
Crumb.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    isLast: PropTypes.bool
};
Crumb.defaultProps = {};

