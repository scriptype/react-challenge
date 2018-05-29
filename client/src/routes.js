import Base from './components/Base.jsx'
import HomePage from './components/HomePage.jsx'
import DashboardPage from './containers/DashboardPage.jsx'
import SignUpPage from './containers/SignUpPage.jsx'
import LoginPage from './containers/LoginPage.jsx'
import Auth from './modules/Auth'

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [
    {
      path: '/',
      component: HomePage,
      onEnter: (nextState, replace) => {
        if (Auth.isUserAuthenticated()) {
          replace('/dashboard')
        }
      }
    },
    {
      path: '/dashboard',
      component: DashboardPage,
      onEnter: (nextState, replace) => {
        if (!Auth.isUserAuthenticated()) {
          replace('/')
        }
      }
    },
    {
      path: '/signup',
      component: SignUpPage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser()
        replace('/')
      }
    }
  ]
}

export default routes
