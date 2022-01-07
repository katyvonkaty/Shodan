import React from "react";
import { InputGroup, Form, FormControl, Button } from "react-bootstrap";

class SearchBar extends React.Component {
  state = { text: "" };

  onInputChange = (event) => {
    this.setState({ text: event.target.value })
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.text)
  };

  render() {
    return (
      <Form style={{marginTop:"40px"}} onSubmit={this.onFormSubmit}>
      <InputGroup size="lg" className="mb-3"
        onChange={this.onInputChange}>
        <FormControl
          placeholder="i.e. 104.72.157.49"
          value={this.state.text}
          onSubmit={this.onFormSubmit}
          onChange={this.onInputChange}
        />
        <Button variant="outline" onSubmit={this.onFormSubmit}
        type="submit" active style={{backgroundColor:"#7AACE4", color:"white", outline:"#7AACE4"}}>
        Button </Button>



      </InputGroup>
      </Form>
    );
  }
}

export default SearchBar;
