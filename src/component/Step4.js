import cam from "../images/pd_taxRefund_faq_icon01.jpg";
import what from "../images/pd_taxRefund_faq_icon02.jpg";

import faq from "../images/faqinfo.png";
import videoinfo1 from "../images/videoinfo1.png";

import out1 from "../images/pd_taxRefund_service_icon01_out.jpg";
import out2 from "../images/pd_taxRefund_service_icon02_out.jpg";
import out3 from "../images/pd_taxRefund_service_icon03_out.jpg";
import over1 from "../images/pd_taxRefund_service_icon01_over.jpg";
import over2 from "../images/pd_taxRefund_service_icon02_over.jpg";
import over3 from "../images/pd_taxRefund_service_icon03_over.jpg";

import { makeStyles } from "@material-ui/core/styles";
import { lightGreen } from "@material-ui/core/colors";
import { useState } from "react";

const Step4 = () => {
  const useStyles = makeStyles({
    title: {
      height: 200,
      textAlign: "center",
      fontSize: 24,
      lineHeight: 8,
      fontWeight: "bold",
      boxSizing: "boxSizing",
    },
    twobtnbox: {
      display: "flex",
      justifyContent: "space-between",
      width: 1000,
      height: 200,
      fontSize: 24,
      backgroundColor: lightGreen,
      margin: "0 auto",
    },
    bigbtnout: {
      width: 450,
      height: 200,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid #EDEDED",
      fontWeight: "bold",
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
      borderRadius: 20,
      cursor: "pointer",
      " &:hover ": {
        content: `url(${videoinfo1})`,
      },
    },
    bigbtnout2: {
      width: 450,
      height: 200,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid #EDEDED",
      fontWeight: "bold",
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
      borderRadius: 20,
      " &:hover ": {
        content: `url(${faq})`,
        cursor: "pointer",
      },
    },

    btn4box: {
      width: 999,
      height: 250,
      margin: "0 auto",
      marginTop: 100,
      fontSize: 18,
      fontWeight: "bold",
      display: "flex",
      justifyContent: "space-between",
    },
    info: {
      width: 250,
      height: 250,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: 40,
      boxSizing: "border-box",
    },
    clickbtn: {
      width: 240,
      height: 250,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid #EDEDED",
      cursor: "pointer",

      " &:hover ": {
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
        color: "#2B9460",
      },
    },
    test: {
      display: "flex",
      " &:hover ": {
        display: "none",
      },
    },
    test2: {
      display: "none",
      " &:hover ": {
        display: "flex",
      },
    },
  });
  const [img, setImg] = useState(out1);
  const [img2, setImg2] = useState(out2);
  const [img3, setImg3] = useState(out3);

  const classes = useStyles();
  return (
    <div>
      <div style={{ height: 850 }}>
        <div className={classes.title}>연말정산 길잡이</div>
        <div className={classes.twobtnbox}>
          <div className={classes.bigbtnout}>
            <img src={cam} style={{ width: 60, height: 60 }} alt="cam" />
            <span style={{ paddingTop: 5 }}>연말정산 동영상 설명서</span>
          </div>

          <div className={classes.bigbtnout2}>
            <img src={what} style={{ width: 60, height: 60 }} alt="what" />
            <span style={{ paddingTop: 5 }}>연말정산 질문틀 - FAQ</span>
          </div>
        </div>
        <div className={classes.btn4box}>
          <div className={classes.info}>
            국세청제공
            <br />
            <span style={{ fontSize: 24 }}>
              연말정산 서비스
              <br /> 바로가기
            </span>{" "}
          </div>
          <div
            onMouseEnter={(e) => {
              setImg(over1);
            }}
            onMouseLeave={(e) => {
              setImg(out1);
            }}
            className={classes.clickbtn}
          >
            <img src={img} style={{ width: 52.5, height: 52.5 }} />
            <p>연말정산 미리보기</p>
          </div>
          <div
            onMouseEnter={(e) => {
              setImg2(over2);
            }}
            onMouseLeave={(e) => {
              setImg2(out2);
            }}
            className={classes.clickbtn}
          >
            <img src={img2} style={{ width: 52.5, height: 52.5 }} />
            <p>연말정산 자동계산기</p>
          </div>
          <div
            className={classes.clickbtn}
            onMouseEnter={(e) => {
              setImg3(over3);
            }}
            onMouseLeave={(e) => {
              setImg3(out3);
            }}
          >
            <img src={img3} style={{ width: 52.5, height: 52.5 }} />
            <p>연말정산 안내문</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Step4;
