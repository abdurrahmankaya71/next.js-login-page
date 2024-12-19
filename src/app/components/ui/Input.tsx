import { forwardRef, Ref } from "react";
import { IInputProps } from "@/app/interfaces";

const Input = forwardRef(
    ({ ...rest }: IInputProps, ref: Ref<HTMLInputElement>) => {
        return <input ref={ref} {...rest} />;
    }
);

Input.displayName = "Input";

export default Input;
