import pig from "../images/pd_taxRefund_mainImg.png";

import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const Step1 = () => {
  const useStyles = makeStyles({
    step1: {
      // display: "flex",
      // alignItems: "center",
      margin: "0 auto",
      height: "904px",
      width: "100%",
      backgroundColor: "#FFF9E3",
    },
    box1: {
      width: "1000px",
      margin: "0 auto",
      paddingTop: 200,
    },
    step1Left: {
      float: "left",
      paddingTop: 100,
      marginLeft: 25,
      boxSizing: "boxSizing",
      width: 380,
      height: 286,
    },
    step1Right: {
      marginRight: 3,
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
      height: 45,
      display: "flex",
      justifyContent: "space-between",
      paddingTop: 10,
      boxSizing: "border-box",
      ".img": { width: 20, height: 10 },
    },
  });

  const classes = useStyles();
  return (
    <div>
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
            <img src={pig} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Step1;
