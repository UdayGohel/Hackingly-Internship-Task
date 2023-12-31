import * as Yup from "yup";

export const validationSchema = Yup.object({
  url: Yup.string()
    .required("URL is required")
    .url("Invalid URL format")
    .matches(
      /^(https?:\/\/)?([a-z]+\.)*wikipedia\.org\/wiki\/.+/,
      "Only Wikipedia URLs are allowed"
    ),
});
