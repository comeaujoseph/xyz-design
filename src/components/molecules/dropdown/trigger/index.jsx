import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ButtonIcon from '../../../atoms/button-icon/base';
import IconCaretDown from '../../../../shared/svg-icons/icon-caret-down';


const DropdownTrigger = (props) => {
    const {
        id,
        className,
        customTrigger,
        isClickable,
        isOpen,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-dropdown-trigger',
        {
            'xyz-dropdown-tigger_click': isClickable,
            'xyz-dropdown_open': isOpen
        },
        className,
    );

    return (
        <div {...rest} id={id} className={classNameList}>
            {customTrigger || (
                <ButtonIcon size="x-small">
                    <IconCaretDown />
                </ButtonIcon>
            )}
            {props.children}
        </div>
    );
};

DropdownTrigger.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    customTrigger: PropTypes.node,
    isClickable: PropTypes.bool,
    isOpen: PropTypes.bool,
};

DropdownTrigger.defaultProps = {};

export default DropdownTrigger;