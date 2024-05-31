/**
 * Handles the status code and returns an appropriate error message.
 * @param status - The HTTP status code.
 * @returns The error message corresponding to the status code.
 */
export function handleStatusCode(status: number) {
  switch (status) {
    case 400:
    return "There seems to be a problem with your request. Please check your details and try again.";
    case 401:
    return "Your login details are incorrect. Please try again.";
    case 403:
    return "You don't have permission to do this.";
    case 404:
    return "We couldn't find what you were looking for.";
    case 429:
    return "You've been making a lot of requests. Please wait a bit and try again.";
    case 500:
    case 502:
    case 503:
    case 504:
    return "Something went wrong on our end. Please try again later.";
    default:
    return "Something went wrong. Please try again.";
  }
}