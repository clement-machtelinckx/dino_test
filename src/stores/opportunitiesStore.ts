import { create } from "zustand";
import { api, type ApiError, unwrap, type ApiEnvelope } from "../lib/api";

export type Opportunity = {
    id: number | string;
    name: string;            // backend utilise "name"
    status: string;
    content?: string | null; // backend utilise "content"
    created_at?: string;
};

export type CreateOpportunityPayload = {
    // Minimum viable basé sur ta doc
    name: string;
    status: "Prospection" | "Proposition" | "Conclusion" | "Refus" | "Archiver";
    content: string;

    // Pour créer une vraie opportunity, contactable est REQUIRED selon ta doc.
    // Donc on te met un payload minimal "prospect contact" (isCompany = "0")
    contactable: {
        isCompany: "0" | "1";
        id?: number | null; // si client existant
        firstName?: string | null;
        lastName?: string | null;
        email?: string | null;
        phone?: string | null;
    };

    // optionnel
    riskType?: string | null;
};

type OpportunitiesState = {
    opportunities: Opportunity[];
    loading: boolean;
    error: ApiError | null;

    fetchAll: () => Promise<void>;
    create: (payload: CreateOpportunityPayload) => Promise<void>;
};

export const useOpportunitiesStore = create<OpportunitiesState>((set, get) => ({
    opportunities: [],
    loading: false,
    error: null,

    fetchAll: async () => {
        set({ loading: true, error: null });

        try {
            // supposons que GET renvoie: { success, message, data: Opportunity[] }
            const res = await api.get<ApiEnvelope<Opportunity[]>>("/api/opportunities");
            const list = unwrap(res);

            set({ opportunities: Array.isArray(list) ? list : [] });
        } catch (e) {
            set({ error: e as ApiError, opportunities: [] });
        } finally {
            set({ loading: false });
        }
    },

    create: async (payload) => {
        set({ loading: true, error: null });

        try {
            // POST renvoie: { success, message, data: Opportunity }
            await api.post<ApiEnvelope<Opportunity>>("/api/opportunities", payload, {
                headers: { "Content-Type": "application/json" },
            });

            // Refresh
            await get().fetchAll();
        } catch (e) {
            set({ error: e as ApiError });
            throw e;
        } finally {
            set({ loading: false });
        }
    },
}));
