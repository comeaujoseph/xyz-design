import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Form = (props) => {
    const {
        id,
        className,
        isStacked,
        isHorizontal,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-form',
        {
            'xyz-form_stacked': isStacked,
            'xyz-form_horizontal': isHorizontal
        },
        className
    );

    return (
        <div id={id} className={classNameList} {...rest}>
            { props.children }
        </div>
    );
};

Form.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    isStacked: PropTypes.bool,
    isHorizontal: PropTypes.bool,
};


Form.defaultProps = {}


export default Form;