import urls from "../../urls";

export const getPopularVideosApi = (token) => {
  if (token) {
    urls.popularVideos = `${urls.popularVideos}&pageToken=${token}`;
  }
  return fetch(urls.popularVideos, {
    method: "GET",
    "Content-Type": "application/json",
  });
};
