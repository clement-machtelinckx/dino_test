import React from "react";
import clsx from "clsx";
import styles from "./Field.module.css";

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;

  options: SelectOption[];
  placeholder?: string;

  required?: boolean;
  disabled?: boolean;

  error?: string;
  helpText?: string;
  hint?: string;

  id?: string;
  className?: string;
};

export function SelectField({
  label,
  name,
  value,
  onChange,
  onBlur,
  options,
  placeholder = "Sélectionner…",
  required,
  disabled,
  error,
  helpText,
  hint,
  id,
  className,
}: Props) {
  const inputId = id ?? name;
  const describedById = error ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined;

  return (
    <div className={clsx(styles.field, className)}>
      <div className={styles.labelRow}>
        <label className={styles.label} htmlFor={inputId}>
          {label}
          {required ? <span className={styles.required}>*</span> : null}
        </label>
        {hint ? <div className={styles.hint}>{hint}</div> : null}
      </div>

      <select
        id={inputId}
        name={name}
        className={clsx(styles.control, styles.select)}
        value={value}
        required={required}
        disabled={disabled}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={describedById}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>

      {error ? (
        <div id={`${inputId}-error`} className={styles.error} role="alert">
          {error}
        </div>
      ) : helpText ? (
        <div id={`${inputId}-help`} className={styles.help}>
          {helpText}
        </div>
      ) : null}
    </div>
  );
}
