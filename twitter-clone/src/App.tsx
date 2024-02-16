import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tweet, { TweetProps } from './components/Tweet';
import 'reset-css';

const data: TweetProps[] = [
  {
    name: "",
    text: "",
    avatarUrl: "",
    date: new Date(),
  },
  {
    name: "",
    text: "",
    avatarUrl: "",
    date: new Date(),
  },
  {
    name: "",
    text: "",
    avatarUrl: "",
    date: new Date(),
  },
]

function App() {
  return (
    <div className="App">
      <Tweet name={"Elon Musk"} date={new Date("1/1/24")} avatarUrl='https://placekitten.com/300/300' text="Elon says stuff" />
    </div>
  );
}

export default App;

/*
1. Finish styling of tweet card according to specs in email
2. Fill out data above
3. Read the data above and render 1 tweet per object
*/