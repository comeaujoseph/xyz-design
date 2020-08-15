import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconSpam = (props) => {
    const {
        className,
        id,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-icon',
        {},
        className
    );

    return (
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="spam" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" d="M7.998 0L10.1 1.533l2.6-.005.8 2.475 2.107 1.525L14.798 8l.809 2.472-2.107 1.525-.8 2.475-2.6-.005L7.998 16l-2.1-1.533-2.602.005-.799-2.475L.39 10.472 1.198 8 .39 5.528l2.107-1.525.8-2.475 2.6.005L7.998 0zm0 2.476l-1.45 1.058-1.797-.003L4.2 5.24 2.744 6.293 3.303 8l-.559 1.707L4.2 10.76l.552 1.71 1.796-.004 1.451 1.058 1.452-1.058 1.796.003.551-1.709 1.455-1.053L12.694 8l.558-1.707-1.455-1.053-.551-1.71-1.796.004-1.452-1.058zM8.038 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-6c.727 0 1.23.725.974 1.404L8.04 10l-.973-4.596A1.04 1.04 0 0 1 8.039 4z"/>
        </svg>
    );
};

IconSpam.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconSpam;
