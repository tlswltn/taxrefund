import logo from "./images/pd_common_logo.gif";
import taxlogo from "./images/pd_taxRefund_logo.gif";
import pig from "./images/pd_taxRefund_mainImg.png";
import sns1 from "./images/pd_common_snsnav01.png";
import sns2 from "./images/pd_common_snsnav02.png";
import sns3 from "./images/pd_common_snsnav03.png";
import Button from "@material-ui/core/Button";
import Step2 from "./Step2";

import { makeStyles } from "@material-ui/core/styles";

const Header = () => {
  const useStyles = makeStyles({
    header: {
      //   position: "fixed",
      height: 120,
      width: "100%",
    },
    logotitle: {
      width: "100%",
      height: 60,
      display: "flex",
      alignItems: "center",
      // backgroundColor: "lightcoral",
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
      // width: "100%",

      // marginLeft: "auto",
      // marginRight: "auto",
      height: 60,
      backgroundColor: "#F5F5F5",
      // display: "inline-block",

      // alignItems: "center",
      // margin: "0 auto",
      //   marginLeft: 200,
      // textAlign: "center",
    },
    snsnav: {
      //   display: "flex",
      width: "12%",
      height: 60,
      display: "inline-block",
      //   verticalAlign: "middle",
      // alignItems: "center",
      //   paddingTop: 0,
      //   verticalAlign: "top",

      //   marginLeft: 200,
    },
    menuli: {
      //   width: "auto",
      height: 60,

      width: "16%",
      textAlign: "center",
      // lineHeight: 0,
      // float: "left",
      display: "inline-block",
      // align: "center",
      // alignItems: "center",
      // justifyContent: "center",
      // verticalAlign: "bottom",
      paddingTop: 15,
      fontWeight: 700,
      cursor: "pointer",
      listStyle: "none",
      // margin: "0 auto",
    },
    step1: {
      display: "flex",

      alignItems: "center",
      // justifyContent: "space-evenly",
      // margin: "0 auto",
      height: "100vh",
      width: "100%",
      backgroundColor: "#FFF9E3",
    },
    box1: {
      // display: "inline-block",
      // float: "left",
      width: "1000px",
      margin: "0 auto",
      // backgroundColor: "skyblue",
    },
    step1Left: {
      float: "left",
      paddingTop: 100,
      // paddingLeft: 40,
      // marg
      // margin: "0 auto",
      // marginLeft: 500,
      marginLeft: 25,
      boxSizing: "boxSizing",
      width: 380,
      height: 286,
      // border: "solid 1px black",
    },
    step1Right: {
      // float: "left",
      // margin: 0,
      marginRight: 3,
      // width: 400,
      // height: 286,
      // border: "solid 1px black",
    },
    btn: {
      backgroundColor: "#F39800",
      border: 1,
      borderRadius: 10,
      height: 50,
      color: "#FFFFFF",
      bottom: 0,
    },
    snsbox: {
      // width: 0,
      height: 45,
      display: "flex",
      // float: "right",
      // display: "inline",
      // maginLeft: 20,
      // alignItems: "flex-end",
      justifyContent: "space-between",
      // marginTop: 20,
      paddingTop: 10,
      boxSizing: "border-box",
      ".img": { width: 20, height: 10 },
    },
  });

  const classes = useStyles();
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
          <div className={classes.menubar}>
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
            <li className={classes.menuli}>연말정산 가이드</li>
            <li className={classes.menuli}>근로소득 영수증발급</li>
            <li className={classes.menuli}>서비스 문의하기</li>
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
              <img src={sns1} alt="sns1" /> <img src={sns2} alt="sns2" />{" "}
              <img src={sns3} alt="sns3" />
            </div>
          </div>
        </div>
      </header>

      <div className={classes.step1}>
        <div className={classes.box1}>
          <div className={classes.step1Left}>
            <span style={{ fontSize: 40, fontWeight: "bold" }}>
              안전하고 편리한
              <br /> <span style={{ color: "#F39800" }}>연말정산</span>을
              시작합니다
            </span>
            <p>
              막막하기만한 연말정산
              <br /> 이제 든든한 월급날과 함께 시작하세요!
            </p>
            <br />

            <Button className={classes.btn}>연말정산 START</Button>
          </div>
          <div className={classes.step1Right}>
            {" "}
            <img
              src={pig}
              // className={classes.logobox}
              alt="logo"
              // align="center"
            />
          </div>
        </div>
      </div>
      <Step2 />
    </div>
  );
};
export default Header;
