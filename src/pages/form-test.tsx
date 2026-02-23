import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import { FormGrid } from "../components/form/FormGrid";
import { TextField } from "../components/form/TextField";
import { SelectField } from "../components/form/SelectField";
import { RadioGroupField } from "../components/form/RadioGroupField";
import { TextareaField } from "../components/form/TextareaField";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  postalCode: string;
  reason: string;
  preferredContact: string;
  message: string;
};

export default function FormTest(): JSX.Element {
  const [values, setValues] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    postalCode: "",
    reason: "",
    preferredContact: "phone",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const reasonOptions = useMemo(
    () => [
      { value: "info", label: "Demande d’informations" },
      { value: "contract", label: "Réaliser un contrat" },
      { value: "claim", label: "Déclarer un sinistre" },
    ],
    []
  );

  function set<K extends keyof FormState>(key: K, v: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: v }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validateBasic(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.firstName.trim()) next.firstName = "Prénom requis.";
    if (!values.lastName.trim()) next.lastName = "Nom requis.";
    if (!values.email.trim()) next.email = "Email requis.";
    if (!values.reason) next.reason = "Merci de sélectionner un motif.";
    if (!values.message.trim()) next.message = "Message requis.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateBasic()) return;

    // Payload brut (plus tard : Zod + normalisation)
    // eslint-disable-next-line no-console
    console.log("FORM PAYLOAD:", values);

    alert("Payload loggué en console ✅");
  }

  return (
    <Layout title="Form test">
      <main className="container margin-vert--lg">
        <h1 className="mkTitle">Form test</h1>
        <p className="mkText">
          Page de test des composants. Plus tard on branche Zod + validation téléphone/code postal.
        </p>

        <form onSubmit={onSubmit}>
          <FormGrid cols={2} gap="md">
            <TextField
              label="Prénom"
              name="firstName"
              value={values.firstName}
              onChange={(v) => set("firstName", v)}
              required
              error={errors.firstName}
            />
            <TextField
              label="Nom"
              name="lastName"
              value={values.lastName}
              onChange={(v) => set("lastName", v)}
              required
              error={errors.lastName}
            />
          </FormGrid>

          <div className="margin-top--md" />

          <FormGrid cols={2} gap="md">
            <TextField
              label="Email"
              name="email"
              value={values.email}
              onChange={(v) => set("email", v)}
              type="email"
              autoComplete="email"
              required
              error={errors.email}
            />
            <TextField
              label="Téléphone"
              name="phone"
              value={values.phone}
              onChange={(v) => set("phone", v)}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              helpText="On validera proprement (libphonenumber-js) quand on branche Zod."
              error={errors.phone}
            />
          </FormGrid>

          <div className="margin-top--md" />

          <FormGrid cols={2} gap="md">
            <TextField
              label="Code postal"
              name="postalCode"
              value={values.postalCode}
              onChange={(v) => set("postalCode", v)}
              inputMode="numeric"
              placeholder="Ex: 59000"
              error={errors.postalCode}
            />
            <SelectField
              label="Motif"
              name="reason"
              value={values.reason}
              onChange={(v) => set("reason", v)}
              options={reasonOptions}
              required
              error={errors.reason}
            />
          </FormGrid>

          <div className="margin-top--md" />

          <RadioGroupField
            label="Contact préféré"
            name="preferredContact"
            value={values.preferredContact}
            onChange={(v) => set("preferredContact", v)}
            options={[
              { value: "phone", label: "Téléphone", description: "Rappel" },
              { value: "email", label: "Email", description: "Réponse écrite" },
            ]}
          />

          <div className="margin-top--md" />

          <TextareaField
            label="Message"
            name="message"
            value={values.message}
            onChange={(v) => set("message", v)}
            required
            error={errors.message}
            placeholder="Décrivez votre besoin…"
          />

          <div className="margin-top--lg" style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button className="mkBtn" type="submit">
              Envoyer <span className="mkBtnArrow" aria-hidden="true">→</span>
            </button>
            <Link to="/contact" className="mkTextMuted">
              Aller à la page contact
            </Link>
          </div>
        </form>
      </main>
    </Layout>
  );
}
