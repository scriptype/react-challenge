import Base from './components/Base.jsx'
import HomePage from './components/HomePage.jsx'
import SignUpPage from './containers/SignUpPage.jsx'
import LoginPage from './containers/LoginPage.jsx'

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/signup',
      component: SignUpPage
    },
    {
      path: '/login',
      component: LoginPage
    }
  ]
}

export default routes
