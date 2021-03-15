import logo from "../images/pd_common_logo.gif";
import taxlogo from "../images/pd_taxRefund_logo.gif";
import React from "react";
import sns1 from "../images/pd_common_snsnav01.png";
import sns2 from "../images/pd_common_snsnav02.png";
import sns3 from "../images/pd_common_snsnav03.png";

import Modal from "@material-ui/core/Modal";
import DocumentInfo from "../component/DocumentInfo";
import TaxNotice from "../component/TaxNotice";
import YearIncome from "../component/YearIncome";

import { makeStyles } from "@material-ui/core/styles";

const Header = () => {
  const useStyles = makeStyles({
    header: {
      // position: "fixed",
      height: 120,
      width: "100%",
    },
    logotitle: {
      width: "100%",
      height: 60,
      display: "flex",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
    },
    logobox: {
      margin: "0 auto",
      width: 62,
      height: 40,
      backgroundColor: "#FFFFFF",
    },
    headbar: {
      width: "100%",
      height: 60,
      backgroundColor: "#F5F5F5",
    },
    menubar: {
      display: "flex",
      justifyContent: "space-evenly",
      width: "1000px",
      margin: "0 auto",
      height: 60,
    },

    menuli: {
      width: "15%",
      textAlign: "center",
      display: "inline-block",
      paddingTop: 18,
      fontWeight: 700,
      cursor: "pointer",
      listStyle: "none",

      " & a ": {
        color: "#333333",
        textDecoration: "none",
      },
      " &:hover ul": {
        //큰메뉴 호버시

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontWeight: "normal",
        padding: 0,

        "& a": {
          color: "black",
          textAlign: "center",
          fontSize: 13,
        },
      },
      "& ul": {
        position: "relative",
        backgroundColor: "#FFFFFF",
        display: "none",
        listStyle: "none",
        width: 150,
        height: 200,
        border: "1px solid #ddd",

        "& li": {
          listStyle: "none",
          width: 150,
          height: 50,
          margin: 0,
          padding: 0,
          display: "block",
          borderBottom: "0.5px solid #ddd",
          "&:hover": {
            backgroundColor: "#FFA714",
            "& a": {
              color: "white",
              fontWeight: "bold",
            },
          },
        },
        "& a": {
          color: "#FFFFFF",
          textAlign: "center",
          fontSize: 13,
        },
      },
    },

    snsbox: {
      width: 130,
      height: 30,
      display: "flex",
      justifyContent: "space-between",
      marginTop: 14,
      "& img": { width: 30, height: 30 },
    },

    mfooter: {
      margin: "0 auto",
      borderBottomRightRadius: "5px",
      borderBottomLeftRadius: "5px",
      width: 600,
      height: 44,
      fontSize: 14,
      textAlign: "right",
      backgroundColor: "#FFFFFF",
      borderTop: "1px solid #DDDDDD",
      "& p": {
        paddingRight: 20,
        color: "#1976D2",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: 14,
      },
    },
  });
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [modal, setModal] = React.useState(0);

  const handleOpen = (id) => {
    console.log("id", id);
    setModal(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalbody = (
    <>
      {modal === "1" ? (
        <DocumentInfo />
      ) : modal === "2" ? (
        <TaxNotice />
      ) : (
        <YearIncome />
      )}
    </>
  );

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logotitle}>
          <div className={classes.logobox}>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className={classes.headbar}>
          <nav className={classes.menubar}>
            <div style={{ display: "inline", float: "left" }}>
              <img
                src={taxlogo}
                alt="logo"
                style={{
                  paddingTop: 2,
                  marginTop: 20,
                  boxSizing: "border-box",
                }}
              />
            </div>
            <li className={classes.menuli}>
              <a href="#">연말정산 가이드</a>
              <ul>
                <li
                  style={{ boxSizing: "border-box", paddingTop: 10 }}
                  onClick={(e) => handleOpen("1")}
                >
                  <a>연말정산 제출서류 안내</a>
                </li>
                <li style={{ boxSizing: "border-box", paddingTop: 10 }}>
                  <a
                    href="https://www.youtube.com/watch?v=XvqiVomcsr4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    국세청 PDF 다운로드 방법
                  </a>
                </li>
                <li onClick={(e) => handleOpen("2")}>
                  <a>
                    국세청 간소화 <br />
                    서비스 유의사항
                  </a>
                </li>
                <li onClick={(e) => handleOpen("3")}>
                  <a>
                    연간 소득금액
                    <br /> 100만원 이하 요건
                  </a>
                </li>
              </ul>
            </li>
            <li className={classes.menuli}>
              <a href="#">근로소득 영수증발급</a>
            </li>
            <li className={classes.menuli}>
              <a href="#">서비스 문의하기</a>
            </li>

            <div className={classes.snsbox}>
              <a
                href="https://www.youtube.com/channel/UCdR2xKktD4R008_-FDO7SEQ/featured"
                title="월급날 tv 바로가기"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={sns1} alt="sns1" />
              </a>{" "}
              <a
                href="https://blog.naver.com/payday_2000"
                target="_blank"
                title="월급날 블로그 바로가기"
                rel="noopener noreferrer"
              >
                <img src={sns2} alt="sns2" />
              </a>{" "}
              <a
                href="https://www.today-payday.com/"
                title="월급날 뉴스레터 바로가기"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={sns3} alt="sns3" />
              </a>
            </div>
          </nav>
        </div>
      </header>
      {console.log("modal" + modal)}
      <Modal open={open} onClose={handleClose}>
        <>
          {modalbody}
          <div className={classes.mfooter}>
            <p onClick={handleClose}>확인</p>
          </div>
        </>
      </Modal>
    </div>
  );
};
export default Header;
