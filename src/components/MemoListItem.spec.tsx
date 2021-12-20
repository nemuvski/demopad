import React from 'react'
import { mount } from '@cypress/react'
import { buildMemo } from '~/entities/memo'
import MemoListItem from '~/components/MemoListItem'

describe('[Component] MemoListItem', function () {
  it('テキストエリアに指定した値がセットされる', function () {
    const entity = buildMemo('This is a test')
    mount(<MemoListItem item={entity} />)

    cy.get('textarea').should('have.value', 'This is a test')
  })
})
