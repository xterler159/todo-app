import React from "react"
import AddTodo from "./features/AddTodo/AddTodo"

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }} data-testid="appTitle">
        Todo app
      </h1>
      <AddTodo />
    </div>
  )
}

export default App
