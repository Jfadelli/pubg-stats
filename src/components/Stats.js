import '.././App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { userData } from '../data/userData.js'
import { seasonList } from '../data/seasonList.js'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = "https://api.pubg.com/shards/steam/"

const defaultOptions = {
  gameMode: {
    curr: "gameMode/squad-fpp/",
    squads: "gameMode/squad-fpp/",
    duos: 'gameMode/duos-fpp/'
  },
  season: "seasons/division.bro.official.pc-2018-14/",
  playerId1: "account.23d9e6fd73b64e4a84fefdb5dd17c6d9",
  playerId2: "account.363d31e855434e92b9af990059ad03b0",
  playerId3: "account.e1963005d7b445d99f19cd91affb779d",
  playerId4: "account.59e341f6653a4104b3bed2c4eeb00f5b",
  // playerId5: "account.80b022e4ba474ae292555b92dc68221f",
  // playerId6: "account.cd577e5a2afe46b3ba76e654bc57a3ed"
}

const PubgApiConfig = {
  headers: {
    Accept: "application/vnd.api+json",
    Authorization: API_KEY
  }
}

const Stats = () => {
  const [gameMode, setGameMode] = useState();
  const [options, setOptions] = useState(defaultOptions);
  const [howManyPlayers, setHowManyPlayers] = useState();
  const [players, setPlayers] = useState([]);
  const [currUser, setCurrUser] = useState();
  const [ApiRequest, SetApiRequest] = useState(BASE_URL + defaultOptions.season + defaultOptions.gameMode.squads + "players?filter[playerIds]=" + defaultOptions.playerId1 + "," + defaultOptions.playerId2 + "," + defaultOptions.playerId3 + "," + defaultOptions.playerId4 + "," + defaultOptions.playerId5 + "," + defaultOptions.playerId6 + "&filter[gamepad]=true");
  const [roster, setRoster]= useState([])
  // const [stash, setStash] = useState([])
  // const [playerNames, setPlayerNames] = useState([])
  useEffect(() => {
    axios.get(ApiRequest, PubgApiConfig)
      .then(res => {
        const response = res.data;
        setPlayers(response.data)
      })
  }, [])

  let statsPlayer1 = { ADR: 0 }
  let statsPlayer2 = { ADR: 0 }
  let statsPlayer3 = { ADR: 0 }
  let statsPlayer4 = { ADR: 0 }
  let teamStats = { ADR: 0 }

  try {
    statsPlayer1 = {
      ADR: Math.floor((Math.ceil(players[0].attributes.gameModeStats["squad-fpp"]["damageDealt"]) / players[0].attributes.gameModeStats["squad-fpp"].roundsPlayed))
    }
    statsPlayer2 = {
      ADR: Math.floor((Math.ceil(players[1].attributes.gameModeStats["squad-fpp"]["damageDealt"]) / players[1].attributes.gameModeStats["squad-fpp"].roundsPlayed))
    }
    statsPlayer3 = {
      ADR: Math.floor((Math.ceil(players[2].attributes.gameModeStats["squad-fpp"]["damageDealt"]) / players[2].attributes.gameModeStats["squad-fpp"].roundsPlayed))
    }
    statsPlayer4 = {
      ADR: Math.floor((Math.ceil(players[3].attributes.gameModeStats["squad-fpp"]["damageDealt"]) / players[3].attributes.gameModeStats["squad-fpp"].roundsPlayed))
    }
    teamStats = { ADR: Math.floor(((statsPlayer1.ADR ? statsPlayer1.ADR : 0) + (statsPlayer2.ADR ? statsPlayer2.ADR : 0) + (statsPlayer3.ADR ? statsPlayer3.ADR : 0) + (statsPlayer4.ADR ? statsPlayer4.ADR : 0)) / 4) }

  } catch {
    statsPlayer1 = { ADR: "N/A" }
    statsPlayer2 = { ADR: "N/A" }
    statsPlayer3 = { ADR: "N/A" }
    statsPlayer4 = { ADR: "N/A" }
    teamStats = { ADR: "N/A" }
  }

  const selectSeason = (e) => {
    e.preventDefault();
    getSeasonDetails(e.target.value)
  }

  const changeRoster = (e) => {
    e.preventDefault()
    console.log(e.target)
    for(let i=0; i<userData.length; i++){
      if(e.target.value === userData[i].userName){
        setRoster(roster => [...roster, userData[i].accountNumber])
      }
    }
  }

  // const getName = (playerNameInfo) => {
  //   const API_REQUEST3 = BASE_URL + "players?filter[playerIds]=" + defaultOptions.playerId1 + "," + defaultOptions.playerId2 + "," + defaultOptions.playerId3 + "," + defaultOptions.playerId4
  //   axios.get(API_REQUEST3, PubgApiConfig)
  //     .then(res => {
  //       const response = res.data.data
  //       setPlayerNames(response)
  //       console.log(response)

  //     })
  // }

  const getSeasonDetails = (seasonInfo) => {
    console.log(options)
    if (options.gameMode.curr === '') {
      setOptions(...gameMode.curr = gameMode.squads)
      console.log(gameMode.curr)
    }
    const API_REQUEST2 = BASE_URL + seasonInfo + options.gameMode.curr + "players?filter[playerIds]=" + defaultOptions.playerId1 + "," + defaultOptions.playerId2 + "," + defaultOptions.playerId3 + "," + defaultOptions.playerId4 + "," + defaultOptions.playerId5 + "," + defaultOptions.playerId6 + "&filter[gamepad]=true"
    axios.get(API_REQUEST2, PubgApiConfig)
      .then(res => {
        const response = res.data
        setPlayers(response.data)
      })
  }

  const handleHowManyPlayersSubmit = (e) => {
    e.preventDefault()
    setHowManyPlayers(e.target.value)
  }

  const handleGameModeChange = (e) => {
    const { value } = e.target
    e.preventDefault();
    setOptions(options => ({
      ...options.gameMode,
      curr: value

    }))
    // getSeasonDetails("seasons/division.bro.official.pc-2018-14/")
  }

  const handleUserData = (e) => {
    e.preventDefault()
    setCurrUser(e.target.value)
  }

  const checkUserDataDb = (name) => {
    for (let i = 0; i < userData.length; i++) {
      if (name === userData[i].userName) {
        console.log('this name is in the db: ', name)
        return
      }
      else {
      }

    }
    console.log('name not in db.')
  }

  const getUserData = (e) => {
    e.preventDefault()
    checkUserDataDb(currUser)
    console.log('submitted')
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Stats</h1>

        <form>
          <div className="season-row">
            {/* <label className="season-label">Season</label> */}
            <select className="season-items" onChange={selectSeason}>
              {seasonList.map(e => {
                return (
                  <option value={e.url} placeholder="Please Select a Season" key={e.id}>{e.seasonName}</option>
                )
              })}
            </select>
          </div>
        </form>

        <form onSubmit={handleHowManyPlayersSubmit}>
          <div className="season-row">
            <p className="season-label">Players</p>
            <select placeholder="4" onChange={handleHowManyPlayersSubmit}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </form>

        <form onSubmit={handleGameModeChange}>
          <div className="season-row">
            <p className="season-label">Count</p>
            <select onChange={handleGameModeChange}>
              <option value={defaultOptions.gameMode.squads}>Squads</option>
              <option value={defaultOptions.gameMode.duos}>Duos</option>
            </select>
          </div>
        </form>

        <br />

        <div className="team-stats-row">
          <div className="col-l">
            <p className="data-key">Team ADR</p>
          </div>
          <div className="line-decoration"></div>
          <div className="col-r">
            <p className="data" >{teamStats.ADR ? teamStats.ADR : "N/A"}</p>
          </div>
        </div>

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

        {/* <div className="card-container">
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

                        <select onSubmit={getUserData} onChange={changeRoster}onInput={handleUserData} type="text" placeholder={userData.filter(currUser => currUser.accountNumber === e.relationships.player.data.id)[0].userName}>
                          {userData.map(e => {
                            return (
                              <option>
                                {e.userName}
                              </option>
                            )
                          })}
                        </select>

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
          
        </div> */}
        <button onClick={null}>Update Roster</button>
      </div>
    </div>
  );
}

export default Stats;
