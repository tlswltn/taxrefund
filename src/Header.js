import logo from "./images/pd_common_logo.gif";
import taxlogo from "./images/pd_taxRefund_logo.gif";
import React from "react";
import sns1 from "./images/pd_common_snsnav01.png";
import sns2 from "./images/pd_common_snsnav02.png";
import sns3 from "./images/pd_common_snsnav03.png";

import Modal from "@material-ui/core/Modal";
import DocumentInfo from "./DocumentInfo";
import TaxNotice from "./TaxNotice";
import Test from "./Test";
import ModalFooter from "./ModalFooter";

import { makeStyles } from "@material-ui/core/styles";

const Header = () => {
  const useStyles = makeStyles({
    header: {
      // position: "fixed",
      height: 120,
      width: "100%",
      // borderBottom: "1px solid #ddd",
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
      // float: "right",

      height: 60,
      backgroundColor: "#F5F5F5",
    },
    menubar: {
      display: "flex",
      // alignItems: "center",
      justifyContent: "space-evenly",
      width: "60%",
      // width: 1900,
      // display: "table",
      margin: "0 auto",
      height: 60,
      // backgroundColor: "red",
    },
    mnav: {
      marginLeft: 500,
      boxSizing: "border-box",
      height: 60,
      backgroundColor: "#F5F5F5",
    },
    snsnav: {
      //   display: "flex",
      width: "12%",
      height: 60,
      display: "inline-block",
    },
    menuli: {
      //   width: "auto",
      height: 60,
      width: "14%",
      textAlign: "center",
      display: "inline-block",
      paddingTop: 18,
      fontWeight: 700,
      cursor: "pointer",
      listStyle: "none",
      // margin: "0 auto",
      " & a ": {
        color: "black",
        textDecoration: "none",
        // "&:hover": {
        //   color: "red",
        // },
      },
      " &:hover ul": {
        //큰메뉴 호버시
        // "& ul": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyItems: "center",
        fontWeight: "normal",
        padding: 0,
        // },
        // color: "red",
        // backgroundColor: "#FFA714",
        // backgroundColor: "#FFFFFF",

        "& a": {
          color: "black",
          textAlign: "center",
          fontSize: 13,
          // lineHeight: "px",
        },
      },
      "& ul": {
        position: "relative",
        backgroundColor: "#FFFFFF",
        display: "none",
        listStyle: "none",
        float: "left",
        width: 166,
        height: 200,

        border: "1px solid #ddd",
        // margin: 0,
        // padding: 0,

        "& li": {
          // position: "absolute",
          // border: "1px solid black",
          listStyle: "none",
          float: "left",
          width: 166,
          height: 50,
          margin: 0,
          padding: 0,
          display: "block",
          borderBottom: "0.5px solid #ddd",
          // verticalAlign: "middle",
          "&:hover": {
            backgroundColor: "#FFA714",
            // color: "white",
            "& a": {
              // padding: "0px 10px 0px 15px",
              color: "white",
              fontWeight: "bold",
            },
          },
        },
        "& a": {
          color: "#FFFFFF",
          textAlign: "center",
          fontSize: 13,
          // lineHeight: "19px",
        },
      },
    },

    snsbox: {
      // border: "1px solid black",
      width: 130,
      height: 30,
      display: "flex",

      justifyContent: "space-between",
      marginTop: 14,
      // paddingTop: 10,
      // boxSizing: "border-box",
      "& img": { width: 30, height: 30 },
    },
    paper: {
      // position: "absolute",
      margin: "0 auto",
      width: 600,
      // height: "auto",
      // backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      // boxShadow: theme.shadows[5],
      // padding: theme.spacing(2, 4, 3),
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

  const body = (
    // <div>
    /* <TaxNotice /> */
    // <div style={{ overflowY: "auto" }}>
    <>
      {" "}
      {/* {modal === "1" ? <DocumentInfo /> : <Test /> } */}
      {modal === "1" ? (
        <DocumentInfo />
      ) : modal === "2" ? (
        <TaxNotice />
      ) : (
        <Test />
      )}
      {<ModalFooter />}
    </>
    // </div>

    //  {/* { <DocumentInfo /> } */}
    // {/* <h2 id="simple-modal-title">Text in a modal</h2>
    // <p id="simple-modal-description">
    //   Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    // </p> */}
    // {/* <SimpleModal /> */}
    // {/* <ModalFooter /> */}
  );

  // const body = (
  //   // <div>
  //   /* <TaxNotice /> */
  //   <div>{modal === "1" ? <DocumentInfo /> : <Test />}</div>

  //   //  {/* { <DocumentInfo /> } */}
  //   // {/* <h2 id="simple-modal-title">Text in a modal</h2>
  //   // <p id="simple-modal-description">
  //   //   Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //   // </p> */}
  //   // {/* <SimpleModal /> */}
  //   // {/* <ModalFooter /> */}
  // );

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logotitle}>
          <div className={classes.logobox}>
            <img
              src={logo}
              // className={classes.logobox}
              alt="logo"
              // align="center"
            />
          </div>
        </div>
        <div className={classes.headbar}>
          <nav className={classes.menubar}>
            {/* <nav className={classes.mnav}> */}
            {/* <ul style="none"> */}
            {/* <ul> */}
            <div style={{ display: "inline", float: "left" }}>
              <img
                src={taxlogo}
                //   className={classes.logobox}
                alt="logo"
                style={{
                  paddingTop: 2,
                  marginTop: 20,
                  boxSizing: "border-box",
                }}

                // align="center"
              />
            </div>
            <li className={classes.menuli}>
              <a href="#">연말정산 가이드</a>
              <ul>
                <li
                  style={{ boxSizing: "border-box", paddingTop: 10 }}
                  onClick={(e) => handleOpen("1")}
                >
                  <a href="#">연말정산 제출서류 안내</a>
                </li>
                <li style={{ boxSizing: "border-box", paddingTop: 10 }}>
                  <a
                    href="https://www.youtube.com/watch?v=XvqiVomcsr4"
                    target="_blank"
                  >
                    국세청 PDF 다운로드 방법
                  </a>
                </li>
                <li onClick={(e) => handleOpen("2")}>
                  <a href="#">
                    국세청 간소화 <br />
                    서비스 유의사항
                  </a>
                </li>
                <li onClick={(e) => handleOpen("3")}>
                  <a href="#">
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
            {/* <li className={classes.menuli}> */}

            {/* </li> */}
            {/* </li> */}
            {/* </ul> */}
            {/* </nav> */}
            {/* <nav className={classes.snsnav}>
            <ul>
              <li className={classes.menuli}>
                <img src={sns1} alt="logo" />
              </li>
              <li className={classes.menuli}>
                <img src={sns2} alt="logo" />
              </li>
              <li className={classes.menuli}>
                <img src={sns3} alt="logo" />
              </li>
            </ul>
          </nav> */}
            <div className={classes.snsbox}>
              <a
                href="https://www.youtube.com/channel/UCdR2xKktD4R008_-FDO7SEQ/featured"
                title="월급날 tv 바로가기"
                target="_blank"
              >
                <img src={sns1} alt="sns1" />
              </a>{" "}
              <a
                href="https://blog.naver.com/payday_2000"
                target="_blank"
                title="월급날 블로그 바로가기"
              >
                <img src={sns2} alt="sns2" />
              </a>{" "}
              <a
                href="https://www.today-payday.com/"
                title="월급날 뉴스레터 바로가기"
                target="_blank"
              >
                <img src={sns3} alt="sns3" />
              </a>
            </div>
          </nav>
        </div>
      </header>
      {console.log("modal" + modal)}
      <Modal
        open={open}
        onClose={handleClose}

        // aria-labelledby="simple-modal-title"
        // aria-describedby="simple-modal-description"
      >
        {/* {modal === "1" ? <DocumentInfo /> : <Test />} */}
        {body}
      </Modal>
    </div>
  );
};
export default Header;
