
import { Col, Container, Row } from "react-bootstrap"
import GlobalTen from '../../components/GlobalTen/GlobalTen'
import BitcoinChart from "../../components/BitcoinChart/BitcoinChart"
import EthereumChart from "../../components/EthereumChart/EthereumChart"
import TetherChart from "../../components/TetherChart/TetherChart"
import BNBChart from "../../components/BNBChart/BNBChart"
import USDCoinChart from "../../components/USDCoinChart/USDCoinChart"
import XRPChart from "../../components/XRPChart/XRPChart"
import SolanaChart from "../../components/SolanaChart/SolanaChart"
import CardanoChart from "../../components/CardanoChart/CardanoChart"
import TerraChart from "../../components/TerraChart/TerraChart"
import TerraUSDChart from "../../components/TerraUSDChart/TerraUSDChart"
import './HomePage.css'


const HomePage = () => {

    return (

        <Container>
            <h1 className="title">Cryptocurrency Data</h1>
            <Row>
                <Col>
                    <GlobalTen />
                    <hr />
                    <BitcoinChart />
                    <hr />
                    <EthereumChart />
                    <hr />
                    <TetherChart />
                    <hr />
                    <BNBChart />
                    <hr />
                    <USDCoinChart />
                    <hr />
                    <XRPChart />
                    <hr />
                    <SolanaChart />
                    <hr />
                    <CardanoChart />
                    <hr />
                    <TerraChart />
                    <hr />
                    <TerraUSDChart />
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage