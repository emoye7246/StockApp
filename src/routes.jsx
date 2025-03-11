import { Children } from "react";
import { App } from "./App";
import { Homepage } from "./Homepage/Homepage";
import { Spy } from "./ETFs/Spy";
import { Favorites } from "./Favorites/favorites";
import { Watchlist } from "./Watchlist/watchlist";


export const routes = [

    {
        path: '/',
        element: <App />,
        children: [

            {index: true, element: <Homepage />},
            {path: 'favorites', element: <Favorites />},
            {path: 'watchlist', element: <Watchlist />}
        ]

    }
]