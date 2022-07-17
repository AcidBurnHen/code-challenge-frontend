function ErrorMessage({ errMsg }) {
  return <div>{errMsg !== undefined && <p>Warning: {errMsg}</p>}</div>;
}

export default ErrorMessage;
