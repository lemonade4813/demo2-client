export default function keyword(){

    if(!localStorage.getItem("userId"))
    {
        window.location.href = "/"
    }

    return(
        <h1>인기 키워드 목록입니다.</h1>
    )     

}