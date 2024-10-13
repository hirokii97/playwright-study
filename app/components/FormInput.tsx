import { Question } from "../register/Form";

export default function FormInput(props: { value: number | string; question: Question; onchange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  const { value, question, onchange } = props;
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700" htmlFor={question.label}>
        {question.title}
      </label>
      <input className="w-full bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" name={question.name} id="" onChange={onchange} value={value} type={question.inputType}></input>
    </div>
  );
}
