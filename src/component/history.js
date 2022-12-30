export default function history(){


    if(!localStorage.getItem("userId"))
    {
        window.location.href = "/"
    }

    return(
            <h1>내가 검색 한 키워드의 히스토리입니다.</h1>

    )
}