import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Tab = (props) => {
    const {
        id,
        className,
        isSelected,
        isDisabled,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-tab',
        {
            'xyz-tab_selected': isSelected,
            'xyz-tab_disabled': isDisabled
        },
        className
    );

    return (
        <div {...rest} id={id} className={classNameList}>
            { props.children }
        </div>
    );
};

Tab.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    isSelected: PropTypes.bool,
    isDisabled: PropTypes.bool
};
Tab.defaultProps = {};
