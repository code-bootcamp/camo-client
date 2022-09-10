import { gql } from "@apollo/client";

export const UPLOAD_IMAGE = gql`
  mutation uploadImage($files: [Upload!]!) {
    uploadImage(files: $files)
  }
`;
