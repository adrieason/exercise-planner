import Exersice from './Exersice'

const Exersices = ({exersices, onDelete, onToggle}) => {

  return (
    <>
    {exersices.map((exersice)=>(
    <Exersice key={exersice.id} exersice={exersice} onDelete={onDelete} onToggle={onToggle}/>
    ))}
    </>
  )
}

export default Exersices