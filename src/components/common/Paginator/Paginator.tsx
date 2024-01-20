import React, {FC, useEffect, useState} from 'react';
import s from './Paginator.module.css'

type PaginatorPropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    portionSize?: number
    onPageChanged: (pageNumber: number) => void
}
export const Paginator: FC<PaginatorPropsType> = ({pageSize, totalItemsCount, currentPage, onPageChanged, portionSize=10}) => {

    let pagesCount = Math.ceil( totalItemsCount / pageSize )
    let pages = []
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / portionSize))
    }, [currentPage]);

    return (
        <div className={s.pagesBox}>
            {
                portionNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber-1)}>Prev</button>
            }
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                    return <span key={p} style={{cursor: 'pointer'}}
                                 className={currentPage === p ? s.selectedPage : ''}
                                 onClick={() => onPageChanged(p)}>{p}</span>
                })
            }
            {
                portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber+1)}>Next</button>
            }
        </div>
    );
};