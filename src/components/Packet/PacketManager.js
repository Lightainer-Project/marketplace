import React from 'react';
import Packet from './Packet';
import { Container } from 'shards-react';

class Error extends React.Component {
    render() {
        return <div>Something went wrong with Loading the Packets.</div>
    }
}

class PacketManager extends React.Component {
    constructor() {
        super();
        this.state = {
            packets: [<div className="spinner-border" role="status" key="pm_spinner">
            <span className="sr-only">Loading...</span>
          </div>]
        }
        this.getData();
    }

    async getData() {
        fetch('https://lightainer-api.frozencloud.de').then(async (response) => {
            let packets = [];
            for (const packet of await response.json()) {
                packets.push(<Packet
                    key={ packet._id }
                    id={ packet._id }
                    name={ packet.name }
                    version={ packet.version }
                    author={ packet.author }
                    description={ packet.description }
                />)
            }
            this.setState({
                packets: packets
            });
        }).catch((err) => {
            console.error(err.message);
            this.setState({
                packets: <Error/>
            });
        });
    }

    render() {
        return <Container className="d-flex flex-wrap justify-content-center mt-4">{ this.state.packets }</Container>
    }
}

export default PacketManager;