import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Options = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-options',
        {},
        className
    );

    return (
        <ul {...rest} id={id} className={classNameList}>
            { props.children }
        </ul>
    );
};

Options.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};


Options.defaultProps = {}


export default Options;