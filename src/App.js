import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import playerData from './player-data.json'

// const player1 = playerData.data[0].attributes.gameModeStats["squad-fpp"]
// const player2 = playerData.data[1].attributes.gameModeStats["squad-fpp"]

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = "https://api.pubg.com/shards/steam/"

const options = {
  season: "seasons/division.bro.official.pc-2018-14/",
  playerId1: "account.23d9e6fd73b64e4a84fefdb5dd17c6d9",
  playerId2: "account.363d31e855434e92b9af990059ad03b0",
  playerId3: "account.e1963005d7b445d99f19cd91affb779d",
  playerId4: "account.59e341f6653a4104b3bed2c4eeb00f5b"
}

const API_REQUEST = BASE_URL + options.season + "gameMode/squad-fpp/players?filter[playerIds]=" + options.playerId1 + "," + options.playerId2 + "," + options.playerId3 + "," + options.playerId4 + "&filter[gamepad]=true"

const PubgApiConfig = {
  headers: {
    Accept: "application/vnd.api+json",
    Authorization: API_KEY
  }
}

// function that pulls player account ID from player name


function App() {
  // const [friends, setFriends] = useState([])
  const [players, setPlayers] = useState([])
  const [playerNames, setPlayerNames] = useState([])
  // useEffect(() => {
  //   axios.get(API_REQUEST, PubgApiConfig)
  //     .then(res => {
  //       const response = res.data;
  //       setPlayers(response.data)
  //     })
  // }, [])

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
    teamStats = { ADR: Math.floor((statsPlayer1.ADR + statsPlayer2.ADR + statsPlayer3.ADR + statsPlayer4.ADR) / 4) }

  } catch {
    statsPlayer1 = { ADR: 0 }
    statsPlayer2 = { ADR: 0 }
    statsPlayer3 = { ADR: 0 }
    statsPlayer4 = { ADR: 0 }
    teamStats = { ADR: 0 }
  }

  const SeasonList = [
    {
      id: 0,
      url: "",
      seasonName: "Please select a season",
    },
    {
      id: 1,
      url: "seasons/division.bro.official.pc-2018-12/",
      seasonName: "Season 12"
    },
    {
      id: 2,
      url: "seasons/division.bro.official.pc-2018-13/",
      seasonName: "Season 13"
    },
    {
      id: 3,
      url: "seasons/division.bro.official.pc-2018-14/",
      seasonName: "Season 14"
    }
  ]

  const selectSeason = (e) => {
    e.preventDefault();
    getSeasonDetails(e.target.value)
    getName()
    accountNumberMatch()
  }

  const accountNumberMatch = () => {
    console.log(players)
    try{
      let i = 0;
      while (i < players.length) {
        let j = 0
        while (j < playerNames.length) {
          if (players[i].relationships.player.data.id === playerNames[j].id) {
            console.log('we match bitch')
            j++
          }
          i++
        }
      }
    } catch {
      console.log('i\'m too slow')
    }
  }


  const getName = (playerNameInfo) => {
    const API_REQUEST3 = BASE_URL + "players?filter[playerIds]=" + options.playerId1 + "," + options.playerId2 + "," + options.playerId3 + "," + options.playerId4
    axios.get(API_REQUEST3, PubgApiConfig)
      .then(res => {
        const response = res.data.data
        setPlayerNames(response)
        console.log(response)

      })
  }


  const getSeasonDetails = (seasonInfo) => {
    const API_REQUEST2 = BASE_URL + seasonInfo + "gameMode/squad-fpp/players?filter[playerIds]=" + options.playerId1 + "," + options.playerId2 + "," + options.playerId3 + "," + options.playerId4 + "&filter[gamepad]=true"
    axios.get(API_REQUEST2, PubgApiConfig)
      .then(res => {
        const response = res.data
        setPlayers(response.data)
      })


  }

  const handleSubmit = (e) => {
    alert('I was handled' + e)
    e.preventDefault();
  }
  return (
    <div className="App">
      <div className="App-header">
        <h1>Pubg-Stats-App</h1>

        <label>Season</label>
        <form onSubmit={handleSubmit}>
          <select onChange={selectSeason} id="season-items">
            {SeasonList.map(e => {
              return (
                <option value={e.url} placeholder="Please Select a Season" key={e.id}>{e.seasonName}</option>
              )
            })}
          </select>
        </form>

        <div className="card-container">


          {players.map(e => {
            // console.log(e.relationships.player.data.id)

            return (
              <div key={e.relationships.player.data.id}>
                <form id="player-data">
                  <div className="card">
                    <label> Player Name</label>

                    <input id="player-name" type="text" placeholder="names" />
                    {/* <button type="submit">Submit</button> */}
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
                        <p className="data">{Math.floor(e.attributes.gameModeStats["squad-fpp"]["damageDealt"] / e.attributes.gameModeStats["squad-fpp"].roundsPlayed)}</p>
                      </div>
                    </div>

                  </div>
                </form>
              </div>
            )
          })}
        </div>


        <hr />
        <div className="team-stats-row">
          <div className="col-l">
            <p className="data-key">Team ADR</p>
          </div>
          <div className="line-decoration"></div>
          <div className="col-r">
            <p className="data">{teamStats.ADR}</p>
          </div>
          <br />

        </div>
      </div>
    </div>
  );
}

export default App;
