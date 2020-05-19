import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ButtonGroup from '../../../molecules/button-group/base';
import ButtonIcon from '../../../atoms/button-icon/base';
import IconCopy from '../../../../shared/svg-icons/icon-copy';
import IconCode from '../../../../shared/svg-icons/icon-code';
import IconDownload from '../../../../shared/svg-icons/icon-download';


const Document = (props) => {
    const {
        id,
        className,
        title,
        isCollapsed,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-document',
        {},
        className
    );

    return (
        <div {...rest} id={id} className={classNameList}>
            <article className="xyz-document__inner">
                <div className="xyz-document__header">
                    <ButtonGroup>
                        <ButtonIcon size="small" isOutline>
                            <IconCopy />
                        </ButtonIcon>
                        <ButtonIcon size="small" isOutline>
                            <IconCode />
                        </ButtonIcon>
                        <ButtonIcon size="small" isOutline>
                            <IconDownload />
                        </ButtonIcon>
                    </ButtonGroup>
                </div>
                <main className="xyz-document__body">
                    { props.children }
                </main>
            </article>
        </div>
    );
};

Document.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    isCollapsed: PropTypes.bool
};

Document.defaultProps = {}

export default Document;