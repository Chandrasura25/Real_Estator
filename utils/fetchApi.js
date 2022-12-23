import axios from "axios";
export const baseUrl ='https://bayut.p.rapidapi.com'
export const fetchApi = async(url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '14b9ca4446msh7314e0b0642243cp1269b9jsn8e028a638528',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }

    });
    return data;
}