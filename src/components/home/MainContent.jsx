import { useState } from "react";
import demoCert from "../../assets/images/demo_certificates.png";
import { Link } from "react-router-dom";

const MainContent = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Python");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const languages = ["Python", "C++", "JavaScript", "PHP", "Swift"];

  return (
    <div className="pagelayout-content d-flex flex-column">
      {/* Page Header */}
      <div id="page-header" className="nobg">
        <div className="inner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="page-heading flexcols">
                  <div className="page-header-left position-relative">
                    <h1 className="heding h2 iscurse maincoursepage">
                      <a
                        className="d-inline-block w-100"
                        href="https://lmsstyle.com/theme/new-learning/course/view.php?id=45"
                        tabIndex="-1"
                      >
                        <span className="course-backtext">Course</span>
                        School programming
                      </a>
                    </h1>
                  </div>
                  <div className="page-header-right position-relative d-flex flex-wrap align-items-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="page-breadcrumb position-relative breadcrumb_modern">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="flexcols">
                  <div className="breadcrumb">
                    <nav aria-label="Navigation bar">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="https://lmsstyle.com/theme/new-learning/">
                            Home
                          </a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="https://lmsstyle.com/theme/new-learning/course/index.php">
                            Courses
                          </a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="https://lmsstyle.com/theme/new-learning/course/index.php?categoryid=4">
                            Pages demo
                          </a>
                        </li>
                        <li className="breadcrumb-item">
                          <a
                            href="viewe986.html?id=879"
                            aria-current="page"
                            title="School programming"
                          >
                            School programming
                          </a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="actions d-flex flex-wrap align-items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="page-secnav position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="secondary-navigation"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="page-b">
        <div className="mb2notices"></div>
        <div id="main-content">
          <div className="container-fluid">
            <div id="theme-main-content" className="row">
              <section className="content-col col-lg-12">
                <div id="region-main">
                  <div id="page-content">
                    <span
                      className="notifications"
                      id="user-notifications"
                    ></span>
                    <span id="maincontent"></span>

                    {/* Page Context Header */}
                    <div className="page-context-header m-0 p-0">
                      <h2 className="activity-name">School programming</h2>
                    </div>

                    {/* Activity Header */}
                    <div
                      className="activity-header d-flex justify-content-between align-items-center"
                      data-for="page-activity-header"
                    >
                      <div className="activity-header-moo">
                        <span className="sr-only">Completion requirements</span>
                        <div
                          data-region="activity-information"
                          data-activityname="School programming"
                          className="activity-information"
                        ></div>
                      </div>
                    </div>

                    {/* Main Content Role */}
                    <div role="main">
                      <div className="box py-3 generalbox center clearfix">
                        <div className="no-overflow"></div>
                      </div>
                    </div>

                    {/* Page Builder Content */}
                    <div className="mb2-pb-fpsection position-relative pre-bg0 hidden0 light">
                      <div
                        className="section-inner"
                        style={{ paddingTop: "0px", paddingBottom: "0px" }}
                      >
                        {/* Hero Section */}
                        <div
                          className="mb2-pb-row pre-bg0 dark bgfixed0 wave-none va0 bgfixed0 wavefliph1 wavepos0 colgutter-s parallax0 heroimg1 herovbottom herogradl0 herogradr0 bgtextmob0 waveover1 heroonsmall0 bordert0 borderb0 borderfw1 obgimg1 heroisimg isfw0 isbg rowpt-150 rowpb-100"
                          style={{
                            marginTop: "0px",
                            "--mb-pb-row_bgcolor": "rgb(54, 38, 178)",
                            "--mb-pb-row_btcolor": "#dddddd",
                            "--mb-pb-row_bbcolor": "#dddddd",
                            "--mb-pb-row_btw": "1px",
                            "--mb-pb-row_bbw": "1px",
                            "--mb-pb-row_pt": "170px",
                            "--mb-pb-row_pb": "110px",
                          }}
                        >
                          <div className="section-inner mb2-pb-row-inner">
                            <div className="row-topgap w-100"></div>
                            <div className="container-fluid">
                              <div className="row">
                                <div className="mb2-pb-column col-lg-12 noempty light align-none aligncnone mobcenter1 moborder0">
                                  <div
                                    className="column-inner"
                                    style={{
                                      paddingBottom: "30px",
                                      maxWidth: "622px",
                                    }}
                                  >
                                    <div className="clearfix">
                                      <h4
                                        style={{
                                          marginTop: "0px",
                                          marginBottom: "45px",
                                          maxWidth: "2000px",
                                          marginLeft: "auto",
                                          marginRight: "auto",
                                          fontSize: "2.9rem",
                                          "--mb2-pb-heading-thshadow": "0.06em",
                                          "--mb2-pb-heading-tvshadow": "0.04em",
                                          "--mb2-pb-heading-tbshadow": "0px",
                                          "--mb2-pb-heading-tcshadow":
                                            "transparent",
                                        }}
                                        id="typed_69724aa5441fb"
                                        className="heading heading-none upper0 fwglobal lhglobal pbtsize-2"
                                      >
                                        <span className="btext fwglobal">
                                          Improve your programming skills with
                                        </span>
                                        <span
                                          className="headingtext fwglobal nline0"
                                          style={{ color: "rgb(255, 180, 0)" }}
                                        >
                                          {" "}
                                          New Learning
                                        </span>
                                      </h4>

                                      {/* Select Dropdown */}
                                      <div
                                        id="select_69724aa54422f"
                                        className="mb2-pb-select isimage0 layouth label1 center0"
                                        style={{
                                          marginTop: "0px",
                                          marginBottom: "45px",
                                          "--mb-pb-selecth": "51px",
                                          "--mb-pb-selectmh": "80",
                                          "--mb-pb-selectfs": "1.18rem",
                                          "--mb-pb-swidth": "287px",
                                        }}
                                        data-target="0"
                                      >
                                        <div className="select-label">
                                          <span className="labeltext">
                                            Choose one of 5 programming
                                            languages:
                                          </span>
                                        </div>
                                        <div className="select-container">
                                          <div className="select-dropdown">
                                            <button
                                              type="button"
                                              id="select_69724aa54422f_btn"
                                              className="mb2-pb-select-btn rounded-1 d-inline-flex align-items-center"
                                              tabIndex="-1"
                                              onClick={() =>
                                                setIsSelectOpen(!isSelectOpen)
                                              }
                                            >
                                              <span className="select-btn-text">
                                                {selectedLanguage}
                                              </span>
                                              <span
                                                className="select-btn-arrow mb2ml-auto"
                                                aria-hidden="true"
                                              ></span>
                                            </button>
                                            <div
                                              id="select_69724aa54422f_items"
                                              className={`select-items-container ${isSelectOpen ? "active" : ""}`}
                                              data-id="select_69724aa54422f"
                                              tabIndex="-1"
                                            >
                                              <ul>
                                                {languages.map((lang) => (
                                                  <li
                                                    key={lang}
                                                    className="mb2-pb-select_item position-relative d-flex align-items-center"
                                                    data-link="#"
                                                    tabIndex="-1"
                                                    onClick={() => {
                                                      setSelectedLanguage(lang);
                                                      setIsSelectOpen(false);
                                                    }}
                                                  >
                                                    <div className="select-item-inner lhsmall d-inline-flex align-items-center">
                                                      <span className="select-text">
                                                        {lang}
                                                      </span>
                                                    </div>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="select-button">
                                            <a
                                              href="#"
                                              className="mb2-pb-btn lhsmall rounded-1 btnborder1 fwglobal typeprimary"
                                              style={{
                                                "--mb2-pb-btn-color":
                                                  "rgb(255, 178, 0)",
                                                "--mb2-pb-btn-bghcolor":
                                                  "rgb(255, 178, 0)",
                                                "--mb2-pb-btn-hcolor":
                                                  "rgb(36, 32, 39)",
                                                "--mb2-pb-btn-borcolor":
                                                  "rgb(255, 178, 0)",
                                              }}
                                            >
                                              Explore courses
                                            </a>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Feature List */}
                                      <div
                                        className="mb2-pb-listicon"
                                        style={{ marginBottom: "30px" }}
                                      >
                                        <ul
                                          className="theme-listicon mb2-pb-sortable-subelements iconbg1 horizontal1 border0 fwbold alignnone"
                                          style={{
                                            "--mb2-pb-listicon-fs": "1rem",
                                            "--mb2-pb-listicon-isize":
                                              "2.74rem",
                                            "--mb2-pb-listicon-space":
                                              "1.87rem",
                                          }}
                                        >
                                          <li className="mb2-pb-listicon_item">
                                            <div className="item-content">
                                              <span
                                                className="iconel d-inline-flex justify-content-center align-items-center"
                                                style={{
                                                  backgroundColor:
                                                    "rgb(255, 178, 0)",
                                                  color: "rgb(54, 38, 178)",
                                                }}
                                              >
                                                <i className="bi bi-check-lg"></i>
                                              </span>
                                              <span
                                                className="list-text"
                                                style={{
                                                  color: "rgb(0, 180, 216)",
                                                }}
                                              >
                                                Self-paced learning
                                              </span>
                                            </div>
                                          </li>
                                          <li className="mb2-pb-listicon_item">
                                            <div className="item-content">
                                              <span
                                                className="iconel d-inline-flex justify-content-center align-items-center"
                                                style={{
                                                  backgroundColor:
                                                    "rgb(255, 178, 0)",
                                                  color: "rgb(54, 38, 178)",
                                                }}
                                              >
                                                <i className="bi bi-check-lg"></i>
                                              </span>
                                              <span
                                                className="list-text"
                                                style={{
                                                  color: "rgb(0, 180, 216)",
                                                }}
                                              >
                                                Virtual training classes using
                                                web meeting tools
                                              </span>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Hero Image */}
                            <div className="hero-img-wrap" aria-hidden="true">
                              <div className="hero-img-wrap2">
                                <div
                                  className="hero-img-wrap3"
                                  style={{
                                    width: "1063px",
                                    left: "38%",
                                    "--mb2-pb-herovm": "-4px",
                                  }}
                                >
                                  <img
                                    className="hero-img lazy"
                                    src="https://lmsstyle.com/theme/new-learning/theme/image.php/mb2nl/theme/1768588523/lazy_placeholder_big"
                                    data-src="https://lmsstyle.com/theme/new-learning/pluginfile.php/1/local_mb2builder/images/demo-programming-hero1.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Trusted By Section */}
                        <div
                          className="mb2-pb-row pre-bg0 light bgfixed0 wave-none va0 bgfixed0 wavefliph0 wavepos0 colgutter-s parallax0 heroimg0 herovcenter herogradl0 herogradr0 bgtextmob0 waveover1 heroonsmall1 bordert0 borderb0 borderfw1 obgimg1 heroisvideo isfw0 nobg rowpt-50 rowpb-0"
                          style={{
                            marginTop: "0px",
                            "--mb-pb-row_btcolor": "#dddddd",
                            "--mb-pb-row_bbcolor": "#dddddd",
                            "--mb-pb-row_btw": "1px",
                            "--mb-pb-row_bbw": "1px",
                            "--mb-pb-row_pt": "60px",
                            "--mb-pb-row_pb": "0px",
                          }}
                        >
                          <div className="section-inner mb2-pb-row-inner">
                            <div className="row-topgap w-100"></div>
                            <div className="container-fluid">
                              <div className="row">
                                <div className="mb2-pb-column col-lg-12 noempty light align-none aligncnone mobcenter0 moborder0">
                                  <div
                                    className="column-inner"
                                    style={{
                                      paddingBottom: "30px",
                                      maxWidth: "2000px",
                                    }}
                                  >
                                    <div className="clearfix">
                                      <h4
                                        style={{
                                          marginTop: "0px",
                                          marginBottom: "30px",
                                          maxWidth: "2000px",
                                          marginLeft: "auto",
                                          marginRight: "auto",
                                          fontSize: "1.25rem",
                                          "--mb2-pb-heading-thshadow": "0.06em",
                                          "--mb2-pb-heading-tvshadow": "0.04em",
                                          "--mb2-pb-heading-tbshadow": "0px",
                                          "--mb2-pb-heading-tcshadow":
                                            "transparent",
                                        }}
                                        id="typed_69724aa544346"
                                        className="heading heading-center upper0 fwglobal lhglobal pbtsize-1"
                                      >
                                        <span className="headingtext fwglobal nline0">
                                          Trusted by tech professionals at
                                          thousands of companies
                                        </span>
                                      </h4>
                                      <div
                                        className="mb2-image align-none center1"
                                        style={{
                                          marginBottom: "30px",
                                          width: "450px",
                                          maxWidth: "100%",
                                        }}
                                      >
                                        <img
                                          className="lazy"
                                          src="https://lmsstyle.com/theme/new-learning/theme/image.php/mb2nl/theme/1768588523/lazy_placeholder"
                                          data-src="https://lmsstyle.com/theme/new-learning/pluginfile.php/1/local_mb2builder/images/demo_logos.png"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div
                            className="mb2-pb-row pre-bg0 light bgfixed0 wave-none va0 bgfixed0 wavefliph0 wavepos0 colgutter-s parallax0 heroimg0 herovcenter herogradl0 herogradr0 bgtextmob0 waveover1 heroonsmall1 bordert0 borderb0 borderfw1 obgimg1 heroisvideo isfw0 nobg rowpt-0 rowpb-0"
                            style={{
                              "--mb-pb-row_bbcolor": "#dddddd",
                              "--mb-pb-row_bbw": "1px",
                              "--mb-pb-row_btcolor": "#dddddd",
                              "--mb-pb-row_btw": "1px",
                              "--mb-pb-row_pb": "0px",
                              "--mb-pb-row_pt": "0px",
                              marginTop: "0px",
                            }}
                          >
                            <div className="section-inner mb2-pb-row-inner">
                              <div className="container-fluid">
                                <div className="row">
                                  <div className="mb2-pb-column col-lg-12 noempty light align-none aligncnone mobcenter0 moborder0">
                                    <div
                                      className="column-inner"
                                      style={{
                                        maxWidth: "4000px",
                                        paddingBottom: "30px",
                                      }}
                                    >
                                      <div className="clearfix">
                                        <div
                                          className="theme-text"
                                          style={{
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            maxWidth: "2000px",
                                          }}
                                        >
                                          <div
                                            className="theme-text-inner align-none text-rgb(0, 180, 216) rounded0 gradient0 light"
                                            style={{
                                              "--mb2-pb-graddeg": "180deg",
                                            }}
                                          >
                                            <div
                                              className="theme-text-text upper0 fwbold lhglobal"
                                              style={{
                                                color: "rgb(0, 180, 216)",
                                                fontSize: "1rem",
                                              }}
                                            >
                                              <p>
                                                Mattis pretium erat torquent
                                                fermentum?
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <h4
                                          className="heading heading-none upper0 fwglobal lhglobal pbtsize-2"
                                          id="typed_69724aa54461f"
                                          style={{
                                            "--mb2-pb-heading-tbshadow": "0px",
                                            "--mb2-pb-heading-tcshadow":
                                              "transparent",
                                            "--mb2-pb-heading-thshadow":
                                              "0.06em",
                                            "--mb2-pb-heading-tvshadow":
                                              "0.04em",
                                            fontSize: "2.3rem",
                                            marginBottom: "15px",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            marginTop: "0px",
                                            maxWidth: "2000px",
                                          }}
                                        >
                                          <span className="headingtext fwglobal nline0">
                                            Learn by doing
                                          </span>
                                        </h4>
                                        <div
                                          className="theme-text"
                                          style={{
                                            marginBottom: "50px",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            maxWidth: "1994px",
                                          }}
                                        >
                                          <div
                                            className="theme-text-inner align-none text- rounded0 gradient0 light"
                                            style={{
                                              "--mb2-pb-graddeg": "180deg",
                                            }}
                                          >
                                            <div
                                              className="theme-text-text upper0 fwglobal lhglobal"
                                              style={{
                                                fontSize: "1rem",
                                              }}
                                            >
                                              <p>
                                                Dictumst vivamus donec faucibus
                                                lectus arcu hendrerit. Facilisis
                                                porttitor congue odio blandit
                                                luctus? Pulvinar, arcu convallis
                                                nec porttitor interdum dictumst.
                                                Cursus blandit ullamcorper erat.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="theme-boxes theme-boxesimg type-4 gutter-normal theme-col-3 smtitle1 rounded0 wave0 paddingm linkbtn2 btnhor0 theme-boxesimg shadow1 itemlink0 tcenter0 boxcolor-primary center1 clearfix"
                                          style={{
                                            "--mb2-pb-bxbgcolor":
                                              "rgba(                                                  54,                                                  38,                                                  178,                                                  0.05                                                )",
                                            "--mb2-pb-bxbocolor":
                                              "rgb(                                                  54,                                                  38,                                                  178                                                )",
                                          }}
                                        >
                                          <div className="theme-box el_onmobile1">
                                            <div
                                              className="theme-boximg position-relative"
                                              style={{
                                                "--mb2-pb-bxbgcolor":
                                                  "rgba(                                                      0,                                                      180,                                                      216,                                                      0.05                                                    )",
                                                "--mb2-pb-bxbocolor":
                                                  "rgb(                                                      0,                                                      180,                                                      216                                                    )",
                                                "--mb2-pb-bxborder": "2px",
                                              }}
                                            >
                                              <div className="box-allcontent">
                                                <div className="box-image">
                                                  <img
                                                    alt="Cloud playgrounds"
                                                    className="theme-boximg-img lazy"
                                                    data-src="https://lmsstyle.com/theme/new-learning/pluginfile.php/1/local_mb2builder/images/cloud-playgrounds.jpg"
                                                    src="https://lmsstyle.com/theme/new-learning/theme/image.php/mb2nl/theme/1768588523/lazy_placeholder"
                                                    style={{
                                                      maxWidth: "800px",
                                                    }}
                                                  />
                                                </div>
                                                <div className="vtable-wrapp">
                                                  <div className="vtable">
                                                    <div className="vtable-cell">
                                                      <div className="box-content">
                                                        <h4
                                                          className="box-title pbtsize-1 fwglobal lhglobal"
                                                          style={{
                                                            fontSize: "1.4rem",
                                                          }}
                                                        >
                                                          <span className="box-title-text">
                                                            Cloud playgrounds
                                                          </span>
                                                        </h4>
                                                        <div className="box-desc">
                                                          Etiam tortor leo,
                                                          hendrerit vel lobortis
                                                          id, finibus ac nulla.
                                                          Vivamus gravida metus
                                                          quam, quis condimentum
                                                          erat dapibus nec.
                                                        </div>
                                                        <span className="theme-boximg-color" />
                                                        <div className="box-readmore">
                                                          <Link
                                                            className="boxlink mb2-pb-btn typeprimary sizenormal rounded-1 btnborder0 fwglobal"
                                                            to="/quiz"
                                                            style={{
                                                              "--mb2-pb-btn-bgcolor":
                                                                "rgb(0, 180, 216)",
                                                              "--mb2-pb-btn-bghcolor":
                                                                "rgb(0, 167, 203)",
                                                            }}
                                                          >
                                                            Go to Quiz
                                                          </Link>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="theme-boximg-color" />
                                              <div
                                                className="theme-boximg-imgel lazy"
                                                data-bg="../../pluginfile.php/1/local_mb2builder/images/cloud-playgrounds.jpg"
                                              >
                                                <div
                                                  className="gradient-el gradient-left"
                                                  style={{
                                                    backgroundImage:
                                                      "linear-gradient(                                                          to right,                                                          rgba(                                                            0,                                                            180,                                                            216,                                                            0.05                                                          ),                                                          rgba(255, 255, 255, 0)                                                        )",
                                                  }}
                                                />
                                                <div
                                                  className="gradient-el gradient-right"
                                                  style={{
                                                    backgroundImage:
                                                      "linear-gradient(                                                          to right,                                                          rgba(                                                            255,                                                            255,                                                            255,                                                            0                                                          ),                                                          rgba(                                                            0,                                                            180,                                                            216,                                                            0.05                                                          )                                                        )",
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="theme-box el_onmobile1">
                                            <div
                                              className="theme-boximg position-relative"
                                              style={{
                                                "--mb2-pb-bxborder": "2px",
                                              }}
                                            >
                                              <div className="box-allcontent">
                                                <div className="box-image">
                                                  <img
                                                    alt="Professional certificates"
                                                    className="theme-boximg-img lazy"
                                                    data-src="https://lmsstyle.com/theme/new-learning/pluginfile.php/1/local_mb2builder/images/professional-certificates.jpg"
                                                    src="https://lmsstyle.com/theme/new-learning/theme/image.php/mb2nl/theme/1768588523/lazy_placeholder"
                                                    style={{
                                                      maxWidth: "800px",
                                                    }}
                                                  />
                                                </div>
                                                <div className="vtable-wrapp">
                                                  <div className="vtable">
                                                    <div className="vtable-cell">
                                                      <div className="box-content">
                                                        <h4
                                                          className="box-title pbtsize-1 fwglobal lhglobal"
                                                          style={{
                                                            fontSize: "1.4rem",
                                                          }}
                                                        >
                                                          <span className="box-title-text">
                                                            Professional
                                                            certificates
                                                          </span>
                                                        </h4>
                                                        <div className="box-desc">
                                                          Etiam tortor leo,
                                                          hendrerit vel lobortis
                                                          id, finibus ac nulla.
                                                          Vivamus gravida metus
                                                          quam, quis condimentum
                                                          erat dapibus nec.
                                                        </div>
                                                        <span className="theme-boximg-color" />
                                                        <div className="box-readmore">
                                                          <Link
                                                            className="boxlink mb2-pb-btn typeprimary sizenormal rounded-1 btnborder0 fwglobal"
                                                            to="/flip"
                                                            style={{
                                                              "--mb2-pb-btn-bgcolor":
                                                                "rgb(54, 38, 178)",
                                                              "--mb2-pb-btn-bghcolor":
                                                                "rgb(41, 25, 165)",
                                                            }}
                                                          >
                                                            Play Flip card
                                                          </Link>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="theme-boximg-color" />
                                              <div
                                                className="theme-boximg-imgel lazy"
                                                data-bg="../../pluginfile.php/1/local_mb2builder/images/professional-certificates.jpg"
                                              >
                                                <div
                                                  className="gradient-el gradient-left"
                                                  style={{
                                                    backgroundImage:
                                                      "linear-gradient(                                                          to right,                                                          ,                                                          rgba(255, 255, 255, 0)                                                        )",
                                                  }}
                                                />
                                                <div
                                                  className="gradient-el gradient-right"
                                                  style={{
                                                    backgroundImage:
                                                      "linear-gradient(                                                          to right,                                                          rgba(255, 255, 255, 0)                                                        )",
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="theme-box el_onmobile1">
                                            <div
                                              className="theme-boximg position-relative"
                                              style={{
                                                "--mb2-pb-bxbgcolor":
                                                  "rgba(                                                      255,                                                      178,                                                      0,                                                      0.05                                                    )",
                                                "--mb2-pb-bxbocolor":
                                                  "rgb(                                                      255,                                                      178,                                                      0                                                    )",
                                                "--mb2-pb-bxborder": "2px",
                                              }}
                                            >
                                              <div className="box-allcontent">
                                                <div className="box-image">
                                                  <img
                                                    alt="Learn with experts"
                                                    className="theme-boximg-img lazy"
                                                    data-src="https://lmsstyle.com/theme/new-learning/pluginfile.php/1/local_mb2builder/images/learn-with-experts.jpg"
                                                    src="https://lmsstyle.com/theme/new-learning/theme/image.php/mb2nl/theme/1768588523/lazy_placeholder"
                                                    style={{
                                                      maxWidth: "800px",
                                                    }}
                                                  />
                                                </div>
                                                <div className="vtable-wrapp">
                                                  <div className="vtable">
                                                    <div className="vtable-cell">
                                                      <div className="box-content">
                                                        <h4
                                                          className="box-title pbtsize-1 fwglobal lhglobal"
                                                          style={{
                                                            fontSize: "1.4rem",
                                                          }}
                                                        >
                                                          <span className="box-title-text">
                                                            Learn with experts
                                                          </span>
                                                        </h4>
                                                        <div className="box-desc">
                                                          Etiam tortor leo,
                                                          hendrerit vel lobortis
                                                          id, finibus ac nulla.
                                                          Vivamus gravida metus
                                                          quam, quis condimentum
                                                          erat dapibus nec.
                                                        </div>
                                                        <span className="theme-boximg-color" />
                                                        <div className="box-readmore">
                                                          <a
                                                            className="boxlink mb2-pb-btn typeprimary sizenormal rounded-1 btnborder0 fwglobal"
                                                            href="#"
                                                            style={{
                                                              "--mb2-pb-btn-bgcolor":
                                                                "rgb(                                                                    255,                                                                    178,                                                                    0                                                                  )",
                                                              "--mb2-pb-btn-bghcolor":
                                                                "rgb(                                                                    242,                                                                    165,                                                                    0                                                                  )",
                                                              "--mb2-pb-btn-color":
                                                                "rgb(                                                                    36,                                                                    32,                                                                    39                                                                  )",
                                                              "--mb2-pb-btn-hcolor":
                                                                "rgb(                                                                    36,                                                                    32,                                                                    39                                                                  )",
                                                            }}
                                                          >
                                                            Read more
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="theme-boximg-color" />
                                              <div
                                                className="theme-boximg-imgel lazy"
                                                data-bg="../../pluginfile.php/1/local_mb2builder/images/learn-with-experts.jpg"
                                              >
                                                <div
                                                  className="gradient-el gradient-left"
                                                  style={{
                                                    backgroundImage:
                                                      "linear-gradient(                                                          to right,                                                          rgba(                                                            255,                                                            178,                                                            0,                                                            0.05                                                          ),                                                          rgba(255, 255, 255, 0)                                                        )",
                                                  }}
                                                />
                                                <div
                                                  className="gradient-el gradient-right"
                                                  style={{
                                                    backgroundImage:
                                                      "linear-gradient(                                                          to right,                                                          rgba(                                                            255,                                                            255,                                                            255,                                                            0                                                          ),                                                          rgba(                                                            255,                                                            178,                                                            0,                                                            0.05                                                          )                                                        )",
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="mb2-pb-row pre-bg0 light bgfixed0 wave-none va0 bgfixed0 wavefliph0 wavepos0 colgutter-s parallax0 heroimg0 herovcenter herogradl0 herogradr0 bgtextmob0 waveover1 heroonsmall1 bordert0 borderb0 borderfw1 obgimg1 heroisvideo isfw0 nobg rowpt-50 rowpb-0"
                            style={{
                              "--mb-pb-row_bbcolor": "#dddddd",
                              "--mb-pb-row_bbw": "1px",
                              "--mb-pb-row_btcolor": "#dddddd",
                              "--mb-pb-row_btw": "1px",
                              "--mb-pb-row_pb": "0px",
                              "--mb-pb-row_pt": "50px",
                              marginTop: "0px",
                            }}
                          >
                            <div className="section-inner mb2-pb-row-inner">
                              <div className="row-topgap w-100" />
                              <div className="container-fluid">
                                <div className="row">
                                  <div className="mb2-pb-column col-lg-12 noempty light align-none aligncnone mobcenter1 moborder0">
                                    <div
                                      className="column-inner"
                                      style={{
                                        maxWidth: "2000px",
                                        paddingBottom: "30px",
                                      }}
                                    >
                                      <div className="clearfix">
                                        <div
                                          className="mb2-pb-ba position-relative align-items-end imgpos-left iscontent1 imgcrop0 imgvalignend imgonsm0 rounded0 shadow1 paddingnormal d-flex flex-column justify-content-center"
                                          style={{
                                            "--mb-pb-ba_bgcolor":
                                              "rgb(                                                  211,                                                  235,                                                  240                                                )",
                                            "--mb-pb-ba_color":
                                              "rgb(                                                  79,                                                  76,                                                  81                                                )",
                                            "--mb-pb-ba_cwidth": "610px",
                                            "--mb-pb-ba_imghpos": "-3%",
                                            "--mb-pb-ba_tcolor":
                                              "rgb(                                                  36,                                                  32,                                                  39                                                )",
                                            backgroundImage:
                                              'url("https://lmsstyle.com/theme/new-learning/theme/image.php/mb2nl/local_mb2builder/1722369476/sample-data/2024/07/bg_shape_yellow")',
                                            marginBottom: "30px",
                                            minHeight: "477px",
                                          }}
                                        >
                                          <div className="mb2-pb-ba_inner position-relative">
                                            <div className="mb2-pb-ba_title">
                                              <h4
                                                className="ba_title title mb-0 pbtsize-2 fwglobal lhglobal"
                                                style={{
                                                  fontSize: "2.3rem",
                                                }}
                                              >
                                                <span className="title-text">
                                                  Programming certifications to
                                                  improve your job and career
                                                  prospects
                                                </span>
                                              </h4>
                                            </div>
                                            <div
                                              className="mb2-pb-ba_content fwglobal lhglobal"
                                              style={{
                                                fontSize: "1rem",
                                                marginTop: "1.9rem",
                                              }}
                                            >
                                              <p>
                                                Phasellus condimentum sem ut
                                                nisi rhoncus, non dignissim est
                                                lacinia. Suspendisse quis nibh
                                                euismod, vulputate nisl sit
                                                amet, aliquet purus. Integer
                                                sagittis augue tortor, id
                                                molestie dui ornare quis.
                                                Vestibulum id enim varius dui
                                                gravida tincidunt.
                                              </p>
                                              <img
                                                alt="demo_certificates.png"
                                                src={demoCert}
                                                style={{
                                                  marginTop: "0.9rem",
                                                }}
                                                width="280"
                                              />
                                            </div>
                                            <div
                                              className="mb2-pb-ba_btn"
                                              style={{
                                                marginTop: "2.1rem",
                                              }}
                                            >
                                              <a
                                                className="mb2-pb-btn sizexlg rounded-1 btnborder0"
                                                href="#"
                                                style={{
                                                  "--mb2-pb-btn-bgcolor":
                                                    "rgb(                                                        54,                                                        38,                                                        178                                                      )",
                                                  "--mb2-pb-btn-bghcolor":
                                                    "rgb(                                                        41,                                                        25,                                                        165                                                      )",
                                                }}
                                              >
                                                Request info
                                              </a>
                                            </div>
                                          </div>
                                          <div
                                            aria-hidden="true"
                                            className="ba_img d-flex position-absolute w-100 h-100"
                                          >
                                            <div className="ba_img2 d-flex position-relative w-100">
                                              <div
                                                className="ba_img3 position-absolute"
                                                style={{
                                                  "--mb2-pb-ba_imgmt": "0px",
                                                  width: "464px",
                                                }}
                                              >
                                                <img
                                                  alt="Programming certifications to improve your job and career prospects"
                                                  className="ba_img_img lazy"
                                                  data-src="https://lmsstyle.com/theme/new-learning/pluginfile.php/1/local_mb2builder/images/programming_banner_01.png"
                                                  src="https://lmsstyle.com/theme/new-learning/theme/image.php/mb2nl/theme/1768588523/lazy_placeholder_big"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="mb2-pb-row pre-bg0 light bgfixed0 wave-none va0 bgfixed0 wavefliph0 wavepos0 colgutter-s parallax0 heroimg0 herovcenter herogradl0 herogradr0 bgtextmob0 waveover1 heroonsmall1 bordert0 borderb0 borderfw1 obgimg1 heroisvideo isfw0 nobg rowpt-50 rowpb-50"
                            style={{
                              "--mb-pb-row_bbcolor": "#dddddd",
                              "--mb-pb-row_bbw": "1px",
                              "--mb-pb-row_btcolor": "#dddddd",
                              "--mb-pb-row_btw": "1px",
                              "--mb-pb-row_pb": "50px",
                              "--mb-pb-row_pt": "50px",
                              marginTop: "0px",
                            }}
                          >
                            <div className="section-inner mb2-pb-row-inner">
                              <div className="row-topgap w-100" />
                              <div className="container-fluid">
                                <div className="row">
                                  <div className="mb2-pb-column col-lg-12 noempty light align-none aligncnone mobcenter0 moborder0">
                                    <div
                                      className="column-inner"
                                      style={{
                                        maxWidth: "2000px",
                                        paddingBottom: "30px",
                                      }}
                                    >
                                      <div className="clearfix">
                                        <h4
                                          className="heading heading-none upper0 fwglobal lhglobal pbtsize-2"
                                          id="typed_69724aa544919"
                                          style={{
                                            "--mb2-pb-heading-tbshadow": "0px",
                                            "--mb2-pb-heading-tcshadow":
                                              "transparent",
                                            "--mb2-pb-heading-thshadow":
                                              "0.06em",
                                            "--mb2-pb-heading-tvshadow":
                                              "0.04em",
                                            fontSize: "2.3rem",
                                            marginBottom: "50px",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            marginTop: "0px",
                                            maxWidth: "2000px",
                                          }}
                                        >
                                          <span className="headingtext fwglobal nline0">
                                            Most popular courses
                                          </span>
                                        </h4>
                                        <div
                                          className="mb2-pb-content mb2-pb-courses clearfix prestylenone"
                                          data-animtime="450"
                                          data-animtype="slide"
                                          data-autoplay="0"
                                          data-columns="4"
                                          data-gutter="normal"
                                          data-i2load="courses"
                                          data-lang_next="Next slide"
                                          data-lang_pagination="Go to slide"
                                          data-lang_prev="Previous slide"
                                          data-lang_slide="slide"
                                          data-margin="30"
                                          data-mobcolumns="0"
                                          data-options="%7B%22limit%22%3A%228%22%2C%22catids%22%3A%22%22%2C%22courseids%22%3A%22%22%2C%22excourses%22%3A%220%22%2C%22tagids%22%3A%22%22%2C%22extags%22%3A%220%22%2C%22instids%22%3A%22%22%2C%22exinst%22%3A%220%22%2C%22lazy%22%3A0%2C%22mobcolumns%22%3A0%2C%22excats%22%3A%220%22%2C%22carousel%22%3A%221%22%2C%22columns%22%3A%224%22%2C%22sdots%22%3A%220%22%2C%22sloop%22%3A%220%22%2C%22snav%22%3A%221%22%2C%22sautoplay%22%3A1%2C%22autoplay%22%3A%220%22%2C%22spausetime%22%3A5000%2C%22pausetime%22%3A%225000%22%2C%22sanimate%22%3A600%2C%22animtime%22%3A%22450%22%2C%22desclimit%22%3A%2225%22%2C%22titlelimit%22%3A%226%22%2C%22gridwidth%22%3A%22normal%22%2C%22gutter%22%3A%22normal%22%2C%22linkbtn%22%3A%220%22%2C%22btntext%22%3A%22%22%2C%22prestyle%22%3A%22none%22%2C%22custom_class%22%3A%22%22%2C%22colors%22%3A%22%22%2C%22cistyle%22%3A%22la%22%2C%22crounded%22%3A%220%22%2C%22mt%22%3A%220%22%2C%22mb%22%3A%2230%22%2C%22coursestudentscount%22%3A%221%22%2C%22coursinstructor%22%3A%221%22%2C%22courseprice%22%3A%221%22%2C%22touchmove%22%3A0%7D"
                                          data-pausetime="5000"
                                          data-sdots="0"
                                          data-sesskey="E1VhFrTnr9"
                                          data-sloop="0"
                                          data-snav="1"
                                          data-touchmove="0"
                                          style={{
                                            marginBottom: "30px",
                                          }}
                                        >
                                          <div
                                            className="mb2-pb-content-inner clearfix swiper"
                                            id="swiper_69724aa544933"
                                          >
                                            <div className="theme-carousel-nav">
                                              <button
                                                aria-label="Prev"
                                                className="swiper-button-nav swiper-button-prev swiper-prevjs_swiper_69724aa544933 d-inline-flex justify-content-center align-items-center themereset"
                                                type="button"
                                              />
                                              <button
                                                aria-label="Next"
                                                className="swiper-button-nav swiper-button-next swiper-nextjs_swiper_69724aa544933 d-inline-flex justify-content-center align-items-center themereset"
                                                type="button"
                                              />
                                            </div>
                                            <div className="theme-carousel-pagenavnav">
                                              <div className="swiper-pagination" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="mb2-pb-row pre-bg0 dark bgfixed0 wave-none va0 bgfixed0 wavefliph0 wavepos0 colgutter-s parallax0 heroimg0 herovcenter herogradl0 herogradr0 bgtextmob0 waveover1 heroonsmall1 bordert0 borderb0 borderfw1 obgimg0 heroisvideo isfw0 lazy isbg rowpt-100 rowpb-50"
                            data-bg="https://lmsstyle.com/theme/new-learning/theme/image.php/mb2nl/local_mb2builder/1722369476/sample-data/2024/07/bg_shape_white"
                            style={{
                              "--mb-pb-row_bbcolor": "#dddddd",
                              "--mb-pb-row_bbw": "1px",
                              "--mb-pb-row_bgcolor": "rgb(54, 38, 178)",
                              "--mb-pb-row_btcolor": "#dddddd",
                              "--mb-pb-row_btw": "1px",
                              "--mb-pb-row_pb": "50px",
                              "--mb-pb-row_pt": "110px",
                              marginTop: "0px",
                            }}
                          >
                            <div className="section-inner mb2-pb-row-inner">
                              <div className="row-topgap w-100" />
                              <div className="container-fluid">
                                <div className="row">
                                  <div className="mb2-pb-column col-lg-12 noempty light align-none aligncnone mobcenter0 moborder0">
                                    <div
                                      className="column-inner"
                                      style={{
                                        maxWidth: "2000px",
                                        paddingBottom: "30px",
                                      }}
                                    >
                                      <div className="clearfix">
                                        <h4
                                          className="heading heading-none upper0 fwglobal lhglobal pbtsize-2"
                                          id="typed_69724aa544ad4"
                                          style={{
                                            "--mb2-pb-heading-tbshadow": "0px",
                                            "--mb2-pb-heading-tcshadow":
                                              "transparent",
                                            "--mb2-pb-heading-thshadow":
                                              "0.06em",
                                            "--mb2-pb-heading-tvshadow":
                                              "0.04em",
                                            fontSize: "2.3rem",
                                            marginBottom: "50px",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            marginTop: "0px",
                                            maxWidth: "2000px",
                                          }}
                                        >
                                          <span className="headingtext fwglobal nline0">
                                            Most popular courses
                                          </span>
                                        </h4>
                                        <div className="theme-boxes theme-boxesicon type-6 gutter-normal theme-col-4 smtitle1 rounded0 wave0 paddingm linkbtn1 btnhor0 theme-boxesicon shadow0 itemlink0 tcenter0 boxcolor-primary center0 clearfix">
                                          <div className="theme-box">
                                            <div className="theme-boxicon position-relative">
                                              <div className="theme-boxicon-inner">
                                                <div className="theme-boxicon-icon">
                                                  <i className="bi bi-hand-thumbs-up" />
                                                </div>
                                                <div className="theme-boxicon-content">
                                                  <h4
                                                    className="box-title m-0 fwglobal lhglobal pbtsize-1"
                                                    style={{
                                                      fontSize: "1.4rem",
                                                    }}
                                                  >
                                                    Learn from Industry experts
                                                  </h4>
                                                  <div className="box-desc">
                                                    Curabitur aliquet quam id
                                                    posuere blandit. Vestibulum
                                                    ac diam sit.
                                                  </div>
                                                  <div className="box-readmore">
                                                    <a
                                                      className="arrowlink"
                                                      href="#"
                                                      style={{
                                                        "--mb2-pb-btn-color":
                                                          "rgb(                                                              255,                                                              178,                                                              0                                                            )",
                                                        "--mb2-pb-btn-hcolor":
                                                          "rgb(                                                              242,                                                              165,                                                              0                                                            )",
                                                      }}
                                                    >
                                                      Read more
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="bigicon d-none">
                                                <i className="bi bi-hand-thumbs-up" />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="theme-box">
                                            <div className="theme-boxicon position-relative">
                                              <div className="theme-boxicon-inner">
                                                <div className="theme-boxicon-icon">
                                                  <i className="bi bi-lightbulb" />
                                                </div>
                                                <div className="theme-boxicon-content">
                                                  <h4
                                                    className="box-title m-0 fwglobal lhglobal pbtsize-1"
                                                    style={{
                                                      fontSize: "1.4rem",
                                                    }}
                                                  >
                                                    Share knowledge and ideas
                                                  </h4>
                                                  <div className="box-desc">
                                                    Curabitur aliquet quam dui
                                                    posuere blandit. Vestibulum
                                                    ac diam.
                                                  </div>
                                                  <div className="box-readmore">
                                                    <a
                                                      className="arrowlink"
                                                      href="#"
                                                      style={{
                                                        "--mb2-pb-btn-color":
                                                          "rgb(                                                              255,                                                              178,                                                              0                                                            )",
                                                        "--mb2-pb-btn-hcolor":
                                                          "rgb(                                                              242,                                                              165,                                                              0                                                            )",
                                                      }}
                                                    >
                                                      Read more
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="bigicon d-none">
                                                <i className="bi bi-lightbulb" />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="theme-box">
                                            <div className="theme-boxicon position-relative">
                                              <div className="theme-boxicon-inner">
                                                <div className="theme-boxicon-icon">
                                                  <i className="bi bi-cup-hot" />
                                                </div>
                                                <div className="theme-boxicon-content">
                                                  <h4
                                                    className="box-title m-0 fwglobal lhglobal pbtsize-1"
                                                    style={{
                                                      fontSize: "1.4rem",
                                                    }}
                                                  >
                                                    Learn at your own pace
                                                  </h4>
                                                  <div className="box-desc">
                                                    Curabitur aliquet quam dui
                                                    posuere blandit. Vestibulum
                                                    ac diam.
                                                  </div>
                                                  <div className="box-readmore">
                                                    <a
                                                      className="arrowlink"
                                                      href="#"
                                                      style={{
                                                        "--mb2-pb-btn-color":
                                                          "rgb(                                                              255,                                                              178,                                                              0                                                            )",
                                                        "--mb2-pb-btn-hcolor":
                                                          "rgb(                                                              242,                                                              165,                                                              0                                                            )",
                                                      }}
                                                    >
                                                      Read more
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="bigicon d-none">
                                                <i className="bi bi-cup-hot" />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="theme-box">
                                            <div className="theme-boxicon position-relative">
                                              <div className="theme-boxicon-inner">
                                                <div className="theme-boxicon-icon">
                                                  <i className="bi bi-award" />
                                                </div>
                                                <div className="theme-boxicon-content">
                                                  <h4
                                                    className="box-title m-0 fwglobal lhglobal pbtsize-1"
                                                    style={{
                                                      fontSize: "1.4rem",
                                                    }}
                                                  >
                                                    Earn a certificate with
                                                    every course
                                                  </h4>
                                                  <div className="box-desc">
                                                    Curabitur aliquet quam dui
                                                    posuere blandit. Vestibulum
                                                    ac diam.
                                                  </div>
                                                  <div className="box-readmore">
                                                    <a
                                                      className="arrowlink"
                                                      href="#"
                                                      style={{
                                                        "--mb2-pb-btn-color":
                                                          "rgb(                                                              255,                                                              178,                                                              0                                                            )",
                                                        "--mb2-pb-btn-hcolor":
                                                          "rgb(                                                              242,                                                              165,                                                              0                                                            )",
                                                      }}
                                                    >
                                                      Read more
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="bigicon d-none">
                                                <i className="bi bi-award" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="mb2-pb-row pre-bg0 light bgfixed0 wave-none va0 bgfixed0 wavefliph0 wavepos0 colgutter-s parallax0 heroimg1 herovcenter herogradl0 herogradr0 bgtextmob0 waveover1 heroonsmall0 bordert0 borderb0 borderfw1 obgimg1 heroisimg isfw0 nobg rowpt-100 rowpb-50"
                            style={{
                              "--mb-pb-row_bbcolor": "#dddddd",
                              "--mb-pb-row_bbw": "1px",
                              "--mb-pb-row_btcolor": "#dddddd",
                              "--mb-pb-row_btw": "1px",
                              "--mb-pb-row_pb": "50px",
                              "--mb-pb-row_pt": "110px",
                              marginTop: "0px",
                            }}
                          >
                            <div className="section-inner mb2-pb-row-inner">
                              <div className="row-topgap w-100" />
                              <div className="container-fluid">
                                <div className="row">
                                  <div className="mb2-pb-column col-lg-12 noempty light align-none aligncnone mobcenter0 moborder0">
                                    <div
                                      className="column-inner"
                                      style={{
                                        maxWidth: "657px",
                                        paddingBottom: "30px",
                                      }}
                                    >
                                      <div className="clearfix">
                                        <div
                                          className="theme-text"
                                          style={{
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            maxWidth: "2000px",
                                          }}
                                        >
                                          <div
                                            className="theme-text-inner align-none text-rgb(0, 180, 216) rounded0 gradient0 light"
                                            style={{
                                              "--mb2-pb-graddeg": "180deg",
                                            }}
                                          >
                                            <div
                                              className="theme-text-text upper0 fwbold lhglobal"
                                              style={{
                                                color: "rgb(0, 180, 216)",
                                                fontSize: "1rem",
                                              }}
                                            >
                                              <p>
                                                Mattis pretium erat torquent
                                                fermentum?
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <h4
                                          className="heading heading-none upper0 fwglobal lhglobal pbtsize-2"
                                          id="typed_69724aa544c2f"
                                          style={{
                                            "--mb2-pb-heading-tbshadow": "0px",
                                            "--mb2-pb-heading-tcshadow":
                                              "transparent",
                                            "--mb2-pb-heading-thshadow":
                                              "0.06em",
                                            "--mb2-pb-heading-tvshadow":
                                              "0.04em",
                                            fontSize: "2.3rem",
                                            marginBottom: "30px",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            marginTop: "0px",
                                            maxWidth: "2000px",
                                          }}
                                        >
                                          <span className="headingtext fwglobal nline0">
                                            Get started with New Learning
                                          </span>
                                        </h4>
                                        <div
                                          className="theme-text"
                                          style={{
                                            marginBottom: "30px",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            maxWidth: "1994px",
                                          }}
                                        >
                                          <div
                                            className="theme-text-inner align-none text- rounded0 gradient0 light"
                                            style={{
                                              "--mb2-pb-graddeg": "180deg",
                                            }}
                                          >
                                            <div
                                              className="theme-text-text upper0 fwglobal lhglobal"
                                              style={{
                                                fontSize: "1rem",
                                              }}
                                            >
                                              <p>
                                                Dictumst vivamus donec faucibus
                                                lectus arcu hendrerit. Facilisis
                                                porttitor congue odio blandit
                                                luctus? Pulvinar, arcu convallis
                                                nec porttitor interdum dictumst.
                                                Cursus blandit ullamcorper erat.
                                                Curabitur laoreet scelerisque
                                                fringilla.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="mb2-pb-listicon"
                                          style={{
                                            marginBottom: "40px",
                                          }}
                                        >
                                          <ul
                                            className="theme-listicon mb2-pb-sortable-subelements iconbg1 horizontal2 border0 fwbold alignnone"
                                            style={{
                                              "--mb2-pb-listicon-fs": "1rem",
                                              "--mb2-pb-listicon-isize":
                                                "2.65rem",
                                              "--mb2-pb-listicon-space":
                                                "1.93rem",
                                            }}
                                          >
                                            <li className="mb2-pb-listicon_item">
                                              <div className="item-content">
                                                <span
                                                  className="iconel d-inline-flex justify-content-center align-items-center"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(                                                          255,                                                          178,                                                          0                                                        )",
                                                    color: "rgb(54, 38, 178)",
                                                  }}
                                                >
                                                  <i className="bi bi-check-lg" />
                                                </span>
                                                <span
                                                  className="list-text"
                                                  style={{
                                                    color: "rgb(32, 36, 39)",
                                                  }}
                                                >
                                                  A broad and robust
                                                  understanding of programming.
                                                </span>
                                              </div>
                                            </li>
                                            <li className="mb2-pb-listicon_item">
                                              <div className="item-content">
                                                <span
                                                  className="iconel d-inline-flex justify-content-center align-items-center"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(                                                          255,                                                          178,                                                          0                                                        )",
                                                    color: "rgb(54, 38, 178)",
                                                  }}
                                                >
                                                  <i className="bi bi-check-lg" />
                                                </span>
                                                <span
                                                  className="list-text"
                                                  style={{
                                                    color: "rgb(32, 36, 39)",
                                                  }}
                                                >
                                                  Experience sample mentorship
                                                  sessions with data science
                                                  experts.
                                                </span>
                                              </div>
                                            </li>
                                            <li className="mb2-pb-listicon_item">
                                              <div className="item-content">
                                                <span
                                                  className="iconel d-inline-flex justify-content-center align-items-center"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(                                                          255,                                                          178,                                                          0                                                        )",
                                                    color: "rgb(54, 38, 178)",
                                                  }}
                                                >
                                                  <i className="bi bi-check-lg" />
                                                </span>
                                                <span
                                                  className="list-text"
                                                  style={{
                                                    color: "rgb(32, 36, 39)",
                                                  }}
                                                >
                                                  Developing problem-solving
                                                  skills using programming
                                                  languages.
                                                </span>
                                              </div>
                                            </li>
                                            <li className="mb2-pb-listicon_item">
                                              <div className="item-content">
                                                <span
                                                  className="iconel d-inline-flex justify-content-center align-items-center"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(                                                          255,                                                          178,                                                          0                                                        )",
                                                    color: "rgb(54, 38, 178)",
                                                  }}
                                                >
                                                  <i className="bi bi-check-lg" />
                                                </span>
                                                <span
                                                  className="list-text"
                                                  style={{
                                                    color: "rgb(32, 36, 39)",
                                                  }}
                                                >
                                                  Mastering syntax and
                                                  programming concepts.
                                                </span>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                        <a
                                          className="mb2-pb-btn typeprimary sizexlg rounded-1 btnborder0 isicon0 upper0 fwglobal iafter0"
                                          href="#"
                                          style={{
                                            "--mb2-pb-btn-bgcolor":
                                              "rgb(                                                  54,                                                  38,                                                  178                                                )",
                                            "--mb2-pb-btn-bghcolor":
                                              "rgb(                                                  41,                                                  25,                                                  165                                                )",
                                            marginBottom: "30px",
                                          }}
                                        >
                                          <span className="btn-intext">
                                            Read more
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div aria-hidden="true" className="hero-img-wrap">
                                <div className="hero-img-wrap2">
                                  <div
                                    className="hero-img-wrap3"
                                    style={{
                                      "--mb2-pb-herovm": "0px",
                                      right: "-3%",
                                      width: "540px",
                                    }}
                                  >
                                    <img
                                      alt=""
                                      className="hero-img lazy"
                                      data-src="https://lmsstyle.com/theme/new-learning/pluginfile.php/1/local_mb2builder/images/programming_hero_03.png"
                                      src="https://lmsstyle.com/theme/new-learning/theme/image.php/mb2nl/theme/1768588523/lazy_placeholder_big"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Page Date */}
                    <span className="mb2-pb-pagedate sr-only">
                      Last modified: Friday, 23 May 2025, 12:58 AM
                    </span>

                    {/* Course Navigation */}
                    <div className="theme-coursenav flexcols"></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="mb2notices"></div>
      </div>
    </div>
  );
};

export default MainContent;
