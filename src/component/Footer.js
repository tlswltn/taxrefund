import { makeStyles } from "@material-ui/core/styles";

const Footer = () => {
  const useStyles = makeStyles({
    footer: {
      fontSize: 14,
      width: "100%",
      height: 300,
      textAlign: "center",
      marigin: "auto",
      backgroundColor: "#333333",
      color: "#FFFFFF",
    },
    footerWrap: {
      width: 1000,
      height: "100%",
      margin: "0 auto",
    },
    footerTop: {
      height: 100,
      paddingTop: 40,
      boxSizing: "border-box",
      borderBottom: "1px solid #fff",
      display: "flex",

      "& ul": {
        width: 700,
        height: 20,
        margin: "0 auto",
        listStyle: "none",
      },
      "& li": {
        float: "left",
        padding: "0 20px",
        borderRight: "1px solid #fff",
        cursor: "pointer",
        listStyle: "none",
        fontSize: 14,
      },
    },
    footerBottom: {
      paddingTop: 80,
      boxSizing: "border-box",
    },
  });

  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
        <div className={classes.footerWrap}>
          <div className={classes.footerTop}>
            <ul>
              <li>개인정보 처리방침</li>
              <li>이메일주소 무단수집거부</li>
              <li>마케팅 제휴문의</li>
              <li>찾아오시는 길</li>
              <li>월급날 소개</li>
            </ul>
          </div>
          <br />
          <div className={classes.footerBottom}>
            220-81-99881 | (주)월급날 | 대표자:임호천 | 02-785-0642 | 서울시
            영등포구 국회대로 68길 18 (여의도동, 금영빌딩)10층 <br />ⓒ 2016
            payday co., Ltd. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
