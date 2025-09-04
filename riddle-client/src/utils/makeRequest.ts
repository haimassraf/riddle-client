export default async function makeRequest(url: string, method: string = 'GET', body: unknown = null, credentials: boolean = false) {
    try {
        const options: RequestInit = {
            method,
            headers: { 'Content-Type': 'application/json' }
        };

        if (body) options.body = JSON.stringify(body);
        if (credentials) options.credentials = 'include';

        await new Promise(resolve => setTimeout(resolve, 1000))

        const res = await fetch(`http://localhost:3000${url}`, options);

        if (res.status === 401) {
            return ('Token expired of invalid. Please login again.');
        }
        if (!res.ok) {
            const errText = await res.text();
            return (errText);
        }

        const contentType = res.headers.get('Content-Type');
        return contentType && contentType.includes('application/json')
            ? await res.json()
            : await res.text();

    } catch (err: any) {
        return (`Error in make request: ${err.message}`);
    }
}
