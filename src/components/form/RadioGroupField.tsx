import React from "react";
import clsx from "clsx";
import styles from "./Field.module.css";

export type RadioOption = {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
};

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;

  options: RadioOption[];

  required?: boolean;
  disabled?: boolean;

  error?: string;
  helpText?: string;
  hint?: string;

  className?: string;
};

export function RadioGroupField({
  label,
  name,
  value,
  onChange,
  options,
  required,
  disabled,
  error,
  helpText,
  hint,
  className,
}: Props) {
  const describedById = error ? `${name}-error` : helpText ? `${name}-help` : undefined;

  return (
    <fieldset className={clsx(styles.field, className)} style={{ border: "none", padding: 0, margin: 0 }}>
      <div className={styles.labelRow}>
        <legend className={styles.label}>
          {label}
          {required ? <span className={styles.required}>*</span> : null}
        </legend>
        {hint ? <div className={styles.hint}>{hint}</div> : null}
      </div>

      <div className={styles.radioGroup} aria-describedby={describedById} aria-invalid={error ? "true" : "false"}>
        {options.map((opt) => {
          const isDisabled = disabled || opt.disabled;
          return (
            <label key={opt.value} className={styles.radioItem}>
              <input
                className={styles.radioInput}
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                disabled={isDisabled}
                required={required}
                onChange={() => onChange(opt.value)}
              />
              <span className={styles.radioLabel}>{opt.label}</span>
              {opt.description ? <span className={styles.radioDesc}>{opt.description}</span> : null}
            </label>
          );
        })}
      </div>

      {error ? (
        <div id={`${name}-error`} className={styles.error} role="alert">
          {error}
        </div>
      ) : helpText ? (
        <div id={`${name}-help`} className={styles.help}>
          {helpText}
        </div>
      ) : null}
    </fieldset>
  );
}
