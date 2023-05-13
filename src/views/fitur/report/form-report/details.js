import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormSelect,
  CFormLabel,
  CFormInput,
  CRow,
  CCardFooter,
  CProgress,
  CProgressBar,
} from "@coreui/react";
import "./details.css";

function Details({ prevStep, nextStep, handleChange, values }) {
  const [lokasi, setLokasi] = useState(values.lokasi || "");
  const [objek, setObjek] = useState(values.objek || "");
  const [jumlahKegiatan, setJumlahKegiatan] = useState(
    values.jumlah_kegiatan || ""
  );
  const [temuan, setTemuan] = useState(values.temuan || "");
  const [jumlahTemuan, setJumlahTemuan] = useState(values.jumlah_temuan || "");
  const [detailTemuan, setDetailTemuan] = useState(values.detail_temuan || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange("lokasi", lokasi);
    handleChange("objek", objek);
    handleChange("jumlah_kegiatan", jumlahKegiatan);
    handleChange("temuan", temuan);
    handleChange("jumlah_temuan", jumlahTemuan);
    handleChange("detail_temuan", detailTemuan);
    nextStep();
  };

  return (
    <div className="container">
      <CRow className="justify-content-center">
        <CCol md="6">
          <CForm onSubmit={handleSubmit}>
            <CCard style={{ borderRadius: "1rem" }}>
              <CCardHeader
                style={{ backgroundColor: "white", borderRadius: "1rem" }}
              >
                <CProgress
                  //value={progress}
                  className="mt-3 mb-3"
                  style={{ padding: "6px", width: "80%" }}
                >
                  <CProgressBar
                    color="info"
                    variant="striped"
                    animated
                    value={33}
                  >
                    33%
                  </CProgressBar>
                </CProgress>
                <div className="report-section-title">Details</div>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol>
                    <div className="mb-3">
                      <CFormLabel
                        style={{
                          fontSize: "15px",
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "bold",
                          marginLeft: "10px",
                        }}
                      >
                        Lokasi
                      </CFormLabel>
                      <CFormInput
                        type="text"
                        name="lokasi"
                        placeholder="Lokasi"
                        value={lokasi}
                        onChange={(e) => setLokasi(e.target.value)}
                        feedbackValid="Sesuai!"
                        feedbackInvalid="Masukkan Lokasi"
                        required
                        className="form-input-layout"
                      />
                    </div>
                  </CCol>
                  <CCol>
                    <div className="mb-3">
                      <CFormLabel
                        style={{
                          fontSize: "15px",
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "bold",
                          marginLeft: "10px",
                        }}
                      >
                        Objek
                      </CFormLabel>
                      <CFormInput
                        type="text"
                        name="objek"
                        placeholder="Objek"
                        value={objek}
                        onChange={(e) => setObjek(e.target.value)}
                        feedbackValid="Sesuai!"
                        feedbackInvalid="Masukkan Objek"
                        required
                        className="form-input-layout"
                      />
                    </div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <div className="mb-3">
                      <CFormLabel
                        style={{
                          fontSize: "15px",
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "bold",
                          marginLeft: "10px",
                        }}
                      >
                        Jumlah Kegiatan
                      </CFormLabel>
                      <CFormSelect
                        name="jumlah_kegiatan"
                        value={jumlahKegiatan}
                        onChange={(e) => setJumlahKegiatan(e.target.value)}
                        aria-describedby="validationCustom04Feedback"
                        feedbackValid="Sesuai!"
                        feedbackInvalid="Masukkan Jumlah Kegiatan"
                        required
                        className="form-select-layout"
                      >
                        <option value="">Pilih Jumlah Kegiatan...</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </CFormSelect>
                    </div>
                  </CCol>
                  <CCol>
                    <div className="mb-3">
                      <CFormLabel
                        style={{
                          fontSize: "15px",
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "bold",
                          marginLeft: "10px",
                        }}
                      >
                        Temuan
                      </CFormLabel>
                      <CFormSelect
                        name="temuan"
                        value={temuan}
                        onChange={(e) => setTemuan(e.target.value)}
                        aria-describedby="validationCustom04Feedback"
                        feedbackValid="Sesuai"
                        feedbackInvalid="Masukkan Temuan"
                        required
                        className="form-select-layout"
                      >
                        <option value="">Pilih Temuan...</option>
                        <option value="Aman">Aman</option>
                        <option value="Kondisi Tidak Aman">
                          Kondisi Tidak Aman
                        </option>
                        <option value="Tindakan Tidak Aman">
                          Tindakan Tidak Aman
                        </option>
                      </CFormSelect>
                    </div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <div className="mb-3">
                      <CFormLabel
                        style={{
                          fontSize: "15px",
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "bold",
                          marginLeft: "10px",
                        }}
                      >
                        Jumlah Temuan
                      </CFormLabel>
                      <CFormSelect
                        name="jumlah_temuan"
                        value={jumlahTemuan}
                        onChange={(e) => setJumlahTemuan(e.target.value)}
                        aria-describedby="validationCustom04Feedback"
                        feedbackValid="Sesuai!"
                        feedbackInvalid="Masukkan Jumlah Temuan"
                        required
                        className="form-select-layout"
                      >
                        <option value="">Pilih Jumlah Temuan...</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </CFormSelect>
                    </div>
                  </CCol>
                  <CCol>
                    <div className="mb-3">
                      <CFormLabel
                        style={{
                          fontSize: "15px",
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "bold",
                          marginLeft: "10px",
                        }}
                      >
                        Detail Temuan
                      </CFormLabel>
                      <CFormInput
                        type="text"
                        name="detail_temuan"
                        placeholder="Detail Temuan"
                        value={detailTemuan}
                        onChange={(e) => setDetailTemuan(e.target.value)}
                        feedbackValid="Sesuai!"
                        feedbackInvalid="Masukkan Detail Temuan"
                        required
                        className="form-input-layout"
                      />
                    </div>
                  </CCol>
                </CRow>
              </CCardBody>
              <CCardFooter
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <CButton onClick={prevStep} color="primary" variant="outline">
                  Previous
                </CButton>
                <CButton type="submit">Next</CButton>
              </CCardFooter>
            </CCard>
          </CForm>
        </CCol>
      </CRow>
    </div>
  );
}

export default Details;
