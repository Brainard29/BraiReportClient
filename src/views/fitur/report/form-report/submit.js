import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CRow,
  CCardFooter,
  CProgress,
  CProgressBar,
  CImage,
} from "@coreui/react";
import React from "react";
import SubmitIcon from "src/assets/images/submit-icon.png";
import "./submit.css";

function FormStep3({ prevStep, handleSubmit }) {
  return (
    <div className="container">
      <CRow className="justify-content-center">
        <CCol md="6">
          <CCard>
            <CCardHeader
              style={{ backgroundColor: "white", borderRadius: "1rem" }}
            >
              <CProgress
                className="mt-3 mb-3"
                style={{ padding: "6px", width: "80%" }}
              >
                <CProgressBar
                  color="info"
                  variant="striped"
                  animated
                  value={100}
                >
                  100%
                </CProgressBar>
              </CProgress>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <CRow>
                  <div className="text-center mt-5">
                    <CImage
                      align="center"
                      rounded
                      src={SubmitIcon}
                      width={90}
                      height={90}
                    />
                  </div>
                </CRow>
                <CRow>
                  <p className="text-submit">Submit Report</p>
                </CRow>
                <CRow>
                  <p className="text-makesure">
                    Make sure you have filled out the report correctly and
                    factually.
                  </p>
                </CRow>
                <CRow>
                  <CButton
                    type="submit"
                    className="button-submit"
                    color="primary"
                  >
                    Submit
                  </CButton>
                </CRow>
              </CForm>
            </CCardBody>
            <CCardFooter
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <CButton onClick={prevStep} variant="outline">
                Previous
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
}

export default FormStep3;
