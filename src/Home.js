// JavaScript source code
import Body from './Components/Body'
import Bull from './Components/Bull'
import Menu from './Components/Menu'
import Footer from './Components/footer'
import { Outlet, Link } from "react-router-dom";
function Home() {
    return (
        <div className="Home">
            
            <Body />   
            <Link to='/PrList' state={{ desc: `coffee` }}><Menu name="Coffee"></Menu></Link >
            <Link to='/PrList' state={{ desc: `shakes` }}><Menu name="Shakes"></Menu></Link>
            <Link to='/PrList' state={{ desc: `fastfood` }}> <Menu name="fastfood"></Menu></Link>
            <div className="IceCream">
                <Link className="IcecreamL" to='/PrList'  state={{ desc: `Icecream` }}>ICECREAM</Link>
            </div>
            <div className="Cafe">
                <h1 className="CafeHe">
                    Timing :10 AM -  11 PM...
                    SIPS CAFE
                </h1>
            </div>
      
            <Footer />
        </div>
      
    );
}

export default Home;

