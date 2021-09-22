import { useState } from "react"

const AddItem = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit=(e)=>{
        e.preventDefault()

    if(!title){
        alert('Add an item')
        return
    }    
    onAdd({title,description})
    setTitle('')
    setDescription('')
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Title</label>
            <input type='text' placeholder='Add Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Description</label>
            <input type='text' placeholder='Add Description'  value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <input type='submit' value='Save Item' className='btn btn-block'/>
        </form>
    )
}

export default AddItem
