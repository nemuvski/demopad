import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import App from '~/components/App'

import '~/styles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('app')
)
