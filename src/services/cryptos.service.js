import axios from "axios"

class CryptosService {
    constructor() {
        this.api = axios.create({ baseURL: `https://api.coincap.io/v2` })
    }
    getAllCryptos = () => {
        return this.api.get('/assets')
    }
    
    getTenCryptosByMarketCap = (id) => {
        return this.api.get(`/assets/${id}/history`)
    }
    
    getOneCrypto = id => {
        return this.api.get(`/assets/${id}`)
    }


}

const cryptosService = new CryptosService()

export default cryptosService