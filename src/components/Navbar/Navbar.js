import React from 'react';
import {
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
import { faSearch, faHome, faShoppingCart, faBoxes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddPacketModal from '../Modal/Modal';

class NavBar extends React.Component {
    render() {
        return <Navbar type="dark" theme="primary" expand="md">
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
                        <AddPacketModal />
                    </NavItem>
                    <NavItem>
                        <NavLink active href="#">
                            <FontAwesomeIcon icon={faBoxes} /> My Packets
              </NavLink>
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
    }
}

export default NavBar;