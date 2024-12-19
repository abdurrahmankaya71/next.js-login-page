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

export interface IErrorResponse {
    error: {
        details?: {
            errors: {
                message: string;
            }[];
        };
        message?: string;
    };
}
