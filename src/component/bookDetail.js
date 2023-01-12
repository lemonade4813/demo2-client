export default function BookDetail({bookDetail,bookDetailClose}){

 
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
                        <td>{bookDetail.title}</td>
                        <td><img src ={bookDetail.thumbnail} alt="thumbnail"/></td>
                        <td>{bookDetail.contents}</td>
                        <td>{bookDetail.isbn}</td>
                        <td>{bookDetail.authors}</td>
                        <td>{bookDetail.publisher}</td>    
                        <td>{bookDetail.datetime}</td>
                        <td>{bookDetail.price}</td>
                        <td>{bookDetail.sale_price}</td>
                    </tr>
                </tbody>
            </table>
    
        <button onClick={bookDetailClose}>닫기</button>
        </>
    )
}