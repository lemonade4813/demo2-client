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

    const registerUser = async (e) =>{
        e.preventDefault();
        await fetch("http://localhost:8080/user/signup",
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
        response.json()
        .then((json)=>{
            if(!response.ok){
                return Promise.reject(json)
            }
            alert(`회원가입이 정상적으로 되었습니다. 아이디 : ${json.userId} 비밀번호 : ${json.password}`);
            console.log(json)
            return json;
        }).then(window.location.href="/book")
        
        );
    }
    return(
    <div>
        <div className ="signupForm">
        <h1>회원가입</h1>
        <form onSubmit={registerUser}>
            <p>아이디 <input type = "text" onChange={userIdChange}/></p>
            <p>패스워드 <input type = "password" onChange={passwordChange}/></p>
            <input type = "submit"/>
        </form>
        </div>
        <Link to ="/" ><button class="buttonToLogin">로그인</button></Link>
        
    </div>

    )
}