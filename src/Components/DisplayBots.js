import React from "react";
import Card from "./ListBots";
import { useState, useEffect } from "react"


function DisplayBots() {
    const [items, setItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])

    useEffect(() => {
        fetch(" http://localhost:8001/bots")
            .then((r) => r.json())
            .then((data) => setItems(data))
    }, [])

    const addItemToFavorite = (id) => {
        const item = items.find(item => item.id === id)
        const fav = favoriteItems.find(item => item.id === id)
        fav ? alert("existing") : setFavoriteItems([...favoriteItems, item])
    }

    const removeItemFromFavorites = (id) => {
        const newFavoriteItems = favoriteItems.filter((item) => item.id !== id)
        setFavoriteItems(newFavoriteItems)
    }


    return (
        <>
            <div className="container border col-12">
                <div className="row">
                    {favoriteItems.map((item) => {
                        return (
                            <Card
                                key={item.id}
                                item={item}
                                handleOnClick={removeItemFromFavorites}
                            />
                        );
                    })}
                </div>
            </div>

            {/* <div className="container border"> */}
            <div className="row mx-5 p-0">
                {items.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            item={item}
                            handleOnClick={addItemToFavorite}
                        />
                    );
                })}
            </div>
            {/* </div> */}
        </>


    )
}

export default DisplayBots;