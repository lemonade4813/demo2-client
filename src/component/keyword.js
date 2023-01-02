import { useState } from "react";


export default function Keyword(){


    const userId = localStorage.getItem("userId")

    
    if(!userId)
    {
        window.location.href = "/"
    }


    const [keywordList, setKeywordList] = useState([]);


    const refresh = async (e) =>{
        await fetch("http://localhost:8080/top10")
        .then((response) => response.json())
        .then((data) => {
            if(!data.ok){
                return Promise.reject(data)
            }
            setKeywordList(data)})
        .catch((error)=>{
            console.log(error);
        });
    }

    return(
        <div>
        
        <h1>인기 키워드 목록입니다.</h1>

        <table style={{margin:"0px auto"}}>
                <tbody>
                <tr>
                    <th>키워드명</th>
                    <th>검색 수</th>
                </tr>
            {keywordList.map((list, index) => (
                <tr key={index}>
                    <td>{list.keyword}</td>
                    <td>{list.cnt}</td>
                </tr>
            ))} 
                </tbody>          
            </table>
    
            <button onClick ={refresh}>조회</button>
        </div>
    
    )     

}