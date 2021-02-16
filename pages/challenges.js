import React from 'react'
import ChallengeCard from '../components/challengecard.js'

const challenges = () => {
  return (
    <div>
      <h1>Challenges v2 </h1>

      <ChallengeCard 
        about="Recycle" 
        detail="Recycling is a vital first step to protecting the planet. " 
        reward="N/A" 
        current={3} 
        total={14} 
      />

      <ChallengeCard 
        about="Reusable Water" 
        detail="Refill your reusable water bottle 5 times." 
        reward="N/A" 
        current={4} 
        total={5} 
      />

      <ChallengeCard 
        about="Shower" 
        detail="Take a five minute shower 7 times." 
        reward="N/A" 
        current={2} 
        total={7} 
      />

      <ChallengeCard 
        about="Recycle" 
        detail="Recycling is a vital first step to protecting the planet. " 
        reward="N/A" 
        current={3} 
        total={14} 
      />

      <ChallengeCard 
        about="Reusable Water" 
        detail="Refill your reusable water bottle 5 times." 
        reward="N/A" 
        current={4} 
        total={5} 
      />

      <ChallengeCard 
        about="Shower" 
        detail="Take a five minute shower 7 times." 
        reward="N/A" 
        current={2} 
        total={7} 
      />
    </div>
  )
}

export default challenges
