import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Dashboard, Navigation, TodaysTickers } from './tickers/Tickers'
import { Outlet } from 'react-router-dom'


export function App() {

  const [stocks, setStocks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const APIkey = `da23cb17ebde93a1b418830eb2dd0708`


  useEffect(() => {

      const fetchData = async () => {

          try{

            const response = await fetch(`http://api.marketstack.com/v1/intraday/latest?access_key=${APIkey}&symbols=SPY,AAPL,MSFT,AMZN,GOOGL,TSLA,FB,NVDA,NFLX,AVGO`)
            await response.json().then((response) => {
              setStocks(response.data)
            })
            setLoading(false)
          }catch(err){

            setError(err)
            setLoading(false)
          }
      }
      fetchData()
  }, [])

  if(loading) return <div>Please Wait while we find these stocks</div>
  if(error ) return <div>There was an issue loading stock data</div>

  return (
    <>


        <div className='flex flex-col'>


            <TodaysTickers myStocks={stocks} />

            <div className='flex flex-row'>
                <Dashboard />

                <div className='max-w-screen h-fit flex flex-col grow'>
                  <Navigation />

                  <Outlet />
                </div>
            </div>
        </div>
        
    </>
  )
}

