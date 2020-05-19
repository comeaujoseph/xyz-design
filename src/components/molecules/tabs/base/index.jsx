import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Tabs = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-tabs',
        {},
        className
    );

    return (
        <div {...rest} id={id} className={classNameList}>
            { props.children }
        </div>
    );
};

Tabs.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
Tabs.defaultProps = {};

export default Tabs;
