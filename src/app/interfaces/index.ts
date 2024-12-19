export interface IInputProps {
    type: "password" | "text" | "checkbox";
    name?: "username" | "password";
    placeholder?: string;
    role?: string;
    className?: string;
    validation?: {
        required?: boolean;
        minLength?: number;
        pattern?: RegExp;
    };
}

export interface IInputErrorMsg {
    msg?: string;
}

export interface IButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    type?: "button";
    isLoading?: boolean;
}
