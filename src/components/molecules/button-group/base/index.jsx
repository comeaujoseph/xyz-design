import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const ButtonGroup = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-button-group',
        {},
        className
    );

    return (
        <div id={id} className={classNameList} {...rest}>
            { props.children }
        </div>
    );
};

ButtonGroup.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};


ButtonGroup.defaultProps = {}


export default ButtonGroup;