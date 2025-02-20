import "./App.css";

function Login() {
  return (
    <>
      <div className="login-container">
        <h1>로그인</h1>
        <label className="login-label">이메일</label>
        <input
          type="text"
          className="login-input"
          placeholder="이메일을 입력해주세요"
        />
        <label className="login-label">비밀번호</label>
        <input
          type="password"
          className="login-input"
          placeholder="비밀번호를 입력해주세요"
        />
        <button type="submit" className="login-button">로그인</button>
      </div>
    </>
  );
}
export default Login;
