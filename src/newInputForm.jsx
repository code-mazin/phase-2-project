import { useState } from "react"

export function NewInputForm({ onSubmit }) {
  const [newOne, setNewOne] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newOne === "") return

    onSubmit(newOne)

    setNewOne("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newOne}
          onChange={e => setNewOne(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}