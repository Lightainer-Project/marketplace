import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import PacketManager from './components/Packet/PacketManager';
import NavBar from './components/Navbar/Navbar';

function App() {

  return (
    <>
      <NavBar />
      <PacketManager />
    </>
  );
}

export default App;
