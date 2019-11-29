import React from 'react';
import {
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from "shards-react";
import { faSearch, faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PacketManager from './components/Packet/PacketManager';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import AddPacketModal from './components/Modal/Modal';

function App() {

  return (
    <>
      <Navbar type="dark" theme="primary" expand="md">
        <NavbarBrand href="#"><FontAwesomeIcon icon={faShoppingCart} /> Lightainer Marketplace</NavbarBrand>
        <NavbarToggler />

        <Collapse navbar>
          <Nav navbar>
            <NavItem>
              <NavLink active href="#">
                <FontAwesomeIcon icon={faHome} /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <AddPacketModal/>
            </NavItem>
          </Nav>

          <Nav navbar className="ml-auto">
            <InputGroup size="sm" seamless>
              <InputGroupAddon type="prepend">
                <InputGroupText>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroupText>
              </InputGroupAddon>
              <FormInput className="border-0" placeholder="Search..." />
            </InputGroup>
          </Nav>
        </Collapse>
      </Navbar>
      <Container className="d-flex flex-wrap justify-content-center mt-4">
        <PacketManager />
      </Container>
    </>
  );
}

export default App;
