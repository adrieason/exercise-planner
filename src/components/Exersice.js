import { FaTimes } from 'react-icons/fa'

const Exersice = ({ exersice, onDelete, onToggle }) => {
  return (
    <div className={`exersice ${exersice.complete ? 'complete' : ''}`} onDoubleClick={()=>onToggle(exersice.id)}>
        <h3>{exersice.text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick ={()=> onDelete(exersice.id)} /></h3>
        <p>{exersice.amount}</p>
    </div>
  )
}

export default Exersice