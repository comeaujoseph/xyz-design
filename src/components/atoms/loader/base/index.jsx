import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Loader = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-loader',
        {},
        className
    );

    return (
        <div {...rest} className={classNameList} />
    );
};

Loader.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
};

Loader.defaultProps = {};

export default Loader;