import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mortgage from './components/Mortgage'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='technologies'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      <h1>Vite + React</h1>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
     <Mortgage  />
    </>
  )
}

export default App
