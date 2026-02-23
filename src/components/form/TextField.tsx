import React from "react";
import clsx from "clsx";
import styles from "./Field.module.css";

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;

  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;

  error?: string;
  helpText?: string;
  hint?: string;

  id?: string;
  className?: string;
  maxLength?: number;
};

export function TextField({
  label,
  name,
  value,
  onChange,
  onBlur,
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
  required,
  disabled,
  readOnly,
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

      <input
        id={inputId}
        name={name}
        className={styles.control}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
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
