import { useState, useEffect, useRef } from "react"
import { useContext } from "react"
import { SearchContext } from "../App"
import { Line } from "react-chartjs-2"
import 'chart.js/auto'
import Anton from '/Users/elijahmoye/Desktop/StockApp/src/assets/Fonts/Anton/Anton-Regular.ttf'
import playFairBold from '/Users/elijahmoye/Desktop/StockApp/src/assets/Fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf'

export const Homepage = () => {

    const {symbol} = useContext(SearchContext)
    const [stockData, setStockData] = useState([])
    const [intraday, setIntraday] = useState([])
    const [barColor, setBarColor] = useState('gray')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const Apikey = 'da23cb17ebde93a1b418830eb2dd0708'


    useEffect(() => {


        const fetchData = async () => {

            try{

                const response = await fetch (`https://api.marketstack.com/v1/tickers/${symbol}/intraday?access_key=${Apikey}`)
                await response.json().then((response) => {
                    
                    console.log(response)
                    setStockData(response.data || [])
                    setIntraday(response.data.intraday[0] || [])
                })
                setLoading(false)
                setError(null)

            }catch(err){
                
                setError(err)
                setLoading(false)
            }
            
        }
    }, [symbol])

    useEffect(() => {

        const bars = () => {

            if(intraday.open < intraday.close){

                setBarColor('green')
            }else if(intraday.open === intraday.close){
                setBarColor('gray')
            }else if(intraday.open > intraday.close){
    
                setBarColor('red')
            }

        }
        bars()

    }, [intraday])


    const ChartLine = ({stock, openPrice, closePrice}) => {

        const ref = useRef();


        const data = {
            labels: ['Open', 'Close'],
            datasets: [
              {
                label: `${stock} Open to Latest Price`,
                data: [openPrice, closePrice],
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: `${barColor}`
              },
            ],
          };

          
        return <Line ref={ref} data={data} />

    }



    return (

        <>

            {loading && <div>Please wait while we find that stock...</div>}

            {error && (
            <div className="text-red-500">
                That ticker was not found. If you are unsure or want to find a stock symbol you can visit the link{' '}
                <a href="https://marketstack.com/search" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                Here
                </a>
            </div>
            )}
            
            <div className="flex flex-col justify-center min-h-screen max-w-full">

                    <div className="flex flex-row items-center justify-center">

                        <div className="flex flex-col items-center w-1/2 justify-center min-h-full">
                            
                            <div className="flex flex-col gap-y-10">

                                <div>
                                    <div className="text-[52px] text-[#929191] font-[playFairBold]">{stockData.name}</div>
                                    <hr className="border-black w-96 max-h-0 flex" />
                                </div>
                                

                                <div className="flex flex-col gap-y-10">
                                    <div className="text-center font-[Anton] text-6xl text-green-500">$ {intraday.close}</div>

                                    <div className="flex flex-row items-center justify-center gap-x-12">
                                        <div>
                                            <div>Add to Favorites</div>
                                        </div>
                                        <div>
                                            <div>Add to Watchlist</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="flex items-center justify-center w-1/2 min-h-screen">

                             <ChartLine stock={stockData.name} openPrice={intraday.open} closePrice={intraday.close} />

                        </div>
                    </div>
            </div>

        </>
    )
}