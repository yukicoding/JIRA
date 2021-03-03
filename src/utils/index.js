//在一个函数里，改变传入的对象本身是不好的
export const isFalsy = value=> value===0? false : !value

export const cleanObject = (object)=>{
  const res = {...object}
  //对res内的每个值做判断
  Object.keys(res).forEach((key)=>{
    const value = res[key];
    if(isFalsy(value)){
      delete res[key]
    }
  })
  return res
}