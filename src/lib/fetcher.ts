export async function fetcher<T>(url: string, options?: RequestInit, revalidateSecond: number = 60): Promise<T> {
    const res = await fetch(url, { ...options, next: { revalidate: revalidateSecond } });
    if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    return res.json() as Promise<T>
}