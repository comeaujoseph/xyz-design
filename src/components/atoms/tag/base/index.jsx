import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Tag = (props) => {
    const {
        id,
        className,
        title,
        isBold,
        isLowercase,
        isOutline,
        color,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-tag',
        {
            'xyz-tag_bold': isBold,
            'xyz-tag_lowercase': isLowercase,
            'xyz-tag_outline': isOutline
        },
        className,
    );

    return (
        <a className={classNames('xyz-tag__wrapper', (title && 'xyz-tag_has-header'))}>
            { title && <div className="xyz-tag__title">{ title }</div>}
            <div {...rest} id={id} className={classNameList} style={{backgroundColor: color}} data-color={color} >
                { props.children }
            </div>
        </a>
    );
};

Tag.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    isBold: PropTypes.bool,
    isLowercase: PropTypes.bool,
    isOutline: PropTypes.bool,
    color: PropTypes.string,
};

Tag.defaultProps = {};

export default Tag;
