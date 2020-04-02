import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../../../atoms/button/base';
import ButtonIcon from '../../../atoms/button-icon/base';
import IconCloseX from '../../../../shared/svg-icons/icon-close-x';


export const NotificationHeader = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-notification-header',
        {},
        className
    );

    return (
        <div id={id} className={classNameList} {...rest}>
            <h4>Notifications</h4>
            <Button className="xyz-notification__all-read">Mark all as read</Button>
        </div>
    );
};
NotificationHeader.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
NotificationHeader.defaultProps = {};


export const NotificationEntry = (props) => {
    const {
        id,
        className,
        title,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-notification-entry',
        {},
        className
    );

    return (
        <div id={id} className={classNameList} {...rest}>
            <ButtonIcon className="xyz-notification-entry__read" size="small">
                <IconCloseX />
            </ButtonIcon>
            <div className="xyz-notification-entry__body">
                <div className="xyz-notification-entry__title">{ title }</div>
                <div className="xyz-notification-entry__details">
                    { props.children }
                </div>
            </div>
        </div>
    );
};
NotificationEntry.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string
};
NotificationEntry.defaultProps = {};


