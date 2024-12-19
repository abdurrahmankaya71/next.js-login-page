import s from "@/app/styles/page.module.css";
import { IInputErrorMsg } from "@/app/interfaces";

const InputErrorMessage = ({ msg }: IInputErrorMsg) => {
    return msg ? <span className={s.inputError}>{msg}</span> : null;
};

export default InputErrorMessage;
