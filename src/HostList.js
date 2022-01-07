import React from "react";
import { Card, Accordion, ListGroup, ListGroupItem } from "react-bootstrap";

const HostList = ({ hosts }) => {
  if (hosts.length === 0) {
    return null
  }

  // {hosts.data[1].http.favicon.location ? 1 : "nope" }

  return (
    <Card style={{ width: "38rem" }}>

      <Card.Body>
        <Card.Title>Internet Service Provider: {hosts.isp}</Card.Title>
         <b> IP Address </b> {hosts.ip_str}
        <Card.Text><b> Last Update: </b> {hosts.last_update}</Card.Text>
        <Card.Text><b> IP: </b> {hosts.ip}</Card.Text>

          <Card.Text><b> Cert: </b> {hosts.data[1].ssl.cert.sig_alg}</Card.Text>
          <Card.Text> <b> Version: </b>{" "}
          {hosts.data[1].ssl.cipher.version} </Card.Text>
          <Card.Text><b> Issued </b>:{" "}
          {hosts.data[1].ssl.cert.issued.toLocaleString("en-GB", {
            timeZone: "UTC",
          })}
          </Card.Text>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <b> Handshake states: </b> {hosts.data[1].ssl.handshake_states.length}
            </Accordion.Header>
            <Accordion.Body>
              {hosts.data[1].ssl.handshake_states.map((x) => {
                return (
                  <ul>
                    {" "}
                    <li key={x[0]}> {x} </li>{" "}
                  </ul>
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <b> Ports Available: </b>
          {hosts.ports.map((x) => {
            return <li> {x} </li>;
          })}
        </ListGroupItem>

        <ListGroupItem> <b> Organization: </b> {hosts.org}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">
        <b>  Address: </b> {hosts.city}, {hosts.region_code}, {hosts.country_name}
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default HostList;
