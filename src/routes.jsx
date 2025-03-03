import { Children } from "react";
import { App } from "./App";
import { Homepage } from "./Homepage/Homepage";


export const routes = [

    {
        path: '/',
        element: <App />,
        children: [

            {index: true, element: <Homepage />}
        ]

    }
]