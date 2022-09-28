import axios from "axios"

export async function getData(url, id) {
    let res = await axios.get(`${url}/${id}`)
    return res.data;
}

// export async function getSchema() {
//     let res = await axios.get("https://es-demo.azurewebsites.net/swagger/v1/swagger.json")
//     return res.data;
// }






