import React from "react";
import { Form, FormGroup, Label, Row, Col, Button } from "reactstrap";

const LastfmForm = (props) => {
  const {
    countryInput,
    topnumberInput,
    setSubmitform,
    submitform
  } = props.inputs;

  const onSubmit = function (e) {
    submitform === 0 ? setSubmitform(1): console.log("boş") ;
    e.preventDefault();
  };
  return (
    <Form onSubmit={onSubmit} className="m-5">
      <Row>
        <Col md="6">
          <FormGroup>
            <Label>Country Name</Label>
            {countryInput}
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label>Top Number</Label>
            {topnumberInput}
          </FormGroup>
        </Col>
      </Row>
      <Button>Submit</Button>
    </Form>
  );
};

export default LastfmForm;
