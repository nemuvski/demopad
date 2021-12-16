import { buildEntityBase, EntityBase } from '~/entities/entity'

/**
 * Memoエンティティ
 */
export interface Memo extends EntityBase {
  content: string
}

export function buildMemo(content: string) {
  return {
    ...buildEntityBase(),
    content,
  }
}
