export const calculate = (dispatch, input, n1, operation) => {
  const value = parseInt(input.current.value)
  if (isNaN(value)) return
  switch (operation) {
    case '+':
      dispatch({ type: 'CALCULATE', payload: n1 + value })
      break
    case '-':
      dispatch({ type: 'CALCULATE', payload: n1 - value })
      break
    case '*':
      dispatch({ type: 'CALCULATE', payload: n1 * value })
      break
    case '/':
      dispatch({ type: 'CALCULATE', payload: n1 / value })
      break
    case '%':
      dispatch({ type: 'CALCULATE', payload: n1 % value })
      break
    default:
      break
  }
  input.current.value = ''
}
