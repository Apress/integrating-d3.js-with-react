// src/AppRouter.tsx

import React, { FunctionComponent, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

// With Lazy loading
// @ts-ignore
// eslint-disable-next-line import/extensions
import { withQuicklink } from 'quicklink/dist/react/hoc.js'

import App from './App'

// Without Lazy loading
// import Rectangle from './components/Rectangle/Rectangle'

// With Lazy loading
const MyPage = lazy(() => import('./components/Rectangle/Rectangle'))
const options = {
  origins: [],
}

const AppRouter: FunctionComponent = () => {
  return (
    <Router>
      <RecoilRoot>
        <Suspense fallback={<span>Loading...</span>}>
          <Switch>
            <Route exact path="/" component={App} />
            {/*
              // Without Lazy loading
              <Route exact path="/Rectangle" component={Rectangle} />

              // With Lazy loading
              <Route exact path="/Rectangle" component={withQuicklink(MyPage, options)} />
            */}
            <Route exact path="/Rectangle" component={withQuicklink(MyPage, options)} />
          </Switch>
        </Suspense>
      </RecoilRoot>
    </Router>
  )
}

/*

// TODO: EE: Without Recoil or Redux;

// src/AppRouter.tsx

import React, { FunctionComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'

const AppRouter: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  )
}

 */

/*
// TODO EE: To replace Recoil state management with Redux Toolkit;

import { Provider } from 'react-redux'
import store from './redux/store'

<Router>
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Provider>
</Router>

 */

export default AppRouter
