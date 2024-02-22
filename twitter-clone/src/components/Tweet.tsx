import './Tweet.css'


export type TweetProps = {
  name: string,
  date: Date,
  avatarUrl: string,
  text: string,
  isFavorited?: boolean,
  onFavoriteClicked?: () => void
}

const Tweet = (props: TweetProps) => {
  
  return (
    <div className='tweet-card'>

      <img src={props.avatarUrl} />
      <div className='tweet-card-content'>
        <div className='tweet-card-header'>
          <h2>{props.name}</h2>
          <h3>| {props.date.toLocaleDateString()} </h3>
        </div>
        <p>{props.text} </p>
      </div>
    </div>
  )
}

export default Tweet;

/*
Building before introducing interactivity: 
- Add comments to a tweet and render them (collapsed) specifically below that tweet
- Add a like counter
- Add a repost counter
- Add a comment counter
*/