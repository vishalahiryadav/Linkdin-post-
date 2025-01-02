import Index from './Hook_for_LocalStore/Index'
import './App.css'
import useRenderTime from './Measure_Component_performance/useRenderTime'
import InfiniteScroll from './Infinite_Scroll/InfiniteScroll'

function App() {

  useRenderTime()

  return (
    <>
    <h1>Hello world</h1>
    {/* <Index /> */}
    <InfiniteScroll />
    </>
  )
}

export default App
