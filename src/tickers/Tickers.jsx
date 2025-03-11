import { Link } from 'react-router-dom'
import {useState, useContext} from 'react'
import { SearchContext } from '../App'
import { format } from 'date-fns'
import { myIcons } from '../assets/icons'



export const TodaysTickers = ({myStocks}) => {



    return (

<>
    <div className="flex max-w-full overflow-hidden relative bg-[#D9D9D9] shrink-0" style={{fontFamily: 'playfairText'}}>

        <div className="w-1/4 shrink-0 p-5 items-center text-center border-2 whitespace-nowrap">{`${format(new Date(), 'MMMM, do, yyyy')}`}</div>

        <div className="flex overflow-hidden flex-grow">

            <div id="scrollContainer" className="flex flex-row items-center justify-center gap-x-10 border-2">

                {[...myStocks, ...myStocks].map((stock, i) => (
                    <div className="flex flex-row gap-x-3 border-l-2 h-full w-full items-center justify-center p-5" key={i}>
                        <div>{stock.symbol}</div>
                        <div>${stock.open}</div>
                    </div>
                ))}

            </div>
        </div>
    </div>
</>

    )
    
}

export const Dashboard = () => {



    return (

        <>
            <div className="flex flex-col min-h-full gap-y-10 justify-center items-center w-1/4 border-2 bg-[#44444C] shrink-0" style={{fontFamily: 'playfairText'}}>
                
                <div className="flex flex-col mt-5 ">
                    <div className='text-[32px] font-[Crimson] text-[#E9E7E7]'>Dashboard</div>
                    <hr/>
                </div>
                    
                <div className="flex flex-col gap-y-20 text-2xl font-[Playfair] text-[#E9E7E7]">

                    <Link to='/'>
                        <div>Home</div>
                    </Link>

                    <Link to='favorites'>
                        <div>Favorites</div>
                    </Link>

                    <Link to='watchlist'>
                        <div>Watchlist</div>
                    </Link>
                </div>
            </div>
        </>
    )
}


export const Navigation = () => {

const {setSymbol, inputSymbol, setInputSymbol} = useContext(SearchContext)



    return (

        <>
                <div className="flex flex-row justify-between p-5 border-2 border-black font-[Crimson] bg-[#44444C]">

                    <div className='text-[32px] text-[#E5E3E3]'>Welcome to Invest With Us</div>

                    <div className='flex flex-row items-center gap-x-5'>

                        <input type="text" className="border-2 bg-gray-100 h-8 rounded-2xl" onChange={(e) => setInputSymbol(e.target.value)} />
                        
                        <img src={myIcons.search} alt="searchBar" className='h-[24px] w-[24px]' onClick={() => setSymbol(inputSymbol)}  />

                    </div>

                </div>
        </>
    )
}