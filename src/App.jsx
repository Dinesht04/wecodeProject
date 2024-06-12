import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex m-4 p-4">
          <div className='text-4xl m-4 p-4'>Pranshu Girlfriends = </div>
          <div className='text-4xl m-4 p-4'>{count}</div>
      </div>
      <button className='text-6xl border-4 ml-24 px-4 pb-4' onClick={()=>setCount(count+1)} >+</button>
    </>
  )
}

export default App
