import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../../../atoms/button/base';

import IconAngleRight from '../../../../shared/svg-icons/icon-angle-right';
import IconAngleLeft from '../../../../shared/svg-icons/icon-angle-left';


const Pagination = (props) => {
    const {
        id,
        className,
        current,
        pageSize,
        total,
        handleNext,
        handlePrev,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-pagination',
        {},
        className
    );

    const pages = [];
    const pageNumber = Math.ceil(current / pageSize) - 1;
    const idx = (1 + (pageNumber * pageSize));
    for (let i = idx; i <= ((pageNumber * pageSize) + pageSize) && i < (total + 1); i++) {
        pages.push(
            <li key={i} className={classNames(
                'xyz-pagination__page',
                {
                  'xyz-pagination__page_active': current === i
                }
              )}>
                <Button use="a" isReset onClick={() => props.handlePage()}>{i}</Button>
            </li>
        );
    }

    return (
        <div {...rest} id={id} className={classNameList}>
            <div className="xyz-pagination__verbose">
                Showing { (1 + (pageNumber * pageSize)) } - { ((pageNumber * pageSize) + pageSize) > total ? total : ((pageNumber * pageSize) + pageSize) } of { total }
            </div>
            <ul className="xyz-pagination__main">
                <li className={classNames('xyz-pagination__control', { 'xyz-pagination__control_disabled': !pageNumber }, 'xyz-pagination__previous')}>
                    <Button onClick={() => handlePrev()} disabled={!pageNumber}>
                        <IconAngleLeft />
                        <span>Prev</span>
                    </Button>
                </li>
                { pages }
                <li className={classNames('xyz-pagination__control', { 'xyz-pagination__control_disabled': ((pageNumber * pageSize) + pageSize) >= total }, 'xyz-pagination__next')}>
                    <Button onClick={() => handleNext()} disabled={((pageNumber * pageSize) + pageSize) >= total}>
                        <span>Next</span>
                        <IconAngleRight />
                    </Button>
                </li>
            </ul>
        </div>
    );
};

Pagination.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    current: PropTypes.number,
    pageSize: PropTypes.number,
    total: PropTypes.number,
    isVerbose: PropTypes.bool,
    handlePrev: PropTypes.func,
    handleNext: PropTypes.func,
    handlePage: PropTypes.func
};

Pagination.defaultProps = {
    current: 1,
    pageSize: 10,
}

export default Pagination;