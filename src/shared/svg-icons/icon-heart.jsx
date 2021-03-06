import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconHeart = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="heart" width="1rem" height="1rem" viewBox="0 0 18 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" d="M16.3651 1.84124C15.9395 1.41541 15.4342 1.07761 14.8779 0.847138C14.3217 0.61667 13.7255 0.498047 13.1235 0.498047C12.5214 0.498047 11.9252 0.61667 11.369 0.847138C10.8128 1.07761 10.3074 1.41541 9.88181 1.84124L8.99847 2.72457L8.11514 1.84124C7.25539 0.981492 6.08933 0.498493 4.87347 0.498493C3.65761 0.498493 2.49155 0.981492 1.6318 1.84124C0.772061 2.70098 0.289063 3.86704 0.289062 5.0829C0.289062 6.29876 0.772061 7.46483 1.6318 8.32457L2.51514 9.2079L8.99847 15.6912L15.4818 9.2079L16.3651 8.32457C16.791 7.89894 17.1288 7.39358 17.3592 6.83736C17.5897 6.28115 17.7083 5.68497 17.7083 5.0829C17.7083 4.48083 17.5897 3.88465 17.3592 3.32844C17.1288 2.77222 16.791 2.26686 16.3651 1.84124V1.84124Z" />
        </svg>
    );
};

IconHeart.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconHeart;
