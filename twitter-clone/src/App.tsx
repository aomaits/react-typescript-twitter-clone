import React from 'react';
import './App.css';
import Tweet, { TweetProps } from './components/Tweet';
import 'reset-css';

const data: TweetProps[] = [
  {
    name: "President Merkin Muffley",
    text: "Gentlemen, you can't fight in here! This is the War Room.",
    avatarUrl: "https://placekitten.com/300/300",
    date: new Date("1/1/24"),
  },
  {
    name: "The Dude",
    text: "I do mind, the Dude minds. This will not stand, ya know, this aggression will not stand, man.",
    avatarUrl: "https://placekitten.com/300/300",
    date: new Date("1/6/24"),
  },
  {
    name: "Norman Bates",
    text: "A boy's best friend is his mother.",
    avatarUrl: "https://placekitten.com/300/300",
    date: new Date("1/3/24"),
  },
]

function App() {

  const sortedByDate = [...data].sort((a, b) => a.date.getTime() - b.date.getTime());

  const tweets = sortedByDate.map((tweet, index) => (
    <Tweet
    key={index}
    name={tweet.name}
    date={tweet.date}
    avatarUrl={tweet.avatarUrl}
    text={tweet.text}
  />
  ));

  return (
    <div className="App">
      {tweets}
    </div>
  );
}

export default App;

/*
2. Fill out data above
3. Read the data above and render 1 tweet per object
*/