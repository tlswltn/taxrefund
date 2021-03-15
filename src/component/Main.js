import "../css/tax.css";

import Header from "../component/Header";
import Footer from "../component/Footer";
import Step1 from "../component/Step1";
import Step2 from "../component/Step2";
import Step3 from "../component/Step3";
import Step4 from "../component/Step4";

const Main = () => {
  return (
    <div>
      <Header />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Footer />
    </div>
  );
};
export default Main;
