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
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form(props: FormProps) {
  const { formData, setformData, handleSubmit } = props;

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
    <>
      <h2 className="text-2xl font-bold mb-6 text-center">お問い合わせフォーム</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <FormInput question={questionName} value={formData.name} onchange={handleOnChange} />
        <FormInput question={questionEmail} value={formData.email} onchange={handleOnChange} />
        <FormInput question={questionPhoneNumber} value={formData.phoneNumber} onchange={handleOnChange} />
        <button type="submit" className="text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          確認画面へ
        </button>
      </form>
    </>
  );
}
