"use client";
import Image from "next/image";
import Link from "next/link";
import s from "./styles/page.module.css";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import InputErrorMessage from "./components/ui/InputErrorMessage";
import { useState } from "react";
import axiosInstance from "./config/axios.config";
import toast from "react-hot-toast";

interface IFormInput {
    username: string;
    password: string;
}

export default function LoginPage() {
    // **! ------------------ STATES ---------------------
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();

    // **! ------------------ HANDLERS ---------------------
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        //* 1- pending
        setIsLoading(true);
        try {
            //* 2- fufilled -> success -> (optional)
            const res = await axiosInstance.post("/user/login", data);

            if (res.status === 200) {
                toast.success("Login Successful!", { duration: 5000 });
                console.log(res.data);
            }
        } catch (error) {
            //* 1- rejected -> field -> (optional)
            console.log(error);
            toast.error("Login failed. Please try again.", { duration: 5000 });
        } finally {
            setIsLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };
    return (
        <>
            {/* Placeholder Image */}
            <section className={s.placeholderImage}>
                <div>
                    Photo by{" "}
                    <span style={{ textDecoration: "underline" }}>
                        Alexander Popadin
                    </span>
                </div>
            </section>
            <section className={s.containerContent}>
                {/* Header */}
                <header className={s.logo}>
                    <Image
                        src="/images/logo-ui-unicorn.svg"
                        alt="UI Unicorn Logo"
                        width={48}
                        height={48}
                    />
                    <span>UI Unicorn</span>
                </header>

                {/* Main Content */}
                <main>
                    <h1>Nice to see you again</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Login Input */}
                        <label className={s.textField}>
                            <span className={s.textFieldSpan}>Login</span>
                            <div className={s.wrapperInput}>
                                <Input
                                    type="text"
                                    placeholder="Email or phone number"
                                    {...register("username", {
                                        required: "Username is required!",
                                        minLength: 5,
                                    })}
                                />
                            </div>
                            {errors?.username &&
                                errors.username.type === "required" && (
                                    <InputErrorMessage msg="Username is required." />
                                )}
                            {errors?.username &&
                                errors.username.type === "minLength" && (
                                    <InputErrorMessage msg="Username should be at-least 5 characters." />
                                )}
                        </label>

                        {/* Password Input */}
                        <label className={s.textField}>
                            <span className={s.textFieldSpan}>Password</span>
                            <div className={s.wrapperInput}>
                                <Input
                                    type={
                                        isPasswordVisible ? "text" : "password"
                                    }
                                    placeholder="Enter password"
                                    {...register("password", {
                                        required: "password is required!",
                                        minLength: 6,
                                    })}
                                />
                                <Button
                                    className={s.btnIcon}
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                >
                                    {isPasswordVisible ? (
                                        <Image
                                            src="/images/icon-visibility.svg"
                                            alt="Hide password"
                                            width={20}
                                            height={20}
                                        />
                                    ) : (
                                        <Image
                                            src="/images/icon-visibility-off.svg"
                                            alt="Show password"
                                            width={20}
                                            height={20}
                                        />
                                    )}
                                </Button>
                            </div>
                            {errors?.password &&
                                errors.password.type === "required" && (
                                    <InputErrorMessage msg="Password is required." />
                                )}
                            {errors?.password &&
                                errors.password.type === "minLength" && (
                                    <InputErrorMessage msg="Password should be at-least 6 characters." />
                                )}
                        </label>

                        {/* Remember Me & Forgot Password */}
                        <div className={s.row}>
                            <label className={s.containerToggle}>
                                <Input
                                    type="checkbox"
                                    role="switch"
                                    className={s.toggle}
                                />
                                <span>Remember-me</span>
                            </label>

                            <Link href="#">Forgot password?</Link>
                        </div>

                        {/* Sign-in Button */}
                        <Button className={`${s.btnSubmit} ${s.btnFull}`}>
                            {isLoading ? "Loading..." : "Sign in"}
                        </Button>

                        <hr className={s.hr} />

                        {/* Google Sign-in */}
                        <Button className={`${s.btnFull} ${s.btnGoogle}`}>
                            <Image
                                src="/images/logo-google.svg"
                                alt="Google Logo"
                                width={20}
                                height={20}
                            />
                            <span>Or sign in with Google</span>
                        </Button>

                        {/* Sign-up Link */}
                        <div className={s.containerLink}>
                            <div>
                                Don&apos;t have an account?{" "}
                                <Link href="#">Sign up now</Link>
                            </div>
                        </div>
                    </form>
                </main>

                {/* Mobile Logo */}
                <div className={s.containerLogoMobile}>
                    <Link href="#" className={s.logoMobile}>
                        <Image
                            src="/images/logo-ui-unicorn.svg"
                            alt="UI Unicorn Logo"
                            width={48}
                            height={48}
                        />
                        <span>UI Unicorn</span>
                    </Link>
                </div>

                {/* Footer */}
                <footer className={s.footer}>
                    <div className={s.row}>
                        <div className={s.wrapperIcon}>
                            <Image
                                src="/images/logo-figma.svg"
                                alt="Figma Logo"
                                width={24}
                                height={24}
                            />
                            <Link href="#">
                                <span>@uiunicorn</span>
                            </Link>
                        </div>
                        <span>&copy; Perfect Login 2021</span>
                    </div>
                </footer>
            </section>
        </>
    );
}
