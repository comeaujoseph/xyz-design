import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DropdownTrigger from '../../dropdown/trigger';
import Dropdown from '../../dropdown/base';
import ButtonIcon from '../../../atoms/button-icon/base';
import IconNotification from '../../../../shared/svg-icons/icon-notification';


const Notification = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-notification',
        {},
        className
    );

    return (
        <DropdownTrigger {...rest} id={id} className={classNameList}
            customTrigger={
                <ButtonIcon size="small"><IconNotification /></ButtonIcon>
            }
        >
            <Dropdown position={ props.position }>
                { props.children }
            </Dropdown>
        </DropdownTrigger>
    );
};

Notification.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};

Notification.defaultProps = {}

export default Notification;