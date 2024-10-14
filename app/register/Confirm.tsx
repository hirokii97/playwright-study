import React from "react";
import { InputValue } from "./form/page";

type ConfirmProps = {
  formData: InputValue;
  handleBack: () => void;
};

export default function Confirm(props: ConfirmProps) {
  const { formData, handleBack } = props;
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center">入力内容の確認</h2>
      <div className="space-y-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          氏名
        </label>
        <p id="name" className="mt-1 py-2 h-10 height- p-2 w-full border border-gray-300 rounded-md bg-gray-50">
          {formData.name}
        </p>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          メールアドレス
        </label>
        <p id="name" className="mt-1 py-2 h-10 p-2 w-full border border-gray-300 rounded-md bg-gray-50">
          {formData.email}
        </p>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          携帯番号
        </label>
        <p id="name" className="mt-1 py-2 h-10 height- p-2 w-full border border-gray-300 rounded-md bg-gray-50">
          {formData.phoneNumber}
        </p>
        <div className="flex mt-4 -mx-2 gap-4">
          <button className="w-1/2 text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="button" onClick={handleBack}>
            入力画面へ戻る
          </button>
          <button
            data-testid="form-submit"
            className="w-1/2 text-center bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            type="button"
            onClick={() => alert("申し込みます")}
          >
            この内容で送信する
          </button>
        </div>
      </div>
    </>
  );
}
