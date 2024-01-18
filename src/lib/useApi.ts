const API_BASE_URL = '/api/v1';

export function useApi() {
    async function get<T>(url: string): Promise<T> {
        const res = await fetch(url);
        return res.json();
    }

    async function post<T, K>(url: string, payload: K): Promise<T> {
        const res = await fetch(url, {
            body: JSON.stringify(payload),
            method: 'POST',
        });
        return res.json();
    }

    return { get, post };
}
