import logo from "./images/pd_common_logo.gif";
import taxlogo from "./images/pd_taxRefund_logo.gif";
import pig from "./images/pd_taxRefund_mainImg.png";
import sns1 from "./images/pd_common_snsnav01.png";
import sns2 from "./images/pd_common_snsnav02.png";
import sns3 from "./images/pd_common_snsnav03.png";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const Step2 = () => {
  const useStyles = makeStyles({
    title: {
      // width: "100%",
      height: 200,
      textAlign: "center",
      fontSize: 20,
      lineHeight: 10,
      fontWeight: "bold",
      // margin: "0 auto",
      // verticalAlign: "middle",
      border: "solid 1px black",
    },
    stepbox: {
      width: 1000,
      height: 140,
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "row",
      margin: "0 auto",
    },
    stepcontent: {
      width: 140,
      height: 140,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      // alignContent: "center",
      border: "1px solid #EDEDED",
      borderRadius: 70,
      boxShadow: "2px 5px 10px rgba(0, 0, 0, 0.1);",
      backgroundColor: "#FFFFFF",
      textAlign: "center",
      " div:hover ": {
        backgroundColor: "#2B9460",
      },

      // marginLeft: "auto",
      // marginRight: "auto",
      // verticalAlign: "bottom",
    },
    content: {
      width: 1000,
    },
    hometaxbox: {
      marginTop: 100,
      width: 1000,
      height: 300,
    },
    tax1: {
      // float:"left"
      width: 600,
      height: 300,
      " & span ": {
        color: "#F39800",
      },
    },
    tax2: {
      width: 400,
      height: 300,
      border: "1px solid #EDEDED",
    },
  });

  const classes = useStyles();
  return (
    <div>
      <div className={classes.title}>연말정산 진행절차</div>
      <div className={classes.stepbox}>
        <div className={classes.stepcontent}>
          연말정산
          <br />
          정보확인
        </div>
        <div className={classes.stepcontent}>
          신고서 작성
          <br />및 제출
        </div>
        <div className={classes.stepcontent}>
          신고서
          <br />
          보완
        </div>
        <div className={classes.stepcontent}>
          연말정산
          <br />
          결과 확인
        </div>
        <div className={classes.stepcontent}>
          환급금
          <br />
          수령
        </div>
      </div>
      <div className={classes.hometaxbox}>
        <div className={classes.tax1}>
          <span style={{ fontSize: 28 }}>
            국세청 연말정산 PDF 다운받으셨나요?
          </span>
          <br />
          연말정산소득공제 PDF 다운로드 받기
          <br />
          국세청 홈택스 - 연말정산 간소화 소득공제 자료조회 - 공인인증서 로그인
        </div>
        <div className={classes.tax2}></div>
      </div>
    </div>
  );
};
export default Step2;
