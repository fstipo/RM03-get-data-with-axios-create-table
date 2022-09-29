import axios from "axios"
import Moment from "moment"

export async function getData(url, id) {
    let res = await axios.get(`${url}/${id}`)
    return res.data;
}

// export async function getSchema() {
//     let res = await axios.get("https://es-demo.azurewebsites.net/swagger/v1/swagger.json")
//     return res.data;
// }

// Moment(item.changedAt).format('DD.MM.YYYY, h:mm:ss A')

export const formatData = (date) => Moment(date).format('DD.MM.YYYY, h:mm:ss A');





