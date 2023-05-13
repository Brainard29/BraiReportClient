import React from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CCol,
  CRow,
  CImage,
  CCard,
  CCardBody,
  CFormInput
} from "@coreui/react";
import "./detailStyle.css";

const DetailReport = ({
  visible,
  setVisible,
  image,
  dates,
  times,
  shift,
  pic,
  site,
  jenisGiat,
  giat,
  lokasi,
  objek,
  jumlahKegiatan,
  temuan,
  jumlahTemuan,
  detailTemuan,
  tindakLanjut,
  kategoriTemuan,
  status,
  keterangan,
  latitude,
  longitude,
}) => {
  return (
    <CRow>
      <CButton onClick={() => setVisible(!visible)} className="report-option">
        Detail Report
      </CButton>
      <CModal
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
        scrollable
      >
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>Detail Report</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCard>
            <CCardBody>
              <CRow className="mb-2">
                <CImage
                  className="image-size mx-auto my-3 mb-3 border rounded"
                  src={image}
                />
              </CRow>
              <CRow className="mb-1 ms-0 title">General</CRow>
              <CRow className="mb-0">
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Date
                </CCol>
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Time
                </CCol>
              </CRow>
              <CRow className="mb-1">
                <CCol style={{ fontSize: "14px" }}>{dates}</CCol>
                <CCol style={{ fontSize: "14px" }}>{times}</CCol>
              </CRow>
              <CRow className="mb-1">
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Shift
                </CCol>
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  PIC
                </CCol>
              </CRow>
              <CRow className="mb-1">
                <CCol style={{fontSize: "14px"}}>{shift}</CCol>
                <CCol style={{fontSize: "14px"}}>{pic}</CCol>
              </CRow>
              <CRow className="mb-1">
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Site
                </CCol>
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Jenis Giat
                </CCol>
              </CRow>
              <CRow className="mb-1">
                <CCol style={{fontSize: "14px"}}>{site}</CCol>
                <CCol style={{fontSize: "14px"}}>{jenisGiat}</CCol>
              </CRow>
              <CRow className="mb-1">
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Giat
                </CCol>
              </CRow>
              <CRow className="mb-4">
                <CCol style={{fontSize: "14px"}}>{giat}</CCol>
              </CRow>
              <CRow className="mb-1 ms-0 title">Details</CRow>
              <CRow className="mb-1">
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Lokasi
                </CCol>
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Objek
                </CCol>
              </CRow>
              <CRow className="mb-1">
                <CCol style={{fontSize: "14px"}}>{lokasi}</CCol>
                <CCol style={{fontSize: "14px"}}>{objek}</CCol>
              </CRow>
              <CRow className="mb-1">
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Jumlah Kegiatan
                </CCol>
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Temuan
                </CCol>
              </CRow>
              <CRow className="mb-1">
                <CCol style={{fontSize: "14px"}}>{jumlahKegiatan}</CCol>
                <CCol style={{fontSize: "14px"}}>{temuan}</CCol>
              </CRow>
              <CRow className="mb-1">
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Jumlah Temuan
                </CCol>
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Detail Temuan
                </CCol>
              </CRow>
              <CRow className="mb-4">
                <CCol style={{fontSize: "14px"}}>{jumlahTemuan}</CCol>
                <CCol style={{fontSize: "14px"}}>{detailTemuan}</CCol>
              </CRow>
              <CRow className="mb-1 ms-0 title">Action</CRow>
              <CRow className="mb-1">
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Tindak Lanjut
                </CCol>
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Kategori Temuan
                </CCol>
              </CRow>
              <CRow className="mb-1">
                <CCol style={{fontSize: "14px"}}>{tindakLanjut}</CCol>
                <CCol style={{fontSize: "14px"}}>{kategoriTemuan}</CCol>
              </CRow>
              <CRow className="mb-1">
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Status
                </CCol>
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Keterangan
                </CCol>
              </CRow>
              <CRow className="mb-1">
                <CCol style={{fontSize: "14px"}}>{status}</CCol>
                <CCol style={{fontSize: "14px"}}>{keterangan}</CCol>
              </CRow>
              <CRow className="mb-1">
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Latitude
                </CCol>
                <CCol
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Longitude
                </CCol>
              </CRow>
              <CRow className="mb-1">
                <CCol style={{ fontSize: "14px" }}>{latitude}</CCol>
                <CCol style={{ fontSize: "14px" }}>{longitude}</CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="danger"
            variant="outline"
            onClick={() => setVisible(false)}
          >
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </CRow>
  );
};

export default DetailReport;
