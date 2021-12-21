describe('メモ機能の操作に関するテスト', function () {
  it('テキストエリアのテキストを入力したあとに、その内容が保持される', function () {
    cy.visit('/')

    const targetTextareaSelector = cy.get('div.memo-list-item').first().children('textarea')
    targetTextareaSelector.focus().type('Hi!').blur()

    targetTextareaSelector.should('have.value', 'Hi!')
  })

  it('メモ項目の削除ボタンを押したあとに、その項目の要素が削除される', function () {
    cy.visit('/')

    cy.get('div.memo-list-item').first().children('button').click()
    cy.get('div.memo-list__content').should('be.empty')
  })
})
