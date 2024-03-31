export function useApiFetch(path: string, options: any) {
    const appConfig = useAppConfig()
    let headers: { [key: string]: string } = {};
    const token = useCookie('token');
    if (token.value) {
        headers["authorization"] = token.value;
    }
    return useFetch(appConfig.baseApiUri + path, {
        credentials: "include",
        watch: false,
        ...options,
        headers: {
            ...headers,
            ...options.headers
        }
    });
}