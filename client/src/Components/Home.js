import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import BottleCard from './BottleCard';

function Home() {
    const user = useSelector(state => state.sessions.entities)
    const bottles = useSelector(state => state.bottles.entities)

    if (!user) return <Login />;

    const latestBottles = bottles?.slice(Math.max(bottles?.length -5, 0))
    const bottleCards = () => latestBottles?.map((bottle, key) => <BottleCard bottle={bottle} key={key}/>)

  return (
    <div>
      <div className="counter"><br />Welcome {user.username}!<br /><br /><br /><br/>
        <div>{latestBottles?.length===0 ? "You don't have any logged scotch yet. Add some to your journal." : "Here are your most recent scotch entries:"}</div>
      </div>
      <div className="card-grid">{bottleCards()}</div>
    </div>
  )
}

export default Home