import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const SelectAffix = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-select-affix',
        {},
        className
    );

    return (
        <div {...rest} id={id} className={classNameList}>
            { props.children }
        </div>
    );
};

SelectAffix.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};


SelectAffix.defaultProps = {}


export default SelectAffix;