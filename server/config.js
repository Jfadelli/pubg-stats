const API_KEY = process.env.REACT_APP_API_KEY

export const defaultOptions = {
    gameMode: {
        curr: "gameMode/squad-fpp/",
        squads: "gameMode/squad-fpp/",
        duos: 'gameMode/duos-fpp/'
    },
    teamSize: 0,
    season: "seasons/division.bro.official.pc-2018-14/",
    playerId1: "account.23d9e6fd73b64e4a84fefdb5dd17c6d9",
    playerId2: "account.363d31e855434e92b9af990059ad03b0",
    playerId3: "account.e1963005d7b445d99f19cd91affb779d",
    playerId4: "account.59e341f6653a4104b3bed2c4eeb00f5b",
    // playerId5: "account.80b022e4ba474ae292555b92dc68221f",
    // playerId6: "account.cd577e5a2afe46b3ba76e654bc57a3ed"

}

export const PubgApiConfig = {
    headers: {
        Accept: "application/vnd.api+json",
        Authorization: API_KEY
      }
}