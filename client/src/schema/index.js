import * as Yup from "yup";
// Yup Library use to check validation in form
// Match only string and wikipedia url nad URL format
export const validationSchema = Yup.object({
  url: Yup.string()
    .required("URL is required")
    .url("Invalid URL format")
    .matches(
      /^(https?:\/\/)?([a-z]+\.)*wikipedia\.org\/wiki\/.+/,
      "Only Wikipedia URLs are allowed"
    ),
});
