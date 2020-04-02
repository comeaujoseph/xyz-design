import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const DropdownOverlay = (props) => {
    const {
        id,
        className,
        isActive,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-dropdown-overlay',
        {
            'xyz-dropdown-overlay_active': isActive
        },
        className,
    );

    return (
        <div {...rest} id={id} className={classNameList} />
    );
};

DropdownOverlay.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    isActive: PropTypes.bool
};

DropdownOverlay.defaultProps = {};

export default DropdownOverlay;