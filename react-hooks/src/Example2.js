import React, { useState } from 'react'
let showSex = true
function Example2() {
  const [ age, setAge ] = useState(18)
  const [ sex, setSex ] = useState('男')
  const [ work, setWork ] = useState('前端程序员')
  return (
    <div>
      <p>你今年：{ age }岁</p>
      <p>你性别：{ sex }岁</p>
      <p>你工作：{ work }岁</p>
    </div>
  )
}

export default Example2

// userEffect()