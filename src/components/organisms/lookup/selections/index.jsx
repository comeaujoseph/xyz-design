import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ButtonIcon from '../../../atoms/button-icon/base';
import IconCloseX from '../../../../shared/svg-icons/icon-close-x';


import _ from '../../../../shared/helpers';



const SelectionItem = (props) => {
    const {
        id,
        className,
    } = props;

    var classNameList = classNames(
        'xyz-lookup-selections__item',
        {},
        className,
    );

    return (
        <li id={id} className={classNameList}>
            <div className="xyz-lookup-selections__item-main">
                {props.children}
            </div>
            <ButtonIcon size="xx-small">
                <IconCloseX />
            </ButtonIcon>
        </li>
    );
};
SelectionItem.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string
};
SelectionItem.defaultProps = {};


const Selections = (props) => {

    const renderPlainOptions = (key) => {
        const uniqueId = props.hasUniqueId ? _.uniqueId('lookup-selection-id-') : null;
        const option = props.snapshot[key];
        return (
            <SelectionItem id={uniqueId || key} key={key}>
                {option.name}
            </SelectionItem>
        );
    };

    const {
        id,
        className,
        snapshot,
        count,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-lookup-selections',
        {},
        className
    );

    return (
        <div {...rest} id={id} className={classNameList}>
            <ul className="xyz-lookup-selections__list">
                { Object.keys(snapshot).slice(0, count).map(renderPlainOptions) }
            </ul>
        </div>
    );
};

Selections.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    snapshot: PropTypes.object.isRequired,
    count: PropTypes.number
};

Selections.defaultProps = {}

export default Selections;