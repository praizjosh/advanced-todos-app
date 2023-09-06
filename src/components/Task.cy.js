import Task from './Task.vue'

describe('<Task />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Task)
  })
})