import DeleteTaskModal from './DeleteTaskModal.vue'

describe('<DeleteTaskModal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(DeleteTaskModal)
  })
})