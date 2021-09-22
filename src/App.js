import { useState,useEffect } from "react"
import Header from "./components/Header";
import Items from "./components/Items";
import AddItem from "./components/AddItem";

const App = () => {
  const [showForm,setShowForm]=useState(false)
  const [items,setItems] = useState([])

  useEffect(()=>{
    const getItems =async()=>{
      const itemsFromServer=await fetchItems()
      setItems(itemsFromServer)
    }
    getItems()
  },[])

  const fetchItems = async()=>{
    const res=await fetch('http://localhost:5000/items')
    const data=await res.json()
    return data
  }

const addItem=async(item)=>{
  const res=await fetch('http://localhost:5000/items',{
    method:'POST',
    headers:{
      'Content-type':'application/json',
    },
    body: JSON.stringify(item),
  })
  const data=await res.json()
  setItems([...items,data])
}

const deleteItem = async(id) =>{
  await fetch(`http://localhost:5000/items/${id}`,{
    method:'DELETE'
  })
  setItems(items.filter((item)=>item.id !==id))
}
  return (
    <div className='container'>
      <Header onAdd={()=>setShowForm(!showForm)} show={showForm}/>
      {showForm && <AddItem onAdd={addItem}/>}
      {items.length > 0 ?(<Items items={items} 
      onDelete={deleteItem}/>) :('No Product To Show')}
      
    </div>
  )
}

export default App;
