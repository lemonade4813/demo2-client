import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function BookDetail(props){


    let {title} = useParams();

    let findBook = props.bookList.find((book) => {
        return book.title === title;
      });
    
    /*const [findBook, bookInfo] = useState([]);

    useEffect(()=>{

        fetch(`http://localhost:8080/kakao/${title}`)
        .then((response) => response.json())
        .then((data) => {bookInfo(data.documents)
                console.log(data.documents)}
        );
    },[])
*/
    return(
            <table>
                <tbody>
                    <tr>
                        <th>제목</th>
                        <th>도서 썸네일</th>
                        <th>소개</th>
                        <th>ISBN</th>
                        <th>저자</th>
                        <th>출판사</th>
                        <th>출판일</th>
                        <th>정가</th>
                        <th>판매가</th>
                    </tr>
                    <tr>
                        <td>{findBook.title}</td>
                        <td><img src = "{findBook.thumbnail}" alt="thumbnail"/></td>
                        <td>{findBook.contents}</td>
                        <td>{findBook.isbn}</td>
                        <td>${findBook.author.toString()}</td>
                        <td>{findBook.publisher}</td>    
                        <td>{findBook.datetime}</td>
                        <td>{findBook.price}</td>
                        <td>{findBook.sale_price}</td>
                    </tr>
                </tbody>
            </table>
    )
}