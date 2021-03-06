import { makeStyles } from "@material-ui/core/styles";

//연말정산 서류안내
const DocumentInfo = () => {
  const useStyles = makeStyles({
    box: {
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      margin: "0 auto",
      width: 600,
      height: "95%",
      backgroundColor: "white",
      overflowY: "auto",
      fontSize: 14,
      "& span": {
        color: "#F39800",
        fontWeight: "bold",
      },
    },
    content: {
      padding: 15,
      margin: "0 auto",
      boxSizing: "border-box",
    },

    title: {
      width: 580,
      height: 64,
      fontSize: 20,
      padding: 20,
      boxSizing: "border-box",
      borderBottom: "1px solid lightgray",
    },
    table: {
      margin: "0 auto",
      width: 550,
      //   height: 791,
      fontSize: 12,
      tableLayout: "fixed",
      borderTop: "1px solid #666666",
      borderBottom: "1px solid #666666",
      borderCollapse: "collapse",
      cellpadding: 0,
      textAlign: "center",
      verticalAlign: "center",
      backgroundColor: "white",
      "& thead": {
        fontSize: 14,
        fontWeight: "bold",
        borderBottom: "1px solid #666666",
        backgroundColor: "#F5F5F5",
      },
      "& td": {
        borderBottom: "1px solid #CCCCCC",
      },
      "& tr": {
        height: 50,
      },
    },
    txtbox: {
      backgroundColor: "#F5F5F5",
      width: 568,
      height: 88,
      padding: 15,
      boxSizing: "border-box",
      fontSize: 14,
      letterSpacing: "-0.01em",
    },
  });

  const classes = useStyles();

  return (
    <>
      <div className={classes.box}>
        <div className={classes.title}>연말정산 제출서류 안내</div>
        <div className={classes.content}>
          국세청 간소화 서비스에서 제공하지 않은 연말정산 소득공제 증명서류
          <br />
          <b>- 출력 후 제출 필수</b>
          <table className={classes.table}>
            <colgroup>
              <col
                style={{
                  backgroundColor: "#F5F5F5",
                }}
              />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr style={{ height: 30 }}>
                <td style={{ width: "32%", borderBottom: "1px solid #666666" }}>
                  항목
                </td>
                <td style={{ width: "48%", borderBottom: "1px solid #666666" }}>
                  소득공제 영수증 내용
                </td>
                <td style={{ width: "30%", borderBottom: "1px solid #666666" }}>
                  발급처
                </td>
              </tr>
            </thead>
            <tr>
              <td>
                장애인
                <br /> (항시치료를 요하는 중증환자)
              </td>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                장애인증명서
              </td>
              <td>해당의료기관</td>
            </tr>
            <tr>
              <td>보험료 (국민연금)</td>{" "}
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                종된 근무지의 "근로소득원천징수영수증" (이중 근로자의 경우)
              </td>{" "}
              <td>전직장 영수증발급부서</td>
            </tr>
            <tr>
              <td>보험료 (건강보험) </td>{" "}
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                종된 근무지의 "근로소득원천징수영수증" (이중 근로자의 경우)
              </td>{" "}
              <td>전직장 영수증발급부서</td>
            </tr>
            <tr>
              <td>보험료 (고용보험) </td>{" "}
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                종된 근무지의 "근로소득원천징수영수증" (이중 근로자의 경우)
              </td>{" "}
              <td>전직장 영수증발급부서</td>
            </tr>
            <tr>
              <td>보험료 (지역국민연금)</td>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                {" "}
                지역 국민연금 납부내역서
              </td>{" "}
              <td>국민연금관리공단</td>
            </tr>
            <tr>
              <td rowspan="2">의료비 </td>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                시력보정용 안경구입확인서 (안경사가 확인도장 날인한 것)
              </td>
              <td> 안경판매처</td>
            </tr>
            <td style={{ textAlign: "left", paddingLeft: 5 }}>
              보청기구입비용ㆍ장애인보장구ㆍ의료용구 영수증
            </td>{" "}
            <td>장애인보장구· 의료용구 등 판매처</td>
            <tr>
              <td rowspan="3">교육비 </td>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                국외교육비 납입증명서
              </td>{" "}
              <td>외국교육기관</td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                자녀의 교복이나 체육복 구입비
              </td>{" "}
              <td>학교장 또는 교복판매처</td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                학점인정(독학학위) 교육비납입증명서
              </td>
              <td> 학위취득과정의 경우 한국교육개발원장이 인터넷 발급가능</td>
            </tr>
            <tr>
              <td rowspan="2">기부금</td>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                {" "}
                '고유번호증'의 유무가 적격 종교단체 기부금이나 지정 기부금
                단체등에 지출한 기부금
              </td>
              <td> 종교단체외기부금 접수기관단체</td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                [정치자금법] 등에서 정하는 영수증
              </td>
              <td> 중앙선거관리위훤회, 각 정당, 국회의원 발행</td>{" "}
            </tr>
            <tr>
              <td>주택자금</td>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                {" "}
                월세세액공제 대상자의 경우 "임대차계약증서(사본),
                월세액지급증명서류(현금영수증, 계좌이체 영수증, 무통장입금증 등)
              </td>
              <td>임대인</td>
            </tr>
            <tr>
              <td>투자조합</td>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                {" "}
                출자 또는 투자확인서 및 출자등소득공제신청서
              </td>{" "}
              <td>해당 투자조합 관리자 등</td>
            </tr>
            <tr>
              <td>우리사주출연금</td>{" "}
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                우리사주조합출연금액확인서
              </td>
              <td> 우리사주조합</td>
            </tr>
            <tr>
              <td style={{ borderBottom: "1px solid #666666" }}>
                우리사주조합 기부금
              </td>
              <td
                style={{
                  textAlign: "left",
                  paddingLeft: 5,
                  borderBottom: "1px solid #666666",
                }}
              >
                {" "}
                기부금영수증 (발급처 : 우리사주조합)
              </td>
              <td style={{ borderBottom: "1px solid #666666" }}>
                {" "}
                우리사주조합
              </td>
            </tr>
          </table>
          <br />
          <span>[국세청 간소화 서비스 홈페이지 ] 소득공제자료 조회방법</span>
          <div>
            <p>
              {" "}
              1. 인터넷 주소창에 www.hometax.go.kr을 직접 입력하고 접속한다.
            </p>
            <p> 2. 공인인증서로 로그인하기 (①,②,③ 모두 가능)</p>- 연말정산간소화
            홈페이지에 접속하여 소득공제 자료를 조회하기 위해서는 “공인인증서”가
            있어야만 가능하다.
            <p>
              종전에는 ①만 가능하였으나 올해부터는 ②,③으로도 서비스 이용이
              가능하다.
            </p>
          </div>
          <div className={classes.txtbox}>
            ① ‘금융기관 및 세무서에서 발행하는 공인인증서’ <br />② ‘전자정부
            인증서(GPKI)’
            <br />③ ’휴대폰에 저장된 공인인증서’
          </div>
          <p>3. 소득공제자료 조회하기</p>
          <span>
            국세청 간소화 서비스 홈페이지에서 제공하는 증명서류
            <br /> (종이없는 연말정산 PDF 파일 전산업로드용)
          </span>
          <br />
          <br />
          <table className={classes.table}>
            <colgroup>
              <col
                style={{
                  backgroundColor: "#F5F5F5",
                }}
              />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr style={{ height: 30 }}>
                <td width="23%" style={{ borderBottom: "1px solid #666666" }}>
                  소득ㆍ세액공제 항목
                </td>
                <td width="54%" style={{ borderBottom: "1px solid #666666" }}>
                  {" "}
                  소득공제 영수증 내용
                </td>
                <td style={{ borderBottom: "1px solid #666666" }}>
                  {" "}
                  국세청 PDF 제공자료
                </td>
              </tr>
            </thead>
            <tr>
              <td rowspan="2">보험료 세액공제</td>{" "}
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                보장성보험료 납입증명서
              </td>
              <td>O </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                장애인전용보장성보험료납입증명서
              </td>{" "}
              <td>O </td>
            </tr>
            <tr>
              <td>의료비 세액공제 </td>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                진료비(약제비) 납입확인서 [병의원, 약국]{" "}
              </td>
              <td>O </td>
            </tr>

            <tr>
              <td rowspan="6">교육비 세액공제</td>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                {" "}
                교육비납입증명서 [초ㆍ중ㆍ고, 대학(원)]
              </td>{" "}
              <td>O </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                유치원 교육비{" "}
              </td>
              <td>O </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                직업능력개발훈련비영수증
              </td>{" "}
              <td>O </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                보육료납부영수증{" "}
              </td>
              <td>O </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                취학전아동의 학원ㆍ체육시설교육비납입증명서
              </td>{" "}
              <td>O </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                장애인특수교육비납입증명서
              </td>{" "}
              <td>O </td>
            </tr>

            <tr>
              <td>신용카드 등</td>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                {" "}
                신용카드 등 사용금액확인서
              </td>{" "}
              <td>O </td>{" "}
            </tr>
            <tr>
              <td>사용금액공제</td>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                {" "}
                현금영수증 사용금액내역
              </td>{" "}
              <td>O </td>{" "}
            </tr>
            <tr>
              <td>주택자금공제</td>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                {" "}
                주택자금상환증명서, 장기주택저당차입금이자상환증명서
              </td>{" "}
              <td>O </td>{" "}
            </tr>
            <tr>
              <td>주택마련저축공제</td>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                {" "}
                주택마련저축납입증명서, 주택청약종합저축납입증명서
              </td>{" "}
              <td>O </td>{" "}
            </tr>
            <tr>
              <td>개인연금저축공제</td>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                {" "}
                개인연금저축납입증명서
              </td>{" "}
              <td>O </td>{" "}
            </tr>
            <tr>
              <td colSpan="2"> 소기업ㆍ소상공인공제부금 불입금액</td>{" "}
              <td>O </td>{" "}
            </tr>
            <tr>
              <td>연금계좌 세액공제</td>
              <td style={{ textAlign: "left", paddingLeft: 5 }}>
                {" "}
                퇴직연금저축납입증명서ㆍ연금저축납입증명서
              </td>{" "}
              <td>O </td>{" "}
            </tr>
            <tr>
              <td colSpan="2" style={{ borderBottom: "1px solid #666666" }}>
                기부금 세액공제{" "}
              </td>
              <td style={{ borderBottom: "1px solid #666666" }}>O</td>
            </tr>
          </table>
          <br />
        </div>
      </div>
    </>
  );
};

export default DocumentInfo;
