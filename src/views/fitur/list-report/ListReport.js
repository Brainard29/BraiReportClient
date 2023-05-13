import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CInputGroup,
  CForm,
  CFormInput,
  CTable,
  CTableHead,
  CTableRow,
  CTableBody,
  CTableDataCell,
  CTableCaption,
  CRow,
  CButton,
} from "@coreui/react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import "./styles.css";
import optionIcon from "./option.png";
import UpdateReport from "./UpdateReport";
import DetailReport from "./DetailReport";

const ListReports = () => {
  const [laporan, setLaporan] = useState([]);
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const role = localStorage.getItem("role");

  const fileName = "Security Report";
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const getLaporan = async () => {
    const response = await axios.get("https://braireport.herokuapp.com/getReports");
    setLaporan(response.data);
  };

  useEffect(() => {
    getLaporan();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://braireport.herokuapp.com?q=${query}`);
      setLaporan(res.data);
    };
    if (query.length === 0 || query.length > 0) fetchData();
  }, [query]);

  const ExportToExcel = (laporan, fileName) => {
    const ws = XLSX.utils.json_to_sheet(laporan);
    XLSX.utils.sheet_add_aoa(
      ws,
      [
        [
          "id",
          "Tanggal",
          "Waktu",
          "Shift",
          "Site",
          "PIC",
          "Jenis Giat",
          "Giat",
          "Lokasi",
          "Objek",
          "Jumlah Kegiatan",
          "Temuan",
          "Jumlah Temuan",
          "Detail Temuan",
          "Tindak Lanjut",
          "Kategori Temuan",
          "Status",
          "Keterangan",
          "Gambar",
          "Latitude",
          "Longitude",
          "URL",
        ],
      ],
      { origin: "A1" }
    );
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <CCard className="mb-4">
      <CCardHeader className="card-header">List Report</CCardHeader>
      <CForm>
        <CCardBody>
          <CRow className="feature-row">
            <CCol className="search-bar" md="4">
              <CInputGroup>
                <CFormInput
                  onChange={(e) => setQuery(e.target.value.toLowerCase())}
                  placeholder="Search report..."
                  className="search-input"
                ></CFormInput>
              </CInputGroup>
            </CCol>
            {role !== "user" && (
              <CCol className="convert-button" md="2">
                <CButton
                  onClick={() => ExportToExcel(laporan, fileName)}
                  color="success"
                  variant="outline"
                  className="convert-button"
                >
                  CONVERT TO EXCEL
                </CButton>
              </CCol>
            )}
          </CRow>
        </CCardBody>
      </CForm>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1px",
        }}
      >
        <CTable
          style={{
            width: "1160px",
            border: "1px solid rgb(124, 123, 123)",
            verticalAlign: "middle",
          }}
          hover
          responsive
        >
          <CTableCaption>List of report</CTableCaption>
          <CTableHead color="light" className="tabel-text">
            <CTableRow>
              <CTableDataCell style={{ width: "1%" }}></CTableDataCell>
              <CTableDataCell style={{ width: "14%" }}>
                SEND DATE
              </CTableDataCell>
              <CTableDataCell style={{ width: "14%" }}>SHIFT</CTableDataCell>
              <CTableDataCell style={{ width: "14%" }}>SITE</CTableDataCell>
              <CTableDataCell style={{ width: "14%" }}>PIC</CTableDataCell>
              <CTableDataCell style={{ width: "14%" }}>
                JENIS GIAT
              </CTableDataCell>
              <CTableDataCell style={{ width: "16%" }}>GIAT</CTableDataCell>
              <CTableDataCell style={{ width: "10%" }}>STATUS</CTableDataCell>
            </CTableRow>
          </CTableHead>
          <CTableBody className="tabel-text">
            {laporan.map((b) => (
              <CTableRow key={b.id}>
                <CTableDataCell>
                  <CDropdown>
                    <CDropdownToggle
                      placement="left"
                      caret={false}
                      style={{ backgroundColor: "transparent", border: "none" }}
                    >
                      <CAvatar src={optionIcon} size="sm" />
                    </CDropdownToggle>
                    <CDropdownMenu className="pt-0" placement="left">
                      <CDropdownItem onClick={() => setSelectedId(b.id)}>
                        <UpdateReport
                          visible={visible}
                          setVisible={setVisible}
                          selectedId={selectedId}
                          latitude={b.latitude}
                          longitude={b.longitude}
                          images={b.url}
                          dates={b.dates}
                          waktu={b.times}
                          setLaporan={setLaporan}
                        />
                      </CDropdownItem>
                      <CDropdownItem>
                        <DetailReport
                          visible={visible2}
                          setVisible={setVisible2}
                          image={b.url}
                          dates={b.dates}
                          times={b.times}
                          shift={b.shift}
                          pic={b.pic}
                          site={b.site}
                          jenisGiat={b.jenis_giat}
                          giat={b.giat}
                          lokasi={b.lokasi}
                          objek={b.objek}
                          jumlahKegiatan={b.jumlah_kegiatan}
                          temuan={b.temuan}
                          jumlahTemuan={b.jumlah_temuan}
                          detailTemuan={b.detail_temuan}
                          tindakLanjut={b.tindak_lanjut}
                          kategoriTemuan={b.kategori_temuan}
                          status={b.status}
                          keterangan={b.keterangan}
                          latitude={b.latitude}
                          longitude={b.longitude}
                        />
                      </CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CTableDataCell>
                <CTableDataCell>{b.dates}</CTableDataCell>
                <CTableDataCell>{b.shift}</CTableDataCell>
                <CTableDataCell>{b.site}</CTableDataCell>
                <CTableDataCell>{b.pic}</CTableDataCell>
                <CTableDataCell>{b.jenis_giat}</CTableDataCell>
                <CTableDataCell>{b.giat}</CTableDataCell>
                <CTableDataCell>{b.status}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </div>
    </CCard>
  );
};

export default ListReports;
