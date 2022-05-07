
const CryptoList = ({cryptos}) => {

  console.log(cryptos)

  return (

    <>
      {cryptos.map(crypto => {
        return (
          <div key={crypto.id}>
            <h1>{crypto.name}</h1>
            <p>{crypto.symbol}</p>
            <p>{crypto.priceUsd}</p>
            <hr />
          </div>
        )
      }
      )}
    </>
  )
}

export default CryptoList