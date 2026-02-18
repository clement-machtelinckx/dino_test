import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import { useAuthStore } from "../stores/authStore";
import { useOpportunities } from "../hooks/useOpportunities";
import type { CreateOpportunityPayload } from "../stores/opportunitiesStore";

function ErrorBox({ error }: { error: any }) {
    if (!error) return null;

    return (
        <div className="alert alert--danger margin-top--md">
            <div className="alert__title">
                Erreur {error.status ?? ""} — {error.message ?? "Erreur"}
            </div>
            {error.status === 422 && error.details ? (
                <pre style={{ whiteSpace: "pre-wrap", marginTop: 8 }}>
                    {JSON.stringify(error.details, null, 2)}
                </pre>
            ) : null}
        </div>
    );
}

export default function OpportunitiesTestPage() {
    const token = useAuthStore((s) => s.token);
    const setToken = useAuthStore((s) => s.setToken);
    const clearToken = useAuthStore((s) => s.clearToken);

    const { opportunities, loading, error, refresh, createOpportunity } =
        useOpportunities();

    // useEffect(() => {
    //     if (!useAuthStore.getState().token) {
    //         useAuthStore.getState().setToken("tony-test-token");
    //     }
    // }, []);


    const [tokenInput, setTokenInput] = useState(token ?? "");

    const [form, setForm] = useState<CreateOpportunityPayload>({
        name: "Opportunité test",
        status: "Prospection",
        content: "Créée depuis le front",
        contactable: {
            isCompany: "0",
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@test.com",
            phone: "0600000000",
        },
        riskType: "EMPTY",
    });


    useEffect(() => {
        if (token) refresh();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    const onSaveToken = () => setToken(tokenInput.trim());
    const onClearToken = () => {
        clearToken();
        setTokenInput("");
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createOpportunity(form);
            // refresh déjà fait dans le store après create()
        } catch {
            // handled by store
        }
    };

    return (
        <Layout title="Test API Opportunities (axios + zustand)">
            <main className="container margin-vert--lg">
                <h1>Test API — Opportunities</h1>

                {/* Token */}
                <div className="card margin-top--md">
                    <div className="card__header">
                        <h3>Token (persisté via Zustand)</h3>
                    </div>
                    <div className="card__body">
                        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                            <input
                                className="input"
                                style={{ minWidth: 320, flex: "1 1 320px" }}
                                value={tokenInput}
                                onChange={(e) => setTokenInput(e.target.value)}
                                placeholder="Bearer token…"
                            />
                            <button className="button button--primary" onClick={onSaveToken} type="button">
                                Sauver
                            </button>
                            <button className="button button--secondary" onClick={onClearToken} type="button">
                                Effacer
                            </button>
                            <button className="button button--outline button--primary" onClick={refresh} type="button">
                                Refresh
                            </button>
                        </div>
                        <p className="text--muted margin-top--sm" style={{ marginBottom: 0 }}>
                            Token actif: <code>{token ? "oui" : "non"}</code>
                        </p>
                    </div>
                </div>

                <ErrorBox error={error} />

                {/* Create */}
                <div className="card margin-top--lg">
                    <div className="card__header">
                        <h3>Créer une opportunity</h3>
                    </div>
                    <div className="card__body">
                        <form onSubmit={onSubmit}>
                            <div className="row">
                                <div className="col col--4">
                                    <label className="margin-bottom--sm">
                                        <strong>Titre</strong>
                                    </label>
                                    <input
                                        className="input"
                                        value={form.name}
                                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                                        required
                                    />
                                </div>

                                <div className="col col--4">
                                    <label className="margin-bottom--sm">
                                        <strong>Status</strong>
                                    </label>
                                    <select
                                        className="input"
                                        value={form.status}
                                        onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as any }))}
                                    >
                                        <option value="Prospection">Prospection</option>
                                        <option value="Proposition">Proposition</option>
                                        <option value="Conclusion">Conclusion</option>
                                        <option value="Refus">Refus</option>
                                        <option value="Archiver">Archiver</option>
                                    </select>

                                </div>

                                <div className="col col--12 margin-top--md">
                                    <label className="margin-bottom--sm">
                                        <strong>Description</strong>
                                    </label>
                                    <textarea
                                        className="input"
                                        style={{ minHeight: 100 }}
                                        value={form.content ?? ""}
                                        onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
                                    />
                                </div>
                            </div>

                            <div className="margin-top--md" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                                <button className="button button--primary" type="submit" disabled={loading || !token}>
                                    {loading ? "Envoi..." : "Créer"}
                                </button>
                                {!token ? (
                                    <div className="alert alert--warning" style={{ margin: 0 }}>
                                        Ajoute un token pour créer/lister.
                                    </div>
                                ) : null}
                            </div>
                        </form>
                    </div>
                </div>

                {/* List */}
                <div className="margin-top--lg">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                        <h2 className="margin-bottom--sm">Liste</h2>
                        <button className="button button--outline button--primary" onClick={refresh} disabled={loading}>
                            {loading ? "Chargement..." : "Rafraîchir"}
                        </button>
                    </div>

                    {opportunities.length === 0 ? (
                        <p className="text--muted">
                            {token ? "Aucune opportunity (ou API renvoie une liste vide)." : "Ajoute un token puis clique refresh."}
                        </p>
                    ) : (
                        <div className="margin-top--md">
                            {opportunities.map((o) => (
                                <div key={o.id} className="card margin-bottom--sm">
                                    <div className="card__header">
                                        <strong>{o.title}</strong> <span className="text--muted">— {o.status}</span>
                                    </div>
                                    <div className="card__body">
                                        {o.description ? <p>{o.description}</p> : <p className="text--muted">—</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </Layout>
    );
}
