import { useState } from "react";


export default function History(){


    const userId = localStorage.getItem("userId")

    
    if(!userId)
    {
        window.location.href = "/"
    }


    const [historyList, setHistoryList] = useState([]);


    const refresh = async () =>{
        await fetch(`http://localhost:8080/retrieveMyList?userId=${userId}`)
        .then((response) => response.json())
        .then((datas) => {setHistoryList(datas.data)
                        console.log(datas)
                        console.log(datas.data)}
        )
        .catch((error)=>{
            console.log(error);
        })
        ;
    }

    return(
        <div>
        
        <h1>내가 검색한 히스토리 목록입니다.</h1>

        <table style={{margin:"0px auto"}}>
                <tbody>
                <tr>
                    <th>조회 일시</th>
                    <th>키워드</th>
                </tr>
            {historyList.map((list, index) => (
                <tr key={index}>
                    <td>{list.date}</td>
                    <td>{list.keyword}</td>
                </tr>
            ))} 
                </tbody>          
            </table>
    
            <button onClick ={refresh}>조회</button>
        </div>
    
    )     
}