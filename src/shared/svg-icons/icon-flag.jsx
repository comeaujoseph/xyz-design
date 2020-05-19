import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconFlag = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="flag" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M1 2.409l.502-.276.034-.02c1.504-.823 2.79-1.068 3.97-.952 1.123.11 2.072.545 2.86.907l.05.023c.839.384 1.51.683 2.273.758.723.07 1.613-.057 2.83-.725L15 1.309v9.282l-.518.285c-1.512.832-2.803 1.08-3.989.963-1.122-.11-2.071-.545-2.86-.907l-.05-.023c-.838-.384-1.509-.683-2.272-.758-.616-.06-1.354.023-2.311.463V14a1 1 0 1 1-2 0V2.409zm12 6.977V4.534c-.903.3-1.728.381-2.507.305-1.122-.11-2.071-.545-2.86-.907l-.05-.023c-.838-.384-1.509-.683-2.272-.758-.616-.06-1.354.023-2.311.463v4.852c.903-.3 1.728-.381 2.507-.305 1.122.11 2.071.545 2.86.907l.05.023c.838.384 1.509.683 2.272.758.616.06 1.354-.023 2.311-.463z"/>
        </svg>
    );
};

IconFlag.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconFlag;
