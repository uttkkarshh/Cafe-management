import CItem from './CartItem.js';
import { useState,useEffect } from 'react';

function Bull({ data, func ,func2}) {
    const [input1, setinput1] = useState('');
    const [input2, setinput2] = useState('');
    const [number, setnumber] = useState();
    function func1() {
        alert(`ORDER PLACED AT TABLE${number} FOR ${input1}`)
        func2([]);
    }
    return (<div className="Car">

        {data && data.map((pro) => (<CItem product={pro} func={func} />)) }
    
        {data && data.length &&<div calssName="Form">
            <label for="fname">First Name</label>

            <input type="text" value={input1} onChange={e => setinput1(e.target.value)} />
            <label for="lname">Last Name</label>

            <input type="text" value={input2} onChange={e => setinput2(e.target.value)} />
            <label for="Table">TABLE NO</label>
            <input type="text" value={number} onChange={e => setnumber(e.target.value)} />
           
            <button className="BackB" type='button' onClick={func1 } >Order</button>
        </div>}
      

                 
                
                 
                 
                   
    </div>);
}

export default Bull;
