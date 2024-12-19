interface IButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    type?: "button";
}

const Button = ({ onClick, children, className, type }: IButtonProps) => {
    return (
        <button onClick={onClick} className={className} type={type}>
            {children}
        </button>
    );
};

export default Button;
