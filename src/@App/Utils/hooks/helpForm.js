import { useState } from "react";

export default function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  return [
    fields,
    function (event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value,
      });
    },
    errors,
  ];
}
