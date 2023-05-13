import React, { useState } from "react";
import axios from "axios";
import FormStep1 from "./form-report/general.js";
import FormStep2 from "./form-report/details.js";
import FormStep3 from "./form-report/action.js";
import FormStep4 from "./form-report/submit.js";
import { CAlert } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilWarning, cilCheckCircle } from "@coreui/icons";
import "./ReportStyle.css";
import { useNavigate } from "react-router-dom";

function Report() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});
  const [alert, setAlert] = useState(null);

  const handleChange = (field, value) => {
    setData((prevData) => ({ ...prevData, [field]: value }));
  };
    //const { name, value } = event.target;
    // setData((prevData) => ({ ...prevData, [field]: value }));
    // const name = e.target.name;
    // setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await axios.post('https://braireport.herokuapp.com/reports', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
      console.log(response.data);
      setStep(1);
      setData({});
      setAlert({
        type: "success",
        message: "Data has been saved successfully!",
      });
      navigate("/fitur/list-report");
    } catch (error) {
      console.log(error);
      setAlert({
        type: "error",
        message: "Failed to save data!",
      });
    }
  };

  return (
    <div className="container">
      <div className="create-report-title">Form Report</div>
      <div className="fill-report">
        Please fill in the report form below correctly and accurately
      </div>
      {alert && (
        <div className="d-flex justify-content-center">
          {alert.type === "success" ? (
            <CAlert color="success" className="d-flex align-items-center alert-width" dismissible>
              <CIcon
                icon={cilCheckCircle}
                className="flex-shrink-0 me-2"
                width={24}
                height={24}
              />
              <div>{alert.message}</div>
            </CAlert>
          ) : (
            <CAlert color="warning" className="d-flex align-items-center alert-width" dismissible>
              <CIcon
                icon={cilWarning}
                className="flex-shrink-0 me-2"
                height={24}
                width={24}
              />
              <div>{alert.message}</div>
            </CAlert>
          )}
        </div>
      )}
      {step === 1 && (
        <FormStep1
          nextStep={nextStep}
          handleChange={handleChange}
          values={data}
        />
      )}
      {step === 2 && (
        <FormStep2
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={data}
        />
      )}
      {step === 3 && (
        <FormStep3
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={data}
        />
      )}
      {step === 4 && (
        <FormStep4
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          data={data}
        />
      )}
    </div>
  );
}

export default Report;

      // formData.append("dates", data.valueDate);
      // formData.append("times", data.valueTime);
      // formData.append("shift", data.shift);
      // formData.append("site", data.site);
      // formData.append("pic", data.pic);
      // formData.append("jenis_giat", data.jenisGiat);
      // formData.append("giat", data.giat);
      // formData.append("lokasi", data.lokasi);
      // formData.append("objek", data.objek);
      // formData.append("jumlah_kegiatan", data.jumlahKegiatan);
      // formData.append("temuan", data.temuan);
      // formData.append("jumlah_temuan", data.jumlahTemuan);
      // formData.append("detail_temuan", data.detailTemuan);
      // formData.append("tindak_lanjut", data.tindakLanjut);
      // formData.append("kategori_temuan", data.kategoriTemuan);
      // formData.append("status", data.status);
      // formData.append("keterangan", data.keterangan);
      // formData.append("image", data.image);
      // formData.append("latitude", data.location.coordinates.lat);
      // formData.append("longitude", data.location.coordinates.lng);