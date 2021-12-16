import { nanoid } from 'nanoid'

/**
 * エンティティのIDの型エイリアス
 */
export type EntityId = string

/**
 * エンティティの基底
 */
export interface EntityBase {
  id: EntityId
}

export function buildEntityBase(): EntityBase {
  return {
    // 8文字のランダムな文字から成る
    id: nanoid(8),
  }
}
