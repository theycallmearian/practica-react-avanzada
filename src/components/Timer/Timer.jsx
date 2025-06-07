import './Timer.css'

const Timer = ({ date }) => {
  if (!date) return <div className='timer-container'>Cargando...</div>
  return (
    <div className='timer-container'>
      <span className='timer-text'>{date.toLocaleTimeString()}</span>
    </div>
  )
}

export default Timer
