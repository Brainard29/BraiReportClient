import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CCol,
  CRow,
  CCard,
  CCardBody,
  CImage,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CForm,
} from "@coreui/react";
import "./updateStyle.css";

const UpdateReport = ({
  visible,
  setVisible,
  selectedId,
  latitude,
  longitude,
  images,
  dates,
  waktu,
  setLaporan,
}) => {
  const [shift, setShift] = useState("");
  const [site, setSite] = useState("");
  const [pic, setPic] = useState("");
  const [jenisGiat, setJenisGiat] = useState("");
  const [giat, setGiat] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [objek, setObjek] = useState("");
  const [jumlahKegiatan, setJumlahKegiatan] = useState("");
  const [temuan, setTemuan] = useState("");
  const [jumlahTemuan, setJumlahTemuan] = useState("");
  const [detailTemuan, setDetailTemuan] = useState("");
  const [tindakLanjut, setTindakLanjut] = useState("");
  const [kategoriTemuan, setKategoriTemuan] = useState("");
  const [status, setStatus] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  // Get Report By ID
  useEffect(() => {
    getReportById();
  }, []);

  const getReportById = async () => {
    const response = await axios.get(
      `https://securityreport.herokuapp.com/reports/${selectedId}`
    );
    if (response.data) {
      setShift(response.data.shift);
      setSite(response.data.site);
      setPic(response.data.pic);
      setJenisGiat(response.data.jenis_giat);
      setGiat(response.data.giat);
      setLokasi(response.data.lokasi);
      setObjek(response.data.objek);
      setJumlahKegiatan(response.data.jumlah_kegiatan);
      setTemuan(response.data.temuan);
      setJumlahTemuan(response.data.jumlah_temuan);
      setDetailTemuan(response.data.detail_temuan);
      setTindakLanjut(response.data.tindak_lanjut);
      setKategoriTemuan(response.data.kategori_temuan);
      setStatus(response.data.status);
      setKeterangan(response.data.keterangan);
      setImage(response.data.image);
      setUrl(response.data.url);
    }
  };

  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  // Update Report
  const updatedReport = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("shift", shift);
      formData.append("site", site);
      formData.append("pic", pic);
      formData.append("jenis_giat", jenisGiat);
      formData.append("giat", giat);
      formData.append("lokasi", lokasi);
      formData.append("objek", objek);
      formData.append("jumlah_kegiatan", jumlahKegiatan);
      formData.append("temuan", temuan);
      formData.append("jumlah_temuan", jumlahTemuan);
      formData.append("detail_temuan", detailTemuan);
      formData.append("tindak_lanjut", tindakLanjut);
      formData.append("kategori_temuan", kategoriTemuan);
      formData.append("status", status);
      formData.append("keterangan", keterangan);
      formData.append("image", image);
      formData.append("url", url);

      const response = await axios.patch(
        `https://securityreport.herokuapp.com/reports/${selectedId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setVisible(false);
      //window.location.reload()
      navigate("/fitur/list-report");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CButton onClick={() => setVisible(!visible)} className="report-option">
        Update Report
      </CButton>
      <CModal
        alignment="center"
        scrollable
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>Update Report</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm validated={true} onSubmit={updatedReport}>
            <CCard>
              <CCardBody>
                <CRow>
                  <CImage
                    className="image-size mx-auto my-3 mb-3 border rounded"
                    src={images}
                  />
                </CRow>
                <CRow className="mb-1">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <CFormInput
                      type="file"
                      className="image-input"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                </CRow>
                <CRow className="mb-3">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    Update Bukti Kegiatan (opsional)!
                  </div>
                </CRow>
                <CRow className="mb-1 ms-0 title">General</CRow>
                <CRow className="mb-1">
                  <CCol
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    Date
                  </CCol>
                  <CCol
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    Time
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CCol style={{ fontSize: "14px" }}>{dates}</CCol>
                  <CCol style={{ fontSize: "14px" }}>{waktu}</CCol>
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
                <CRow className="mb-3">
                  <CCol>
                    <CFormSelect
                      className="desc2"
                      value={shift}
                      onChange={(e) => setShift(e.target.value)}
                      aria-describedby="validationCustom04Feedback"
                      feedbackInvalid="Masukkan Shift"
                      required
                    >
                      <option value={shift}>{shift}</option>
                      <option value="Shift 1">Shift 1</option>
                      <option value="Shift 2">Shift 2</option>
                    </CFormSelect>
                  </CCol>
                  <CCol>
                    <CFormSelect
                      className="desc2"
                      value={pic}
                      onChange={(e) => setPic(e.target.value)}
                      aria-describedby="validationCustom04Feedback"
                      feedbackInvalid="Masukkan PIC"
                      required
                    >
                      <option value={pic}>{pic}</option>
                      <option value="RONI">RONI</option>
                      <option value="SUKENI">SUKENI</option>
                      <option value="SULAIMAN">SULAIMAN</option>
                      <option value="SUPRI">SUPRI</option>
                      <option value="TARMUTTI">TARMUTTI</option>
                    </CFormSelect>
                  </CCol>
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
                <CRow className="mb-3">
                  <CCol>
                    <CFormSelect
                      className="desc2"
                      value={site}
                      onChange={(e) => setSite(e.target.value)}
                      aria-describedby="validationCustom04Feedback"
                      feedbackInvalid="Masukkan Site"
                      required
                    >
                      <option value={site}>{site}</option>
                      <option value="BMO 1">BMO 1</option>
                      <option value="BMO 2">BMO 2</option>
                      <option value="GMO">GMO</option>
                      <option value="HO">HO</option>
                      <option value="LMO">LMO</option>
                      <option value="PMO">PMO</option>
                      <option value="SMO">SMO</option>
                      <option value="SUARAN">SUARAN</option>
                    </CFormSelect>
                  </CCol>
                  <CCol>
                    <CFormSelect
                      className="desc2"
                      value={jenisGiat}
                      onChange={(e) => setJenisGiat(e.target.value)}
                      aria-describedby="validationCustom04Feedback"
                      feedbackInvalid="Masukkan Jenis Giat"
                      required
                    >
                      <option value={jenisGiat}>{jenisGiat}</option>
                      <option value="Patroli">Patroli</option>
                      <option value="Pemeriksaan">Pemeriksaan</option>
                      <option value="Pengawalan">Pengawalan</option>
                      <option value="Situasi">Situasi</option>
                    </CFormSelect>
                  </CCol>
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
                <CRow className="mb-3">
                  <CCol>
                    <CFormSelect
                      className="desc2-giat"
                      value={giat}
                      onChange={(e) => setGiat(e.target.value)}
                      aria-describedby="validationCustom04Feedback"
                      feedbackInvalid="Masukkan Giat"
                      required
                    >
                      <option value={giat}>{giat}</option>
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
                      <option value="Pemeriksaan Helm">Pemeriksaan Helm</option>
                      <option value="Pemeriksaan SID">Pemeriksaan SID</option>
                      <option value="Pengawalan Warga">Pengawalan Warga</option>
                      <option value="Situasi Menonjol">Situasi Menonjol</option>
                    </CFormSelect>
                  </CCol>
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
                <CRow className="mb-3">
                  <CCol>
                    <CFormTextarea
                      className="desc2"
                      type="text"
                      placeholder="Lokasi"
                      value={lokasi}
                      onChange={(e) => setLokasi(e.target.value)}
                      feedbackInvalid="Masukkan Lokasi"
                      required
                    />
                  </CCol>
                  <CCol>
                    <CFormTextarea
                      className="desc2"
                      type="text"
                      placeholder="Objek"
                      value={objek}
                      onChange={(e) => setObjek(e.target.value)}
                      feedbackInvalid="Masukkan Objek"
                      required
                    />
                  </CCol>
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
                <CRow className="mb-3">
                  <CCol>
                    <CFormSelect
                      className="desc2"
                      value={jumlahKegiatan}
                      onChange={(e) => setJumlahKegiatan(e.target.value)}
                      aria-describedby="validationCustom04Feedback"
                      feedbackInvalid="Masukkan Jumlah Kegiatan"
                      required
                    >
                      <option value={jumlahKegiatan}>{jumlahKegiatan}</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </CFormSelect>
                  </CCol>
                  <CCol>
                    <CFormSelect
                      className="desc2"
                      value={temuan}
                      onChange={(e) => setTemuan(e.target.value)}
                      aria-describedby="validationCustom04Feedback"
                      feedbackInvalid="Masukkan Temuan"
                      required
                    >
                      <option value={temuan}>{temuan}</option>
                      <option value="Aman">Aman</option>
                      <option value="Kondisi Tidak Aman">
                        Kondisi Tidak Aman
                      </option>
                      <option value="Tindakan Tidak Aman">
                        Tindakan Tidak Aman
                      </option>
                    </CFormSelect>
                  </CCol>
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
                <CRow className="mb-3">
                  <CCol>
                    <CFormSelect
                      className="desc2"
                      value={jumlahTemuan}
                      onChange={(e) => setJumlahTemuan(e.target.value)}
                      aria-describedby="validationCustom04Feedback"
                      feedbackInvalid="Masukkan Jumlah Temuan"
                      required
                    >
                      <option value={jumlahTemuan}>{jumlahTemuan}</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </CFormSelect>
                  </CCol>
                  <CCol>
                    <CFormTextarea
                      className="desc2"
                      type="text"
                      placeholder="Detail Temuan"
                      value={detailTemuan}
                      onChange={(e) => setDetailTemuan(e.target.value)}
                      feedbackInvalid="Masukkan Detail Temuan"
                      required
                    />
                  </CCol>
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
                <CRow className="mb-3">
                  <CCol>
                    <CFormTextarea
                      className="desc2"
                      type="text"
                      placeholder="Tindak Lanjut"
                      value={tindakLanjut}
                      onChange={(e) => setTindakLanjut(e.target.value)}
                      feedbackInvalid="Masukkan Tindak Lanjut"
                      required
                    />
                  </CCol>
                  <CCol>
                    <CFormSelect
                      className="desc2"
                      value={kategoriTemuan}
                      onChange={(e) => setKategoriTemuan(e.target.value)}
                      aria-describedby="validationCustom04Feedback"
                      feedbackInvalid="Masukkan Kategori Temuan"
                      required
                    >
                      <option value={kategoriTemuan}>{kategoriTemuan}</option>
                      <option value="Merah">Merah</option>
                      <option value="Kuning">Kuning</option>
                      <option value="Hijau">Hijau</option>
                    </CFormSelect>
                  </CCol>
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
                <CRow className="mb-3">
                  <CCol>
                    {role === "admin" ? (
                      <CFormSelect
                        className="desc2"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                      >
                        <option value={status}>{status}</option>
                        <option value="Open">Open</option>
                        <option value="Close">Close</option>
                      </CFormSelect>
                    ) : (
                      <CFormSelect
                        className="desc2"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                        disabled
                      >
                        <option value={status}>{status}</option>
                      </CFormSelect>
                    )}
                  </CCol>
                  <CCol>
                    <CFormTextarea
                      className="desc2"
                      type="text"
                      placeholder="Keterangan"
                      value={keterangan}
                      onChange={(e) => setKeterangan(e.target.value)}
                      feedbackInvalid="Masukkan Keterangan (jika tidak ada masukkan TIDAK ADA)"
                      required
                    />
                  </CCol>
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
                <CRow className="mb-4">
                  <CCol style={{ fontSize: "14px" }}>{latitude}</CCol>
                  <CCol style={{ fontSize: "14px" }}>{longitude}</CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CButton
                      type="submit"
                      color="success"
                      variant="outline"
                      disabled={
                        !shift ||
                        !site ||
                        !pic ||
                        !jenisGiat ||
                        !giat ||
                        !lokasi ||
                        !objek ||
                        !jumlahKegiatan ||
                        !temuan ||
                        !jumlahTemuan ||
                        !detailTemuan ||
                        !tindakLanjut ||
                        !kategoriTemuan ||
                        !status ||
                        !keterangan
                      }
                    >
                      Update
                    </CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CForm>
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
    </>
  );
};

export default UpdateReport;
