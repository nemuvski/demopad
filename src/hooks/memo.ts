import { useRecoilState } from 'recoil'
import { memoListState } from '~/atoms/memo'
import { useCallback } from 'react'
import { buildMemo } from '~/entities/memo'
import { EntityId } from '~/entities/entity'

export function useOperationMemo() {
  const [memoList, setMemoList] = useRecoilState(memoListState)

  return {
    insertMemo: useCallback(
      (content = '') => {
        setMemoList([...memoList, buildMemo(content)])
      },
      [memoList, setMemoList]
    ),
    updateMemo: useCallback(
      (id: EntityId, newContent: string) => {
        const index = memoList.findIndex((item) => item.id === id)
        setMemoList([
          ...memoList.slice(0, index),
          {
            id,
            content: newContent,
          },
          ...memoList.slice(index + 1),
        ])
      },
      [memoList, setMemoList]
    ),
    removeMemo: useCallback(
      (id: EntityId) => {
        const index = memoList.findIndex((item) => item.id === id)
        setMemoList([...memoList.slice(0, index), ...memoList.slice(index + 1)])
      },
      [memoList, setMemoList]
    ),
  }
}
