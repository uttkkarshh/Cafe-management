// JavaScript source code
function CItem({ product ,func}){
    return (
        <div calssName="CItem">
            {(product.desc.includes("coffe") || product.desc.includes("COFFE")) && <img src={`coffe.jpg`} height="200px" />}
            {(product.desc.includes("fastfood") || product.desc.includes("FASTFOOD")) && <img src={`FastfoodP.jpg`} height="200px" />}
            {(product.desc.includes("shakes") || product.desc.includes("SHAKES")) && <img src={`Shakes.jpg`} height="200px" />}
            {(product.desc.includes("icecream") || product.desc.includes("ICECREAM")) && <img src={`Icecream.jpg`} height="200px" />}
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
            <div className="ViewButtons">
                <button className="AddCartB" type='button' onClick={()=>func(product) } >Remove from Cart</button>
              
            </div>
     </div>);
}
export default CItem;