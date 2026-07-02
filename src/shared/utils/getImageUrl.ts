export const imageAdapter = (url: string) => {
  const storageUrl = import.meta.env.VITE_API_URL;
  return storageUrl + url;
};
