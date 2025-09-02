export default async function makeRequest(url: string, method: string = 'GET', body: unknown = null) {
    try {
        const options: RequestInit = {
            method,
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        await new Promise(resolve => setTimeout(resolve, 1000))

        const res = await fetch(`http://localhost:3000${url}`, options);

        if (res.status === 401) {
            console.log('Token expired of invalid. Please login again.')
            return null;
        }
        if (!res.ok) {
            const errText = await res.text();
            throw new Error(errText);
        }

        const contentType = res.headers.get('Content-Type');
        return contentType && contentType.includes('application/json')
            ? await res.json()
            : await res.text();

    } catch (err: any) {
        console.error('Error in make request:', err.message);
        return null;
    }
}
