import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconGlobal = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="global" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm.965 8.001h-1.93c.086 1.231.33 2.34.682 3.16.076.18.155.336.231.468l.052.084.052-.084c.05-.088.103-.187.154-.296l.077-.171c.352-.822.596-1.93.682-3.16zm-3.935 0H3.1a5.008 5.008 0 0 0 2.576 3.427c-.337-.963-.566-2.138-.646-3.427zm7.87 0h-1.93c-.08 1.289-.31 2.464-.646 3.427A5.005 5.005 0 0 0 12.9 9zM5.676 3.572l-.082.044A5.007 5.007 0 0 0 3.1 7h1.93c.08-1.29.309-2.465.646-3.428zM8 3.286l-.052.085a4.417 4.417 0 0 0-.231.467c-.352.822-.596 1.93-.682 3.162h1.93c-.086-1.231-.33-2.34-.682-3.162a4.417 4.417 0 0 0-.231-.467L8 3.286zm2.324.286l.057.168c.306.93.514 2.045.589 3.26h1.93a5.008 5.008 0 0 0-2.576-3.428z"/>
        </svg>
    );
};

IconGlobal.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconGlobal;
