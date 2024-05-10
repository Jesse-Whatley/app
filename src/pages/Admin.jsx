import { useEffect, useState } from 'react';
import DataService from '../services/DataService';
import './Admin.css';

function Admin () {
    const [coupon, setCoupon] = useState({
        code: "",
        discount: "",
    });
    const [allCoupons, setAllCoupons] = useState([]);
    
    const [product, setProduct] = useState({
        title: "",
        image: "",
        price: 0,
        category: "",
    });
    const [allProducts, setAllProducts] = useState([]);

    async function loadCatalog() {
        let prods = await DataService.getProducts();
        setAllProducts(prods);
    }

    useEffect(function (){
        loadCatalog();
    }, []);

    function handleProduct (e){
        let text = e.target.value;
        let name = e.target.name;

        let copy = {...product};
        copy[name] = text;
        setProduct(copy);
    }

    function saveProduct (){
        // fix the price
        let fixedProduct = {...product};
        fixedProduct.price = parseFloat (fixedProduct.price);

        let copy = [...allProducts];
        copy.push(fixedProduct);
        setAllProducts(copy);

        DataService.saveProduct(fixedProduct);
    }

    function handleCoupon (e){
        let text = e.target.value;
        let name = e.target.name;

        let copy = {...coupon};
        copy[name] = text;
        setCoupon(copy);
    }

    function saveCoupon (){
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }


    return(
        <div className="admin page">
            <h1>Admin</h1>

            <div className="parent">
                <div className="form">
                    <h3>Create Product</h3>

                    <div>
                        <label className='form-label'>Title:</label>
                        <input onChange={handleProduct} name='title' type="text" className='form-control' />
                    </div>

                    <div>
                        <label className="form-label">Image:</label>
                        <input onChange={handleProduct} name='image' type="text" className='form-control'/>
                    </div>
                    
                    <div>
                        <label className="form-label">Price:</label>
                        <input onChange={handleProduct} name='price' type="number" className='form-control'/>
                    </div>

                    <div>
                        <label className="form-label">Category:</label>
                        <input onChange={handleProduct} name='category' type="text" className='form-control'/>
                    </div>

                    <div>
                        <button onClick={saveProduct} className='btn btn-primary'>Save Product</button>
                    </div>

                    <ul className="list">
                        {allProducts.map((prod,index) => <li key={index}>{prod.title} - ${prod.price}</li>)}
                    </ul>
                </div>

                <div className="form">
                    <h3>Create Coupons</h3>

                    <div>
                        <label className='form-label'>Code:</label>
                        <input onChange={handleCoupon} name='code' type="text" className='form-control' />
                    </div>

                    <div>
                        <label className="form-label">Discount:</label>
                        <input onChange={handleCoupon} name='discount' type="number" className='form-control'/>
                    </div>

                    <div>
                        <button onClick={saveCoupon} className='btn btn-primary'>Save Coupon</button>
                    </div>

                    <ul className="list">
                        {allCoupons.map(cp => <li key={cp.code}>{cp.code} - {cp.discount}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Admin;