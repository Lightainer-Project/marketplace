import React from 'react';
import { EventEmitter } from "events";
import Packet from './components/Packet/Packet';
import Error from './components/Error';
class MarketplaceAPI {

    constructor() {
        this.eventHandler = new EventEmitter();
    }

    async getData() {
        let packets = [];
        await fetch('https://lightainer-api.frozencloud.de').then(async (response) => {
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
        }).catch((err) => {
            console.error(err.message);
            packets.push(<Error message="Something went wrong with Loading the Packets."/>);
        });

        this.eventHandler.emit('packets', packets);
    }
}

export default MarketplaceAPI;