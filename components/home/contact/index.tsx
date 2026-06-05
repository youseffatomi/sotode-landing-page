"use client";
import { Button, Textarea, TextInput } from "flowbite-react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { ParticlesBackground } from "@/components/particle";

interface FormValues {
  name: string;
  lastName: string;
  subject: string;
  tel: string;
  description: string;
}

interface ApiError {
  message?: string;
}

const validationSchema = Yup.object<FormValues>({
  name: Yup.string()
    .min(2, "نام باید حداقل ۲ حرف باشد")
    .required("نام الزامی است"),
  lastName: Yup.string()
    .min(2, "نام خانوادگی باید حداقل ۲ حرف باشد")
    .required("نام خانوادگی الزامی است"),
  subject: Yup.string()
    .min(3, "موضوع باید حداقل ۳ حرف باشد")
    .required("موضوع الزامی است"),
  tel: Yup.string()
    .matches(/^(\+98|0)?9\d{9}$/, "شماره تماس معتبر نیست")
    .required("شماره تماس الزامی است"),
  description: Yup.string()
    .min(10, "پیام باید حداقل ۱۰ کاراکتر باشد")
    .required("خلاصه مشکل الزامی است"),
});

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      lastName: "",
      subject: "",
      tel: "",
      description: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitStatus(null);
      setErrorMessage("");
      try {
        await axios.post<{ message: string }>("/api/bale", values, {
          headers: { "Content-Type": "application/json" },
        });
        setSubmitStatus("success");
        resetForm();
      } catch (err) {
        const error = err as AxiosError<ApiError>;
        setErrorMessage(
          error.response?.data?.message ??
            "خطایی رخ داد. لطفاً دوباره تلاش کنید.",
        );
        setSubmitStatus("error");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section id="contact">
      <ParticlesBackground />
      <div className="container py-20">
        <h2 className="yekanBlack mb-20 text-center! text-2xl md:text-3xl">
          اولین مشاوره حقوقی خود را مهمان ما باشید
        </h2>

        <div className="flex flex-col items-center gap-10 md:flex-row-reverse md:justify-center md:gap-20">
          <div className="relative h-60 w-60 md:h-100 md:w-100">
            <Image
              src="/images/حسین_ستوده.jpg"
              alt="حسین ستوده کیا"
              fill
              className="rounded-4xl object-cover"
            />
          </div>

          <form
            className="grid w-full gap-4 md:max-w-100"
            onSubmit={formik.handleSubmit}
          >
            {submitStatus === "success" && (
              <div className="mb-6 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
                <span className="text-lg">✅</span>
                <span>
                  پیام شما با موفقیت ارسال شد. به زودی با شما تماس می‌گیریم.
                </span>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-6 flex items-center gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
                <span className="text-lg">❌</span>
                <span>{errorMessage}</span>
              </div>
            )}
            {/* ============== */}
            <div>
              <div className="mb-2 flex gap-2">
                <label className="text-sm">نام:</label>
                {formik.touched.name && formik.errors.name && (
                  <p className="mt-1.5 text-xs text-rose-500">
                    {formik.errors.name}
                  </p>
                )}
              </div>
              <TextInput
                placeholder="برای مثال : علی"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>
            {/* ========================= */}
            <div>
              <div className="mb-2 flex gap-2">
                <label className="text-sm">نام خانوادگی:</label>
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className="mt-1.5 text-xs text-rose-500">
                    {formik.errors.lastName}
                  </p>
                )}
              </div>
              <TextInput
                placeholder="برای مثال: جعفری"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
            </div>
            {/* ========================= */}
            <div>
              <div className="mb-2 flex gap-2">
                <label className="text-sm">موضوع:</label>
                {formik.touched.subject && formik.errors.subject && (
                  <p className="mt-1.5 text-xs text-rose-500">
                    {formik.errors.subject}
                  </p>
                )}
              </div>
              <TextInput
                placeholder="برای مثال : ارث"
                name="subject"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
              />
            </div>

            {/* ========================= */}
            <div>
              <div className="mb-2 flex gap-2">
                <label className="text-sm">شماره تماس:</label>
                {formik.touched.tel && formik.errors.tel && (
                  <p className="mt-1.5 text-xs text-rose-500">
                    {formik.errors.tel}
                  </p>
                )}
              </div>
              <TextInput
                placeholder="09300000000"
                name="tel"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.tel}
              />
            </div>
            {/* ========================= */}
            <div>
              <div className="mb-2 flex gap-2">
                <label className="text-sm">توضیح کوتاه:</label>
                {formik.touched.description && formik.errors.description && (
                  <p className="mt-1.5 text-xs text-rose-500">
                    {formik.errors.description}
                  </p>
                )}
              </div>
              <Textarea
                placeholder="...."
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              />
            </div>

            <Button
              className="bg-gold! w-50"
              size="lg"
              type="submit"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  <span>در حال ارسال...</span>
                </>
              ) : (
                "ارسال"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
