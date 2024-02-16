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
      <div>
        <h2>{props.name}</h2>
        <h3>{props.date.toLocaleDateString()} </h3>
        <p>{props.text} </p>
      </div>
    </div>
  )
}

export default Tweet;