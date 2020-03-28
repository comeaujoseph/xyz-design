import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Menu = (props) => {
    const {
        id,
        className,
        title,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-menu',
        {},
        className
    );

    return (
        <div {...rest} id={id} className={classNameList}>
            { title && (
                <div className="xyz-menu__title">
                    <span>{ title }</span>
                </div>
            )}
            <ul className="xyz-menu__list">{ props.children }</ul>
        </div>
    );
};

Menu.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    mode: PropTypes.oneOf(['vertical', 'vertical-left', 'vertical-right', 'horizontal', 'inline'])
};


Menu.defaultProps = {}


export default Menu;