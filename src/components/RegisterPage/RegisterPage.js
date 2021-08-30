import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import firebase from "../../firebase";
import md5 from "md5";

function RegisterPage() {
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, watch, errors, handleSubmit } = useForm({
    mode: "onChange",
  });

  const password = useRef();
  password.current = watch("password");

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      let createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);

      await createdUser.user.updateProfile({
        displayName: data.name,
        photoURL: `http://gravatar.com/avatar/${md5(
          createdUser.user.email
        )}?d-identicon`,
      });

      // 데이터베이스에 저장
      await firebase.database().ref("users").child(createdUser.user.uid).set({
        name: createdUser.user.displayName,
        image: createdUser.user.photoURL,
        email: createdUser.user.email,
      });

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
        <h3>회원가입</h3>
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

        <label>이름</label>
        <input name="name" type="text" ref={register({ required: true })} />
        {errors.name && errors.name.type === "required" && (
          <p className=" text-red-500 font-light">이름을 입력하셔야 합니다.</p>
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

        <label>비밀번호 확인</label>
        <input
          type="password"
          name="password_confirm"
          ref={register({
            required: true,
            validate: (value) => value === password.current,
          })}
        />
        {errors.password_confirm &&
          errors.password_confirm.type === "required" && (
            <p className=" text-red-500 font-light">
              비밀번호 확인을 입력하셔야 합니다.
            </p>
          )}
        {errors.password_confirm &&
          errors.password_confirm.type === "pattern" && (
            <p className=" text-red-500 font-light">
              비밀번호와 비밀번호 확인은 같아야 합니다.{" "}
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

export default RegisterPage;
