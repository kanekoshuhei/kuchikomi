import { TwitterApi } from 'twitter-api-v2';
import 'dotenv/config'

export default async function handler(req, res) {
  const client = new TwitterApi({
    appKey: process.env.TWITTER_APP_KEY,
    appSecret: process.env.TWITTER_APP_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_SECRET,
  }).readWrite;

  // Fetch tweets from the Twitter API
  const { data } = await client.v2.search('from:twitterdev', { tweet_mode: 'extended' });
  console.log(data);

  res.status(200).json(data.data);
}
