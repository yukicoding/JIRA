import {useEffect,useState} from 'react'
//在一个函数里，改变传入的对象本身是不好的
export const isFalsy = (value:any)=> value===0? false : !value

export const cleanObject = (object:object)=>{
  const res = {...object}
  //对res内的每个值做判断
  Object.keys(res).forEach((key)=>{
    //@ts-ignore
    const value = res[key];
    if(isFalsy(value)){
        //@ts-ignore
      delete res[key]
    }
  })
  return res
}

export const useMount = (callback:()=>void)=>{
  useEffect(() => {
    callback()
  }, [])
}
//防抖
// export const Debounce = (func,delay)=>{
//   let timeout;
//   return ()=>{
//     if(timeout){
//       clearTimeout(timeout)
//     }
//     timeout = setTimeout(()=>{ 
//       func()
//     },delay)
//   }
// }
//防抖（hook）
export const useDebounce = <V>(value:V,delay:number)=>{
  const [debouncedValue,setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(()=>{
      setDebouncedValue(value)
    },delay)
    return ()=> clearTimeout(timeout)
  }, [value,delay])
  return debouncedValue
}