import { Container, Row, Col, Button, ProgressBar,Alert } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";

function UploadApk() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [progress, setProgress] = useState();
   const [error, setError] = useState();

   const submitHandler = e => {
    e.preventDefault() //prevent the form from submitting
    let formData = new FormData()

    formData.append("file", selectedFiles[0])
    //Clear the error message
    setError("")
    axiosInstance
      .post("/upload_file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: data => {
          //Set the progress value to show the progress bar
          setProgress(Math.round((100 * data.loaded) / data.total))
        },
      })
      .catch(error => {
        const { code } = error?.response?.data
        switch (code) {
          case "FILE_MISSING":
            setError("Please select a file before uploading!")
            break
          default:
            setError("Sorry! Something went wrong. Please try again later")
            break
        }
      })
  };
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row className="back">
        <Col md={4} xs={2}></Col>
        <Col md={4} xs={8} className="upload-con">
          <Form
            action="http://localhost:8081/upload_file"
            method="post"
            encType="multipart/form-data"
            onSubmit={submitHandler}
          >
            <div className="mb-5 d-flex justify-content-center align-items-center w-100">
              <img src="upload.png" height={250} width={250} />
            </div>
            <Form.Group controlId="formFileLg" className="mb-5">
              <Form.Control
                type="file"
                size="lg"
                onChange={(e) => {
                  setSelectedFiles(e.target.files);
                }}
              />
            </Form.Group>
            <Form.Group className="d-flex justify-content-center align-items-center w-100 ">
              <Button
                variant="outline-light"
                type="submit"
                size="lg"
                className="p-3 w-50 font-weight-bolder letter-spacing-10 m-10"
              >
                Upload
              </Button>
            </Form.Group>
            {error && (
              <Alert variant="danger" className="m-4">
                {error}
              </Alert>
            )}
            {!error && progress && (
              <ProgressBar
                animated
                variant="dark"
                style={{ height: "35px" }}
                className="m-4 h-100"
                now={progress}
                label={`${progress}%`}
              />
            )}
          </Form>
        </Col>
        <Col md={4} xs={2}></Col>
      </Row>
    </Container>
  );
}

export default UploadApk;