import { useState } from "react";
import NoData from "./noData";
import checkUserId from "./checkUserId";
import { useEffect, useRef } from "react";
import { axisBottom, axisRight, scaleLinear, select, scaleBand } from "d3";


export default function History(){

    const userId = checkUserId();

    const [historyList, setHistoryList] = useState([]);

    console.log(historyList);

    const svgRef = useRef();

    useEffect(() => {
      const svg = select(svgRef.current);
  
      // scale
      const xScale = scaleBand()
        .domain(historyList.map((value, index) => index))
        .range([0, 300])
        .padding(0.5);
  
      const yScale = scaleLinear().domain([0, 150]).range([150, 0]);
  
      // axis
      const xAxis = axisBottom(xScale).ticks(historyList.length);
      svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);
  
      const yAxis = axisRight(yScale);
      svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);
  
      svg
        .selectAll(".bar")
        .data(historyList)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (value, index) => xScale(index)) // index xScale 통해 스케일링한 값을 x좌표로
        .attr("y", yScale)
        .attr("width", xScale.bandwidth()) // xScale의 bandwidth만큼 width 설정
        .attr("height", (value, index) => 150 - yScale(value)); // svg 아래에 붙이기 위해서 svg viewBox 고려해 변경
    }, [historyList]);


    // const getData = async () =>{
    //     await fetch(`http://localhost:8080/retrieveMyList?userId=${userId}`)
    //     .then((response) => response.json())
    //     .then((datas) => {setHistoryList(datas.data)
    //                     console.log(datas)
    //                     console.log(datas.data)}
    //     ).catch((error)=>{ 
    //         console.log(error);
    //     })};
    
    const getData = useEffect(()=>{
            fetch(`http://localhost:8080/retrieveMyList?userId=${userId}`)
            .then((response) => response.json())
            .then((datas) => {setHistoryList(datas.data)
                            console.log(datas)
                            console.log(datas.data)}
            ).catch((error)=>{ 
                console.log(error);
            })},[]);

    return(
        <div>    
            <div>
                <h1>내가 검색한 히스토리 목록입니다.</h1>

            {historyList.length > 0 ? (  <table style={{margin:"0px auto"}}>
                    <tbody>
                    <tr>
                        <th>조회 일시</th>
                        <th>키워드</th>
                    </tr>
                {historyList.map((list, index) => (
                    <tr key={list.id}>
                        <td>{list.date}</td>
                        <td>{list.keyword}</td>
                    </tr>
                ))} 
                    </tbody>          
                </table>) : <NoData/>}
                <button class = "getData" onClick ={getData}>조회</button>
            </div>
            <div style = {{padding : "50px"}}>
                <svg ref={svgRef}>
                    <g className="x-axis"/>
                    <g className="y-axis"/>
                </svg>
            </div>    
        </div>            
    ) 
}