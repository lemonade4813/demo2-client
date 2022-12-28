import { useState } from "react";
import { Link } from "react-router-dom";

export default function Book(){


    const [keyword, setKeyword] = useState("");
    const [bookList, setBookList] = useState([]);


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
            <h1>책검색 페이지 입니다</h1>

            <div>
                도서명 입력<input type="text" onChange={keywordChange} className = "text-field" placeholder="검색할 도서명을 입력하세요"/>
                <input type="button" onClick={getBookList} value="검색" className ="submit-btn"/>
            </div>


            <table>
                <tbody>
                <tr>
                    <th>도서명</th>
                    <th>isbn</th>
                </tr>
            {bookList.map((book) => (
                <tr key={book.title}>
                    <Link to = {`/book/detail/${book.title}`}>{book.title}</Link>
                    <td>{book.title}</td>
                    <td>{book.isbn}</td>
                </tr>
            ))} 
                </tbody>          
            </table>
            </div>
    )

}