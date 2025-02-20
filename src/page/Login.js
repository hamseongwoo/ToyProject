import "./App.css";

function Login() {
  return (
    <>
      <div className="login-container">
        <label className="login-label">이메일</label>
        <input
          type="text"
          className="login-input"
          placeholder="이메일을 입력해주세요"
        />
      </div>
    </>
  );
}
export default Login;
