import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Dropdown = (props) => {
    const {
        id,
        className,
        position,
        size,
        isInline,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-dropdown',
        {
            'xyz-dropdown_inline': isInline
        },
        'xyz-dropdown_' + position,
        size && 'xyz-dropdown_' + size,
        className
    );

    return (
        <div id={id} className={classNameList} {...rest}>
            { props.children }
        </div>
    );
};

Dropdown.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    position: PropTypes.oneOf([
        'left', 'right', 'bottom'
    ]),
    size: PropTypes.oneOf([
        'xx-small', 'x-small', 'small',
        'medium', 'large', 'fluid'
    ]),
    isInline: PropTypes.bool
};


Dropdown.defaultProps = {
    position: 'left'
}


export default Dropdown;