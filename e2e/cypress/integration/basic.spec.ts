describe("Tic Tac Toe", () => {
  const STATUS_ELEMENT = `[data-testid="status"]`
  const getSquareElement = (index: number) => `[data-testid="square: ${index}"]`

  describe("正しく描画されている", () => {
    it("'Next Player: X' が描画されている", () => {
      cy.visit("/")
      cy.get(STATUS_ELEMENT).should((element) => {
        expect(element.first()).to.contain("Next Player: X")
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
        expect(element.first()).to.contain("Winner: X")
      })
    })
  })

  describe("交互にマスを選択し、引き分けになる", () => {
    it(`"Draw" が描画されている`, () => {
      cy.visit("/")
      /**
       * 以下の盤面を再現
       * XXO 012
       * OOX 345
       * XOX 678
       */
      const clickList = [
        0, // X
        3, // O
        1, // X
        4, // O
        5, // X
        2, // O
        6, // X
        7, // O
        8, // X
      ]
      clickList.forEach((index) => {
        cy.get(getSquareElement(index)).click()
      })
      // statusを確認 should(chainers, value) を使用
      cy.get(STATUS_ELEMENT)
        .should("have.text", "Draw")
        .and("not.have.text", "Winner")
      // statusを確認 should(callbackFn) を使用
      cy.get(STATUS_ELEMENT).should((element) => {
        expect(element.first()).to.contain("Draw")
        expect(element.first()).to.not.contain("Winner")
      })
      cy.get(STATUS_ELEMENT)
    })
  })
})
