import React from 'react';
import Packet from './Packet';

class Error extends React.Component {
    render() {
        return <div>Something went wrong with Loading the Packets.</div>
    }
}

class PacketManager extends React.Component {
    constructor() {
        super();
        this.state = {
            packets: [<div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>]
        }
        this.getData();
    }

    async getData() {
        fetch('https://niki2k1.feste-ip.net:56232/packets').then(async (response) => {
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
        return this.state.packets;
    }
}

export default PacketManager;