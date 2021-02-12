import React, {useState, useEffect, ChangeEvent} from "react";
import App from "./App";
import * as model from './model'

export const Auth=()=>{

    const  [user,setUser]=useState(model.initUser);
    const  [hasAccount,setHasAccount]=useState(false);

    const clearInputs = () =>{
        setUser(model.initUser)
    }

    const updateChange=(event:ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = event.target
        const fieldValues={[name]:value}
        setUser({
            ...user,
            ...fieldValues
        })
    }

    const handleLogin=()=>{

    }

    const handleSignUp=()=>{

    }

    const handleLogout=()=>{
        
    }

    return (
        <div className="App">
          {(user.id==0)? (
            <App handleLogout={handleLogout}/>
          ) : (
            <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input
                    type="text"
                    autoFocus
                    required
                    name="email"
                    value={user.email}
                    onChange={updateChange}
                /> 
                <label>Password</label>
                <input
                    type='password'
                    required
                    name="password"
                    value={user.password}
                    onChange={updateChange}
                />
                <div className="btnContainer">
                {hasAccount?(
                    <>
                    <button onClick={handleLogin}>Sign in</button>
                    <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                    </>
                ) : (
                    <>
                    <button onClick={handleSignUp}>Sign up</button>
                    <p>Already have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                    </>
                )}
            </div>
            </div>
        </section>
          )}
      </div>
    );

}
