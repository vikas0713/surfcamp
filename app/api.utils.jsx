import axios from "axios";

const BASE_URL = process.env.BASE_URL || "https://dummyjson.com"

async function fetchJsonData() {
    const response = await axios.get(`${BASE_URL}/products`);
    return response?.data?.products.map(
        (item)=> {return {
            id: item.id, 
            headline: item.title, 
            copy: item.description, 
            reversed: false,
            image: item.thumbnail,
        }}
        )

}


export default fetchJsonData;