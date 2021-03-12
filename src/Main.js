import "./tax.css";
import Header from "./Header";
import Footer from "./Footer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import DocumentInfo from "./DocumentInfo";
import Test from "./YearIncome";

// import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const Main = () => {
  const useStyles = makeStyles({
    main: {
      // minHeight: "calc(100vh - 220px)",
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Header />
      {/* <DocumentInfo />
      <Test /> */}
      <Step1 />

      <Step2 />

      <Step3 />
      <Step4 />
      <div className={classes.main}></div>
      <Footer />
    </div>
  );
};
export default Main;
