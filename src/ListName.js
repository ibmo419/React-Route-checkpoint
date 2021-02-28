import React from 'react'
import {useState,useEffect} from'react'
function ListName() {
    const [count,setCount]=useState(0);
    useEffect(() => {
        document.title=`vous avez cliquez ${count} fois`;
    });
    return (
        <div>
          <p>vous avez cliquez {count} fois</p>
          <buton onClick={()=>setCount(count+1)} style={{backgroundColor:"red"}}>Cliquez ici</buton>
        </div>
    )
}

export default ListName
