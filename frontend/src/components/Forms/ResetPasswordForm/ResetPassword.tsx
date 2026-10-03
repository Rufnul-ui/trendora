"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ResetPasswordSchema } from "@/utils/validations/ResetPasswordSchema";
import { resetPassword } from "@/api/auth/resetPwd";

import ResetBtn from "./ResetButton/ResetBtn";
import s from "./ResetPassword.module.css";

type ResetPasswordFormData = {
  newPassword: string;
  confirmPassword: string;
};

const ResetPassword = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">(
    "success",
  );

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(ResetPasswordSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      setMessage("");

      const email = sessionStorage.getItem("resetEmail");

      if (!email) {
        setMessageType("error");
        setMessage("Session expired. Please try again.");
        return;
      }

      await resetPassword({
        email,
        newPassword: data.newPassword,
      });

      setMessageType("success");
      setMessage("Password reset successfully!");

      sessionStorage.removeItem("resetEmail");
    } catch (error) {
      console.error("Password reset failed:", error);

      setMessageType("error");

      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("Something went wrong");
      }
    }
  };

  useEffect(() => {
    if (!message || messageType !== "success") return;

    const timer = setTimeout(() => {
      setMessage("");
      router.push("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [message, messageType, router]);

  return (
    <div>
      {message && (
        <div
          className={`${s.toast} ${
            messageType === "success" ? s.success : s.error
          }`}
        >
          {message}
        </div>
      )}

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputGroup}>
          <label htmlFor="newPassword">New Password</label>

          <input
            id="newPassword"
            type="password"
            placeholder="Enter new password"
            {...register("newPassword")}
          />

          {errors.newPassword && (
            <p className={s.error}>{errors.newPassword.message}</p>
          )}
        </div>

        <div className={s.inputGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>

          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            {...register("confirmPassword")}
          />

          {errors.confirmPassword && (
            <p className={s.error}>{errors.confirmPassword.message}</p>
          )}
        </div>

        <ResetBtn isSubmitting={isSubmitting} />
      </form>
    </div>
  );
};

export default ResetPassword;
