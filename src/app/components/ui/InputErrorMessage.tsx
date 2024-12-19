import s from "../../../app/styles/page.module.css";
interface IProps {
    msg?: string;
}
const InputErrorMessage = ({ msg }: IProps) => {
    return msg ? <span className={s.inputError}>{msg}</span> : null;
};

export default InputErrorMessage;
