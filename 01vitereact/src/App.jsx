

import Chai from "./chai"

function App() {
  const username ="chai aur code"
  return (
    // <Chai/>
    // This will throw an error bcz JSX elements should be wrapped in an enclosing tag <>...</>
    // <h1>Chai aur react</h1>
    <>
    <Chai/>
    <h1>Chai aur react |{username}</h1>
    {/* {username}this is called evaluated expression */}
    <p>test para</p>
    </>
  )
  }
export default App
