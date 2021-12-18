import React from 'react'
import { useForm } from 'react-hook-form'
import { Memo } from '~/entities/memo'
import { useOperationMemo } from '~/hooks/memo'
import TrashIcon from '~/components/icons/TrashIcon'

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
    <div className='memo-list-item'>
      <textarea
        className='memo-list-item__textarea'
        {...register('content', {
          onBlur: handleSubmit((fieldValues) => {
            updateMemo(item.id, fieldValues.content)
          }),
        })}
      />

      <button className='button memo-list-item__remove-button' type='button' onClick={() => removeMemo(item.id)}>
        <TrashIcon />
      </button>
    </div>
  )
}

export default MemoListItem
