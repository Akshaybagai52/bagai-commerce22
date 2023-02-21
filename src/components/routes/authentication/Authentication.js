import SignUpForm from "../signup/sign-up";
import SignInForm from "../signin/sign-in";
import "./authentication.styles.scss";

export default function Authentication() {
  return (
    <>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
}
