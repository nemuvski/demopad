import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import produce from 'immer'
import { memoListState } from '~/atoms/memo'
import { buildMemo } from '~/entities/memo'
import { EntityId } from '~/entities/entity'

export function useOperationMemo() {
  const updater = useSetRecoilState(memoListState)

  return {
    insertMemo: useCallback(
      (content = '') => {
        updater((state) => {
          return produce(state, (draft) => {
            draft.push(buildMemo(content))
          })
        })
      },
      [updater]
    ),
    updateMemo: useCallback(
      (id: EntityId, newContent: string) => {
        updater((state) => {
          return produce(state, (draft) => {
            const index = draft.findIndex((item) => item.id === id)
            if (index > -1) {
              draft[index].content = newContent
            }
          })
        })
      },
      [updater]
    ),
    removeMemo: useCallback(
      (id: EntityId) => {
        updater((state) => {
          return produce(state, (draft) => {
            const index = draft.findIndex((item) => item.id === id)
            if (index > -1) {
              draft.splice(index, 1)
            }
          })
        })
      },
      [updater]
    ),
  }
}
