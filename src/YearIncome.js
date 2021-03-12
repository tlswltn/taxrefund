import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//연간소득금액 100만원 이하
const YearIncome = () => {
  const useStyles = makeStyles({
    box: {
      position: "relative",
      borderRadius: "5px",
      margin: "0 auto",
      width: 600,
      height: "100%",
      backgroundColor: "white",
      "& span": {
        color: "#F39800",
        fontWeight: "bold",
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
    content: {
      padding: 10,
      margin: "0 auto",
      boxSizing: "border-box",
    },
    table: {
      width: 560,
      height: 697,
      fontSize: 12,
      tableLayout: "fixed",
      border: "1px solid gray",
      borderCollapse: "collapse",
      cellpadding: 0,
      textAlign: "center",
      backgroundColor: "white",
      "& thead": {
        fontSize: 14,
        fontWeight: "bold",
        backgroundColor: "#F5F5F5",
      },
      "& td": {
        // borderCollapse: "collpase",

        border: "1px solid gray",
      },
    },
    txtbox: {
      border: "1px solid black",
      width: 568,
      height: 88,
    },
  });

  const classes = useStyles();

  return (
    <>
      <div className={classes.box}>
        <div className={classes.title}>연간 소득금액 100만원 이하 요건</div>
        <div className={classes.content}>
          소득종류별 연간 소득금액요건 판단 예시
          <table className={classes.table}>
            <thead>
              {/* <tr>
              <th rowSpan="2">소득금액</th>
              <th colSpan="2">
                소득금액요건 판단 (연간소득금액이 100만원 이하)
              </th>
            </tr>
            <tr>
              <th rowSpan="2">소득금액요건을 충족한 경우</th>
              <th colSpan="2">소득금액요건을 충족하지 않은 경우</th>
            </tr> */}
              <tr>
                <td rowSpan="2" width="18%">
                  소득종류
                </td>
                <td colSpan="2">
                  소득금액요건 판단 (연간소득금액이 100만원 이하)
                </td>
              </tr>
              <tr>
                <td>소득금액요건을 충족한 경우</td>
                <td>소득금액요건을 충족하지 않은 경우</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  이자소득
                  <br />
                  배당소득
                </td>
                <td>
                  - 금융소득의 합계액이 연 2천만원 이하로 분리과세된 경우 -
                  비과세·분리과세 금융소득만 있는 경우
                </td>
                <td>
                  - 금융소득의 합계액이 연 2천만원 초과로 종합소득 신고대상인
                  경우 - 100만원 초과의 국외금융소득이 있는 경우
                </td>
              </tr>
              <tr>
                <td>근로소득</td>
                <td>
                  - 근로소득만 있는 경우 총급여액이 500만원 이하인 경우
                  (근로소득이외 타소득이 없는 경우에 한함) - 일용근로소득만 있는
                  경우
                </td>
                <td>
                  - 근로소득만 있는 경우 총급여액이 500만원 초과인
                  경우(근로소득이외 타소득이 없는 경우에 한함)
                </td>
              </tr>
              <tr>
                <td>
                  사업소득
                  <br />
                  임대소득
                </td>
                <td>
                  - 사업소득금액이 100만원 이하인 경우 - 주택 1채(고가주택
                  제외)만 소유한 경우의 주택임대소득 - 2주택이상 소유자의
                  주택임대소득이 연간 2,000 만원 이하인 경우 - 작물재배업,
                  농가부업소득 등
                </td>
                <td>
                  - 사업소득금액이 100만원을 초과한 경우 - 2주택이상 소유자의
                  주택임대소득이 연간 2,000만원을 초과하는 경우
                </td>
              </tr>
              <tr>
                <td>기타소득</td>
                <td>
                  - 기타소득금액이 3백만원 이하로 분리과세를 선택한 경우 -
                  비과세·분리과세 기타소득만 있는 경우 - 기타소득금액이 매건마다
                  5만원 이하로 과세최저한에 해당하는 경우
                </td>
                <td>- 기타소득금액이 3백만원을 초과하는 경우</td>
              </tr>
              <tr>
                <td>연금소득</td>
                <td>
                  - 사적연금액이 1,200만원 이하인 경우 - 공적연금 수령금액 중
                  2002.1.1이후 불입분에 해당 하는 금액으로서 연 516만원 이하인
                  경우 - 비과세·분리과세 연금소득을 수령하는 경우
                </td>
                <td>
                  - 사적연금액이 1,200만원을 초과하는 경우 - 공적연금 수령금액
                  중 2002.1.1이후 불입분에 해당하는 금액으로서 연 516만원을
                  초과하는 경우
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default YearIncome;
