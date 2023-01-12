import { useEffect, useState } from "react";
import Nodata from "./noData";
import checkUserId from "./checkUserId";


export default function Keyword(){

    checkUserId();

    const [keywordList, setKeywordList] = useState([]);

    console.log(keywordList);
    console.log("keywordListLength : " + keywordList.length);

    const getData = useEffect(()=>{
            fetch("http://localhost:8080/top10")
            .then((response) => response.json())
            .then((data) => {setKeywordList(data)})
            .catch((error)=>{
                console.log(error);
            });
    },[])

    
/*
    const getList = async (e) =>{
        await fetch("http://localhost:8080/top10")
        .then((response) => response.json())
        .then((data) => {setKeywordList(data)})
        .catch((error)=>{
            console.log(error);
        });
    }
*/
    return(
        <div>
            <h1>인기 키워드 목록입니다.</h1>
            {keywordList.length > 0 ?  (<table style={{margin:"0px auto"}}>
                <tbody>
                    <tr>
                        <th>키워드명</th>
                        <th>검색 수</th>
                    </tr>
                {keywordList.map((list, index) => (
                    <tr key={list.keyword}>
                        <td>{list.keyword}</td>
                        <td>{list.cnt}</td>
                    </tr>
                ))} 
                </tbody>          
            </table>
            ) :<Nodata/> } 
            <button class = "getData" onClick ={getData}>조회</button>
        </div>

    )     

}