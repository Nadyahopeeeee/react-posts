import React, { useMemo } from 'react';
import {getPagesArray} from "../../../utils/pages";
import { usePagination } from '../../../hooks/usePagination';

const Pagination = ({totalPages, page, changePage}) => {

    // вариант 1
    // let pagesArray = getPagesArray(totalPages);

    // вариант 2
    // let pagesArray = useMemo(() => {
    //     return getPagesArray(totalPages)
    // }, [totalPages])

    // вариант 3
    let pagesArray = usePagination(totalPages)

    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                >
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;
