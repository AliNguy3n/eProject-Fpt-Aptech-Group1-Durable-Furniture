import React from 'react'
import './LoginMain.scss'
function LoginMain() {
    const handleregister = (event) =>{
        event.preventDefault()
        let username = event.target.user.value;
        let pass = event.target.password.value;
        let conver= (data)=>{
            let arr = data.split('');
            let newarr = arr.map((item,index)=>{
                let character = item.charCodeAt()
                return(character)
            })
            return newarr.join('')
        }
        
        return( conver(username) === '97100109105110' && conver(pass) === '97100109105110')
    }
  return (
    <div className='login-main'>
        <div className='login-main-wrapper'>
            <div className='login-main-wrapper-item'>
                <h1>REGISTER</h1>
                <form action="/" method='post' id='form' onSubmit={(event) =>handleregister(event) }>
                    <label htmlFor="">User Name:</label>
                    <input type="text" className='login-main-wrapper-item-user' name='user' id='user' /> 
                    <label htmlFor="">Password:</label> 
                    <input type="password" name='password' id='password' className='login-main-wrapper-item-password' /> 
                    <input type="submit" value='Login' className='login-main-wrapper-item-submit' />
                </form>
               <p>Test- User Name:admin</p>
               <p>Test- Password:admin</p>
            </div>
        </div>
    </div>
  ) 
}

export default LoginMain
