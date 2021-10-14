import './App.css';
import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import playerData from './player-data.json'

const player1 = playerData.data[0].attributes.gameModeStats["squad-fpp"]
const player2 = playerData.data[1].attributes.gameModeStats["squad-fpp"]

// const pgurl ="https://api.pubg.com/shards/steam/seasons/division.bro.official.pc-2018-13/gameMode/squad-fpp/players?filter[playerIds]=account.23d9e6fd73b64e4a84fefdb5dd17c6d9,account.363d31e855434e92b9af990059ad03b0&filter[gamepad]=true"
// const options = {
//   headers:{
//     Accept:"application/vnd.api+json",
//     Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJlZDUyNmFjMC0wODk4LTAxM2EtMTlmNi0wMWM4ZTgyNmUwZTMiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjMzNTAwMTU1LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImNvbXBhcmUtdXMifQ.DkYW-48pPZaKgyL7lVFgr38e0xPSM2cvPxkkdt5-Me4"
//   }
// }

function App() {
  // const [player1, setPlayer1] = useState([])
  // const [player2, setPlayer2] = useState([])

  // useEffect(() => {
  //   axios.get(pgurl, options)
  //     .then(res => {
  //       const response = res.data;
  //       setPlayer1(response.data[0].attributes.gameModeStats["squad-fpp"])
  //       setPlayer2(response.data[1].attributes.gameModeStats["squad-fpp"])
  //     })
  // },[])
const statsPlayer1 = {
  ADR: Math.floor((Math.ceil(player1["damageDealt"]) / player1.roundsPlayed))
}
const statsPlayer2 = {
  ADR: Math.floor((Math.ceil(player2["damageDealt"]) / player2.roundsPlayed))
}
  return (
    <div className="App">
      <div className="App-header">
        <h1>Pubg-Stats-App</h1>
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
        <br />
        <hr/>
        <br />
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
    </div>
  );
}

export default App;
