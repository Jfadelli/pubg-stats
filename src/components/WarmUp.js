import { useState } from 'react'
import { Armory } from '../data/WarmUpData.js'
const WarmUp = () => {
    const [userInput, SetUserInput] = useState('')
    const [selection, setSelection] = useState('')
    let gunSelection = Object.keys(Armory)
    gunSelection.unshift('Weapon Class')

    const continueCheck = () => {

    }

    const handleChange = (e) => {
        e.preventDefault()
        setSelection(e.target.value)
        pick()
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log(e.target.value)
    }

    const pick = () => {
        console.log(Armory.AR.length)
        console.log(selection)
        console.log(Armory)
        // console.log(Object.keys(Armory.selection))
        // let weapon = Armory.selection[Math.floor(Math.random() * Armory.selection.length)]
        // console.log(weapon)
    }

  


  


    // while (running === true) {

    // }


    // const main = () => {


    // }

    return (
        <div className="warm-up-wrapper">
            <h2>Warm Up</h2>
            <form >
                <select onChange={handleChange}className="warm-up-input" id="userInput" placeholder="Weapon">
                    {gunSelection.map(e=> {
                        return (
                            <option name={e}value={e}>{e}</option>
                        )
                    })}
                </select>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
            
        </div>);
}

export default WarmUp;