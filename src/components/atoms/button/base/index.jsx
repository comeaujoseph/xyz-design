import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { cannotBeSetWith } from '../../../../shared/helpers';


const Button = (props) => {
    const {
        id,
        className,
        disabled,
        isTheme,
        isNeutral,
        isOutlineTheme,
        isOutline,
        isDestructive,
        isTextDestructive,
        isSuccess,
        isFullWidth,
        isStretch,
        isReset,
        icon,
        iconPosition,
        use,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-button',
        {
            'xyz-button_neutral': isNeutral,
            'xyz-button_outline': isOutline,
            'xyz-button_theme': isTheme,
            'xyz-button_outline-theme': isOutlineTheme,
            'xyz-button_destructive': isDestructive,
            'xyz-button_text-destructive': isTextDestructive,
            'xyz-button_success': isSuccess,
            'xyz-button_full-width': isFullWidth,
            'xyz-button_stretch': isStretch,
            'xyz-button_reset': isReset,
            'xyz-button-has-icon': icon
        },
        icon && ('xyz-button-has-icon_' + iconPosition),
        className
    );

    return (
        // Using a React.Fragment to improve readability
        <>
            {use === 'a' ? (
                <a id={id} className={classNameList} {...rest} href={null}>
                    { iconPosition === 'left' && icon }
                    {props.children}
                    { iconPosition === 'right' && icon }
                </a>
            ) : (
                <button id={id} className={classNameList} {...rest} disabled={disabled} {...rest}>
                    { iconPosition === 'left' && icon }
                    {props.children}
                    { iconPosition === 'right' && icon }
                </button>
            )}
        </>
    );
};

Button.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    isTheme: PropTypes.bool,
    isNeutral: PropTypes.bool,
    isOutlineTheme: PropTypes.bool,
    isOutline: PropTypes.bool,
    isDestructive: PropTypes.bool,
    isTextDestructive: PropTypes.bool,
    isSuccess: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    isStretch: PropTypes.bool,
    isReset: PropTypes.bool,
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    use: cannotBeSetWith('disabled', PropTypes.oneOf(['a']))
};


Button.defaultProps = {
    iconPosition: 'left'
}


export default Button;