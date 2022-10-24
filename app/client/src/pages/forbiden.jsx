import { Link } from "react-router-dom";
const EntrenceForbiddenPage = () => {
  return (
    <div className="forbidden-container">
      <h1 className="red-text">Access not allowed</h1>
      <p className="grey-text">
        Access to the site is not allowed right now
        <br />
        Please note we are open<b> Monday to Friday, from 9 to 17</b>
      </p>
    </div>
  );
};

export default EntrenceForbiddenPage;
