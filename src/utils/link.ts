import { useConfig } from "../stores/useConfig";

export const link = (url: string) => {
    const baseUrl = useConfig.getState().baseUrl
    return `${baseUrl}${url}`
};
