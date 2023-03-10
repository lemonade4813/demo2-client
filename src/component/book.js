import { useEffect, useState } from "react";
import Paging from "./paging";
import BookDetail from "./bookDetail";
import checkUserId from "./checkUserId";


export default function Book(){

    const userId = checkUserId();

    const [page, setPage] = useState(1) 
    const [size, setSize] = useState(10)
    const [totalCount, setTotalCount] = useState("")
    const [keyword, setKeyword] = useState("");
    const [bookList, setBookList] = useState([]);
    const [isShowBookDetail, setShowBookDetail] = useState(false);
    const [bookDetail , setBookDetail] = useState([])

    const getBookList = async () => {
        const url = `http://localhost:8080/kakao?keyword=${keyword}&page=${page}&size=${size}&userId=${userId}`

        //document : 도서 정보, total_count : 도서 전체 검색 갯수 
        await fetch(url)
        .then((response) => response.json())
        .then((data) => {setBookList(data.documents)
                        setTotalCount(data.meta.total_count)})
        .catch((error)=>{
            console.log(error)
        });
        
    }
    
    useEffect(()=>{
        console.log(page)
        getBookList()
    },[page])
    

    const keywordChange = (e) => {
        setKeyword(e.target.value)
        console.log(e.target.value)
    }    

    const pageChange = (page) => {
        setPage(page)
    }

    const sizeChange = (e) => {
        setSize(e.target.value)
    }

    const showDetail = (e) =>{

        const number = parseInt(e.target.innerText)
        setShowBookDetail(true)
        setBookDetail(bookList[number-1])
    }

    const bookDetailClose = () =>{
        setShowBookDetail(false)
    }

    return(
            <div>
                <h1>도서 검색 페이지 입니다</h1>
                    <div>
                        <p>키워드 입력 <input className = "keywordBook" type="text" onChange={keywordChange} placeholder="검색할 도서명을 입력하세요"/></p>
                        <span>페이지당 표시할 검색 갯수  <input className = "keywordNumber" onChange = {sizeChange} type="text"/></span>
                        <p><input type="button" onClick={getBookList} value="검색" className ="submit-btn"/></p>
                        <strong><p style={{color:"red"}}>번호 클릭시 페이지 하단에 해당 도서의 상세정보가 표시됩니다.</p></strong>
                    </div>

                <table style={{margin:"0px auto"}}>
                    <tbody>
                    <tr>
                        <th>번호</th>
                        <th>도서명</th>
                        <th>저자</th>
                        <th>가격</th>
                        <th>출판사</th>
                        <th>isbn</th>
                    </tr>
                {bookList.map((book, index) => (
                    <tr key={book.isbn}>
                        <td onClick={showDetail}>{index+1}</td>
                        <td>{book.title}</td>
                        <td>{book.authors}</td>
                        <td>{book.price}</td>
                        <td>{book.publisher}</td>
                        <td>{book.isbn}</td>
                    </tr>
                ))} 
                    </tbody>          
            </table>
            

           <Paging totalCount={totalCount} page={page} postPerPage={size} pageRangeDisplayed={10} 
              handlePageChange={pageChange} />  
              
                
            {isShowBookDetail && <BookDetail bookDetail = {bookDetail} bookDetailClose={bookDetailClose}/>}
            </div>
        )
    
}