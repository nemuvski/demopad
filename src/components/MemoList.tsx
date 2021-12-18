import React from 'react'
import { useRecoilValue } from 'recoil'
import { memoListState } from '~/atoms/memo'
import MemoListItem from '~/components/MemoListItem'
import { useOperationMemo } from '~/hooks/memo'
import PlusIcon from '~/components/icons/PlusIcon'

const MemoList = () => {
  const memoList = useRecoilValue(memoListState)
  const { insertMemo } = useOperationMemo()

  return (
    <div className='memo-list'>
      <div className='memo-list__content'>
        {memoList.map((memo) => {
          return <MemoListItem key={memo.id} item={memo} />
        })}
      </div>

      <button className='button memo-list__insert-button' type='button' onClick={() => insertMemo()}>
        <PlusIcon />
      </button>
    </div>
  )
}

export default MemoList
