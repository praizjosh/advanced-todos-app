import Tasks from './Tasks.vue'

describe('<Tasks />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Tasks)
  })
})