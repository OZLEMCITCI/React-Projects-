import React from 'react'
import "./Form.css"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"
import Textfield from "@me"

//bunu kullanmadim burdan da olmadi bende app.js den formu olusturmaya karar verdim

const info = () => (
  <div className="">
    <Form >
      <div className="row">
        <div className="col-4">
          <Field
            component={TextField}
        />
        </div>


      </div>

  </Form>
  </div>
  
);

const Form = (props) => {
    return (
      <Formik
        initialValues={{ city: "", country="" }}
        validationSchema={{city: Yup.string().required("Please provide a city name"),
          country: Yup.string().required("Please provide the country name"),
        }}
        component={}
        
      />
    )
}

export default Form
