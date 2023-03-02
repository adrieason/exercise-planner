import {useState} from 'react'

const AddExersice = ({onAdd}) => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
    const [complete, setComplete] = useState(false)
    const [weight, setWeight] = useState('')

const onSubmit = (e) => {
    e.preventDefault()
    if(!text){
        alert('Please add text')
        return 
    }

    onAdd({text, amount, complete, weight});
    setText('');
    setAmount('');
    setWeight('');
    setComplete(false);
}

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'> . 
            <label>Exersice</label>
            <input type='text' placeholder='Add Exersice' value={text} 
            onChange={(e)=>setText(e.target.value)} />
        </div>        
        <div className='form-control'>
            <label>Sets & Reps</label>
            <input type='text' placeholder='Add Sets & Reps' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Weight</label>
            <input type='text' placeholder='Add Weight' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
            </div>

        <div className='form-control form-control-check'>
            <label>Complete</label>
            <input type='checkbox' checked={complete} value={complete} onChange={(e)=>setComplete(e.currentTarget.checked)} />
        </div>
        <input type='sumbit' value='Save Exersice' className="btn btn-block" />
    </form>
  )
}

export default AddExersice