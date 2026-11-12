describe('ToDo app', () => {
  it('shows the task form and empty list', () => {
    cy.visit('/');

    cy.contains('h1', 'Basic CRUD ToDo web app').should('be.visible');
    cy.get('#task-form').should('be.visible');
    cy.get('#task-list').should('be.empty');
    cy.get('#empty-state').should('be.visible');
  });
});
