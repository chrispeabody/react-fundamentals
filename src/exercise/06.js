// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)
  //const [error, setError] = React.useState(null)
  const [username, setUsername] = React.useState(null)

  function handleChange(event) {
    const inputValue = event.target.value.toLowerCase()
    //const isValid = inputValue === inputValue.toLowerCase()
    //setError(isValid ? null : 'Username must be lower case')
    setUsername(inputValue)
  }
  
  function handleSubmit(event) {
    // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    event.preventDefault()

    const usernameInput = inputRef.current.value
    onSubmitUsername(usernameInput)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input value={username} onChange={handleChange} ref={inputRef} id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
