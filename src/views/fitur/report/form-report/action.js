import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CFormLabel,
  CFormText,
  CFormTextarea,
  CRow,
  CCardFooter,
  CProgress,
  CProgressBar
} from "@coreui/react";
import "./action.css";

function Action({ prevStep, nextStep, handleChange, values }) {
  const [tindakLanjut, setTindakLanjut] = useState(values.tindak_lanjut || "");
  const [kategoriTemuan, setKategoriTemuan] = useState(values.kategori_temuan || "");
  const [status, setStatus] = useState(values.status || "Open");
  const [keterangan, setKeterangan] = useState(values.keterangan || "");
  const [image, setImage] = useState(values.image || "");
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange("tindak_lanjut", tindakLanjut);
    handleChange("kategori_temuan", kategoriTemuan);
    handleChange("status", status);
    handleChange("keterangan", keterangan);
    handleChange("image", image);
    handleChange("latitude", location.coordinates.lat);
    handleChange("longitude", location.coordinates.lng);
    nextStep();
  };

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

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
                  className="mt-3 mb-3"
                  style={{ padding: "6px", width: "80%" }}
                >
                  <CProgressBar
                    color="info"
                    variant="striped"
                    animated
                    value={66}
                  >
                    66%
                  </CProgressBar>
                </CProgress>
                <div className="report-section-title">Action</div>
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
                        Tindak Lanjut
                      </CFormLabel>
                      <CFormInput
                        type="text"
                        name="tindak_lanjut"
                        placeholder="Tindak Lanjut"
                        value={tindakLanjut}
                        onChange={(e) => setTindakLanjut(e.target.value)}
                        feedbackValid="Sesuai!"
                        feedbackInvalid="Masukkan Tindak Lanjut"
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
                        Kategori Temuan
                      </CFormLabel>
                      <CFormSelect
                        name="kategori_temuan"
                        value={kategoriTemuan}
                        onChange={(e) => setKategoriTemuan(e.target.value)}
                        aria-describedby="validationCustom04Feedback"
                        feedbackValid="Sesuai!"
                        feedbackInvalid="Masukkan Kategori Temuan"
                        required
                        className="form-select-layout"
                      >
                        <option value="">Pilih Kategori Temuan...</option>
                        <option value="Merah">Merah</option>
                        <option value="Kuning">Kuning</option>
                        <option value="Hijau">Hijau</option>
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
                        Status
                      </CFormLabel>
                      <CFormSelect
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        disabled
                        readOnly
                        className="form-select-layout"
                      >
                        <option>Open</option>
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
                        Keterangan
                      </CFormLabel>
                      <CFormTextarea
                        type="text"
                        name="keterangan"
                        placeholder="Keterangan"
                        value={keterangan}
                        onChange={(e) => setKeterangan(e.target.value)}
                        feedbackValid="Sesuai!"
                        feedbackInvalid="Masukkan Keterangan (jika tidak ada masukkan TIDAK ADA)"
                        required
                        className="form-input-layout"
                      />
                    </div>
                  </CCol>
                </CRow>
                <CRow>
                    <div className="mb-4">
                      <CFormLabel
                        style={{
                          fontSize: "15px",
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "bold",
                          marginLeft: "10px",
                        }}
                      >
                        Bukti Kegiatan
                      </CFormLabel>
                      <CFormInput
                        type="file"
                        name="image"
                        onChange={(e) => setImage(e.target.files[0])}
                        feedbackValid="Sesuai!"
                        feedbackInvalid="Masukkan Bukti Kegiatan"
                        required
                        className="form-image-layout"
                      />
                    </div>
                </CRow>
                <CRow>
                  <CCol>
                    <div className="mb-3">
                      <CFormLabel style={{
                          fontSize: "15px",
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "bold",
                        }}>
                        <CFormText className="form-text-layout" name='latitude' onChange={(e) => setLocation(e.target.value)} >
                          Latitude : {location.coordinates.lat}
                        </CFormText>
                      </CFormLabel>
                    </div>
                  </CCol>
                  <CCol>
                    <div className="mb-3">
                      <CFormLabel style={{
                          fontSize: "15px",
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "bold",
                        }} name='longitude'>
                        <CFormText className="form-text-layout" name='longitude' onChange={(e) => setLocation(e.target.value)} >
                          Longitude : {location.coordinates.lng}
                        </CFormText>
                      </CFormLabel>
                    </div>
                  </CCol>
                </CRow>
              </CCardBody>
              <CCardFooter style={{ display: 'flex', justifyContent: 'space-between' }}>
                <CButton onClick={prevStep} variant='outline'>Previous</CButton>
                <CButton type="submit">Next</CButton>
              </CCardFooter>
            </CCard>
          </CForm>
        </CCol>
      </CRow>
    </div>
  );
}

export default Action;
