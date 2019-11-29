import React from 'react';
import Packet from './Packet';


class PacketManager extends React.Component {
    constructor() {
        super();
        this.state = {
            packets: []
        }
        this.getData();
    }

    async getData() {
        fetch('http://localhost:5000/packets').then(async (response) => {
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
            console.error(err);
        });
    }

    render() {
        return this.state.packets;
    }
}

export default PacketManager;