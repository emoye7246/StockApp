import { useState, useEffect, createContext } from 'react'
import { Dashboard, Navigation, TodaysTickers } from './tickers/Tickers'
import { format } from 'date-fns'
import { Outlet } from 'react-router-dom'

export const SearchContext = createContext(null)





export function App() {

  const [stocks, setStocks] = useState([])
  const [symbol, setSymbol] = useState('SPY')
  const [inputSymbol, setInputSymbol] = useState('SPY')


  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const APIkey = `da23cb17ebde93a1b418830eb2dd0708`

  const [favorites, setFavorites] = useState([])
  const [watchlist, setWatchlist] = useState([])


  const addFavorites = (name, price) => {

    console.log(favorites)
    const addStock = {id: crypto.randomUUID(), name: name, price: price, message: `Date added: ${format(new Date(), 'MMMM, do, yyyy')}`  }
    setFavorites((prevStock) => [...prevStock, addStock])
}

const addWatchList = (name, price) => {
    console.log(watchlist)
    const addStock = {id: crypto.randomUUID(), name: name, price: price, message: `Date added: ${format(new Date(), 'MMMM, do, yyyy')}`}
    setWatchlist((prevStock) => [...prevStock, addStock])
}


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

  // if(loading) return <div>Please Wait while we find these stocks</div>
  // if(error ) return <div>There was an issue loading stock data</div>

  return (
    <>


        <div className='flex flex-col min-h-full max-w-screen overflow-hidden' id='fade'>


            <TodaysTickers myStocks={stocks} />

            <div className='flex flex-row'>
                <Dashboard />

              <SearchContext.Provider value={{symbol, setSymbol, inputSymbol, setInputSymbol, favorites, setFavorites, watchlist, setWatchlist, addFavorites, addWatchList}}>
                <div className='max-w-screen h-fit flex flex-col grow'>
                  <Navigation />

                  <div>
                    <Outlet />
                  </div>
                </div>
              </SearchContext.Provider>

            </div>
        </div>
        
    </>
  )
}

