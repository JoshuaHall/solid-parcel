import { render } from 'solid-js/web'

import './styles.css'

function App() {
  return <p>Solid Parcel Starter</p>
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById('root')!

render(() => <App />, root)
