export const TodaysTickers = ({myStocks}) => {

    return (

<>
    <div className="flex max-w-full overflow-hidden relative">

        <div className="w-1/4 shrink-0 p-5 items-center text-center border-2 whitespace-nowrap">Market is Open</div>

        <div className="flex overflow-hidden flex-grow">

            <div id="scrollContainer" className="flex flex-row items-center gap-x-10 border-2">

                {[...myStocks, ...myStocks].map((stock, i) => (
                    <div className="flex flex-row gap-x-3" key={i}>
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
            <div className="flex flex-col justify-between items-center min-h-screen w-1/4 border-2">

                    <div>Dashboard</div>
                    <hr />
                    
                    <div>
                        <div>Home</div>
                        <div>Favorites</div>
                        <div>Watchlist</div>
                    </div>

                    <div>Find Index Funds</div>

                    <div>Spy</div>
                    <div>Voo</div>
                    <div>QQQ</div>

            </div>
        </>
    )
}


export const Navigation = () => {

    return (

        <>
            <div className="flex flex-row justify-between p-5 border-2">
                <div>Welcome</div>
                <input type="text" className="border-2 bg-gray-100" />
            </div>
        </>
    )
}