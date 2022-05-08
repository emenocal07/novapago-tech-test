import axios from "axios"

class CryptosService {
    constructor() {
        this.api = axios.create({ baseURL: `https://api.coincap.io/v2` })
    }
    getCryptos = () => {
        return this.api.get('/assets')
    }

    getCryptosHistory = id => {
        return this.api.get(`/assets/${id}/history?interval=d1`)
    }

}

const cryptosService = new CryptosService()

export default cryptosService