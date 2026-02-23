import React from "react";
import clsx from "clsx";
import styles from "./Field.module.css";

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;

  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;

  rows?: number;
  error?: string;
  helpText?: string;
  hint?: string;

  id?: string;
  className?: string;
  maxLength?: number;
};

export function TextareaField({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  required,
  disabled,
  readOnly,
  rows = 5,
  error,
  helpText,
  hint,
  id,
  className,
  maxLength,
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

      <textarea
        id={inputId}
        name={name}
        className={clsx(styles.control, styles.textarea)}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        rows={rows}
        maxLength={maxLength}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={describedById}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
      />

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
