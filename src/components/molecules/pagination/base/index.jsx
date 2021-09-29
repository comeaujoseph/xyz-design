import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../../../atoms/button/base';
import ButtonIcon from '../../../atoms/button-icon/base';

import IconAngleRight from '../../../../shared/svg-icons/icon-angle-right';
import IconAngleLeft from '../../../../shared/svg-icons/icon-angle-left';
import IconAngleDoubleLeft from '../../../../shared/svg-icons/icon-angle-double-left';
import IconAngleDoubleRight from '../../../../shared/svg-icons/icon-angle-double-right';
import IconEllipsis from '../../../../shared/svg-icons/icon-ellipsis';


const createRange = (start, end) => {
    const range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}


const Pagination = (props) => {
    const {
        id,
        className,
        currentPage,
        totalPages,
        boundaryPagesRange,
        siblingPagesRange,
        handleNext,
        handlePrev,
        handlePage,
        handleJumpNext,
        handleJumpPrev,
        isVerbose,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-pagination',
        {},
        className
    );

    const createPage = (page) => {
        return (
            <li key={page} className={classNames('xyz-pagination__page', {'xyz-pagination__page_active': currentPage === page})}>
                <Button use="a" isReset data-page={page} onClick={(e) => handlePage(e)}>{page}</Button>
            </li>
        );
    }

    const hideEllipsis = false;
    const ellipsisSize = (hideEllipsis ? 0 : 1);

    var pages = [];
    if (1 + 2 * ellipsisSize + 2 * siblingPagesRange + 2 * boundaryPagesRange >= totalPages) {
        const pageNumbers = createRange(1, totalPages);
        console.log(pageNumbers);
        for (let i = 0; i < pageNumbers.length; i++) {
            pages.push(createPage(pageNumbers[i]));
        }
    } else {
        // calculate group of first pages
        const firstPagesStart = 1;
        const firstPagesEnd = boundaryPagesRange;
        const firstPages = createRange(firstPagesStart,  firstPagesEnd);

        // Calculate group of last pages
        const lastPagesStart = totalPages + 1 - boundaryPagesRange;
        const lastPagesEnd = totalPages;
        const lastPages = createRange(lastPagesStart, lastPagesEnd);

        // Calculate group of main pages
        const mainPagesStart = Math.min(
            Math.max(
            currentPage - siblingPagesRange,
            firstPagesEnd + ellipsisSize + 1
            ),
            lastPagesStart - ellipsisSize - 2 * siblingPagesRange - 1
        );
        const mainPagesEnd = mainPagesStart + 2 * siblingPagesRange;
        const mainPages = createRange(mainPagesStart,  mainPagesEnd);

        // Add group of first pages
        for (let i = 0; i <  firstPages.length; i++) {
            pages.push(createPage(firstPages[i]));
        }

        if (!hideEllipsis) {
            // Calculate and add ellipsis before group of main pages
            const firstEllipsisPageNumber = mainPagesStart - 1;
            const showPageInsteadOfFirstEllipsis = (firstEllipsisPageNumber === firstPagesEnd + 1);
            if (showPageInsteadOfFirstEllipsis) {
                pages.push(createPage(firstEllipsisPageNumber));
            } else {
                pages.push(
                    <li key={firstEllipsisPageNumber} className={classNames('xyz-pagination__page', {})}>
                        <ButtonIcon className="shift left" size="x-small" onClick={(e) => handleJumpPrev(e)}>
                            <IconAngleDoubleLeft className="angle" />
                            <IconEllipsis className="ellipse" />
                        </ButtonIcon>
                    </li>
                );
            }
        }

        // Add group of main pages
        for (let i = 0; i <  mainPages.length; i++) {
            pages.push(createPage(mainPages[i]));
        }

        if (!hideEllipsis) {
            // Calculate and add ellipsis after group of main pages
            const secondEllipsisPageNumber = mainPagesEnd + 1;
            const showPageInsteadOfSecondEllipsis = (secondEllipsisPageNumber === lastPagesStart - 1);
            if (showPageInsteadOfSecondEllipsis) {
                pages.push(createPage(secondEllipsisPageNumber));
            } else {
                pages.push(
                    <li key={secondEllipsisPageNumber} className={classNames('xyz-pagination__page', {})}>
                        <ButtonIcon className="shift right" size="x-small" onClick={(e) => handleJumpNext(e)}>
                            <IconAngleDoubleRight className="angle" />
                            <IconEllipsis className="ellipse" />
                        </ButtonIcon>
                    </li>
                );
            }
        }

        // Add group of last pages
        for (let i = 0; i <  lastPages.length; i++) {
            pages.push(createPage(lastPages[i]));
        }
    }

    return (
        <div {...rest} id={id} className={classNameList}>
            { isVerbose && (
                <div className="xyz-pagination__verbose">
                    Showing { (1 + ((currentPage - 1) * props.pageSize)) } - { (currentPage * props.pageSize) > props.totalItems ? props.totalItems : (currentPage * props.pageSize) } of { props.totalItems }
                </div>
            )}
            <ul className="xyz-pagination__main">
                {/* <li className={classNames('xyz-pagination__control', { 'xyz-pagination__control_disabled': !pageNumber }, 'xyz-pagination__previous')}> */}
                <li className={classNames('xyz-pagination__control', { 'xyz-pagination__control_disabled': !handlePrev }, 'xyz-pagination__previous')}>
                    {/* <Button onClick={() => handlePrev()} disabled={!pageNumber}> */}
                    <Button onClick={() => handlePrev()} disabled={ !handlePrev }>
                        <IconAngleLeft />
                        <span>Prev</span>
                    </Button>
                </li>
                { pages }
                {/* <li className={classNames('xyz-pagination__control', { 'xyz-pagination__control_disabled': ((pageNumber * pageSize) + pageSize) >= total }, 'xyz-pagination__next')}> */}
                <li className={classNames('xyz-pagination__control', { 'xyz-pagination__control_disabled': !handleNext }, 'xyz-pagination__next')}>
                    {/* <Button onClick={() => handleNext()} disabled={((pageNumber * pageSize) + pageSize) >= total}> */}
                    <Button onClick={() => handleNext()} disabled={ !handleNext }>
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
    totalItems: PropTypes.number,
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    boundaryPagesRange: PropTypes.number,
    siblingPagesRange: PropTypes.number,
    pageSize: PropTypes.number,
    isVerbose: PropTypes.bool,
    handlePrev: PropTypes.func,
    handleNext: PropTypes.func,
    handlePage: PropTypes.func,
    handleJumpPrev: PropTypes.func,
    handleJumpNext: PropTypes.func
};

Pagination.defaultProps = {
    currentPage: 1,
    boundaryPagesRange: 1,
    siblingPagesRange: 1,
    pageSize: 10,
}

export default Pagination;