import React, { useState } from 'react'
import './LoginMain.scss'
import datauser from './PIUser.json'
function LoginMain({handlelogin,registerOn,handleUser}) {
    const [ checkpass,setCheckpass] =useState('')

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
        let user = datauser.find((item)=> conver(username) === item.user && conver(pass) === item.pass   
        )
        if(user !== undefined || user || ''){
            setCheckpass('Accept')
            handleUser(user)

        } else{
            setCheckpass('Login Failed')
        }
    
    }
    const activeclass = {
        display : 'flex',
    }
    const disableclass = {
        display :'none',
    }

  return (
    <div className='login-main' style={registerOn ===true ? activeclass: disableclass}>
        <div className='login-main-wrapper'>
            <div className='login-main-wrapper-item'>
                <div className='login-main-wrapper-item-close' onClick={()=>handlelogin()}>x</div>
                <h1>LOGIN </h1>
                <form action="/" method='post' id='form' onSubmit={(event) =>handleregister(event) }>
                    <label htmlFor="">User Name:</label>
                    <input type="text" className='login-main-wrapper-item-user' name='user' id='user' /> 
                    <label htmlFor="">Password:</label> 
                    <input type="password" name='password' id='password' className='login-main-wrapper-item-password' /> 
                    <input type="submit" value='Login' className='login-main-wrapper-item-submit' />
                </form>
                <h3 style={`${checkpass}`==='Accept'? {color:'#0ce575f9', fontWeight:'600'} : {color:'red',fontWeight:'600'}}>{checkpass}</h3>
               <p>Test-User Name:admin - Password:admin</p>
            </div>
        </div>
    </div>
  ) 
}

export default LoginMain
