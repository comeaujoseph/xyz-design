import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const InputAffix = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-input-affix',
        {},
        className
    );

    return (
        <div {...rest} id={id} className={classNameList}>
            { props.children }
        </div>
    );
};

InputAffix.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};


InputAffix.defaultProps = {}


export default InputAffix;