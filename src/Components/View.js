import { Outlet, Link } from "react-router-dom";
function View({ product, func,func2 }) {
    return (
        <>
            <div className='View'>
                {(product.desc.includes("coffe") || product.desc.includes("COFFE")) && <img src={`coffe.jpg`} height="200px" />}
                {(product.desc.includes("fastfood") || product.desc.includes("FASTFOOD")) && <img src={`FastfoodP.jpg`} height="200px" />}
                {(product.desc.includes("shakes") || product.desc.includes("SHAKES")) && <img src={`Shakes.jpg`} height="200px" />}
                {(product.desc.includes("icecream") || product.desc.includes("ICECREAM")) && <img src={`Icecream.jpg`} height="200px" />}
            <div>
                <h1>{product.name} </h1>
                <span className='desc'  >{product.desc} </span>
                <span className='price'>PRICE:{product.price} </span>
            </div>
            <div className="ViewButtons">
                    <button className="AddCartB"type='button' onClick={() => func2(product)} >AddtoCart</button>
                    <button className="BackB" type='button' onClick={()=>func(false) } >Back</button>
                </div>
                </div>
        </>);
}
export default View;