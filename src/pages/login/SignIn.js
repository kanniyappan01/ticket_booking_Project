import React, { useState,useEffect } from 'react'

const SignIn = () => {

    const intialStateValue = {email:"",password:""}
    const [user,setUser] = useState(intialStateValue);
    const [isValid,setIsValid] = useState({email:false,password:false});

    const [accounts, setAccounts] = useState([]);
    console.log(accounts)
    const handleInputEmail =(e)=>{
        setUser({...user,email:e.target.value})
    }
    const handleInputPassword =(e)=>{
        setUser({...user,password:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if((user.email.trim().length !== 0) && (user.password.trim().length !== 0)){
            console.log(user)
            setAccounts([...accounts,user]);
            
        }else{
            if(user.email.trim().length === 0 && user.password.trim().length === 0){
                setIsValid({email:true,password:true})
            }else if(user.email.trim().length === 0){
                setIsValid({...isValid,email:true})
            }else{
                setIsValid({...isValid,password:true})
            }
        }
    }
    
  return (
    <div className='form_wraper'>
        <form onSubmit={handleSubmit}>
            <div className={`form_group mb-3 ${isValid.email ? "invalid":""}`}>
                <label>Email address</label>
                <input type={"email"} name="email" placeholder='Enter email' value={user.email} onChange={handleInputEmail}/>
            </div>
            <div className={`form_group mb-3 ${isValid.password ? "invalid":""} `}>
                <label>Password</label>
                <input type={"password"} name="password" placeholder='Password' value={user.password} onChange={handleInputPassword} />
            </div>
            <div className="form_login_btn_grp mb-3">
                <button>Log in</button>
                <button>cancel</button>
            </div>
        </form>
    </div>
  )
}

export default SignIn