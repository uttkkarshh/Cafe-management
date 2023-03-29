// JavaScript source code


function Item({product,func1,func2}) {
    return (

        <div className="Item">
            {(product.desc.includes("coffe") || product.desc.includes("COFFE")) && <img src={`coffe.jpg`} height="200px" />}
            {(product.desc.includes("fastfood") || product.desc.includes("FASTFOOD")) && <img src={`FastfoodP.jpg`} height="200px" />}
            {(product.desc.includes("shakes") || product.desc.includes("SHAKES")) && <img src={`Shakes.jpg`} height="200px" />}
            {(product.desc.includes("icecream") || product.desc.includes("ICECREAM")) && <img src={`Icecream.jpg`} height="200px" />}
            <div className="ItemDetails">
                <h1>{product.name}</h1>
                <h1>PRICE :{product.price} </h1>
                <h4>Description:{product.desc}</h4>
                <div className='Vbutton'>
                    <button type='button' className='Vb' onClick={() => {
                        func1(true);
                        func2(product);
                    }} >view</button>
                </div>
            </div></div>
        );
}
export default Item;