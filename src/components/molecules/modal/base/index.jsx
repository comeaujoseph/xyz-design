import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ButtonIcon from '../../../atoms/button-icon/base';
import IconCloseX from '../../../../shared/svg-icons/icon-close-x';


const Modal = (props) => {
    const {
        id,
        className,
        size,
        isOpen,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-modal',
        {
            'xyz-modal_large': size === 'large',
            'xyz-modal_medium': size === 'medium',
            'xyz-modal_small': size === 'small',
            'xyz-modal_x-small': size === 'x-small',
            'xyz-modal_open': isOpen,
        },
        className
    );

    return (
        <section className={classNames('xyz-modal__container', (isOpen && 'xyz-modal_open'))}>
            <div {...rest} id={id} className={classNameList}>
                <div className="xyz-modal__main">
                    <div className="xyz-modal__content">
                        <div className="xyz-modal__close" onClick={(e) => props.handleClose(e)}>
                            <ButtonIcon size="xx-small"><IconCloseX /></ButtonIcon>
                        </div>
                        <div className="xyz-modal__inner">
                            { props.children }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Modal.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.oneOf(['medium', 'small', 'x-small', 'xx-small']),
    isOpen: PropTypes.bool,
    handleClose: PropTypes.func,
};

Modal.defaultProps = {}

export default Modal;