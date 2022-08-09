import { FieldHookConfig, FieldInputProps, useField } from "formik";
import React, { ClassAttributes, InputHTMLAttributes } from "react";

type Props = {};

export default function CustomField(
  props: FieldHookConfig<string | number> &
    InputHTMLAttributes<HTMLInputElement> &
    ClassAttributes<HTMLInputElement>
) {
  const [field, meta, helpers] = useField(props.name);
  return (
    <div className="bg-gray-400 p-2 flex flex-col my-2 col-span-6">
      <label className="capitalize">{props.name}</label>
      <input {...props} {...field} />
      {meta.touched && meta.error && (
        <div className="bg-red-100 text-red-600 m-1 rounded-xl p-2">
          {meta.error}
        </div>
      )}
    </div>
  );
}
