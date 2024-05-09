const products = [
    {
        title: "Rotary Machine",
        price: 175,
        image: "rotarymachine.jpg",
        category: "tattoo gun",
        _id: "1"
    },
    {
        title: "Coil Machine",
        price: 225,
        image: "coiltattoogun.jpg",
        category: "tattoo gun",
        _id: "2"
    },
    {
        title: "Disposable Tubes",
        price: 32,
        image: "coilmachinetubes.jpg",
        category: "tubes",
        _id: "3"
    },
    {
        title: "Reusable Tubes",
        price: 50,
        image: "coilmachinetubes2.jpg",
        category: "tubes",
        _id: "4"
    },
    {
        title: "Coil Machine Needles",
        price: 35,
        image: "coilmachineneedles.jpg",
        category: "needles",
        _id: "5"
    },
    {
        title: "Rotary Machine Needles",
        price: 28,
        image: "rotarymachineneedles.jpg",
        category: "needles",
        _id: "6"
    },
    {
        title: "Bundle Pack of Ink",
        price: 495,
        image: "inkbundle.jpg",
        category: "ink",
        _id: "7"
    },
    {
        title: "Practice Skins",
        price: 65,
        image: "practiceskin.jpg",
        category: "accessories",
        _id: "8"
    },
    {
        title: "Power Supplies",
        price: 115,
        image: "powersupplies.jpg",
        category: "accessories",
        _id: "9"
    },
    {
        title: "Transfer Paper",
        price: 88,
        image: "transferpaper.jpg",
        category: "printer",
        _id: "10"
    },
    {
        title: "Transfer Paper Printer",
        price: 142,
        image: "transferprinter.jpg",
        category: "printer",
        _id: "11"
    }
]

class DataService {

    getProducts (){
        // todo: retieve prods from server
        return products;
    }
    
    getCategories (){
        return ['tattoo gun', 'tubes', 'needles', 'ink', 'printer', 'accessories']
    }

    saveProduct (){

    }


}

export default new DataService();