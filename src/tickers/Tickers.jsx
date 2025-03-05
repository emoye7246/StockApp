import Crimson from '/Users/elijahmoye/Desktop/StockApp/src/assets/Fonts/Crimson_Text/CrimsonText-Regular.ttf'
import Playfair from '/Users/elijahmoye/Desktop/StockApp/src/assets/Fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf'
import playfairBold from '/Users/elijahmoye/Desktop/StockApp/src/assets/Fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf'
import searchIcon from '/Users/elijahmoye/Desktop/StockApp/src/assets/Fonts/icons/search-interface-symbol.png'
import {useState, useContext} from 'react'
import { SearchContext } from '../App'




export const TodaysTickers = ({myStocks}) => {



    return (

<>
    <div className="flex max-w-full overflow-hidden relative bg-[#D9D9D9] font-[Playfair]">

        <div className="w-1/4 shrink-0 p-5 items-center text-center border-2 whitespace-nowrap">Market is Open</div>

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
            <div className="flex flex-col min-h-full gap-y-20 justify-center items-center w-1/4 border-2 bg-[#44444C]">
                
                <div className="flex flex-col mt-5 ">
                    <div className='text-[32px] font-[Crimson] text-[#E9E7E7]'>Dashboard</div>
                    <hr/>
                </div>
                    
                <div className="flex flex-col gap-y-20 text-2xl font-[Playfair] text-[#E9E7E7]">
                    <div>Home</div>
                    <div>Favorites</div>
                    <div>Watchlist</div>
                </div>

                <div className="flex flex-col">
                    <div className='text-[32px] font-[Crimson] text-[#E9E7E7]'>Find Index Funds</div>
                    <hr/>
                </div>

                <div className="flex flex-col gap-y-20 text-2xl font-[Playfair] text-[#E9E7E7]">
                    <div>Spy</div>
                    <div>Voo</div>
                    <div>QQQ</div>
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
                        
                        <img src={searchIcon} alt="searchBar" className='h-[24px] w-[24px]' onClick={() => setSymbol(inputSymbol)}  />

                    </div>

                </div>
        </>
    )
}