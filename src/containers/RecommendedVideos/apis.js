import url from "../../urls";

export const getPopularVideosApi = () => {
  return fetch(url.popularVideos, {
    method: "GET",
    "Content-Type": "application/json",
  });
};
