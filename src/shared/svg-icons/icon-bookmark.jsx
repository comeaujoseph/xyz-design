import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconBookmark = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="bookmark" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M8 9.263l4 3.334V2H4v10.597l4-3.334zm0 2.604l4.36 3.895a1 1 0 0 0 1.64-.769V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12.993a1 1 0 0 0 1.64.769L8 11.867z"/>
        </svg>
    );
};

IconBookmark.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconBookmark;
