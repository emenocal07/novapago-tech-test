import { useEffect, useState } from "react"
import CryptoList from "../components/CryptoList"
import cryptosService from "../services/cryptos.service"

const CryptoListPage = () => {

    const [cryptos, setCryptos] = useState([])

    useEffect(() => {
        cryptosService
            .getAllCryptos()
            .then(response => {
                const cryptos = response.data
                setCryptos(cryptos.data)
            })
    }, [])

    return (

            <>
                <h1>CryptoListPage</h1>
                {!cryptos.length ? <div>Loading...</div> : <CryptoList cryptos={cryptos} />}

            </>

   
    )
}



export default CryptoListPage