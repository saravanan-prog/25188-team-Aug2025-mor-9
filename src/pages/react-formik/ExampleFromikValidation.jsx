import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function ExampleFormikValidation() {
  const initalValue = {
    username: "",
    password: "",
    confirmPassword:""
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("UserName is Manditory")
      .email("User name is must be email format"),
    password: Yup.string()
      .required("Password is Manditory")
      .min(8, "Password field is minumum 8 character")
      .max(12, "Password maximum length is 12 character")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Must contain at least one special character"
      ),
    confirmPassword : Yup.string()
                  .required("ConfirmPassword is required")
                  .oneOf(([Yup.ref("password"),null]),"Your password not match atual password")

  });

  return (
    <div className="container">
      <div className="heading">
        <p className="h1 text-center text-primary">Example Register Form using Formik</p>
      </div>
      <div className="form-render">
        <Formik
          initialValues={initalValue}
          validationSchema={validationSchema}
          onSubmit={(formValues) => {
            console.log("formValues====>", formValues);
            //api-code
          }}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                name="username"
                id="username"
                className="form-control"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="text"
                name="password"
                id="password"
                className="form-control"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <Field
                type="text"
                name="confirmPassword"
                id="confirmPassword"
                className="form-control"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary mt-3 form-control"
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
