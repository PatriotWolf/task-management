import React from "react";

import styled from "styled-components";

const Button = styled.button<any>`
  background:${(props:any)=>props.isActive? "#1a3e46":"#ca9768"};
  border:1px solid #dadada;
  color:#fff;
  font-weight:bold;
  box-shadow:0;
  border-radius:1px;
  padding:10px 20px;
`;

function fetchPageNumbers (totalItem:number) {
    let pageArr = [];
    for(let i=0;i<totalItem;i++){
        pageArr.push(i+1)
    }
    return pageArr
}

function PaginationIndexer (props:any) {
    let { activePage,totalItem,onLoadPage} = props;
    const pages = fetchPageNumbers(totalItem);
    return  <div>
        <Button
        isActive={activePage == 1}
        onClick={()=>{ activePage!==1 && onLoadPage(activePage-1)}}>
            Prev
        </Button>
        {
        pages.map((button)=><Button
        isActive={button==activePage}
        onClick={()=>onLoadPage(button)}>
            {button}
        </Button>
        )
        }
        <Button
        isActive={activePage==totalItem}
        onClick={()=>{ activePage!==totalItem && onLoadPage(activePage+1)}}>
            Next
        </Button>
    </div>
}

export default PaginationIndexer