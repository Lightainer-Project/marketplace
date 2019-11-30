import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import MarketplaceApi from './MarketplaceAPI';
import NavBar from './components/Navbar/Navbar';
import PacketManager from './components/Packet/PacketManager';

const MarketplaceAPI = new MarketplaceApi();

function App() {
  MarketplaceAPI.getData();
  return (
    <>
      <NavBar marketplaceApi={ MarketplaceAPI }/>
      <PacketManager marketplaceApi={ MarketplaceAPI }/>
    </>
  );
}

export default App;
