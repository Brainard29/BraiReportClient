import { CButton, CFormInput, CCol, CRow, CCarousel, CCarouselItem} from "@coreui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Document, Page, pdfjs } from "react-pdf";
import "./dashboard.css";

const Dashboard = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfUrl, setPdfUrl] = useState(null);
  const role = localStorage.getItem("role");

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });

  useEffect(() => {
    axios.get("https://securityreport.herokuapp.com/getPdf").then((response) => {
      const pdfFiles = response.data;
      if (pdfFiles.length > 0) {
        const firstPdfUrl = pdfFiles[0].name;
        setPdfUrl(firstPdfUrl);
        localStorage.setItem("pdfUrl", firstPdfUrl);
      }
    });
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleUpdatePdf = () => {
    const fileInput = document.querySelector(".input-pdf-file");
    const selectedFile = fileInput.files[0];
    const selectedFileModify = selectedFile.name.replace(/\s+/g, "%20");
    setPdfUrl(selectedFileModify);
    const formData = new FormData();
    formData.append("name", selectedFile);
    axios({
      method: "patch",
      url: "https://securityreport.herokuapp.com/updatePdf/1",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(() => {
        console.log("PDF updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {role !== "user" && (
        <CRow>
          <CCol>
          <CFormInput type="file" className="input-pdf-file" />
          </CCol>
          <CCol>
          <CButton color="primary" onClick={handleUpdatePdf} color='info' className="update-pdf">
            Update
          </CButton>
          </CCol>
        </CRow>
      )}
      {pdfUrl && (
        <CCarousel controls indicators dark>
          {Array.from(new Array(numPages), (_, index) => (
            <CCarouselItem key={`page_${index + 1}`}>
              <Document
                file={`https://securityreport.herokuapp.com/UploadPDF/${pdfUrl}`}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page
                  pageNumber={index + 1}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="pages"
                />
              </Document>
            </CCarouselItem>
          ))}
        </CCarousel>
      )}
    </div>
  );
};

export default Dashboard;