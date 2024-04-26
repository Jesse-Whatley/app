import { useState } from 'react';
import './Admin.css';

function Admin () {
    const [coupon, setCoupon] = useState({
        code: "",
        discount: "",
    });
    const [allCoupons, setAllCoupons] = useState([]);
    const [product, setProduct] = useState({
        title: "",
        price: "",
        category: "",
    });
    const [allProducts, setAllProducts] = useState([]);

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
        <div className="admin">
            <h1>Admin</h1>

            <div className="parent">
                <div className="form">
                    <h3>Create Product</h3>

                    <div>
                        <label className='form-label'>Title:</label>
                        <input onChange={} name='title' type="text" className='form-control' />
                    </div>

                    <div>
                        <label className="form-label">Price:</label>
                        <input onChange={} name='price' type="number" className='form-control'/>
                    </div>
                    <div>
                        <label className="form-label">Category:</label>
                        <input onChange={} name='category' type="text" className='form-control'/>
                    </div>

                    <div>
                        <button onClick={} className='btn btn-primary'>Save Product</button>
                    </div>
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