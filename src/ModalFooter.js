import { makeStyles } from "@material-ui/core/styles";

const ModalFooter = () => {
  const useStyles = makeStyles({
    footer: {
      // display: "block",
      fontSize: 14,
      padding: "12px 16px",
      textAlign: "right",
      "& span": {
        padding: "6px 12px",
        color: "#1976D2",

        fontSize: 13,
      },
    },

    // paddingTop: 25,
    // boxSizing: "border-box",
    // },
  });

  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
        <span>확인</span>
      </footer>
    </div>
  );
};
export default ModalFooter;
