import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';
import './index.css';
import MyRouter from './Router';


function App() {

  return (
      <Theme 
        appearance="light"
        accentColor="sky"
        grayColor="gray"
        panelBackground="translucent"
        scaling="100%"
        radius="medium"
        >
        <MyRouter />
      </Theme>
  )
}

export default App
