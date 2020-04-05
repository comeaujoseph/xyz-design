import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const PageBlock = (props) => {
    const {
        id,
        className,
        isTinted,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-page-block',
        {
            'xyz-page-block_tinted': isTinted,
        },
        className
    );

    return (
        <div id={id} className={classNameList} {...rest}>
            { props.children }
        </div>
    );
};

PageBlock.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    isTinted: PropTypes.bool
};

PageBlock.defaultProps = {}

export default PageBlock;