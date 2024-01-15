import TwitterFollowCard from '../componets/TwitterFollowCard'
import './App.css'

function App() {
  const format = (userName) => `@${userName}` 
  return (
    <div className='App'>
      <TwitterFollowCard formatUserName={format} isFollowing userName='eemenalop' name='Edgar Mena' />
      <TwitterFollowCard formatUserName={format} isFollowing={false} userName='kengru' name='Ken Grullon' />
      <TwitterFollowCard formatUserName={format} isFollowing userName='elonmus' name='Elon Musk' />
      <TwitterFollowCard formatUserName={format} isFollowing = {false} userName='billgates' name='Bill Gates' />
    </div>
  )
  
}

export default App
