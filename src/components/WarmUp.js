import { useState, useEffect } from 'react'
import { Armory } from '../data/WarmUpData.js'
import { images } from '../data/ImagesTable'

const WarmUp = () => {
    const [selection, setSelection] = useState('')
    const [currLoadout, setCurrLoadout] = useState({
        currWeapon: "",
        currScope: "",
        currTip: "",
        currGrip: "",
    }
    )
    let weaponClass = Object.keys(Armory)
    weaponClass.unshift('Weapon Class')

    const handleSubmit = (e) => {
        pick()

    }
    const handleChange = (e) => {
        e.preventDefault()
        setSelection(Armory[e.target.value])
    }

    const pick = () => {
        try {
            let weaponsList = Object.keys(selection)
            let currWeapon = weaponsList[Math.floor(Math.random() * weaponsList.length)]
            let scopesList = selection[currWeapon]['scopes']
            let currScope = scopesList[Math.floor(Math.random() * scopesList.length)]
            let tipsList = selection[currWeapon]['tips']
            let currTip = scopesList[Math.floor(Math.random() * tipsList.length)]
            let gripsList = selection[currWeapon]['grips']
            let currGrip = gripsList[Math.floor(Math.random() * gripsList.length)]
            setCurrLoadout({
                currWeapon: currWeapon,
                currScope: currScope,
                currTip: currTip,
                currGrip: currGrip,
            })
        } catch (e) {
            console.log('error', e)
        }
    }

    useEffect(() => {
        pick()
        //eslint-disable-next-line
    }, [selection])

    return (
        <div className="warm-up-wrapper">
            <h2>Warm Up</h2>
            <form >
                <select onChange={handleChange} className="warm-up-input" id="userInput" placeholder="Weapon">
                    {weaponClass.map(e => {
                        return (
                            <option name={e} value={e}>{e}</option>
                        )
                    })}
                </select>

            </form>
            <button className="submit-button" type="button" onClick={handleSubmit}>Submit</button>
            <div className="weapon-card">
                <div className="img-container">
                    <img alt="weapon" src={images[currLoadout.currWeapon] ? images[currLoadout.currWeapon] : images["Dice"]} />
                </div>
                <div className="weapon">
                    <h2>{currLoadout.currWeapon ? currLoadout.currWeapon : "Choose a class"}</h2>
                    <div className="weapon-details">
                        <p class="attachments">{currLoadout.currScope ? "Scope: " + currLoadout.currScope : ""}</p>
                        <p class="attachments"> {currLoadout.currGrip ? "Grip: " + currLoadout.currGrip : ""} </p>
                        <p class="attachments">{currLoadout.currTip ? "Tip: " + currLoadout.currTip : ""} </p>
                    </div>


                </div>
            </div>

        </div>);
}
export default WarmUp;