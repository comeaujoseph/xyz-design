import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const ProgressBar = (props) => {
    const {
        id,
        className,
        percentage,
        isDetails,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-progress-bar',
        {},
        className,
    );

    var progress = { transform: "scaleX(" + percentage + ")" };
    return (
        <div {...rest} id={id} className={classNameList}>
            { isDetails && <p className="xyz-progress-bar__details">{ percentage * 100 }% completed</p> }
            <div className="xyz-progress-bar__background">
                <div className="xyz-progress-bar__progress" style={progress} />
            </div>
        </div>
    );
};

ProgressBar.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    percentage: PropTypes.number,
    isDetails: PropTypes.bool
};

ProgressBar.defaultProps = {
    percentage: 0
};

export default ProgressBar;
