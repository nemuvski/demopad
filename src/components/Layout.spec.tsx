import React from 'react'
import { mount } from '@cypress/react'
import Layout from '~/components/Layout'

describe('[Component] Layout', function () {
  it('タイトル要素が出力される', function () {
    mount(<Layout />)

    cy.get('h1').contains('Demopad')
  })

  it('子要素が出力される', function () {
    mount(
      <Layout>
        <div id='child'>This is a test</div>
      </Layout>
    )

    cy.get('div#child').contains('This is a test')
  })
})
