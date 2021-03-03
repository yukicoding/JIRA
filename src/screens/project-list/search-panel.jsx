import React from 'react'


export const SearchPanel = ({param,setParam,users})=>{

  return <form>
    <input 
    type="text" 
    value={param.name} 
    onChange={evt=>{
      setParam({
        ...param,
        name:evt.target.value
      })
    }}/>
    <select
    value={param.personId} 
    onChange={evt=>setParam({
      ...param,
      personId:evt.target.value
    })}>
      <option value={''}>负责人d</option>
        {
          users.map((users,index)=><option key={index} value={users.id}>{users.name}</option>)
        }
    </select>
  </form>
}