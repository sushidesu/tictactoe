describe("Tic Tac Toe", () => {
  const STATUS_ELEMENT = `[data-testid="status"]`
  const getSquareElement = (index: number) => `[data-testid="square: ${index}"]`

  describe("正しく描画されている", () => {
    it("'Next Player: X' が描画されている", () => {
      cy.visit("/")
      cy.get(STATUS_ELEMENT).should((element) => {
        expect(element.eq(0)).to.contain("Next Player: X")
      })
    })
  })

  describe("交互にマスを選択し、片方が勝利する", () => {
    it(`"Winner: X" が描画されている`, () => {
      cy.visit("/")
      /**
       * 以下の盤面を再現
       * XXX
       * OO-
       * ---
       */
      // X (0,0)
      cy.get(getSquareElement(0)).click()
      // O (1,0)
      cy.get(getSquareElement(3)).click()
      // X (0,1)
      cy.get(getSquareElement(1)).click()
      // O (1,1)
      cy.get(getSquareElement(4)).click()
      // X (0,2)
      cy.get(getSquareElement(2)).click()

      // statusを確認
      cy.get(STATUS_ELEMENT).should((element) => {
        expect(element.eq(0)).to.contain("Winner: X")
      })
    })
  })
})
