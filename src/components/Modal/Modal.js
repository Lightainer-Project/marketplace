import React from "react";
import { NavLink, Modal, ModalBody, ModalHeader, Form, FormGroup, FormInput, FormTextarea, Button } from "shards-react";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class AddPacketModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const { open } = this.state;
        return (
            <>
                <NavLink active onClick={this.toggle} href="#">
                    <FontAwesomeIcon icon={faPlusSquare} /> Add Packet
        </NavLink>
                <Modal open={open} toggle={this.toggle}>
                    <ModalHeader><span role="img" aria-label="Packet">📦</span> Add a Packet</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <label htmlFor="#name">Name</label>
                                <FormInput id="#name" placeholder="Packet Name" />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#version">Version</label>
                                <FormInput id="#version" placeholder="1.0.0" />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#description">Description</label>
                                <FormTextarea id="#description" placeholder="Packet Description Text" />
                            </FormGroup>
                            <Button type="submit"><FontAwesomeIcon icon={faPlusSquare} /> Add Packet</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}