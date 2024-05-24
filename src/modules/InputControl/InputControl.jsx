const InputControl = (value, onChange) => {
    const handleChange = (e) => {
        onChange(e.target.value)
    }
    
  return (
      <>
          <input type="text" value={value} onChange={handleChange} />
      </>
  )
}

export default InputControl
