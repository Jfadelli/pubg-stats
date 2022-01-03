import '.././App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { userData } from '../data/userData.js'
import { seasonList } from '../data/seasonList.js'

import {defaultOptions, PubgApiConfig} from '../data/config.js'

const BASE_URL = "https://api.pubg.com/shards/steam/"

const PLAYERSTATS_DB = "https://localhost:52/api/players"

let statsPlayer1 = { ADR: 0 }
let statsPlayer2 = { ADR: 0 }
let statsPlayer3 = { ADR: 0 }
let statsPlayer4 = { ADR: 0 }
let teamStats = { ADR: 0 }

const Stats = () => {
  const [gameMode, setGameMode] = useState();
  const [options, setOptions] = useState(defaultOptions);
  const [howManyPlayers, setHowManyPlayers] = useState();
  const [players, setPlayers] = useState([]);
  const [currUser, setCurrUser] = useState();

  const [ApiRequest, SetApiRequest] = useState(BASE_URL + defaultOptions.season + defaultOptions.gameMode.squads + "players?filter[playerIds]=" + defaultOptions.playerId1 + "," + defaultOptions.playerId2 + "," + defaultOptions.playerId3 + "," + defaultOptions.playerId4 + "," + defaultOptions.playerId5 + "," + defaultOptions.playerId6 + "&filter[gamepad]=true");

  const [roster, setRoster] = useState({
    player1: {
      name: '',
      accountNumber: ''
    },
    player2: {
      name: '',
      accountNumber: ''
    },
    player3: {
      name: '',
      accountNumber: ''
    },
    player4: {
      name: '',
      accountNumber: ''
    }

  })

  const [ApiRequest2, SetApiRequest2] = useState(BASE_URL + defaultOptions.season + defaultOptions.gameMode.squads + "players?filter[playerIds]=" + roster.player1.accountNumber + "," + roster.player1.accountNumber + "," + roster.player1.accountNumber + "," + roster.player1.accountNumber + ",&filter[gamepad]=true");
  console.log(ApiRequest)
  useEffect(() => {
    axios.get(ApiRequest, PubgApiConfig)
    
      .then(res => {
        const response = res.data;
        setPlayers(response.data)
        console.log(roster)
      })
  }, [roster])

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

  const updateData = () => {
  
    axios.get(ApiRequest2, PubgApiConfig)
      .then(res => {
        const response = res.data;
        setPlayers(response.data)
        console.log(roster)

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
  }

  const handleTeamSizeChange = (e) => {
    const { value } = e.target
    e.preventDefault();
    setOptions(options => ({
      ...options.teamSize,
      curr: value
    }))
  }
  

  const getUserData = (e) => {
    let currUser = e.target.value
    e.preventDefault()
    checkUserDataDb(currUser)
    console.log('submitted')
  }


  const checkUserDataDb = (name) => {
    for (let i = 0; i < userData.length; i++) {
      if (name === userData[i].userName) {
        let currUserName = userData[i].userName
        let currAccountNumber = userData[i].accountNumber

        if (roster.player1.name === '') {
          setRoster({...roster,
            player1: {
              name: currUserName,
              accountNumber: currAccountNumber
            }
          })
        } else if (roster.player2.name === '') {
          setRoster({...roster,
            player2: {
              name: currUserName,
              accountNumber: currAccountNumber
            }
          })

        }
        else if (roster.player3.name === '') {
          setRoster({...roster,
            player3: {
              name: currUserName,
              accountNumber: currAccountNumber
            }
          })

        }
        else if (roster.player4.name === '') {
          setRoster({...roster,
            player4: {
              name: currUserName,
              accountNumber: currAccountNumber
            }
          })
        }
        return
      }
    }
    SetApiRequest2(BASE_URL + defaultOptions.season + defaultOptions.gameMode.squads + "players?filter[playerIds]=" + roster.player1.accountNumber + "," + roster.player2.accountNumber + "," + roster.player3.accountNumber + "," + roster.player4.accountNumber + ",&filter[gamepad]=true"
    )
  }


  return (
    <div className="App">
      <div className="App-header">
        <h1>Stats</h1>

        <form>
          <div className="season-row">
            {/* <label className="season-label">Season</label> */}
            <select className="season-items" onChange={null}>
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
            <p className="season-label">Game mode</p>
            <select onChange={handleGameModeChange}>
            <option value={null}>Select Mode</option>
              <option value="Squads">Squads</option>
              <option value="Duos">Duos</option>
            </select>
          </div>
        </form>

        <form onSubmit={handleTeamSizeChange}>
          <div className="season-row">
            <p className="season-label">Team Size</p>
            <select onChange={handleTeamSizeChange}>
            <option value={0}>Select size</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
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

                        <select onChange={getUserData} type="text" placeholder={userData.filter(currUser => currUser.accountNumber === e.relationships.player.data.id)[0].userName}>
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
                        <p className="data-key">ADR</p>
                      </div>
                      <div className="line-decoration"></div>
                      <div className="col-r">
                        <p className="data">{Math.floor(e.attributes.gameModeStats["squad-fpp"]["damageDealt"] / e.attributes.gameModeStats["squad-fpp"].roundsPlayed) ? Math.floor(e.attributes.gameModeStats["squad-fpp"]["damageDealt"] / e.attributes.gameModeStats["squad-fpp"].roundsPlayed) : 0}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-l">
                        <button onSubmit={getUserData} style={{ width: "150px", margin: "auto 0px auto 10px" }}>Update</button>
                      </div>
                      <div className="line-decoration"></div>
                      <div className="col-r">

                      </div>
                    </div>

                  </div>

                </form>
              </div>

            )
          })}

        </div>
        <button onClick={updateData}>Update Roster</button>
      </div>
    </div>
  );
}

export default Stats;
