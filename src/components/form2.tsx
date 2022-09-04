import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import CustomField from "./field";
import { useGame } from "@containers/GameContainer/GameContainer";
const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .max(10, "Too Long bro")
    .min(2, "Too Short bro")
    .required("Required"),
  amount: Yup.number().min(1),
});
export default function Form({}) {
  const { setFormValues } = useGame();
  const formik = useFormik({
    initialValues: { username: "", amount: 0 },
    onSubmit: (values, { setSubmitting }) => {
      setFormValues(values);
      setSubmitting(false);
    },
    validationSchema: SignUpSchema,
  });

  return (
    <div className="text-center bg-slate-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1>Anywhere in your application noobie</h1>
      <form onSubmit={formik.handleSubmit} className="grid-cols-12 grid">
        <h1
          className={`${
            !formik.isValid ? "text-red-500" : "text-black"
          } col-span-12`}
        >
          Form
        </h1>
        <CustomField
          name="username"
          type="text"
          placeholder="Username"
          alt="Write your username for this website here."
        />
        <CustomField type="number" name="amount" placeholder="Amount" />
        <button type="submit" disabled={formik.isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
