const products = [
    {
        title: "Addy Review Shirt",
        price: 125,
        image: "addygatorreview.png",
        category: "tank top",
        _id: "1"
    },
    {
        title: "Cracker Culture Podcast",
        price: 175,
        image: "crackerculturepodcastwhite.png",
        category: "hoodie",
        _id: "2"
    },
    {
        title: "Live Love Leave Larry Alone",
        price: 195,
        image: "liveloveleavelarryalone.png",
        category: "tshirt",
        _id: "3"
    },
]

class DataService {

    getProducts (){
        // todo: retieve prods from server
        return products;
    }
    
    getCategories (){
        return ['tank top', 'hoodie', 'tshirt']
    }

    saveProduct (){

    }


}

export default new DataService();