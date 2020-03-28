import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconUpload = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="upload" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M9 13v-2H7v2H5.99c-.539 0-.721.358-.39.8l1.8 2.4c.334.445.869.442 1.2 0l1.8-2.4c.334-.445.156-.8-.39-.8H9zM7 9v2h2V9h1.01c.546 0 .724-.355.39-.8L8.6 5.8c-.331-.442-.866-.445-1.2 0L5.6 8.2c-.331.442-.149.8.39.8H7zm5-4.965a3.5 3.5 0 1 1 0 6.93V11H3.5A3.5 3.5 0 1 1 4 4.035V4a4 4 0 1 1 8 .035z"/>
        </svg>
    );
};

IconUpload.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconUpload;
