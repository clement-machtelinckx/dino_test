import { useOpportunitiesStore } from "../stores/opportunitiesStore";

export function useOpportunities() {
    const opportunities = useOpportunitiesStore((s) => s.opportunities);
    const loading = useOpportunitiesStore((s) => s.loading);
    const error = useOpportunitiesStore((s) => s.error);
    const refresh = useOpportunitiesStore((s) => s.fetchAll);
    const createOpportunity = useOpportunitiesStore((s) => s.create);

    return { opportunities, loading, error, refresh, createOpportunity };
}
