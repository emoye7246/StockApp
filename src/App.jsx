import { useState, useEffect, createContext } from 'react'
import { Dashboard, Navigation, TodaysTickers } from './tickers/Tickers'
import { format } from 'date-fns'
import { Outlet } from 'react-router-dom'
import { Spinner } from './stylised/customComponents'
import { myIcons } from './icons'
import { access_key } from './personal/fetch'

export const SearchContext = createContext(null)


export function App() {

  const [stocks, setStocks] = useState([])
  const [symbol, setSymbol] = useState('SPY')
  const [inputSymbol, setInputSymbol] = useState('SPY')


  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

            const response = await fetch(`https://api.marketstack.com/v1/intraday/latest?access_key=${access_key}&symbols=SPY,AAPL,MSFT,AMZN,GOOGL,TSLA,FB,NVDA,NFLX,AVGO`)
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



  return (
    <>
        {loading && (

          <div className='flex flex-col min-h-screen max-w-screen items-center justify-center gap-y-10'>

              <div style={{fontFamily: 'playfairText'}} className='flex flex-row gap-x-10 text-2xl items-center'>

                <img src={myIcons.icon} alt="investIcon" className='w-[96px] h-[96px] text-2xl' />
                <div className='text-white text-center'>Invest With Us</div>

              </div>

              <Spinner />

          </div>
        )}

        {error && (

            <div className='flex flex-col min-h-screen max-w-screen items-center justify-center'>

              <div style={{fontFamily: 'playfairText'}} className='flex flex-row gap-x-10'>

                <img src={myIcons.icon} alt="investIcon" className='w-[64px] h-[64px]' />
                <div>Invest With Us</div>

              </div>

              <div>{error} sorry for the incovienence please refresh or try again later</div>

          </div>

        )}

        <div className={loading ? 'hidden' : 'flex flex-col min-h-full max-w-screen overflow-hidden'} id='fade'>


            <TodaysTickers myStocks={stocks} />

            <div className='flex flex-row'>
                <Dashboard />

              <SearchContext.Provider value={{symbol, setSymbol, inputSymbol, setInputSymbol, favorites, setFavorites, watchlist, setWatchlist, addFavorites, addWatchList}}>
                <div className='max-w-screen h-fit flex flex-col grow'>
                  <Navigation />

                  <div className='bg-white'>
                    <Outlet />
                  </div>
                </div>
              </SearchContext.Provider>

            </div>
        </div>
        
    </>
  )
}

