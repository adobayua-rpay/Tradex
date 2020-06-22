import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import styled, { css } from "styled-components";
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useState, useEffect } from 'react';


function App() {
  const GLOBAL_MEDIA_QUERIES = {
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
};
  return (
  
      <Container>
        <ImageColumnRow>
          <ImageColumn>
          <img src ="https://twitter.com/adoba/photo" />
<AdobaYua>Adoba Yua</AdobaYua>
            <Level1Trader>Level 1 Trader</Level1Trader>
            <Rect>
              <StockMarket>Stock Market</StockMarket>
            </Rect>
            <TradeRect>
              <Trade>Trade</Trade>
            </TradeRect>
            <Rect3>
              <Research>Research</Research>
            </Rect3>
            <Rect4>
              <Community>Community</Community>
            </Rect4>
            <Rect5>
              <Triggers>Triggers</Triggers>
            </Rect5>
            <Rect7>
              <Pods>Pods</Pods>
            </Rect7>
            <Rect15>
              <Challenges>Challenges</Challenges>
            </Rect15>
            <Rect18>
              <Settings>Settings</Settings>
            </Rect18>
          </ImageColumn>
          <LoremIpsumStackStackColumn>
            <LoremIpsumStackStack>
              <LoremIpsumStack>
                <LoremIpsum></LoremIpsum>
                <Rect6>
                  <Portfolio2>Portfolio</Portfolio2>
                  <Button
                  variant="contained"
                  style={{
                    height: 44,
                    width: 142,
                    marginTop: 217,
                    marginLeft: 394
                  }}
                />
                </Rect6>
              </LoremIpsumStack>
              <Portfolio>Portfolio</Portfolio>
            </LoremIpsumStackStack>
            <Rect12Row>
              <Rect12>
                <TopGainers>Top Gainers</TopGainers>
                <LoremIpsum3>Lorem Ipsum</LoremIpsum3>
                <LoremIpsum5>Lorem Ipsum</LoremIpsum5>
                <LoremIpsum6>Lorem Ipsum</LoremIpsum6>
                <LoremIpsum7>Lorem Ipsum</LoremIpsum7>
                <LoremIpsum8Stack>
                  <LoremIpsum8>Lorem Ipsum</LoremIpsum8>
                  <LoremIpsum9>Lorem Ipsum</LoremIpsum9>
                  <LoremIpsum10>Lorem Ipsum</LoremIpsum10>
                </LoremIpsum8Stack>
              </Rect12>
              <Rect13>
                <TopLosers>Top Losers</TopLosers>
                <LoremIpsum11>Lorem Ipsum</LoremIpsum11>
                <LoremIpsum12>Lorem Ipsum</LoremIpsum12>
                <LoremIpsum13>Lorem Ipsum</LoremIpsum13>
                <LoremIpsum14Stack>
                  <LoremIpsum14>Lorem Ipsum</LoremIpsum14>
                  <LoremIpsum15>Lorem Ipsum</LoremIpsum15>
                </LoremIpsum14Stack>
              </Rect13>
            </Rect12Row>
            <Rect16Row>
              <Rect16>
                <TopGainers2>Top Gainers Robinhood</TopGainers2>
              </Rect16>
              <Rect17>
                <TopLosersRobinhood>Top Losers Robinhood</TopLosersRobinhood>
              </Rect17>
            </Rect16Row>
          </LoremIpsumStackStackColumn>
          <Rect10Column>
            <Rect10>
              <Watchlist3>Watchlist</Watchlist3>
              <Button
                  variant="contained"
                  style={{
                    height: 44,
                    width: 142,
                    marginTop: 217,
                    marginLeft: 394
                  }}
                />
            </Rect10>
            <StockOfTheDay>Stock of the day.</StockOfTheDay>
            <Rect11>
            <Button
                  variant="contained"
                  style={{
                    height: 44,
                    width: 142,
                    marginTop: 217,
                    marginLeft: 394
                  }}
                />
              <NameRow>
                <Name>Name</Name>
                <Aapl>$AAPL</Aapl>
                <Price>Price</Price>
              </NameRow>
            </Rect11>
            <Rect14>
              <Alerts>Alerts</Alerts>
            </Rect14>
            <StockSentimemt>Stock Sentimemt</StockSentimemt>
            <Placeholder placeholder="placeholder"></Placeholder>
          </Rect10Column>
          <Rect8Column>
            <Rect8>
              <RecentTrades>Recent Trades</RecentTrades>
            </Rect8>
            <Rect9>
              <News>News</News>
            </Rect9>
            <OilPricesRow>
              <OilPrices>Oil Prices</OilPrices>
              <CurrentGdp>Current GDP</CurrentGdp>
            </OilPricesRow>
            <Price2Row>
              <Price2>Price</Price2>
              <Gdp>GDP</Gdp>
            </Price2Row>
          </Rect8Column>
          <RecentTrades2>Recent Trades</RecentTrades2>
        </ImageColumnRow>
      </Container>
    );
  }
  
  const Container = styled.div`
    display: flex;
    background-color: rgba(240,85);
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  `;
  
  const Image = styled.img`
    width: 132px;
    height: 100%;
    border-radius: 10px;
    object-fit: contain;
  `;
  
  const AdobaYua = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: rgba(251,245,245,1);
    margin-top: 17px;
    margin-left: 16px;
  `;
  
  const Level1Trader = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: rgba(249,243,243,1);
    margin-top: 11px;
    margin-left: 16px;
  `;
  
  const Rect = styled.div`
    width: 10vw;
    height: 5vh;
    background-color: #4fb051;
    margin-left: 0.25vw;
    border-radius: 10px;
    flex-direction: column;
    display: flex;
    margin-top: 1vh;
   
  `;
  
  const StockMarket = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 9px;
    margin-left: 16px;
  `;
  
  const TradeRect = styled.div`
  width: 10vw;
    height: 5vh;
    background-color: #4fb051;
    border-radius: 10px;
    flex-direction: column;
    display: flex;
    
    margin-left: 0.25vw;
    margin-top: 1vh;
  `;
  
  const Trade = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 9px;
    margin-left: 18px;
  `;
  
  const Rect3 = styled.div`
  //ResearchRect
  width: 10vw;
  height: 5vh;
    background-color: #4fb051;
    border-radius: 10px;
    flex-direction: column;
    display: flex;
    margin-top: 1vh;
    margin-left: 0.25vw;
  `;
  
  const Research = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 9px;
    margin-left: 18px;
  `;
  
  const Rect4 = styled.div`
  //CommunityRect
  width: 10vw;
  height: 5vh;
    background-color: #4fb051;
    border-radius: 10px;
    flex-direction: column;
    display: flex;
    margin-top: 1vh;
    margin-left: 0.25vw;
  `;
  
  const Community = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 10px;
    margin-left: 18px;
  `;
  
  const Rect5 = styled.div`
  //Triggers Rect
  width: 10vw;
  height: 5vh;
    background-color: #4fb051;
    border-radius: 10px;
    flex-direction: column;
    display: flex;
    margin-top: 1vh;
    margin-left: 0.25vw;
  `;
  
  const Triggers = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 9px;
    margin-left: 16px;
  `;
  
  const Rect7 = styled.div`
  //Pods Rect
  width: 10vw;
  height: 5vh;
    background-color: #4fb051;
    border-radius: 10px;
    border-radius: 10px;
    flex-direction: column;
    display: flex;
    margin-top: 1vh;
    margin-left: 0.25vw;
  `;
  
  const Pods = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 9px;
    margin-left: 20px;
  `;
  
  const Rect15 = styled.div`
  width: 10vw;
  height: 5vh;
  background-color: #4fb051;
  margin-left: 0.25vw;
    border-radius: 10px;
    flex-direction: column;
    display: flex;
    margin-top: 1vh;
    
  `;
  
  const Challenges = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 9px;
    margin-left: 18px;
  `;
  
  const Rect18 = styled.div`
  width: 10vw;
  height: 5vh;
  background-color: #4fb051;
  margin-left: 0.25vw;
    background-color: #E6E6E6;
    border-radius: 10px;
    flex-direction: column;
    display: flex;
    margin-top: 1vh;
  `;
  
  const Settings = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 9px;
    margin-left: 23px;
  `;
  
  const ImageColumn = styled.div`
    width: 179px;
    flex-direction: column;
    display: flex;
    margin-top: 13px;
    margin-bottom: 27px;
  `;
  
  const LoremIpsum = styled.span`
    font-family: Roboto;
    top: 157px;
    left: 105px;
    position: absolute;
    font-style: normal;
    font-weight: regular;
    color: #121212;
  `;
  
  const Rect6 = styled.div`
  //PortfolioRect
    top: 2vh;
    margin-left: 0vw;
    width: 45vw;
    height: 299px;
    position: absolute;
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(198,140,17,1) 100%);
    border-radius: 5px;
    flex-direction: column;
    display: flex;
  `;
  
  const Portfolio2 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: rgba(0,0,0,1);
    margin-top: 13px;
    margin-left: 13px;
  `;
  
  const LoremIpsumStack = styled.div`
    top: 0px;
    left: 0px;
    width: 557px;
    height: 299px;
    position: absolute;
  `;
  
  const Portfolio = styled.span`
    font-family: Roboto;
    top: 49px;
    left: 30px;
    position: absolute;
    font-style: normal;
    font-weight: regular;
    color: rgba(0,0,0,1);
  `;
  
  const LoremIpsumStackStack = styled.div`
    width: 557px;
    height: 299px;
    position: relative;
  `;
  
  const Rect12 = styled.div`
    width: 251px;
    height: 172px;
    background-color: rgba(59,140,72,1);
    border-radius: 5px;
    flex-direction: column;
    display: flex;
  `;
  
  const TopGainers = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 13px;
    margin-left: 13px;
  `;
  
  const LoremIpsum3 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 1px;
    margin-left: 21px;
  `;
  
  const LoremIpsum5 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 6px;
    margin-left: 21px;
  `;
  
  const LoremIpsum6 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 9px;
    margin-left: 16px;
  `;
  
  const LoremIpsum7 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-left: 16px;
  `;
  
  const LoremIpsum8 = styled.span`
    font-family: Roboto;
    top: 0px;
    left: 0px;
    position: absolute;
    font-style: normal;
    font-weight: regular;
    color: #121212;
  `;
  
  const LoremIpsum9 = styled.span`
    font-family: Roboto;
    top: 0px;
    left: 0px;
    position: absolute;
    font-style: normal;
    font-weight: regular;
    color: #121212;
  `;
  
  const LoremIpsum10 = styled.span`
    font-family: Roboto;
    top: 0px;
    left: 0px;
    position: absolute;
    font-style: normal;
    font-weight: regular;
    color: #121212;
  `;
  
  const LoremIpsum8Stack = styled.div`
    width: 82px;
    height: 19px;
    margin-top: 2px;
    margin-left: 16px;
    position: relative;
  `;
  
  const Rect13 = styled.div`
    width: 251px;
    height: 172px;
    background-color: rgba(216,55,55,1);
    border-radius: 5px;
    flex-direction: column;
    display: flex;
    margin-left: 27px;
  `;
  
  const TopLosers = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 13px;
    margin-left: 14px;
  `;
  
  const LoremIpsum11 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 3px;
    margin-left: 14px;
  `;
  
  const LoremIpsum12 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 4px;
    margin-left: 7px;
  `;
  
  const LoremIpsum13 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 9px;
    margin-left: 7px;
  `;
  
  const LoremIpsum14 = styled.span`
    font-family: Roboto;
    top: 0px;
    left: 0px;
    position: absolute;
    font-style: normal;
    font-weight: regular;
    color: #121212;
  `;
  
  const LoremIpsum15 = styled.span`
    font-family: Roboto;
    top: 18px;
    left: 0px;
    position: absolute;
    font-style: normal;
    font-weight: regular;
    color: #121212;
  `;
  
  const LoremIpsum14Stack = styled.div`
    width: 83px;
    height: 37px;
    margin-top: 2px;
    margin-left: 7px;
    position: relative;
  `;
  
  const Rect12Row = styled.div`
    height: 172px;
    flex-direction: row;
    display: flex;
    margin-top: 25px;
    margin-right: 28px;
  `;
  
  const Rect16 = styled.div`
    width: 251px;
    height: 172px;
    background-color: rgba(59,140,72,1);
    border-radius: 5px;
    flex-direction: column;
    display: flex;
  `;
  
  const TopGainers2 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 17px;
    margin-left: 13px;
  `;
  
  const Rect17 = styled.div`
    width: 251px;
    height: 172px;
    background-color: rgba(216,55,55,1);
    border-radius: 5px;
    flex-direction: column;
    display: flex;
    margin-left: 27px;
  `;
  
  const TopLosersRobinhood = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-top: 17px;
    margin-left: 14px;
  `;
  
  const Rect16Row = styled.div`
    height: 172px;
    flex-direction: row;
    display: flex;
    margin-top: 18px;
    margin-right: 28px;
  `;
  
  const LoremIpsumStackStackColumn = styled.div`
    width: 557px;
    flex-direction: column;
    display: flex;
    margin-left: 30px;
    margin-bottom: 18px;
  `;
  
  const Rect10 = styled.div`
  //Watchlist Rect
    width: 16vw;
    height: 30vh;
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(17,63,198,1) 100%);
margin-left:10vw;
    border-radius: 5px;
    flex-direction: column;
    display: absolute;
  `;
  
  const Watchlist3 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: rgba(247,239,239,1);
    margin-top: 13px;
    margin-left: 19px;
  `;
  
  const StockOfTheDay = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: rgba(253,247,247,1);
    margin-top: 7px;
    margin-left: 15px;
  `;
  
  const Rect11 = styled.div`
    width: 262px;
    height: 66px;
    background-color: #E6E6E6;
    border-radius: 5px;
    flex-direction: row;
    display: flex;
  `;
  
  const Name = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
  `;
  
  const Aapl = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-left: 18px;
  `;
  
  const Price = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: #121212;
    margin-left: 23px;
  `;
  
  const NameRow = styled.div`
    height: 19px;
    flex-direction: row;
    display: flex;
    flex: 1 1 0%;
    margin-right: 100px;
    margin-left: -245px;
    margin-top: 9px;
  `;
  
  const Rect14 = styled.div`
  //Alerts Rect
    width: 250px;
    height: 260px;
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(17,198,193,1) 100%);

    border-radius: 5px;
    flex-direction: column;
    display: flex;
    margin-top: 20px;
    margin-left: 11px;
  `;
  
  const Alerts = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: rgba(247,239,239,1);
    margin-top: 15px;
    margin-left: 18px;
  `;
  
  const StockSentimemt = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: rgba(247,239,239,1);
    margin-top: 25px;
    margin-left: 10px;
  `;
  
  const Placeholder = styled.input`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: rgba(247,243,243,1);
    height: 35px;
    width: 250px;
    border-width: 1px;
    border-color: rgba(255,255,255,1);
    border-radius: 5px;
    margin-top: 8px;
    margin-left: 10px;
    border-style: solid;
    background: transparent;
  `;
  
  const Rect10Column = styled.div`
    width: 262px;
    flex-direction: column;
    display: flex;
    margin-left: 21px;
  `;
  
  const Rect8 = styled.div`
  //Recent Trades Rect
    width: 16vw;
    height: 299px;
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(17,198,108,1) 100%);
margin-left:18vw;
    border-radius: 5px;
    flex-direction: column;
    display: flex;
  `;
  
  const RecentTrades = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: rgba(253,252,252,1);
    margin-top: 13px;
    margin-left: 17px;
  `;
  
  const Rect9 = styled.div`
  //News Rect
    width: 251px;
    height: 299px;
    background-color: rgba(43,42,42,1);
    border-radius: 5px;
    flex-direction: column;
    display: flex;
    margin-top: 20px;
  `;
  
  const News = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: rgba(247,244,244,1);
    margin-top: 18px;
    margin-left: 17px;
  `;
  
  const OilPrices = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: rgba(247,239,239,1);
  `;
  
  const CurrentGdp = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: rgba(247,239,239,1);
    margin-left: 37px;
  `;
  
  const OilPricesRow = styled.div`
    height: 19px;
    flex-direction: row;
    display: flex;
    margin-top: 33px;
    margin-right: 78px;
  `;
  
  const Price2 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: rgba(247,239,239,1);
  `;
  
  const Gdp = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: rgba(247,239,239,1);
    margin-left: 63px;
  `;
  
  const Price2Row = styled.div`
    height: 19px;
    flex-direction: row;
    display: flex;
    margin-top: 7px;
    margin-left: 1px;
    margin-right: 127px;
  `;
  
  const Rect8Column = styled.div`
    width: 251px;
    flex-direction: column;
    display: flex;
    margin-left: 18px;
    margin-bottom: 8px;
  `;
  
  const RecentTrades2 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: regular;
    color: rgba(10,2,2,1);
    margin-left: 625px;
    margin-top: 4px;
  `;
  
  const ImageColumnRow = styled.div`
    height: 704px;
    flex-direction: row;
    display: flex;
    margin-top: 25px;
    margin-left: 33px;
    margin-right: -699px;
  `;
  


export default App;
