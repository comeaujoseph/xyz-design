import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const PageHeader = (props) => {
    const {
        id,
        className,
        name,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-page-header',
        {
            'xyz-page-header_has-name': name,
        },
        className
    );

    return (
        <div id={id} className={classNameList} {...rest}>
            { name && <h1 className="xyz-page-header__name">{name}</h1>}
            <div>{ props.children }</div>
        </div>
    );
};

PageHeader.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string
};

PageHeader.defaultProps = {}

export default PageHeader;