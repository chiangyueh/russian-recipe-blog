import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router';
import { editOne } from '../api/edit';
const EditRecipe = () => {
  const _id = useLocation().pathname.slice(6);
  const [auth,setAuth] = useState(false)
  useEffect(()=>{
    editOne(_id).then(res=>{
        setAuth(res.message)
        console.log(auth)
    })
  },[])
  console.log(_id)
  return (
    <div style={{textAlign:'center',marginTop : '500px', fontSize : '50px'}}>
        {auth? <div>Можно редактировать</div> : <div>Нельзя редактировать</div>}
    </div>
  )
}

export default EditRecipe