import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Lookup from '../base';
import Listbox from '../listbox';
import IconAngleDown from '../../../../shared/svg-icons/icon-angle-down';


const Switcher = (props) => {
    const {
        id,
        className,
        addonPosition,
        listboxId,
        value,
        isOpen,
        snapshot,
        open,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-lookup-switcher',
        {},
        className
    );

    return (
        <div id={id} className={classNameList}>
            <Lookup
                {...rest}
                id={id}
                inputIconPosition="right"
                placeholder=" "
                value={value}
                rightInputIcon={
                    <IconAngleDown className="xyz-input__icon xyz-input__icon_right" />
                }
                open={open}
                results={
                    <Listbox
                        className="xyz-dropdown_x-small xyz-dropdown_left"
                        id={listboxId}
                        snapshot={snapshot}
                        type="plain"
                        count={Object.keys(snapshot).length}
                        isOpen={isOpen}
                    />
                }
                resultsType="listbox"
            />
        </div>
    );
};

Switcher.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    addonPosition: PropTypes.oneOf(['start', 'end']).isRequired,
    listboxId: PropTypes.string.isRequired,
    value: PropTypes.string,
    isOpen: PropTypes.bool,
    open: PropTypes.func,
    snapshot: PropTypes.object.isRequire
};

Switcher.defaultProps = {}

export default Switcher;