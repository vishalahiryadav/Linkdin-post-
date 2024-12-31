import Index from './Hook_for_LocalStore/Index'
import './App.css'
import useRenderTime from './Measure_Component_performance/useRenderTime'

function App() {

  useRenderTime()

  return (
    <>
    <h1>Hello world</h1>
    <Index />
    </>
  )
}

export default App
