// const api = 'dbd3b02d8958d62185d02e944cd5f522'`https://api.openweathermap.org/data/2.5/weather?q=city&appid=api`

import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

function App() {
    const api = 'dbd3b02d8958d62185d02e944cd5f522'
    const [inputLCity, setInputCity] = useState('')
    const [cityName, setCityName] = useState('Yerevan')
    const [reqUrl, setReqUrl] = useState(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}`
    )
    //----------------
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [weatherRes, setWeatherRes] = useState([])

    function cityVal(e) {
        setInputCity((prev) => (prev = e.target.value))
    }
    function getWeather() {
        setCityName(inputLCity)
    }

    useEffect(() => {
        // setCityName(inputLCity)
        setReqUrl(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}`
        )

        return () => {}
    }, [cityName])

    useEffect(() => {
        // setReqUrl(
        //     `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}`
        // )
        console.log(reqUrl)
        fetch(reqUrl)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setWeatherRes(result)
                    console.log(reqUrl)
                    console.log(weatherRes)
                },

                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
        return () => {}
    }, [reqUrl])
    return (
        <>
            <p> {reqUrl}</p>
            <input onChange={cityVal} />
            <button onClick={getWeather}>Find weather</button>
        </>
    )
}
export default App
