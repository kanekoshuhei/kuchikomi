import axios from 'axios';

export async function getServerSideProps() {
  try {
    const res = await axios.get('http://localhost:8080/api/tweets');
    return { props: { tweets: res.data } };
  } catch (error) {
    console.error("Error occurred during fetching tweets:", error);
    // エラーが発生した場合、空のtweetsを返します。
    return { props: { tweets: [] } };
  }
}

export default function Home({ tweets }) {
  return (
    <div>
      <h1>Tweets</h1>
      {tweets.map((tweet, index) => (
        <div key={index}>
          <h2>{tweet.user.name}</h2>
          <p>{tweet.full_text}</p>
        </div>
      ))}
    </div>
  );
}
