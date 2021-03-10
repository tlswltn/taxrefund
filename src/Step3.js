// import logo from "./images/pd_common_logo.gif";
import bird from "./images/pd_taxRefund_callImg.png";
import arrow from "./images/arrow.jpg";

import { makeStyles } from "@material-ui/core/styles";

const Step3 = () => {
  const useStyles = makeStyles({
    step3box: {
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
      width: "100%",
      height: 500,
      backgroundColor: "#FFF7E3",
    },
    content: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 1000,
      height: 500,
      margin: "0 auto",
      // border: "1px solid black",
    },
    leftbox: {
      width: 400,
      height: 500,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // border: "1px solid black",
    },
    rightbox: {
      width: 600,
      height: 500,
      // display: "flex",
      // flexDirection: "column",
      // alignItems: "center",
      // justifyItems: "center",
      // display: "table-cell",
      // verticalAlign: "middle",
      //   display: table-cell;
      // vertical-align: middle;
      // border: "1px solid black",
      " & span ": {
        // textAlign: "center",
        paddingLeft: 100,
        fontSize: 18,
      },
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.step3box}>
      <div className={classes.content}>
        <div className={classes.leftbox}>
          <img src={bird} alt="bird" />
        </div>
        <div className={classes.rightbox}>
          {" "}
          <p
            style={{
              color: "#F39800",
              fontSize: 28,
              fontWeight: 700,
              paddingTop: 150,
              // paddingLeft: 100,
              // textAlign: "center",
              paddingLeft: 100,
              // lineHeight: 5,
            }}
          >
            연말정산 전화상담이 필요하세요?
          </p>
          <span>
            <b>평일 09:00 - 18:00 ( 점심 12:15 - 13:51 )</b>
          </span>
          <br />
          <span>인사팀으로부터 안내받은 전화번호로 상담이 가능합니다.</span>
        </div>
      </div>
    </div>
  );
};
export default Step3;
