import React, {useState} from 'react';
import s from "./Users.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, setCurrentPage, portionSize = 20}) => {
  let pagesCount = Math.ceil(totalUsersCount/ pageSize);
  let page = [];
  for(let i=1; i<pagesCount+1; i++) page.push(i)
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber  * portionSize ;

  return (
    <div>
      {portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber-1)}}>Prev</button>}
      {page.filter(p => p >=leftPortionNumber && p<=rightPortionNumber).map(p => {
        return <span onClick={() => { setCurrentPage(p)}} className={p == currentPage && s.currentPage}>{p}</span>})}
      {portionNumber < portionCount && <button onClick={()=>{setPortionNumber(portionNumber+1)}}>Next</button>}
    </div>
  )
}

export default Paginator;