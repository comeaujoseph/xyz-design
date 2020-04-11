import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Breadcrumb = (props) => {
    const {
        id,
        className,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-breadcrumb',
        {},
        className
    );

    return (
        <nav {...rest} role="navigation" aria-label="breadcrumb" id={id} className={classNameList}>
            <div className="xyz-breadcrumb__inner">
                <ul className="xyz-breadcrumb__list">
                    { props.children }
                </ul>
            </div>
        </nav>
    );
};

Breadcrumb.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};

Breadcrumb.defaultProps = {}

export default Breadcrumb;