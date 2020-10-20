let baseUrl = "https://www.googleapis.com/youtube/v3";

const urls = {
  popularVideos: `${baseUrl}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=AIzaSyCW-6oYYga0oyyLswOZd-smbm6E58mErKs`,
};

export default urls;
