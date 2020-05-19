import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconWarning from '../../../../shared/svg-icons/icon-warning';


const Disclaimer = (props) => {
    const {
        id,
        className,
        percentage,
        isDetails,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-disclaimer',
        {},
        className,
    );

    return (
        <div {...rest} id={id} className={classNameList}>
            <div className="xyz-disclaimer__icon">
                <IconWarning />
            </div>
            <div className="xyz-disclaimer__message">
                <h4>Module Restrictions →</h4>
                <span>All modules do not guarantee 100% coverage</span>
                <i className="xyz-disclaimer__info" data-html="true">?</i>
            </div>
        </div>
    );
};

Disclaimer.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    percentage: PropTypes.number,
    isDetails: PropTypes.bool
};

Disclaimer.defaultProps = {};

export default Disclaimer;
