import React from 'react';
import { Container } from 'shards-react';

class PacketManager extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            packets: [<div className="spinner-border" role="status" key="pm_spinner">
            <span className="sr-only">Loading...</span>
          </div>]
        }

        this.props.marketplaceApi.eventHandler.on('packets', (packets) => {
            this.setState({
                packets: packets
            });
        })
    }

    render() {
        return <Container className="d-flex flex-wrap justify-content-center mt-3">{ this.state.packets }</Container>
    }
}

export default PacketManager;