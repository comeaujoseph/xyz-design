import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Table = (props) => {
    const {
        id,
        className,
        isStacked,
        isHorizontal,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-table',
        {},
        className
    );

    return (
        <div {...rest} id={id} className={classNameList}>
            { props.children }
        </div>
    );
};

Table.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
};

Table.defaultProps = {}

export default Table;