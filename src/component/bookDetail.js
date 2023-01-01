import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function BookDetail(props){

 
    return(
            <>
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
                        <td>{props.bookDetail.title}</td>
                        <td><img src ={props.bookDetail.thumbnail} alt="thumbnail"/></td>
                        <td>{props.bookDetail.contents}</td>
                        <td>{props.bookDetail.isbn}</td>
                        <td>{props.bookDetail.authors}</td>
                        <td>{props.bookDetail.publisher}</td>    
                        <td>{props.bookDetail.datetime}</td>
                        <td>{props.bookDetail.price}</td>
                        <td>{props.bookDetail.sale_price}</td>
                    </tr>
                </tbody>
            </table>
    
        <button onClick={props.bookDetailClose}>닫기</button>
        </>
    )
}