import React from "react";
import { InputValue } from "./form/page";

type ConfirmProps = {
  formData: InputValue;
};

export default function Confirm(props: ConfirmProps) {
  return (
    <div>
      <div>氏名</div>
      <p>{props.formData.name}</p>
      <div>メールアドレス</div>
      <p>{props.formData.email}</p>
      <div>携帯番号</div>
      <p>{props.formData.phoneNumber}</p>
      <button type="submit">入力画面へ戻る</button>
      <button type="submit">申し込む</button>
    </div>
  );
}
