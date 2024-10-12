"use client";
import FormInput from "@/app/components/FormInput";
import { InputValue } from "./form/page";

export type Question = {
  title: string;
  name: string;
  label: string;
  inputType: string;
};

type FormProps = {
  formData: InputValue;
  setformData: React.Dispatch<React.SetStateAction<InputValue>>;
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Form(props: FormProps) {
  const { formData, setformData, setIsSubmit } = props;
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  const questionName: Question = {
    title: "氏名",
    name: "name",
    label: "name",
    inputType: "text",
  };
  const questionEmail: Question = {
    title: "メールアドレス",
    name: "email",
    label: "email",
    inputType: "email",
  };
  const questionPhoneNumber: Question = {
    title: "携帯番号",
    name: "phoneNumber",
    label: "phoneNumber",
    inputType: "tel",
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput question={questionName} value={formData.name} onchange={handleOnChange} />
      <FormInput question={questionEmail} value={formData.email} onchange={handleOnChange} />
      <FormInput question={questionPhoneNumber} value={formData.phoneNumber} onchange={handleOnChange} />
      <button type="submit">確認画面へ</button>
    </form>
  );
}
