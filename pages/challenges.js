import React from 'react'
import ChallengeCard from '../components/challengecard.js'

const challenges = () => {
  return (
    <div>
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
        about="Another challenge" 
        detail="Details about the challenge" 
        reward="Rewards for completion" 
        current={8} 
        total={14} 
      />

      <ChallengeCard 
        about="Another challenge" 
        detail="Details about the challenge" 
        reward="Rewards for completion" 
        current={2} 
        total={5} 
      />

      <ChallengeCard 
        about="Another challenge" 
        detail="Details about the challenge" 
        reward="Rewards for completion" 
        current={15} 
        total={90} 
      />
    </div>
  )
}

export default challenges
