import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  url: Yup.string().required("URL is required").url("Invalid URL format"), // Built-in URL validation
});
const MainPage = () => {
  const [data, setData] = useState([]);
  const submitHandler = (values, { setSubmitting }) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      url: values.url,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8000/getphilosophypage", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.log("error", error));

    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={{ url: "" }}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {({ isSubmitting, errors }) => (
          <Form className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
            <h1 className="text-2xl font-semibold mb-6 text-center">
              Add Wikipedia URL
            </h1>
            <div className="mb-4">
              <label
                htmlFor="url"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                URL
              </label>
              <Field
                type="url"
                name="url"
                id="url"
                className="w-full p-2 border rounded"
                placeholder="Enter URL"
              />
              <ErrorMessage
                name="url"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-500 text-white p-2 rounded ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>

      <div className="flex items-center justify-center">
        {data && data.path && (
          <div className="mt-4 p-4 bg-white shadow-md rounded text-center">
            <h2 className="text-lg font-semibold mb-2">
              Total Paths: {data.path.length}
            </h2>
            {/* <h2 className="text-lg font-semibold mb-2">Paths:</h2> */}
            <div>
              {data.path.map((item, index) => (
                <a
                  key={index}
                  href={item} // Assuming `item` contains the URL
                  className="text-blue-500 hover:underline cursor-pointer block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainPage;
