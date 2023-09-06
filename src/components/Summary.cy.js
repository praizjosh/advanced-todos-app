import Summary from './Summary.vue'

describe('<Summary />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Summary)
  })
})