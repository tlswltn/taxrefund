import { makeStyles } from "@material-ui/core/styles";
import { arrowlogo } from "../src/arrow.svg";
//국세청 간소화 서비스 유의사항
const TaxNotice = () => {
  const useStyles = makeStyles({
    box: {
      borderRadius: "5px",
      margin: "0 auto",
      width: 600,
      height: "100%",
      backgroundColor: "white",
      overflowY: "auto",
      letterSpacing: "-0.01em",
      // boxSizing: "border-box",
      // padding: 10,
      //
      "& p ": {
        fontWeight: 700,
        color: "#F39800",
        fontSize: 15,
      },
    },
    title: {
      width: 600,
      height: 64,
      fontSize: 20,
      // verticalAlign: "center",
      padding: 20,
      boxSizing: "border-box",
      borderBottom: "1px solid lightgray",
    },

    txtbox: {
      // border: "1px solid black",
      backgroundColor: "#F5F5F5",
      width: 568,
      height: "auto",
      fontWeight: "bold",
      padding: 10,
    },
    circleBox: {
      display: "flex",
      flexDirection: "row",
      width: 500,
      height: 160,
      justifyContent: "space-between",
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
      <br />
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
      가능합니다. 성인 부양가족은 국세청에 부양가족 인증이 필요합니다. 아래 인증
      절차를 참고하세요.
      <p>
        {" "}
        5. 재외국민이 외국인등록번호에서 주민등록번호로 발급이 된 경우 제공 동의
        필요
      </p>
      2015년 1월 22일부터 시행된 ‘재외국민 주민등록’ 제도로 인하여
      “외국인등록번호”와 “주민등록번호”에 소득 공제 자료가 모두 있는 경우
      “제공동의 신청” 후 조회가 가능합니다. 아래 인증 절차를 참고하세요.
      <br />
      <b>- 자료 제공 동의 신청 절차</b>
      <div className={classes.circleBox}>
        <div className={classes.divCircle}>
          홈페이지
          <br />
          접속
        </div>
        {/* <img src={arrowlogo} /> */}
        <div className={classes.divCircle}>
          소득공제 자료
          <br />
          제공 동의
        </div>
        <div className={classes.divCircle}>
          동의 방법 선택 후 신청 정보 입력
        </div>
      </div>
      <span>* 동의 방법은 아래 4개 중 1개 선택</span>
      <div className={classes.txtbox}>
        {" "}
        1. 공인인증서 공인인증서 비밀번호 입력(부양가족 명의 공인인증서 이용)
      </div>
      <div className={classes.txtbox}>
        2. 휴대폰 국세청에서 문자메시지(SMS)로 발송한 1회용 인증번호를
        홈페이지에 입력(부양가족 명의 이동전화 이용){" "}
      </div>
      <div className={classes.txtbox}>
        3. 신용카드 신용카드 비밀번호를 홈페이지에 입력(부양가족 명의 신용카드
        이용)
      </div>
      <div className={classes.txtbox}>
        {" "}
        4. 팩스 동의에 필요한 기본 사항을 홈페이지에 입력 - 신청서 출력 - 출력한
        신청서와 신분증 사본을 간소화 전용 팩스(1544-7020)로 전송
      </div>
    </div>
  );
};

export default TaxNotice;
