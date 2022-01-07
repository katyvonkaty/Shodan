import React from "react";
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import HostList from "./HostList";
import shodan from "./apis/shodan";


class App extends React.Component {
  state = { hosts: [] };

  onTextSubmit = async (text) => {
    const response = await shodan.get(
      `/host/${text}?key=krAHHOYDpX2eCCGGOZXG7uqRbFcO22qH`
    );
    this.setState({ hosts: response.data })

    console.log(response.data.data);
  };

  render() {

    let testing = "";
    return (
      <Container style={{marginTop:"40px"}}>
        <Row>
          <Col xs={6}>
            {" "}
            <h1 style={{fontFamily: "Ubuntu", fontWeight:"800", color:"#7AACE4"}}> Modern Shodan </h1>
            <h3 style={{fontFamily: "Ubuntu", fontWeight:"300", marginBottom:"30px"}}> Quickly creep on interesting IP's </h3>
            <h5 style={{fontFamily: "Ubuntu", marginBotton:"30px"}}> Just enter the IP here, but please don't enter google, this doesn't work on google. Its a long and painful story, but if you enter google's IP, you will break it.</h5>

            <SearchBar style={{marginTop:"40px"}} onFormSubmit={this.onTextSubmit} />
            <HostList hosts={this.state.hosts}/>
      
          </Col>
          <Col xs={6}><img style={{width:"80%", marginLeft:"50px"}} src="https://cdn.dribbble.com/users/2064103/screenshots/17226024/media/4c2123a837229d709d2351cd04e7f121.png?compress=1&resize=1600x1200&vertical=top" /></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
