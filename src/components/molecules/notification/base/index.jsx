import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DropdownTrigger from '../../dropdown/trigger';
import Dropdown from '../../dropdown/base';
import ButtonIcon from '../../../atoms/button-icon/base';
import IconNotification from '../../../../shared/svg-icons/icon-notification';

import { NotificationHeader } from '../dropdown';


const Notification = (props) => {
    const {
        id,
        className,
        isAvailable,
        position,
        size,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-notification',
        {
            'xyz-notification_available': isAvailable
        },
        className
    );

    return (
        <DropdownTrigger {...rest} id={id} className={classNameList}
            customTrigger={
                <ButtonIcon size="medium"><IconNotification /></ButtonIcon>
            }
        >
            <Dropdown position={ position } size={ size }>
                <NotificationHeader />
                { props.children }
            </Dropdown>
        </DropdownTrigger>
    );
};

Notification.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    isAvailable: PropTypes.bool
};

Notification.defaultProps = {}

export default Notification;