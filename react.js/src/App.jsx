import Index from './Hook_for_LocalStore/Index'
import './App.css'
import useRenderTime from './Measure_Component_performance/useRenderTime'
import InfiniteScroll from './Infinite_Scroll/InfiniteScroll'
import FormValidation from './Form Validation/FormValidation'
import ExpensiveCalculation from './useMemo_vs_React.memo/ExpensiveCalculation'
import ParentComponent from './useMemo_vs_React.memo/ParentComponent'

function App() {


  const count = 3;
  useRenderTime()

  return (
    <>
    <h1>Hello world</h1>
    {/* <Index /> */}
    {/* <InfiniteScroll /> */}
    {/* <FormValidation /> */}
    <ParentComponent />
    <ExpensiveCalculation count={count} />
    </>
  )
}

export default App
