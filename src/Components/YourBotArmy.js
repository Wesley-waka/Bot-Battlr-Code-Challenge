import React from "react";
import Card from "./BotCollection";
import { useState, useEffect } from "react"

//Displays my bots in the blue ribbon a representation of my army
function DisplayBots() {
    const [Robots, setRobots] = useState([])
    const [favoriteRobots, setFavoriteRobots] = useState([])

    //fetches data once form my server
    useEffect(() => {
        fetch(" http://localhost:8001/bots")
            .then((r) => r.json())
            .then((data) => setRobots(data))
    }, [])

    //Adds bots when you click on them
    const addBot = (id) => {
        const Bot = Robots.find(Bot => Bot.id === id)
        const botAdd = favoriteRobots.find(Bot => Bot.id === id)
        botAdd ? console.error("The following Bot exist") : setFavoriteRobots([...favoriteRobots, Bot])
    }

    // Removes the bot from army when clicked
    const removeBot = (id) => {
        const newFavoriteRobots = favoriteRobots.filter((Bot) => Bot.id !== id)
        setFavoriteRobots(newFavoriteRobots)
    }


    return (
        <>
            <div className="container border col-12">
                <div className="row">
                    {favoriteRobots.map((Bot) => {
                        return (
                            <Card
                                key={Bot.id}
                                bot={Bot}
                                handleOnClick={removeBot}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="row mx-5 p-0">
                {Robots.map((Bot) => {
                    return (
                        <Card
                            key={Bot.id}
                            bot={Bot}
                            handleOnClick={addBot}
                        />
                    );
                })}
            </div>
        </>


    )
}

export default DisplayBots;