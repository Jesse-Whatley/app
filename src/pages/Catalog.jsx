import Product from "../components/Product";
import "./Catalog.css";


function Catalog(){

    const products = [
        {
            title: "Addy Review Shirt",
            price: 125,
            image: "addygatorreview.png",
            category: "Clothing",
            _id: "1"
        },
        {
            title: "Cracker Culture Podcast",
            price: 175,
            image: "crackerculturepodcastwhite.png",
            category: "Clothing",
            _id: "2"
        },
        {
            title: "Live Love Leave Larry Alone",
            price: 195,
            image: "liveloveleavelarryalone.png",
            category: "Clothing",
            _id: "3"
        },
    ]


        return (
        <div className="catalog">
            <h2>Check our amazing catalog!</h2>

            <div className="products">
                {products.map ((prod) => (<Product key={prod._id} data={prod}/>))}
            </div>
        </div>
    );
}

export default Catalog;