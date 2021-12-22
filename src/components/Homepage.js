import React from "react";
import { Typography, Row, Col, Statistic } from 'antd';
import { useGetCryptoStatsQuery,useGetCryptosQuery } from '../services/cryptoApi';
import { Link } from "react-router-dom";
import millify from "millify"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import myLoader from "./myLoader";
const { Title } = Typography;
export default function Homepage() {

    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if (isFetching) 
    {
        console.log("Fetching......")
        return(<div className="loader"> 
        <Loader
              type="Puff"
              color="#00BFFF"
              height={300}
          
              width={300}/></div>)
    }
   else{

    console.log(globalStats)
   }

    return (
        <>
       
        <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
         <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col> 
         <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
       
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col> 
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified></News>
    </>
    )
}