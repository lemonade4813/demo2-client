import { useState } from "react";
import { Link } from "react-router-dom";

export default function Book(){

    if(!localStorage.getItem("userId"))
    {
        window.location.href = "/"
    }

    const [keyword, setKeyword] = useState("");
    const [bookList, setBookList] = useState([]);
    console.log("bookList : " + bookList);

    const getBookList = () => {

        fetch(`http://localhost:8080/kakao/${keyword}`)
        .then((response) => response.json())
        .then((data) => {setBookList(data.documents)
                console.log(data.documents)}
        );
        }
    
    const keywordChange = (e) => {
        setKeyword(e.target.value)
        console.log(e.target.value)
    }    

    return(
            <div>
            <h1>도서 검색 페이지 입니다</h1>

            <div>
                <p>키워드 입력 <input className = "keywordBook" type="text" onChange={keywordChange} placeholder="검색할 도서명을 입력하세요"/></p>
                <p><input type="button" onClick={getBookList} value="검색" className ="submit-btn"/></p>
            </div>

            <table style={{margin:"0px auto"}}>
                <tbody>
                <tr>
                    <th>도서명</th>
                    <th>저자</th>
                    <th>가격</th>
                    <td>출판사</td>
                    <th>isbn</th>
                </tr>
            {bookList.map((book) => (
                <tr key={book.title}>
                    <td><Link to = {`/book/detail/${book.title}`}>{book.title}</Link></td>
                    <td>{book.authors}</td>
                    <td>{book.price}</td>
                    <td>{book.publisher}</td>
                    <td>{book.isbn}</td>
                </tr>
            ))} 
                </tbody>          
            </table>
            
            </div>
        )
    
}