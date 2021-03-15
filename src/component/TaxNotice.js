import { makeStyles } from "@material-ui/core/styles";

import next from "../images/hi.PNG";

//국세청 간소화 서비스 유의사항
const TaxNotice = () => {
  const useStyles = makeStyles({
    box: {
      fontSize: 14,
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",

      margin: "0 auto",
      width: 600,
      height: "95%",
      backgroundColor: "white",
      overflowY: "auto",
      overflowX: "hidden",
      letterSpacing: "-0.01em",
      "& p ": {
        fontWeight: 700,
        color: "#F39800",
        fontSize: 15,
      },
    },
    title: {
      width: 590,
      height: 64,
      fontSize: 20,

      padding: 15,
      boxSizing: "border-box",
      borderBottom: "1px solid lightgray",
    },
    content: {
      padding: 26,
      fontSize: 13,
      margin: "0 auto",
      boxSizing: "border-box",
    },

    table: {
      width: 530,
      margin: "0 auto",
      fontSize: 14,

      borderCollapse: "collapse",
    },
    thead: {
      fontWeight: "bold",
      color: "green",
      paddingLeft: 15,
    },

    circleBox: {
      display: "flex",
      flexDirection: "row",
      width: 500,
      height: 160,
      justifyContent: "space-between",
      margin: "0 auto",
      fontSize: 14,
    },
    divCircle: {
      width: 140,
      height: 140,
      border: "2px solid #2B9460",
      borderRadius: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#2B9460",
      textAlign: "center",
      fontWeight: "bold",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.box}>
      <div className={classes.title}>국세청 간소화 서비스 유의사항</div>
      <div className={classes.content}>
        <span style={{ fontSize: 16 }}>
          국세청 간소화 서비스 이용 시 유의해야 할 사항입니다.
        </span>
        <p>1. 소득공제 요건은 스스로 검토</p>
        요건에 해당하지 않아도 본인 및 부양가족이 지출한 금액 단순히 보여주기만
        함으로, 반드시 공제요건 충족 여부를 검토하시기 바랍니다.
        <p>2. 근로자 본인의 공인인증서 꼭 필요</p>
        개인정보 보호를 위해 본인 공인인증서 없이 이용 불가능합니다.
        <p>3. 간소화서비스에서 조회되지 않은 자료도 있음</p>
        지출한 기관에서 국세청으로 신고하지 않은 경우 조회되지 않는 자료도
        있음으로, 본인이 해당 지출 기관으로 부터 영수증 발급하여 제출하시기
        바랍니다. 기부금,안경,교복등이 발급되지 않는 경우가 많습니다.
        <p>4. 부양가족 자료 조회는 부양가족 본인의 사전동의 필요</p>
        19세 미만 자녀는 동의절차 없이 ＂미성년 자녀자료 조회신청" 후 조회
        가능합니다. 성인 부양가족은 국세청에 부양가족 인증이 필요합니다. 아래
        인증 절차를 참고하세요.
        <p>
          {" "}
          5. 재외국민이 외국인등록번호에서 주민등록번호로 발급이 된 경우 제공
          동의 필요
        </p>
        2015년 1월 22일부터 시행된 ‘재외국민 주민등록’ 제도로 인하여
        “외국인등록번호”와 “주민등록번호”에 소득 공제 자료가 모두 있는 경우
        “제공동의 신청” 후 조회가 가능합니다. 아래 인증 절차를 참고하세요.
        <br />
        <p style={{ color: "black" }}>- 자료 제공 동의 신청 절차</p>
        <div className={classes.circleBox}>
          <div className={classes.divCircle}>
            홈페이지
            <br />
            접속
          </div>
          <img
            src={next}
            width="20px"
            height="20px"
            style={{ paddingTop: 60 }}
            alt="next"
          />
          <div className={classes.divCircle}>
            소득공제 자료
            <br />
            제공 동의
          </div>
          <img
            src={next}
            width="20px"
            height="20px"
            style={{ paddingTop: 60 }}
            alt="next"
          />
          <div className={classes.divCircle}>
            동의 방법 선택 후<br /> 신청 정보 입력
          </div>
        </div>
        <span style={{ color: "#666666" }}>
          * 동의 방법은 아래 4개 중 1개 선택
        </span>
        <br />
        <table className={classes.table}>
          <tr style={{ backgroundColor: "#F5F5F5" }} height="40">
            <td className={classes.thead} width="25%">
              1. 공인인증서
            </td>
            <td> 공인인증서 비밀번호 입력(부양가족 명의 공인인증서 이용)</td>
          </tr>
          <tr height="8"></tr>
          <tr style={{ backgroundColor: "#F5F5F5" }} height="40">
            <td className={classes.thead} width="25%">
              2. 휴대폰
            </td>
            <td>
              {" "}
              국세청에서 문자메시지(SMS)로 발송한 1회용 인증번호를 홈페이지에
              <br />
              입력(부양가족 명의 이동전화 이용)
            </td>
          </tr>
          <tr height="8"></tr>
          <tr style={{ backgroundColor: "#F5F5F5" }} height="40">
            <td className={classes.thead} width="25%">
              3. 신용카드
            </td>
            <td style={{ backgroundColor: "#F5F5F5" }}>
              {" "}
              신용카드 비밀번호를 홈페이지에 입력(부양가족 명의 신용카드 이용)
            </td>
          </tr>
          <tr height="8"></tr>
          <tr style={{ backgroundColor: "#F5F5F5" }}>
            <td className={classes.thead} width="25%">
              4. 팩스
            </td>
            <td>
              {" "}
              동의에 필요한 기본 사항을 홈페이지에 입력 - 신청서 출력 - 출력한
              신청서와 신분증 사본을 간소화 전용 팩스(1544-7020)로 전송
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default TaxNotice;
