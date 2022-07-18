import "../styles/error-msg.scss";

function ErrorMessage({ errMsg }) {
  return <div className="error-msg">{errMsg !== undefined && <p>Warning: {errMsg}</p>}</div>;
}

export default ErrorMessage;
