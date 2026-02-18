import axios, { AxiosError } from "axios";
import { useAuthStore } from "../stores/authStore";

export type ApiError = {
    status: number;
    message: string;
    details?: unknown;
};

export type ApiEnvelope<T> = {
    success: boolean;
    message?: string;
    data: T;
};

export function unwrap<T>(res: { data: ApiEnvelope<T> }): T {
    return res.data.data;
}

function toApiError(err: unknown): ApiError {
    if (axios.isAxiosError(err)) {
        const ax = err as AxiosError<any>;
        const status = ax.response?.status ?? 0;
        const data = ax.response?.data;

        const message =
            data?.message ||
            (status === 401
                ? "Non autorisé (token invalide ou expiré)."
                : status === 422
                    ? "Données invalides (validation)."
                    : status >= 500
                        ? "Erreur serveur."
                        : ax.message || "Erreur API.");

        const details = data?.errors ?? data;

        return { status, message, details };
    }

    return { status: 0, message: "Erreur inconnue.", details: err };
}

// ⚠️ baseURL à adapter si besoin
export const api = axios.create({
    baseURL: "http://127.0.0.1:3000",
    headers: {
        Accept: "application/json",
    },
});

// Inject token automatiquement avant chaque request
api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    if (token) {
        config.headers = config.headers ?? {};
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Uniformiser les erreurs (on throw un ApiError)
api.interceptors.response.use(
    (res) => res,
    (err) => Promise.reject(toApiError(err))
);
