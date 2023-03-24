import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
function Nav() {

    

    const [input, setinput] = useState('');


    return (
        <div className="Container">
            <header className="NavHeader">
              
            <nav>
                <ul className="Navul">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/PrList' state={{ desc: ` ` }}>Menu</Link></li>
                        <li><Link to='/About'>About us</Link></li>
                        
                </ul>
                </nav><div className="Search">
                   
                    <li><Link to='/PrList' state={{ desc:  `${input}` }}>Search</Link></li>
                     <input type="text" value={input} onChange={e => setinput(e.target.value)} />
                   
                </div>
            </header>
        </div>
    );
}
export default Nav;
