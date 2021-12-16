import { atom } from 'recoil'
import { buildMemo, Memo } from '~/entities/memo'

export const memoListState = atom<Array<Memo>>({
  key: 'entity::memo-list',
  // 初期表示用に、空のMemoエンティティを1つ用意する
  default: [buildMemo('')],
})
