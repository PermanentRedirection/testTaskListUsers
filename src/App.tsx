import Home from "./Pages/Content.tsx"
import { EmployeeProvider } from './useContext.tsx';

function App() {

  return (
    <EmployeeProvider>
      <div className='mainContainer'>
        <Home />
      </div>
    </EmployeeProvider>

  )
}

export default App
