import React, {FC} from 'react';
import s from './Paginator.module.css'

type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}
export const Paginator: FC<PaginatorPropsType> = ({pageSize, totalUsersCount, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil( totalUsersCount / pageSize )
    let pages = []
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.pagesBox}>
            {
                pages.map(p => {
                    return <span key={p} style={{cursor: 'pointer'}}
                                 className={currentPage === p ? s.selectedPage : ''}
                                 onClick={() => onPageChanged(p)}>{p}</span>
                })
            }
        </div>
    );
};