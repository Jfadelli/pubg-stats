import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import playerData from './player-data.json'

// const player1 = playerData.data[0].attributes.gameModeStats["squad-fpp"]
// const player2 = playerData.data[1].attributes.gameModeStats["squad-fpp"]

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = "https://api.pubg.com/shards/steam/"

const options = {
  season: "seasons/division.bro.official.pc-2018-13/",
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
  const [player1, setPlayer1] = useState([])
  const [player2, setPlayer2] = useState([])
  const [player3, setPlayer3] = useState([])
  const [player4, setPlayer4] = useState([])

  useEffect(() => {
    axios.get(API_REQUEST, PubgApiConfig)
      .then(res => {
        const response = res.data;
        setPlayer1(response.data[0].attributes.gameModeStats["squad-fpp"])
        setPlayer2(response.data[1].attributes.gameModeStats["squad-fpp"])
        setPlayer3(response.data[2].attributes.gameModeStats["squad-fpp"])
        setPlayer4(response.data[3].attributes.gameModeStats["squad-fpp"])
      })
  }, [])

  const statsPlayer1 = {
    ADR: Math.floor((Math.ceil(player1["damageDealt"]) / player1.roundsPlayed))
  }
  const statsPlayer2 = {
    ADR: Math.floor((Math.ceil(player2["damageDealt"]) / player2.roundsPlayed))
  }
  const statsPlayer3 = {
    ADR: Math.floor((Math.ceil(player3["damageDealt"]) / player3.roundsPlayed))
  }
  const statsPlayer4 = {
    ADR: Math.floor((Math.ceil(player4["damageDealt"]) / player4.roundsPlayed))
  }

  const teamStats = { ADR: Math.floor((statsPlayer1.ADR + statsPlayer2.ADR + statsPlayer3.ADR + statsPlayer4.ADR) / 4) }

  const SeasonList = [
    // {
    //   id: 0,
    //   url: "",
    //   seasonName: "Please select a season",
    // },
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

  }


  const getSeasonDetails = (seasonInfo) =>{
    const API_REQUEST2 = BASE_URL + seasonInfo + "gameMode/squad-fpp/players?filter[playerIds]=" + options.playerId1 + "," + options.playerId2 + "," + options.playerId3 + "," + options.playerId4 + "&filter[gamepad]=true"
    axios.get(API_REQUEST2, PubgApiConfig)
    .then(res => {
      const response = res.data
        setPlayer1(response.data[0].attributes.gameModeStats["squad-fpp"])
        setPlayer2(response.data[1].attributes.gameModeStats["squad-fpp"])
        setPlayer3(response.data[2].attributes.gameModeStats["squad-fpp"])
        setPlayer4(response.data[3].attributes.gameModeStats["squad-fpp"])
    })
  }
  const handleSubmit = (e) =>{
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


        <div className="two-col">
          <form id="player-data">
            <label> Player Name</label>
            <input id="player-name" type="text" placeholder="Slim_Reaper_" />
            <button type="submit">Submit</button>
            <div className="row">
              <div className="col-l">
                <p className="data-key">Season</p>
              </div>
              <div className="line-decoration"></div>
              <div className="col-r">
                <p className="data">13</p>
              </div>
            </div>
            <div className="row">
              <div className="col-l">
                <p className="data-key">Game Mode</p>
              </div>
              <div className="line-decoration"></div>
              <div className="col-r">
                <p className="data">Squad</p>
              </div>
            </div>
            <div className="row">
              <div className="col-l">
                <p className="data-key">ADR</p>
              </div>
              <div className="line-decoration"></div>
              <div className="col-r">
                <p className="data">{statsPlayer1.ADR}</p>
              </div>
            </div>
          </form>


          <div className="spacer"></div>
          <form id="player-data">
            <label> Player Name</label>
            <input id="player-name" type="text" placeholder="unladenAFswallow" />
            <button type="submit">Submit</button>
            <div className="row">
              <div className="col-l">
                <p className="data-key">Season</p>
              </div>
              <div className="line-decoration"></div>
              <div className="col-r">
                <p className="data">13</p>
              </div>
            </div>
            <div className="row">
              <div className="col-l">
                <p className="data-key">Game Mode</p>
              </div>
              <div className="line-decoration"></div>
              <div className="col-r">
                <p className="data">Squad</p>
              </div>
            </div>
            <div className="row">
              <div className="col-l">
                <p className="data-key">ADR</p>
              </div>
              <div className="line-decoration"></div>
              <div className="col-r">
                <p className="data">{statsPlayer2.ADR}</p>
              </div>
            </div>
          </form>
        </div>

        <hr />
        <div className="two-col">
          <form id="player-data">
            <label> Player Name</label>
            <input id="player-name" type="text" placeholder="MyNameIsBuck_" />
            <button type="submit">Submit</button>
            <div className="row">
              <div className="col-l">
                <p className="data-key">Season</p>
              </div>
              <div className="line-decoration"></div>
              <div className="col-r">
                <p className="data">13</p>
              </div>
            </div>
            <div className="row">
              <div className="col-l">
                <p className="data-key">Game Mode</p>
              </div>
              <div className="line-decoration"></div>
              <div className="col-r">
                <p className="data">Squad</p>
              </div>
            </div>
            <div className="row">
              <div className="col-l">
                <p className="data-key">ADR</p>
              </div>
              <div className="line-decoration"></div>
              <div className="col-r">
                <p className="data">{statsPlayer3.ADR}</p>
              </div>
            </div>
          </form>
          <div className="spacer"></div>
          <form id="player-data">
            <label> Player Name</label>
            <input id="player-name" type="text" placeholder="sushimaneTV" />
            <button type="submit">Submit</button>
            <div className="row">
              <div className="col-l">
                <p className="data-key">Season</p>
              </div>
              <div className="line-decoration"></div>
              <div className="col-r">
                <p className="data">13</p>
              </div>
            </div>
            <div className="row">
              <div className="col-l">
                <p className="data-key">Game Mode</p>
              </div>
              <div className="line-decoration"></div>
              <div className="col-r">
                <p className="data">Squad</p>
              </div>
            </div>
            <div className="row">
              <div className="col-l">
                <p className="data-key">ADR</p>
              </div>
              <div className="line-decoration"></div>
              <div className="col-r">
                <p className="data">{statsPlayer4.ADR}</p>
              </div>
            </div>
          </form>
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
        </div>
      </div>
    </div>
  );
}

export default App;
