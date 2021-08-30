import { useState } from "react";
import { useForm } from "react-hook-form";
import firebase from "../../firebase";

function LoginPage() {
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, errors, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      setLoading(false);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };

  return (
    <div className="auth-wrapper">
      <div style={{ textAlign: "center" }}>
        <h3>로그인</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>이메일</label>
        <input
          type="email"
          name="email"
          ref={register({
            required: true,
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />

        {errors.email && errors.email.type === "required" && (
          <p className=" text-red-500 font-light">
            이메일을 입력하셔야 합니다.
          </p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p className=" text-red-500 font-light">
            이메일 형식에 맞게 입력을 하셔야 합니다.{" "}
          </p>
        )}

        <label>비밀번호</label>
        <input
          type="password"
          name="password"
          ref={register({ required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p className=" text-red-500 font-light">
            비밀번호 입력하셔야 합니다.
          </p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p className=" text-red-500 font-light">
            비밀번호는 최소 6자 이상이어야 합니다.{" "}
          </p>
        )}

        {errorFromSubmit && (
          <p className=" text-red-500 font-light">{errorFromSubmit}</p>
        )}
        <input type="submit" disabled={loading} />
      </form>
    </div>
  );
}

export default LoginPage;
