import { Question } from "../register/Form";

export default function FormInput(props: { value: number | string; question: Question; onchange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  const { value, question, onchange } = props;
  return (
    <div>
      <label htmlFor={question.label}>{question.title}</label>
      <input name={question.name} id="" onChange={onchange} value={value} type={question.inputType}></input>
    </div>
  );
}
