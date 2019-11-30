import React from "react";
import { NavLink, Modal, ModalBody, ModalHeader, Form, FormGroup, FormInput, FormTextarea, Button, FormFeedback } from "shards-react";
import { faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class AddPacketModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.toggle = this.toggle.bind(this);

        this.state = {
            name: '',
            version: '',
            description: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.id;

        this.setState({
            [name]: value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        let data = this.state;
        data.author = 'Marketplace';
        const response = await fetch('https://lightainer-api.frozencloud.de', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data)
          });
          console.log(await response.json());
          this.props.marketplaceApi.getData();
          this.setState({
            name: '',
            version: '',
            description: '',
            open: false
        });
    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    handleClose(event) {
        event.preventDefault();
        this.setState({
            name: '',
            version: '',
            description: '',
            open: false
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <label htmlFor="name">Name</label>
                                <FormInput id="name" placeholder="Packet Name" value={this.state.name} onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="version">Version</label>
                                <FormInput id="version" placeholder="1.0.0" value={this.state.version} onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="description">Description</label>
                                <FormTextarea id="description" placeholder="Packet Description Text" value={this.state.description} onChange={this.handleInputChange} />
                            </FormGroup>
                            <div className="d-flex justify-content-between">
                                <Button type="submit"><FontAwesomeIcon icon={faPlusSquare} /> Add Packet</Button>
                                <Button theme="secondary" onClick={ this.handleClose }><FontAwesomeIcon icon={faTrash} /> Cancel</Button>
                            </div>
                        </Form>
                        <FormFeedback />
                    </ModalBody>
                </Modal>
            </>
        );
    }
}