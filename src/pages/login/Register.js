import React, { useState } from "react";

const Register = () => {
  const [isValid,setIsValid] = useState({email:false,password:false,passWord:false,confirmPasword:false});
  const [newUser,setNewUser]= useState({
    name:'',
    email:'',
    passWord:'',
    confirmPasword:''
  });
  const handleInputName =(event)=>{
    setNewUser({...newUser, name:event.target.value})
  }
  const handleInputEmail=(event)=>{
    setNewUser({...newUser, email:event.target.value})
  }
  const handleInputPassword=(event)=>{
    setNewUser({...newUser, passWord:event.target.value})
  }
  const handleConfirmPasword = (event)=>{
    setNewUser({...newUser, confirmPasword:event.target.value})
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(newUser)

    setNewUser({
      name:'',
      email:'',
      passWord:'',
      confirmPasword:''
    })
  }

  return (
    <div className="form_wraper">
      <form onSubmit={handleSubmit}>
        <div className={`form_group mb-3`}>
          {/* <label>Name</label> */}
          <input type={"text"} name="name" placeholder="Name" value={newUser.name} onChange={handleInputName} pattern={'^[a-zA-Z0-9]{4,16}$'}/>
          <span className="error_mes">Username should be 4-16 charactors and shouldn't include any special charactor!</span>
        </div>
        <div className={`form_group mb-3`}>
          {/* <label>Email address</label> */}
          <input type={"email"} name="email" placeholder="Enter email" value={newUser.email} onChange={handleInputEmail}/>
          <span className="error_mes">It should be a valid email address!</span>
        </div>
        <div className="form_group mb-3">
          {/* <label>Password</label> */}
          <input type={""} name="password" placeholder="Password" value={newUser.passWord} onChange={handleInputPassword} pattern={'[A-Za-z\d!@#$%^&*()_+]{7,19}'}/>
          <span className="error_mes">Password should be 8-20 charactors and include at least 1 letter, 1 number and 1 special charactors!</span>
        </div>
        <div className="form_group mb-3">
          {/* <label>Confirm Password</label> */}
          <input
            type={"password"}
            name="confirmPasword"
            placeholder="Confirm Password"
            value={newUser.confirmPasword}
            onChange={handleConfirmPasword}
            pattern={newUser.passWord}
          />
          <span className="error_mes">passWord should be same!</span>
        </div>
        <div className="form_login_btn_grp mb-3">
          <button>Register</button>
          <button>cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
