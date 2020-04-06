import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const IconFileArchive = (props) => {
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
        <svg id={id} className={classNameList} {...rest} focusable="false" data-icon="file-archive" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fill="none" d="M0 0h16v16H0z" />
            <path d="M7.999 3H15v11H1L.996 3h.989l.936-1h4.055l1.023 1zM3.355 3l-.639.683-.053.053-.057.048-.06.044-.063.039-.066.035-.068.03-.07.024-.072.019-.073.014-.074.008L1.996 4 2 13h12V4H7.999l-.071-.002-.07-.008-.069-.012-.068-.017-.067-.022-.065-.027-.063-.031-.061-.035-.058-.04-.056-.044-.052-.047L6.569 3H3.355z" fill="currentColor" />
            <path d="M8 4h1v1H8zM6.998 5h1v1h-1zM7.998 6h1v1h-1zM6.998 7h1v1h-1zM7.998 8h1v1h-1zM6.998 9h1v1h-1zM7.998 10h1v1h-1zM6.998 11h1v1h-1z" fill="currentColor" />
        </svg>
    );
};

IconFileArchive.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};

export default IconFileArchive;
