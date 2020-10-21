let baseUrl = "https://www.googleapis.com/youtube/v3";
const apiKey = "AIzaSyCW-6oYYga0oyyLswOZd-smbm6E58mErKs";

const urls = {
  popularVideos: `${baseUrl}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${apiKey}`,
  searchVideo: `${baseUrl}/search?part=snippet&maxResults=25&videoType=any&key=${apiKey}`,
};

export default urls;
