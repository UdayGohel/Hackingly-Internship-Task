import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../schema";
const MainPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
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
        if (result.error) {
          setError(result.error);
        } else {
          setData(result);
        }
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

      <div className="flex items-center justify-center  bg-white">
        {error !== "" && <span className="text-red-600">{error}</span>}
        {data && data.path && (
          <div className="mt-4 p-6 bg-white shadow-md rounded-lg w-full max-w-xl overflow-x-auto">
            <h2 className="text-xl font-semibold mb-4">
              Total Paths: {data.path.length}
            </h2>
            <h2 className="text-xl font-semibold mb-4">Paths To Philosophy</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Path Number</th>
                  <th className="text-left">Path URL</th>
                </tr>
              </thead>
              <tbody>
                {data.path.map((item, index) => (
                  <tr key={index}>
                    <td className="border-b px-4 py-2">{index + 1}</td>
                    <td className="border-b px-4 py-2">
                      <a
                        href={item}
                        className="text-blue-500 hover:underline cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default MainPage;
