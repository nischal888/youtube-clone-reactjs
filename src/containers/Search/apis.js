import url from "../../urls";

export const searchYoutubeVideoApi = (query) => {
  return fetch(`${url.searchVideo}&q=${query}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};
