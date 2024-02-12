import { useState } from "react"

const countryWithStates = [
    {
        country: 'India',
        states: ['Jharkhand', 'Bihar']
    },
    {
        country: 'Pakistan',
        states: ['Lahore', 'Peshawar']
    }
]


export default function CountryStateDropdown() {
    const [states, setStates] = useState([]);
    const countryVal = countryWithStates.map(cws => cws.country)

    const _getStateValues = (e) => {
        countryWithStates.forEach(cws => {
            if (cws.country === e.target.value) {
                setStates(cws.states)
            }
        })
    }

    return (
        <>
            Country dropdown:
            <select name="country" onChange={_getStateValues}>
                {countryVal.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            {states.length > 0 && (<div>
                States Dropdown:
                <select name="states">
                    {states.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
            </div>)}
        </>
    )
}