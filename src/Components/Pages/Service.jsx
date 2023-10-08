import "../Styles/service.css";
import { useFirebase } from "../Backend Components/Context/Firebase";

export default function Service() {

  const firebase = useFirebase()

  return (
    <>
      <section className="servicePage" id="service">
        <div className="curvedPage">
          <h1>Services</h1>
          <div className="container">
            <div className="sidebar">
              <h2> Filters </h2>
              
            </div>
            <div className="mainContent">
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
