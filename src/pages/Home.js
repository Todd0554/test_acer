import React from 'react'
import Intro from '../components/HomePageComponents/1-Intro/Intro';
import Available from '../components/HomePageComponents/2-Available/Available';
import Rewarding from '../components/HomePageComponents/3-Rewarding/Rewarding';
import Challenges from '../components/HomePageComponents/4-Challenges/Challenges';
import Cards from '../components/HomePageComponents/5-Cards/Cards';
import Contacts from '../components/HomePageComponents/6-Contacts/Contacts';

function Home() {
  return (
    <div style={{ "clear": "both"}}>
        <Intro />
        <Available />
        <Rewarding />
        <Challenges />
        <Cards />
        <Contacts />
    </div>
  )
}

export default Home