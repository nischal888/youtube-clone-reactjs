import urls from "../../urls";

export const getPopularVideosApi = (token) => {
  const { popularVideos } = urls;
  let url = popularVideos;
  if (token) {
    url = `${popularVideos}&pageToken=${token}`;
  }
  return fetch(url, {
    method: "GET",
    "Content-Type": "application/json",
  });
};
