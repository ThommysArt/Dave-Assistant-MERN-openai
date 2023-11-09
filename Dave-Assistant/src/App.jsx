import { useState } from 'react'
import { Home } from './components/pages/Home'
import Login from './components/pages/Login'
import { Theme } from '@radix-ui/themes'


function App() {

  return (
    <Theme 
      appearance="dark"
      accentColor="indigo"
      grayColor="gray"
      panelBackground="translucent"
      scaling="100%"
      radius="medium"
      >
      <Login />
    </Theme>
  )
}

export default App
