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
import * as serviceWorker from '../../serviceWorker';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            collapseOpen: false
        };
    }

    toggleNavbar() {
        this.setState({
            ...this.state,
            ...{
                collapseOpen: !this.state.collapseOpen
            }
        });
    }

    render() {
        return <Navbar type="dark" theme="primary" expand="md" sticky="top">
            <NavbarBrand href="" onClick={(e) => {
                e.preventDefault();
                serviceWorker.update();
                window.location.reload();
            }}><FontAwesomeIcon icon={faShoppingCart} /> Lightainer Marketplace</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} />

            <Collapse open={this.state.collapseOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink active href="/marketplace">
                            <FontAwesomeIcon icon={faHome} /> Home
              </NavLink>
                    </NavItem>
                    <NavItem>
                        <AddPacketModal marketplaceApi={this.props.marketplaceApi} />
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