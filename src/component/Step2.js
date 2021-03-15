// import logo from "./images/pd_common_logo.gif";
import hometaxlogo from "../images/pd_taxRefund_hometaxLogo.jpg";
import arrow from "../images/arrow.jpg";
import greenicon from "../images/icon.jpg";

import { makeStyles } from "@material-ui/core/styles";

const Step2 = () => {
  const useStyles = makeStyles({
    title: {
      height: 200,
      textAlign: "center",
      fontSize: 24,
      lineHeight: 8,
      fontWeight: "bold",
      boxSizing: "boxSizing",
    },
    stepbox: {
      width: 1000,
      height: 140,
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "row",
      margin: "0 auto",
      cursor: "pointer",
    },
    stepcontent: {
      width: 140,
      height: 140,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #EDEDED",
      borderRadius: 70,
      boxShadow: "2px 5px 10px rgba(0, 0, 0, 0.1);",
      backgroundColor: "#FFFFFF",
      textAlign: "center",
      " &:hover ": {
        backgroundColor: "#2B9460",
        color: "#FFFFFF",
      },
    },
    content: {
      width: 1000,
    },
    hometaxbox: {
      display: "flex",
      marginTop: 100,
      margin: "0 auto",
      width: 1000,
      height: 300,
    },
    tax1: {
      width: 600,
      height: 300,
      " & span ": {
        fontSize: 18,
      },
    },
    tax2: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "baseline",
      margin: 0,
      width: 400,
      height: 300,
      boxShadow: "1px 4px 10px rgba(0, 0, 0, 0.15)",
      border: "1px solid #EDEDED",
      " & span ": {
        fontSize: 18,
      },
    },
    arrowstyle: {
      width: 35,
      height: 6,
      paddingTop: 70,
    },
  });

  const classes = useStyles();
  return (
    <div>
      <div style={{ height: 840 }}>
        <div className={classes.title}>연말정산 진행절차</div>
        <div className={classes.stepbox}>
          <div className={classes.stepcontent}>
            연말정산
            <br />
            정보확인
          </div>
          <img src={arrow} className={classes.arrowstyle} alt="arrow" />
          <div className={classes.stepcontent}>
            신고서 작성
            <br />및 제출
          </div>
          <img src={arrow} className={classes.arrowstyle} alt="arrow" />
          <div className={classes.stepcontent}>
            신고서
            <br />
            보완
          </div>
          <img src={arrow} className={classes.arrowstyle} alt="arrow" />
          <div className={classes.stepcontent}>
            연말정산
            <br />
            결과 확인
          </div>
          <img src={arrow} className={classes.arrowstyle} alt="arrow" />
          <div className={classes.stepcontent}>
            환급금
            <br />
            수령
          </div>
        </div>
        <div className={classes.hometaxbox}>
          <div className={classes.tax1}>
            <p
              style={{
                color: "#F39800",
                fontSize: 28,
                fontWeight: 700,
                paddingTop: 60,
                // lineHeight: 5,
              }}
            >
              국세청 연말정산 PDF 다운받으셨나요?
            </p>
            {/* <br /> */}
            <span>
              <b>연말정산소득공제 PDF 다운로드 받기</b>
              <br />
              국세청 홈택스 - 연말정산 간소화 소득공제 자료조회 - 공인인증서
              로그인
            </span>
          </div>
          <div className={classes.tax2}>
            <img
              src={hometaxlogo}
              alt="hometax"
              style={{ width: 200, height: 50, paddingLeft: 60 }}
            />
            <br />
            <span style={{ paddingLeft: 60 }}>
              국세청 홈택스
              <br /> 연말정산 간소화 서비스로 이동하기
            </span>
            <br />

            <a
              href="https://www.hometax.go.kr/websquare/websquare.wq?w2xPath=/ui/pp/index_pp.xml"
              target="_blank"
              alt="간소화 바로가기"
              style={{ textDecoration: "none", paddingLeft: 60 }}
              rel="noopener noreferrer"
            >
              <img
                src={greenicon}
                style={{ verticalAlign: "middle" }}
                alt="arrow"
              />
              <span
                style={{
                  color: "#2B9460",
                  verticalAlign: "top",
                  paddingLeft: 10,
                }}
              >
                이동하기
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Step2;
