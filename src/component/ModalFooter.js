import { makeStyles } from "@material-ui/core/styles";

const ModalFooter = (props) => {
  const useStyles = makeStyles({
    footer: {
      // display: "block",
      borderRadius: "5px",
      margin: "0 auto",
      width: 600,
      height: 30,
      fontSize: 14,

      // padding: "12px 16px",
      textAlign: "right",
      backgroundColor: "blue",
      "& span": {
        padding: "6px 12px",
        // color: "#1976D2",
        color: "red",

        fontSize: 23,
      },
    },
  });

  const classes = useStyles();
  return (
    <div>
      <div className={classes.footer}>
        <span>확인</span>
      </div>
    </div>
  );
};
export default ModalFooter;
