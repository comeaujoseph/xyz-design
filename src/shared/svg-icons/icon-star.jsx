import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconStar = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="star" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" d="M7.454 1.694a.591.591 0 0 1 1.092 0l1.585 3.81a.25.25 0 0 0 .21.154l4.114.33a.591.591 0 0 1 .338 1.038L11.658 9.71a.25.25 0 0 0-.08.247l.957 4.015a.591.591 0 0 1-.883.641l-3.522-2.15a.25.25 0 0 0-.26 0l-3.522 2.15a.591.591 0 0 1-.883-.641l.957-4.015a.25.25 0 0 0-.08-.247L1.207 7.026a.591.591 0 0 1 .338-1.038l4.113-.33a.25.25 0 0 0 .211-.153l1.585-3.81z"/>
        </svg>
    );
};

IconStar.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconStar;
