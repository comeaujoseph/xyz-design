import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Label = (props) => {
    const {
        id,
        className,
        percentage,
        isDetails,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-label',
        {},
        className,
    );

    return (
        <header {...rest} id={id} className={classNameList}>
            <label>{ props.children }</label>
        </header>
    );
};

Label.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};

Label.defaultProps = {};

export default Label;
