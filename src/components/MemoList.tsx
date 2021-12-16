import React from 'react'
import { useRecoilValue } from 'recoil'
import { memoListState } from '~/atoms/memo'
import MemoListItem from '~/components/MemoListItem'
import { useOperationMemo } from '~/hooks/memo'

const MemoList = () => {
  const memoList = useRecoilValue(memoListState)
  const { insertMemo } = useOperationMemo()

  return (
    <div>
      <div>
        {memoList.map((memo) => {
          return <MemoListItem key={memo.id} item={memo} />
        })}
      </div>
      <div>
        <button type='button' onClick={() => insertMemo()}>
          add
        </button>
      </div>
    </div>
  )
}

export default MemoList
