import { useState } from "react";
import { coursesData } from "../data/coursesData";
import "../styles/courses/courses.css";
import { Link } from "react-router-dom";

const Courses = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSlotClick = (slotNum) => {
    setSelectedSlot(slotNum);
  };

  const handleTopicChange = (e) => {
    const topicId = e.target.value;
    if (topicId) {
      const topic = coursesData.find((t) => t.id === topicId);
      setSelectedTopic(topic);
    } else {
      setSelectedTopic(null);
    }
  };

  const renderSlots = () => {
    return Array.from({ length: 6 }, (_, i) => i + 1).map((slotNum) => (
      <button
        key={slotNum}
        className={`btn btn-outline-light slot-btn ${selectedSlot === slotNum ? "active" : ""}`}
        onClick={() => handleSlotClick(slotNum)}
      >
        Slot {slotNum}
      </button>
    ));
  };

  const renderContent = () => {
    if (!selectedTopic) {
      return (
        <div className="text-center py-5 text-muted">
          <i
            className="bi bi-book display-1"
            style={{ color: "var(--secondary-color)", opacity: 0.3 }}
          ></i>
          <h5 className="mt-3">
            Vui lòng chọn một chủ đề từ danh sách bên trên
          </h5>
        </div>
      );
    }

    return (
      <div className="d-flex flex-column gap-3">
        {selectedTopic.cac_van_de.map((vd) => (
          <div key={vd.stt} className="question-item bg-light rounded-3 p-3">
            <div className="d-flex align-items-start gap-3">
              <span
                className="badge rounded-pill text-white d-flex align-items-center justify-content-center"
                style={{
                  background: "var(--primary-color)",
                  width: "32px",
                  height: "32px",
                  fontSize: "14px",
                }}
              >
                {vd.stt}
              </span>
              <div className="flex-grow-1">
                <h6
                  className="fw-bold mb-2"
                  style={{ color: "var(--secondary-color)" }}
                >
                  {vd.van_de}
                </h6>
                <p className="mb-0 text-secondary">{vd.noi_dung}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderMindmap = () => {
    if (!selectedTopic) {
      return (
        <div className="text-center">
          <i
            className="bi bi-diagram-3 display-1 text-muted opacity-25"
            style={{ color: "var(--secondary-color)" }}
          ></i>
          <p className="mt-3 text-muted mb-0 fw-semibold">Ảnh sơ đồ tư duy</p>
          <small className="text-muted">Sẽ hiển thị khi có dữ liệu</small>
        </div>
      );
    }

    if (selectedTopic.mindmap_url && selectedTopic.mindmap_url.trim() !== "") {
      return (
        <img
          src={selectedTopic.mindmap_url}
          className="img-fluid rounded"
          alt="Sơ đồ tư duy"
        />
      );
    }

    return (
      <div className="text-center">
        <i
          className="bi bi-diagram-3 display-1 text-muted opacity-25"
          style={{ color: "var(--secondary-color)" }}
        ></i>
        <p className="mt-3 text-muted mb-0 fw-semibold">Ảnh sơ đồ tư duy</p>
        <small className="text-muted">Chưa có dữ liệu</small>
      </div>
    );
  };

  return (
    <div className="triet-hoc-wrapper container-fluid p-4">
      {/* Header */}
      <div
        className="rounded-4 shadow-lg p-4 mb-4 text-center"
        style={{ color: "#3626b2" }}
      >
        <h1 className="mb-2 fw-bold" style={{ color: "#3626b2" }}>
          <i className="bi bi-book"></i> Học cùng chúng tớ
        </h1>
        <p className="mb-0 fs-5">
          <i className="bi bi-lightbulb"></i> Chủ nghĩa duy vật biện chứng và
          chủ nghĩa duy vật lịch sử
        </p>
        <div
          className="position-absolute"
          style={{ top: "30px", left: "80px", fontSize: "24px" }}
        >
          <Link to="/">
            <i class="bi bi-house-door me-2"></i>BACK
          </Link>
        </div>
      </div>

      {/* Slot Selector */}
      <div className="rounded-4 shadow p-3 mb-4">
        <h5 className="mb-3" style={{ color: "#3626b2" }}>
          <i className="bi bi-calendar-event"></i> Chọn Slot (Buổi học):
        </h5>
        <div className="d-flex flex-wrap gap-2 justify-content-around">
          {renderSlots()}
        </div>
      </div>

      {/* Topic Dropdown Selector */}
      <div className="bg-white rounded-4 shadow p-4 mb-4">
        <div
          htmlFor="topicSelect"
          className="form-label fw-bold fs-5"
          style={{ color: "var(--secondary-color)" }}
        >
          <i className="bi bi-journal-text"></i> Chọn Chủ đề:
        </div>
        <select
          id="topicSelect"
          className="form-select form-select-lg"
          value={selectedTopic?.id || ""}
          onChange={handleTopicChange}
          style={{ borderColor: "var(--primary-color)" }}
        >
          <option value="">-- Vui lòng chọn một chủ đề --</option>
          {coursesData.map((topic, index) => (
            <option key={topic.id} value={topic.id}>
              Chủ đề {index + 1}: {topic.tieu_de}
            </option>
          ))}
        </select>
      </div>

      {/* Content Area: 2 Columns */}
      <div className="row g-4">
        {/* Left Column - Nội dung bài học */}
        <div className="col-lg-7">
          <div
            className="bg-white rounded-4 shadow p-4"
            style={{ minHeight: "500px" }}
          >
            <div className="border-bottom pb-3 mb-4">
              <h3
                className="mb-0 fw-bold"
                style={{ color: "var(--secondary-color)" }}
              >
                <i className="bi bi-book-half"></i>{" "}
                {selectedTopic ? selectedTopic.tieu_de : "Nội dung bài học"}
              </h3>
            </div>
            <div>{renderContent()}</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-5">
          {/* Câu nói hay */}
          <div className="quote-box rounded-4 shadow p-4 mb-4">
            <h5
              className="mb-3 fw-bold"
              style={{ color: "var(--secondary-color)" }}
            >
              <i className="bi bi-quote"></i> Câu nói hay
            </h5>
            <p className="fst-italic mb-0">
              {selectedTopic
                ? selectedTopic.cau_noi_hay
                : "Chọn một chủ đề để xem câu nói hay..."}
            </p>
          </div>

          {/* Ảnh sơ đồ tư duy */}
          <div className="mindmap-box rounded-4 shadow p-4 d-flex align-items-center justify-content-center">
            {renderMindmap()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
