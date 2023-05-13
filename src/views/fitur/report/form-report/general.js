import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormSelect,
  CFormLabel,
  CRow,
  CCardFooter,
  CProgress,
  CProgressBar,
} from "@coreui/react";
import "./general.css";

function General({ nextStep, handleChange, values }) {
  const [date, setCurrentDate] = useState(new Date());
  const [valueDate, setDate] = useState(values.dates || "");
  const [valueTime, setTime] = useState(values.times || "");
  const [shift, setShift] = useState(values.shift || "");
  const [site, setSite] = useState(values.site || "");
  const [pic, setPic] = useState(values.pic || "");
  const [jenisGiat, setJenisGiat] = useState(values.jenis_giat || "");
  const [giat, setGiat] = useState(values.giat || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange("dates", valueDate);
    handleChange("times", valueTime);
    handleChange("shift", shift);
    handleChange("site", site);
    handleChange("pic", pic);
    handleChange("jenis_giat", jenisGiat);
    handleChange("giat", giat);
    nextStep();
  };

  //Get Current Date and Time
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const dateFormatted = format(currentDate, "dd-MMMM-yyyy");
      const timeFormatted = format(currentDate, "HH:mm");

      setDate(dateFormatted);
      setTime(timeFormatted);
      setCurrentDate(currentDate);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container">
      <CRow className="justify-content-center">
        <CCol md="6">
          <CForm onSubmit={handleSubmit}>
            <CCard style={{ borderRadius: '1rem' }}>
              <CCardHeader style={{ backgroundColor: "white", borderRadius: '1rem' }}>
                <CProgress
                  //value={progress}
                  className="mt-3 mb-3"
                  style={{ padding: "6px", width: "80%" }}
                >
                  <CProgressBar
                    color="info"
                    variant="striped"
                    animated
                    value={0}
                  >
                    0%
                  </CProgressBar>
                </CProgress>
                <div className="report-section-title">General</div>
              </CCardHeader>
              <CCardBody>
                {/* <CForm onSubmit={handleSubmit}> */}
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
                        Datetime
                      </CFormLabel>
                      <DatePicker
                        name="dates"
                        value={valueDate}
                        onChange={(e) => setDate(e.target.value)}
                        disabled
                        readOnly
                        className="datetime-layout"
                      />
                      <DatePicker
                        name="times"
                        value={valueTime}
                        onChange={(e) => setTime(e.target.value)}
                        disabled
                        readOnly
                        className="datetime-layout"
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
                        Shift
                      </CFormLabel>
                      <CFormSelect
                        name="shift"
                        value={shift}
                        onChange={(e) => setShift(e.target.value)}
                        aria-describedby="validationCustom04Feedback"
                        feedbackValid="Sesuai!"
                        feedbackInvalid="Masukkan Shift"
                        required
                        className="form-select-layout"
                      >
                        <option value="">Pilih Shift...</option>
                        <option value="Shift 1">Shift 1</option>
                        <option value="Shift 2">Shift 2</option>
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
                        Site
                      </CFormLabel>
                      <CFormSelect
                        name="site"
                        value={site}
                        onChange={(e) => setSite(e.target.value)}
                        aria-describedby="validationCustom04Feedback"
                        feedbackValid="Sesuai!"
                        feedbackInvalid="Masukkan Site"
                        required
                        className="form-select-layout"
                      >
                        <option value="">Pilih Site...</option>
                        <option value="BMO 1">BMO 1</option>
                        <option value="BMO 2">BMO 2</option>
                        <option value="GMO">GMO</option>
                        <option value="HO">HO</option>
                        <option value="LMO">LMO</option>
                        <option value="PMO">PMO</option>
                        <option value="SMO">SMO</option>
                        <option value="SUARAN">SUARAN</option>
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
                        PIC
                      </CFormLabel>
                      <CFormSelect
                        name="pic"
                        value={pic}
                        onChange={(e) => setPic(e.target.value)}
                        aria-describedby="validationCustom04Feedback"
                        feedbackValid="Sesuai!"
                        feedbackInvalid="Masukkan PIC"
                        required
                        className="form-select-layout"
                      >
                        <option value="">Pilih PIC...</option>
                        <option value="RONI">RONI</option>
                        <option value="SUKENI">SUKENI</option>
                        <option value="SULAIMAN">SULAIMAN</option>
                        <option value="SUPRI">SUPRI</option>
                        <option value="TARMUTTI">TARMUTTI</option>
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
                        Jenis Giat
                      </CFormLabel>
                      <CFormSelect
                        name="jenis_giat"
                        value={jenisGiat}
                        onChange={(e) => setJenisGiat(e.target.value)}
                        aria-describedby="validationCustom04Feedback"
                        feedbackValid="Sesuai!"
                        feedbackInvalid="Masukkan Jenis Giat"
                        required
                        className="form-select-layout"
                      >
                        <option value="">Pilih Jenis Giat...</option>
                        <option value="Patroli">Patroli</option>
                        <option value="Pemeriksaan">Pemeriksaan</option>
                        <option value="Pengawalan">Pengawalan</option>
                        <option value="Situasi">Situasi</option>
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
                        Giat
                      </CFormLabel>
                      <CFormSelect
                        name="giat"
                        value={giat}
                        onChange={(e) => setGiat(e.target.value)}
                        aria-describedby="validationCustom04Feedback"
                        feedbackValid="Sesuai!"
                        feedbackInvalid="Masukkan Giat"
                        required
                        className="form-select-layout"
                      >
                        <option value="">Pilih Giat...</option>
                        <option value="Patroli Aset">Patroli Aset</option>
                        <option value="Patroli Komunikasi">
                          Patroli Komunikasi
                        </option>
                        <option value="Patroli PIT dan Disposal">
                          Patroli PIT dan Disposal
                        </option>
                        <option value="Patroli WMP dan Void">
                          Patroli WMP dan Void
                        </option>
                        <option value="Pemeriksaan Barang">
                          Pemeriksaan Barang
                        </option>
                        <option value="Pemeriksaan Helm">
                          Pemeriksaan Helm
                        </option>
                        <option value="Pemeriksaan SID">Pemeriksaan SID</option>
                        <option value="Pengawalan Warga">
                          Pengawalan Warga
                        </option>
                        <option value="Situasi Menonjol">
                          Situasi Menonjol
                        </option>
                      </CFormSelect>
                    </div>
                  </CCol>
                </CRow>
              </CCardBody>
              <CCardFooter style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <CButton type="submit">Next</CButton>
              </CCardFooter>
            </CCard>
          </CForm>
        </CCol>
      </CRow>
    </div>
  );
}

export default General;
