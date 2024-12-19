import { IButtonProps } from "@/app/interfaces";

const Button = ({
    onClick,
    children,
    className,
    type,
    isLoading = false,
}: IButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={className}
            type={type}
            disabled={isLoading}
        >
            {children}
        </button>
    );
};

export default Button;
