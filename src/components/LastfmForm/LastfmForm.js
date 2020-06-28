import React from "react";
import { connect } from "react-redux";
import { Row, Col, Button } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInputFormik } from "../../components";
import { setArtTraForm } from "../../redux/actions";

const validationSchema = Yup.object().shape({
  country: Yup.string().required("Country is a required field").min(2),
  topnumber: Yup.number().required("Topnumber is a required field").min(1),
});

const LastfmForm = (props) => {
  return (
    <Formik
      initialValues={{
        country: "TURKEY",
        topnumber: "10",
      }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        props.setArtTraForm(data);
      }}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        setFieldValue,
        resetForm,
        setSubmitting
        /* and other goodies */
      }) => (
        <Form className="m-5">
          <h1>Highchart Challenge</h1>
          <Row>
            <Col md="6">
              <TextInputFormik
                name="country"
                type="text"
                label="Country Name :"
                placeholder="Enter Country Name"
                onChange={(e) => {
                  handleChange(e);
                  setSubmitting(false);
                }}
              />
            </Col>
            <Col md="6">
              <TextInputFormik
                name="topnumber"
                type="text"
                label="Top Number :"
                placeholder="Enter Top Number"
                onChange={(e) => {
                  handleChange(e);
                  setSubmitting(false);
                }}
              />
            </Col>
          </Row>
          <Button color="success" disabled={isSubmitting} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = {
  setArtTraForm,
};

export default connect(null, mapDispatchToProps)(LastfmForm);
