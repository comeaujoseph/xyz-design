import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconCaretDown from '../../../../shared/svg-icons/icon-caret-down';
import IconAngleDown from '../../../../shared/svg-icons/icon-angle-down';



const ButtonIcon = (props) => {
    const {
        id,
        className,
        size,
        isNeutral,
        isOutline,
        hasDropdown,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-button',
        'xyz-button-icon',
        {
            'xyz-button-icon_medium': size === 'medium',
            'xyz-button-icon_small': size === 'small',
            'xyz-button-icon_x-small': size === 'x-small',
            'xyz-button-icon_xx-small': size === 'xx-small',
        },
        {
            'xyz-button-icon_neutral': isNeutral,
            'xyz-button-icon_outline': isOutline,
            'xyz-button-icon_has-dropdown': hasDropdown,
        },
        className
    );

    return (
        <button id={id} className={classNameList} {...rest}>
            { props.children }
            { hasDropdown && (
                <IconAngleDown className="xyz-button-icon_dropdown" />
            )}
        </button>
    );
};

ButtonIcon.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['medium', 'small', 'x-small', 'xx-small']),
    isNeutral: PropTypes.bool,
    isOutline: PropTypes.bool,
    hasDropdown: PropTypes.bool,
};


ButtonIcon.defaultProps = {};


export default ButtonIcon;