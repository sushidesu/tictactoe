it("'Next Player: ' が描画されている", () => {
  cy.visit("/")
  cy.get(`[data-testid="status"]`).should((element) => {
    expect(element.eq(0)).to.contain("Next Player: ")
  })
})
