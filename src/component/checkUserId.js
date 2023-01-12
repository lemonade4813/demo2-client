export default function checkUserId(){

    if(!localStorage.getItem("userId"))
    {
        alert("먼저 로그인 해주세요");
        window.location.href = "/";
    }
    else{
        return localStorage.getItem("userId");
    }

}