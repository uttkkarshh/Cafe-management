import CItem from './CartItem.js';
import { useState,useEffect } from 'react';

function Bull({ data, func ,func2}) {
    const [input1, setinput1] = useState('');
    const [input2, setinput2] = useState('');
    const [number, setnumber] = useState();
    function func1() {
        fetch("http://localhost:4000/user/order", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
               
                "Access-Control-Allow-Origin": "*",
            }, credentials: "include",
            body: JSON.stringify({
                data
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.user.fname);
                alert(`order placed for ${data.user.fname}`);

                
            });
        
        func2([]);
    }
    return (<div className="Car">

        {data && data.map((pro) => (<CItem product={pro} func={func} />)) }
    
        {data && data.length!=0 &&<div className="Form">
            <br /><br /><br />
           
            <button className="BackB" type='button' onClick={func1 } >Order</button>
        </div>}
      

                 
                
                 
                 
                   
    </div>);
}

export default Bull;
