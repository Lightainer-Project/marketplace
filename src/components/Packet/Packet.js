import React from 'react';
import { Card, CardTitle, Badge, CardBody, CardFooter, Button } from "shards-react";
import { faDownload, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Packet extends React.Component {
    render() {
        return <Card style={
            {
                maxWidth: "300px",
                minWidth: "300px",
                margin: "1rem"
            }
        }>
            <CardBody>
                <CardTitle>{this.props.name} <Badge theme="secondary">{this.props.version}</Badge></CardTitle>
                <p>{this.props.description}</p>
                <div className="d-flex justify-content-between">
                    <Button><FontAwesomeIcon icon={faDownload} /> Install</Button>
                    <Button theme="secondary" href={ "https://lightainer-api.frozencloud.de/packets?id=" + this.props.id } target="_blank"><FontAwesomeIcon icon={faInfoCircle} /> Details</Button>
                </div>

            </CardBody>
            <CardFooter>{this.props.author} • {new Date().toDateString()}</CardFooter>
        </Card>
    }
}

export default Packet;