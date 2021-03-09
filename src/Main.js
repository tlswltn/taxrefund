import "./tax.css";
import Header from "./Header";
import Footer from "./Footer";

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

      <div className={classes.main}></div>
      <Footer />
    </div>
  );
};
export default Main;
