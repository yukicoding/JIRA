import {SearchPanel} from './search-panel'
import {List}from './list'
import React,{useState,useEffect} from 'react'
import {cleanObject,useMount,useDebounce} from '../../utils'
import * as qs from 'qs'
const apiUrl = process.env.REACT_APP_API_URL


export const ProjectListScreen = ()=>{

  const [param,setParam] = useState({
    name:'',
    personId:''
  })
  const debounceParam = useDebounce(param,1000)
  //请求数据
  const [users,setUsers] = useState([])
  const [list,setList] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async (res)=>{
      if(res.ok){
        setList( await res.json())
      }
    })
  }, [debounceParam])
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (res)=>{
      if(res.ok){
      setUsers( await res.json())
    }
  })
  })
  return(
    <div>
      <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  )
}