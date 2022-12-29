import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login(){
    
 
    if(localStorage.getItem("userId"))
    {
        window.location.href = "/book"
    }

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
        fetch("http://localhost:8080/user/signin",
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
                return Promise.reject(json);
            }
            alert(`로그인이 정상적으로 되었습니다. 아이디 : ${json.userId}`);
            localStorage.setItem("userId", json.userId);
            return json;
        }).then(window.location.href="/book")
        
        );
    }
    return(
    <div>
        <h1>로그인</h1>
        <form onSubmit={registerUser}>
            아이디<input type = "text" onChange={userIdChange}/>
            패스워드<input type = "password" onChange={passwordChange}/>
            <input type = "submit"/>
        </form>
        <Link to ="signup" ><button>회원가입</button></Link>
    </div>
    )
    
}