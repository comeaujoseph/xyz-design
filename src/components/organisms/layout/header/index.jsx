import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export const Header = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-layout-header',
        {

        },
        className,
    );

    return (
        <header id={id} className={classNameList} {...rest}>
            <div className="xyz-layout-header__inner">
                { props.children }
            </div>
        </header>
    );
};
Header.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
Header.defaultProps = {};
