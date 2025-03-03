import { useState, useEffect } from "react"
import { useContext } from "react"
import { SearchContext } from "../App"

import playFairBole from '/Users/elijahmoye/Desktop/StockApp/public/Fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf'




export const Homepage = () => {

    const {symbol} = useContext(SearchContext)


    const [stockData, setStockData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const Apikey = 'da23cb17ebde93a1b418830eb2dd0708'

    useEffect(() => {

        const fetchData = async () => {

            try{

                const response = await fetch (`https://api.marketstack.com/v1/tickers/${symbol}/intraday?access_key=${Apikey}`)
                await response.json().then((response) => {
                    
                    console.log(response)
                    setStockData(response)
                })
                setLoading(false)

            }catch(err){
                
                setError(err)
                setLoading(false)
            }
            
        }
    }, [])

    // if(loading) return <div>Please Wait While we find that stock</div>
    // if(error) return <div>That ticker was not found click here to find a ticker</div>

    return (

        <>
            <div>
                <div></div>

                    <div className="flex flex-row">

                        <div className="flex flex-col items-center border-2 w-1/2 justify-center min-h-full">

                                <div className="text-[128px] font-">Appl Inc</div>
                                <hr className="border-black w-44 max-h-0 flex" />

                                <div>$ 581.11</div>


                        </div>
                        <div className="border-2 w-1/2 min-h-screen">

                        </div>
                    </div>
                <div></div>
            </div>

        </>
    )
}