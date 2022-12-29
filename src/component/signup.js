import { useState } from "react"
import { Link } from "react-router-dom"

export default function Signup (){

    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")

    const userIdChange = (e) => {
        setUserId(e.target.value)
    }

    const passwordChange = (e) =>{
        setPassword(e.target.value)

    }

    const registerUser = (e) =>{
        e.preventDefault();
        fetch("http://localhost:8080/user/signup",
            {
                method : "POST",
                body : JSON.stringify({
                    userId : userId,
                    password : password
             })
            , headers:{
                "Content-type" : "application/json; charset=UTF-8"
            },
            }    
        ).then((response) => 
        response.json().then((json)=>{
            if(!response.ok){
                return Promise.reject(json)
            }
            console.log(json)
            return json;
        })
        
        );
    }
    return(
    <div>
        <h1>회원가입</h1>
        <form onSubmit={registerUser}>
            아이디<input type = "text" onChange={userIdChange}/>
            패스워드<input type = "password" onChange={passwordChange}/>
            <input type = "submit"/>
        </form>
        <Link to ="/" ><button>로그인</button></Link>
    </div>
    )
}