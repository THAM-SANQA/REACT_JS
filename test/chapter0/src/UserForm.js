// Import necessary dependencies
import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useParams } from 'react-router-dom';

// Define the UserForm component
class UserForm extends Component {
  title;
  id;

  constructor(props) {
      super(props);
      this.id = this.props.params.id;
      this.title = 'New User';
      this.state = {
          username: '',
          email: '',
      };
      if (this.id) {
          this.title = 'Edit User';
      }
  }

  componentDidMount() {
      if (this.id) {
          firebase.database().ref('/' + this.id)
              .on('value', snapshot => {
                  this.setState({
                      username: snapshot.val().username,
                      email: snapshot.val().email,
                  });
              });
      }
  }

  render() {
    const { username, email } = this.state;

    return (
      <div>
        <h1>{this.title}</h1>
        <Formik
          enableReinitialize={true}
          initialValues={{
          username: username || "", // Check if username is null
          email: email || "",       // Check if email is null
            password: "", // Add an empty password field
          }}
          validate={(values) => {
            let errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            } else if (values.email.length < 10) {
              errors.email = "Email address too short";
            }

            // Validate password if it's a required field
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 6) {
              errors.password = "Password too short";
            }

            // Validate username
            if (!values.username) {
              errors.username = "Required";
            } else if (values.username.length < 3) {
              errors.username = "Username too short";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                // actual submit logic... 
                if (this.id) {
                    firebase.database().ref('/' + this.id).update({
                        username: values.username,
                        email: values.email
                    }).then(() => window.location.href = ("/"));
                }
                else {
                    firebase.database().ref('/').push({
                        username: values.username,
                        email: values.email
                    }).then(() => window.location.href = ("/"));
                }

                setSubmitting(false);
            }, 400);
        }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="username" placeholder="Username" />
              <span style={{ color: "red", fontWeight: "bold" }}>
                <ErrorMessage name="username" component="div" />
                </span>
              <Field type="email" name="email" />
              <span style={{ color: "red", fontWeight: "bold" }}>
                <ErrorMessage name="email" component="div" />
              </span>
              <Field type="password" name="password" />
              <span style={{ color: "red", fontWeight: "bold" }}>
                <ErrorMessage name="password" component="div" />
              </span>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

// Export UserForm directly without the unnecessary wrapper
export default (props) => (
  < UserForm
      {...props}
      params={useParams()}
  />
);