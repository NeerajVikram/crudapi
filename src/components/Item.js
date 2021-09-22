import { FaTimes } from 'react-icons/fa'


const Item = ({ item,onDelete}) => {
    return (
        <div className='item'>
            <h3>{item.title}: {item.description}<FaTimes
            style={{color:'red',cursor:'pointer'}}
             onClick={()=>onDelete(item.id)}/></h3>

        </div>
        
    )
}

export default Item
