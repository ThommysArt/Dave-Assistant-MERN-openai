import { useState } from 'react'
import { Home } from './components/pages/Home'
import AuthsPage from './components/pages/AuthsPage'
import { Theme } from '@radix-ui/themes'


function App() {

  return (
    <Theme 
      appearance="dark"
      accentColor="mint"
      grayColor="gray"
      panelBackground="translucent"
      scaling="100%"
      radius="medium"
      >
      <Home />
    </Theme>
  )
}

export default App
