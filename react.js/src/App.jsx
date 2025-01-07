import Index from './Hook_for_LocalStore/Index'
import './App.css'
import useRenderTime from './Measure_Component_performance/useRenderTime'
import InfiniteScroll from './Infinite_Scroll/InfiniteScroll'
import FormValidation from './Form Validation/FormValidation'
import ExpensiveCalculation from './useMemo_vs_React.memo/ExpensiveCalculation'
import ParentComponent from './useMemo_vs_React.memo/ParentComponent'
import TaskManager from './CURD opration/TaskManager'
import Async from './asyncVSpromise/Async'
import Promises from './asyncVSpromise/Promises'
import Button from './ReusableButton/Button'
// import ReverseWordsInSentence from './ReverseWordsInSentence'
import Dropdown from './DropDownMenu/Dropdown'
import FibonacciApp from './Febonachi'
import FactorialCalculator from './Factorial'

function App() {


  // const count = 3;
  // useRenderTime()
  const options = ["Option 1", "Option 2", "Option 3"];


  return (
    <>
    <h1>Hello world</h1>
    {/* <Index /> */}
    {/* <InfiniteScroll /> */}
    {/* <FormValidation /> */}
    {/* <ParentComponent /> */}
    {/* <ExpensiveCalculation count={count} /> */}
    {/* <TaskManager /> */}
    {/* <Async /> */}
    {/* <Promises /> */}
    {/* <Button /> */}
    {/* <ReverseWordsInSentence /> */}
    {/* <Dropdown /> */}
    <FibonacciApp />
    {/* <FactorialCalculator /> */}
    </>
  )
}

export default App
