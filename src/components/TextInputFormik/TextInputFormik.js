import React from "react";
import { useField } from "formik";
import { FormGroup, Label, Input, FormFeedback, FormText } from "reactstrap";

const TextInputFormik = ({ label, example, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormGroup>
      <Label >{label}</Label>
      <Input
        {...field}
        {...props}
        invalid={meta.error}
        valid={meta.error ? false : field.value}
      />
      <FormFeedback
        invalid={meta.error}
        valid={meta.error ? false : field.value}
      >
        {meta.error}
      </FormFeedback>
      {example ? <FormText>{example}</FormText> : null}
    </FormGroup>
  );
};

export default TextInputFormik;