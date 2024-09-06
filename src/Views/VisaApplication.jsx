import React from "react";
import NavbarType2 from "../Components/NavbarType2";
import FooterType2 from "../Components/FooterType2";
import { Field, Formik, Form } from "formik";

function VisaApplication() {
  return (
    <div className="bg-backgroundImage">
      <NavbarType2 />

      <section className="mt-16">
        <h1>Visa Application</h1>

        <Formik
          initialValues={{
            honorific: "",
            name: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2)); // Alert the form values on submission
          }}
        >
          {({ values }) => (
            <Form>
              <div role="group" aria-labelledby="honorifics">
                <label>
                  <Field type="radio" name="honorific" value="Mr" />
                  Mr
                </label>
                <label>
                  <Field type="radio" name="honorific" value="Mrs" />
                  Mrs
                </label>
                <label>
                  <Field type="radio" name="honorific" value="Miss" />
                  Miss
                </label>
              </div>
              <div>
                <label>
                  Name <Field name="name" placeholder="First Name" />
                </label>
              </div>

              <button
                type="submit"
                className="mt-4 p-2 bg-green-500 text-white"
              >
                next
              </button>
            </Form>
          )}
        </Formik>
      </section>

      <FooterType2 />
    </div>
  );
}

export default VisaApplication;
