import React from 'react'
import { mount } from '@cypress/react'
import MemoList from '~/components/MemoList'
import { RecoilRoot } from 'recoil'

describe('[Component] MemoList', function () {
  it('リストに1つ項目要素が出力される', function () {
    mount(
      <RecoilRoot>
        <MemoList />
      </RecoilRoot>
    )

    cy.get('div.memo-list__content').children('div').its('length').should('equal', 1)
  })

  it('リストに要素が追加され、2つの項目要素が出力される', function () {
    mount(
      <RecoilRoot>
        <MemoList />
      </RecoilRoot>
    )

    cy.get('button.memo-list__insert-button').click()
    cy.get('div.memo-list__content').children('div').its('length').should('equal', 2)
  })
})
