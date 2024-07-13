/**
 * Handles the status code and returns an appropriate error message.
 * @param status - The HTTP status code.
 * @returns The error message corresponding to the status code.
 */
type HttpStatusCode = 400 | 401 | 403 | 404 | 429 | 500 | 502 | 503 | 504;

export function handleStatusCode(status: number): string {
    const statusMessages: { [key in HttpStatusCode]: string } = {
        400: 'There seems to be a problem with your request. Please check your details and try again.',
        401: 'Your login details are incorrect. Please try again.',
        403: "You don't have permission to do this.",
        404: "We couldn't find what you were looking for.",
        429: "You've been making a lot of requests. Please wait a bit and try again.",
        500: 'Something went wrong on our end. Please try again later.',
        502: 'Something went wrong on our end. Please try again later.',
        503: 'Something went wrong on our end. Please try again later.',
        504: 'Something went wrong on our end. Please try again later.'
    };

    return statusMessages[status as HttpStatusCode] || 'Something went wrong. Please try again.';
}
