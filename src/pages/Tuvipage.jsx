import React, { useState, useEffect, useRef } from "react";
import { lapDiaBan } from "../utils/lapDiaBan";
import {
  thienCan,
  diaChi,
  canChiNgay,
  ngayThangNam,
  nguHanhNapAm,
  jdFromDate,
  timCuc,
  nguHanh,
} from "../utils/tuviCalculations";
import "../styles/tuvi/TuviPage.css";

const TuviPage = () => {
  const [formData, setFormData] = useState({
    hoten: "",
    gioitinh: "nam",
    ngaysinh: new Date().getDate(),
    thangsinh: new Date().getMonth() + 1,
    namsinh: new Date().getFullYear(),
    giosinh: 1,
    muigio: 7,
    amlich: false,
  });

  const [laSo, setLaSo] = useState(null);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  // Khởi tạo Vanta.js effect
  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current && window.VANTA) {
      vantaEffect.current = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 900.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x3f51b5, // Màu chính
        backgroundColor: 0x23153c, // Màu nền
        points: 10.0, // Số điểm
        maxDistance: 20.0, // Khoảng cách tối đa
        spacing: 15.0, // Khoảng cách giữa các điểm
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    try {
      const gioiTinh = formData.gioitinh === "nam" ? 1 : -1;
      const duongLich = !formData.amlich;

      const diaBan = lapDiaBan(
        parseInt(formData.ngaysinh),
        parseInt(formData.thangsinh),
        parseInt(formData.namsinh),
        parseInt(formData.giosinh),
        gioiTinh,
        duongLich,
        parseInt(formData.muigio),
      );

      let ngayAm = parseInt(formData.ngaysinh);
      let thangAm = parseInt(formData.thangsinh);
      let namAm = parseInt(formData.namsinh);
      let thangNhuan = 0;

      if (duongLich) {
        const lunar = ngayThangNam(
          ngayAm,
          thangAm,
          namAm,
          duongLich,
          parseInt(formData.muigio),
        );
        ngayAm = lunar[0];
        thangAm = lunar[1];
        namAm = lunar[2];
        thangNhuan = lunar[3];
      }

      const [canNgay, chiNgay] = canChiNgay(
        parseInt(formData.ngaysinh),
        parseInt(formData.thangsinh),
        parseInt(formData.namsinh),
        duongLich,
        parseInt(formData.muigio),
        thangNhuan,
      );

      const chiGioSinh = diaChi[parseInt(formData.giosinh)];
      const jd = jdFromDate(
        parseInt(formData.ngaysinh),
        parseInt(formData.thangsinh),
        parseInt(formData.namsinh),
      );
      let canGioSinh =
        ((((jd - 1) * 2) % 10) + parseInt(formData.giosinh)) % 10;
      if (canGioSinh === 0) canGioSinh = 10;

      const canNam = ((namAm + 6) % 10) + 1;
      const chiNam = ((namAm + 8) % 12) + 1;
      const canThang = ((namAm * 12 + thangAm + 3) % 10) + 1;

      const banMenh = nguHanhNapAm(chiNam, canNam, true);

      const hanhCuc = timCuc(diaBan.cungMenh, canNam);
      const cuc = nguHanh(hanhCuc);

      const menhChu = diaChi[diaBan.cungMenh]?.menhChu || "";
      const thanChu = diaChi[diaBan.cungThan]?.thanChu || "";

      const thienBanData = {
        ten: formData.hoten,
        today: new Date().toLocaleDateString("vi-VN"),
        ngayDuong: formData.ngaysinh,
        thangDuong: formData.thangsinh,
        namDuong: formData.namsinh,
        ngayAm,
        thangAm,
        namAm,
        thangNhuan,
        canNgay: thienCan[canNgay]?.tenCan || "",
        chiNgay: diaChi[chiNgay]?.tenChi || "",
        canThang: thienCan[canThang]?.tenCan || "",
        chiThang: diaChi[thangAm]?.tenChi || "",
        canNamTen: thienCan[canNam]?.tenCan || "",
        chiNamTen: diaChi[chiNam]?.tenChi || "",
        gioSinh: `${thienCan[canGioSinh]?.tenCan || ""} ${chiGioSinh?.tenChi || ""}`,
        namNu: formData.gioitinh === "nam" ? "Nam" : "Nữ",
        amDuongNamSinh: chiNam % 2 === 1 ? "Dương" : "Âm",
        amDuongMenh: "",
        banMenh: banMenh || "",
        tenCuc: cuc.tenCuc || "",
        menhChu,
        thanChu,
        sinhKhac: "",
      };

      setLaSo({
        thapNhiCung: diaBan.thapNhiCung,
        thienBan: thienBanData,
      });
    } catch (error) {
      console.error("Lỗi khi lập lá số:", error);
      alert("Có lỗi xảy ra khi lập lá số. Vui lòng kiểm tra lại thông tin!");
    }
  };

  const renderCung = (cung) => {
    if (!cung || cung.cungSo === 0) return null;

    const chinhTinh = cung.cungSao.filter((s) => s.saoLoai === 1);
    const saoTot = cung.cungSao.filter(
      (s) => s.vongTrangSinh === 0 && s.saoLoai !== 1 && s.saoLoai < 10,
    );
    const saoXau = cung.cungSao.filter(
      (s) => s.vongTrangSinh === 0 && s.saoLoai !== 1 && s.saoLoai > 10,
    );
    const trangSinh = cung.cungSao.find((s) => s.vongTrangSinh === 1);

    return (
      <>
        <div className="grid cung-top">
          <div
            className="col col-2 tooltips"
            title={`Địa chi cung ${cung.cungTen}`}
          >
            {cung.cungTen}
          </div>
          <div className="col col-8" style={{ whiteSpace: "nowrap" }}>
            <span className="cungChu">{cung.cungChu}</span>
            {cung.cungThan && <span className="cungThan label">Thân</span>}
          </div>
          <div
            className="col col-2 tooltips"
            title={`Đại hạn ${cung.cungDaiHan} - ${cung.cungDaiHan + 9}`}
          >
            {cung.cungDaiHan}
          </div>
        </div>

        <div className="grid cung-middle">
          <div className="chinhTinh">
            <ul>
              {chinhTinh.map((sao, idx) => (
                <li key={idx} className={sao.cssSao}>
                  {sao.saoTen} {sao.saoDacTinh && `(${sao.saoDacTinh})`}
                </li>
              ))}
            </ul>
          </div>

          <div className="phuTinh">
            <div className="saotot">
              {saoTot.map((sao, idx) => (
                <div key={idx} className="grid">
                  <div className={`col ${sao.cssSao}`}>
                    {sao.saoTen} {sao.saoDacTinh && `(${sao.saoDacTinh})`}
                  </div>
                </div>
              ))}
            </div>
            <div className="saoxau">
              {saoXau.map((sao, idx) => (
                <div key={idx} className="grid">
                  <div className={sao.cssSao}>
                    {sao.saoTen} {sao.saoDacTinh && `(${sao.saoDacTinh})`}
                  </div>
                </div>
              ))}
            </div>
            <div className="tuanTriet">
              {cung.trietLo && <span className="label label-triet">Triệt</span>}
              {cung.tuanTrung && <span className="label label-tuan">Tuần</span>}
            </div>
          </div>
        </div>

        <div className="grid cung-bottom">
          <div
            className="col col-3 tooltips"
            title={`Tiểu hạn của năm ${cung.cungTieuHan}`}
          >
            {cung.cungTieuHan}
          </div>
          {trangSinh && (
            <div className={`col col-6 ${trangSinh.cssSao}`}>
              {trangSinh.saoTen}
            </div>
          )}
          <div
            className="col col-3 tooltips"
            title={`Cung (${cung.cungAmDuong === -1 ? "âm" : "dương"}), ngũ hành ${cung.hanhCung}`}
          >
            {cung.cungAmDuong === -1 ? "-" : "+"}
            {cung.hanhCung}
          </div>
        </div>
      </>
    );
  };

  const renderThienBan = () => {
    if (!laSo) return null;
    const tb = laSo.thienBan;

    return (
      <div className="noidung">
        <div className="header">Ngày xem: {tb.today}</div>

        <div className="grid">
          <div className="col col-3 cotTrai">Họ tên</div>
          <div className="col col-9 cotPhai">{tb.ten}</div>
        </div>

        <div className="grid">
          <div className="col col-3 cotTrai">Bát tự</div>
          <div className="col col-9 cotPhai">
            Năm {tb.canNamTen} {tb.chiNamTen}, tháng {tb.canThang} {tb.chiThang}
            {tb.thangNhuan === 1 && " (nhuận)"}, ngày {tb.canNgay} {tb.chiNgay},
            giờ {tb.gioSinh}
          </div>
        </div>

        <div className="grid">
          <div className="col col-3 cotTrai">Tuổi</div>
          <div className="col col-9 cotPhai">
            {tb.amDuongNamSinh} {tb.namNu} ({tb.amDuongMenh})
          </div>
        </div>

        <div className="grid">
          <div className="col col-3 cotTrai">Ngày sinh</div>
          <div className="col col-9 cotPhai">
            <div>
              {tb.ngayAm}/{tb.thangAm}/{tb.canNamTen} {tb.chiNamTen} (Âm lịch)
            </div>
            <div>
              {tb.ngayDuong}/{tb.thangDuong}/{tb.namDuong} (Dương lịch)
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="col col-3 cotTrai">Bản mệnh</div>
          <div className="col col-9 cotPhai">{tb.banMenh}</div>
        </div>

        <div className="grid">
          <div className="col col-3 cotTrai">Cục</div>
          <div className="col col-9 cotPhai">{tb.tenCuc}</div>
        </div>

        <div className="grid">
          <div className="col col-3 cotTrai">Mệnh chủ</div>
          <div className="col col-9 cotPhai">{tb.menhChu}</div>
        </div>

        <div className="grid">
          <div className="col col-3 cotTrai">Thân chủ</div>
          <div className="col col-9 cotPhai">{tb.thanChu}</div>
        </div>

        <div className="grid sinhkhac">{tb.sinhKhac}</div>

        <div className="mausac">
          <div className="grid">
            <span className="col col-2">Màu sắc</span>
            <span className="col col-2 hanhKim gioithieuhanh">Kim</span>
            <span className="col col-2 hanhThuy gioithieuhanh">Thủy</span>
            <span className="col col-2 hanhHoa gioithieuhanh">Hỏa</span>
            <span className="col col-2 hanhTho gioithieuhanh">Thổ</span>
            <span className="col col-2 hanhMoc gioithieuhanh">Mộc</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="tuvi-container-wrapper" ref={vantaRef}>
      <div className="masthead">
        <div className="container-2">
          <h1 className="wordmark">Chương trình lập lá số tử vi</h1>
          <div className="formborder">
            <form id="lstv" onSubmit={(e) => e.preventDefault()}>
              <div className="grid thongtin">
                <div className="col col-3 text-white">Họ tên</div>
                <div className="col col-9">
                  <input
                    type="text"
                    name="hoten"
                    id="hoten"
                    value={formData.hoten}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid thongtin">
                <div className="col col-3 text-white">Giới tính</div>
                <div className="col col-9">
                  <select
                    name="gioitinh"
                    id="gioitinh"
                    value={formData.gioitinh}
                    onChange={handleChange}
                  >
                    <option value="nam">Nam</option>
                    <option value="nu">Nữ</option>
                  </select>
                </div>
              </div>

              <div className="grid thongtin">
                <div className="col col-3 text-white">Ngày tháng năm sinh</div>
                <div className="col col-5">
                  <select
                    name="ngaysinh"
                    id="ngaysinh"
                    value={formData.ngaysinh}
                    onChange={handleChange}
                  >
                    {[...Array(31)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>{" "}
                  /
                  <select
                    name="thangsinh"
                    id="thangsinh"
                    value={formData.thangsinh}
                    onChange={handleChange}
                  >
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>{" "}
                  /
                  <input
                    type="text"
                    id="namsinh"
                    name="namsinh"
                    placeholder="Năm sinh"
                    value={formData.namsinh}
                    onChange={handleChange}
                  />
                </div>
                <div className="col col-4 text-white">
                  Âm lịch?
                  <input
                    type="checkbox"
                    name="amlich"
                    checked={formData.amlich}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid thongtin">
                <div className="col col-3 text-white">Giờ sinh</div>
                <div className="col col-3">
                  <select
                    name="giosinh"
                    id="giosinh"
                    value={formData.giosinh}
                    onChange={handleChange}
                  >
                    <option value="1">Tí (23g - 1g)</option>
                    <option value="2">Sửu (1g - 3g)</option>
                    <option value="3">Dần (3g - 5g)</option>
                    <option value="4">Mão (5g - 7g)</option>
                    <option value="5">Thìn (7g - 9g)</option>
                    <option value="6">Tị (9g - 11g)</option>
                    <option value="7">Ngọ (11g - 13g)</option>
                    <option value="8">Mùi (13g - 15g)</option>
                    <option value="9">Thân (15g - 17g)</option>
                    <option value="10">Dậu (17g - 19g)</option>
                    <option value="11">Tuất (19g - 21g)</option>
                    <option value="12">Hợi (21g - 23g)</option>
                  </select>
                </div>
                <div className="col col-3 text-white">
                  Múi giờ:
                  <select
                    name="muigio"
                    id="muigio"
                    value={formData.muigio}
                    onChange={handleChange}
                  >
                    <option value="-12">-12</option>
                    <option value="-11">-11</option>
                    <option value="-10">-10</option>
                    <option value="-9">-9</option>
                    <option value="-8">-8</option>
                    <option value="-7">-7</option>
                    <option value="-6">-6</option>
                    <option value="-5">-5</option>
                    <option value="-4">-4</option>
                    <option value="-3">-3</option>
                    <option value="-2">-2</option>
                    <option value="-1">-1</option>
                    <option value="0">0</option>
                    <option value="1">+1</option>
                    <option value="2">+2</option>
                    <option value="3">+3</option>
                    <option value="4">+4</option>
                    <option value="5">+5</option>
                    <option value="6">+6</option>
                    <option value="7">+7 (Vietnam)</option>
                    <option value="8">+8</option>
                    <option value="9">+9</option>
                    <option value="10">+10</option>
                    <option value="11">+11</option>
                  </select>
                </div>
              </div>

              <div className="grid">
                <input
                  type="button"
                  className="button primary"
                  value="Lập lá số"
                  id="laplaso"
                  onClick={handleSubmit}
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {laSo && (
        <div
          className="anlaso laso border"
          id="laso"
          style={{ display: "block" }}
        >
          <div className="grid">
            <div className="col col-3">
              <div className="container-2">
                <div
                  className="grid diaCung border-bottom"
                  data-cung-id="6"
                  id="cungTy5"
                >
                  {renderCung(laSo.thapNhiCung[6])}
                </div>
                <div
                  className="grid diaCung border-bottom"
                  data-cung-id="5"
                  id="cungThin"
                >
                  {renderCung(laSo.thapNhiCung[5])}
                </div>
                <div
                  className="grid diaCung border-bottom inset-border"
                  data-cung-id="4"
                  id="cungMao"
                >
                  {renderCung(laSo.thapNhiCung[4])}
                </div>
                <div className="grid diaCung" data-cung-id="3" id="cungDan">
                  {renderCung(laSo.thapNhiCung[3])}
                </div>
              </div>
            </div>

            <div className="col col-6">
              <div className="container-2">
                <div className="grid">
                  <div
                    className="col col-6 diaCung border-left"
                    data-cung-id="7"
                    id="cungNgo"
                  >
                    {renderCung(laSo.thapNhiCung[7])}
                  </div>
                  <div
                    className="col col-6 diaCung border-left"
                    data-cung-id="8"
                    id="cungMui"
                  >
                    {renderCung(laSo.thapNhiCung[8])}
                  </div>
                </div>

                <div
                  className="grid thienBan border-top border-left border-bottom border-right"
                  id="thienBan"
                >
                  {renderThienBan()}
                </div>

                <div className="grid">
                  <div
                    className="col col-6 diaCung border-left"
                    data-cung-id="2"
                    id="cungSuu"
                  >
                    {renderCung(laSo.thapNhiCung[2])}
                  </div>
                  <div
                    className="col col-6 diaCung border-left"
                    data-cung-id="1"
                    id="cungTy1"
                  >
                    {renderCung(laSo.thapNhiCung[1])}
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-3">
              <div className="container-2">
                <div
                  className="grid diaCung border-left border-bottom"
                  data-cung-id="9"
                  id="cungThan"
                >
                  {renderCung(laSo.thapNhiCung[9])}
                </div>
                <div
                  className="grid diaCung border-bottom"
                  data-cung-id="10"
                  id="cungDau"
                >
                  {renderCung(laSo.thapNhiCung[10])}
                </div>
                <div
                  className="grid diaCung border-bottom"
                  data-cung-id="11"
                  id="cungTuat"
                >
                  {renderCung(laSo.thapNhiCung[11])}
                </div>
                <div
                  className="grid diaCung border-left"
                  data-cung-id="12"
                  id="cungHoi"
                >
                  {renderCung(laSo.thapNhiCung[12])}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TuviPage;
