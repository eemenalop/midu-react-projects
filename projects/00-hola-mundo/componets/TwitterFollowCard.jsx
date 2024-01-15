import { useState } from "react"

// eslint-disable-next-line react/prop-types
const TwitterFollowCard = ({ formatUserName, userName, name }) => {

    const [isFollowing, setIsFollowing] = useState(false);

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
      <article className="tw-followCard">
          <header className="tw-followCard-header">
              <img
                  className="tw-followCard-avatar"
                  alt={`El avatar de ${name}`}
                  src={`https://unavatar.io/${userName}`}/>

                <div className="tw-followCard-info">
                  <strong>{name}</strong>
                  <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>    
                </div>
          </header>

          <aside>
              <button className={buttonClassName} onClick={handleClick}>
                  {text}
              </button>
          </aside>
      </article>
  )
}

export default TwitterFollowCard