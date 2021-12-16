import React from 'react'
import { useForm } from 'react-hook-form'
import { Memo } from '~/entities/memo'
import { useOperationMemo } from '~/hooks/memo'

type Props = {
  item: Memo
}

type FieldValues = {
  content: string
}

const MemoListItem: React.FC<Props> = ({ item }) => {
  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      content: item.content,
    },
  })

  const { updateMemo, removeMemo } = useOperationMemo()

  return (
    <div>
      <textarea
        {...register('content', {
          onBlur: handleSubmit((fieldValues) => {
            updateMemo(item.id, fieldValues.content)
          }),
        })}
      />
      <button type='button' onClick={() => removeMemo(item.id)}>
        remove
      </button>
    </div>
  )
}

export default MemoListItem
