import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export const Content = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-layout-content',
        {

        },
        className,
    );

    return (
        <main id={id} className={classNameList} {...rest}>
            { props.children }
        </main>
    );
};
Content.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
Content.defaultProps = {};
