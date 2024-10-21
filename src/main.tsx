
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './Homepage/Homepage'
import { Provider } from 'react-redux'
import { store } from './Store'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>

    <Homepage/>
  </Provider>
  
)
