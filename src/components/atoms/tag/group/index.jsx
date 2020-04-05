import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export const TagGroup = (props) => {
    const {
        id,
        className,
        title,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-tag-group',
        {},
        className,
    );

    return (
        <div {...rest} id={id} className={classNameList}>
            { props.children }
        </div>
    );
};
TagGroup.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string
};
TagGroup.defaultProps = {};

