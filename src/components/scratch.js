
        // Old player cards
        
        <div className="card-container">
          {players.map(e => {
            return (
              <div key={e.relationships.player.data.id}>
                <form onSubmit={getUserData} id="player-data">
                  <div className="card">
                    <div className="row">
                      <div className="col-l">
                        <p className="data-key"> Player Name</p>
                      </div>
                      <div className="player-name">
                        <input onSubmit={getUserData} onInput={handleUserData} type="text" placeholder={userData.filter(currUser => currUser.accountNumber === e.relationships.player.data.id)[0].userName} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-l">
                        <p className="data-key">Game Mode</p>
                      </div>
                      <div className="line-decoration"></div>
                      <div className="col-r">
                        <p className="data">Squad FPP</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-l">
                        <p className="data-key">ADR</p>
                      </div>
                      <div className="line-decoration"></div>
                      <div className="col-r">
                        <p className="data">{Math.floor(e.attributes.gameModeStats["squad-fpp"]["damageDealt"] / e.attributes.gameModeStats["squad-fpp"].roundsPlayed) ? Math.floor(e.attributes.gameModeStats["squad-fpp"]["damageDealt"] / e.attributes.gameModeStats["squad-fpp"].roundsPlayed) : 0}</p>
                      </div>
                    </div>

                  </div>
                </form>
              </div>

            )
          })}
        </div> 