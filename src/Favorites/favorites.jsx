import { useContext } from "react"
import { SearchContext } from "../App"
import { myIcons } from "../assets/icons"

export const Favorites = () => {


        const {favorites} = useContext(SearchContext)


        return (

            <>
                <div className="min-h-screen max-w-full flex flex-col overflow-y-scroll" id="fade">

                    <div className="flex flex-col justify-center items-center p-20">
                        <div className="flex flex-row w-full justify-center gap-x-10">
                            <img src={myIcons.favorites} alt="favorites-icon"  className="h-[32px] w-[32px]"/>
                            <div className="text-4xl">Favorites</div>
                        </div>
                        <hr className="w-96"/>
                    </div>

                    <div className="grid grid-cols-2 p-10 grid-rows-1 gap-10">
                        {favorites.map((stock, i) => 

                            <div className="w-[500px] h-[300px] border-gray-200 border bg-white rounded-[14px] shadow-gray-400 p-20 " key={i}>
                                    
                                    <div className="flex flex-col h-full justify-evenly">
                                        <div>
                                            <div className="text-3xl">{stock.name}</div>
                                            <hr />
                                        </div>
                                        <div>Price when added: {stock.price}</div>

                                        <div>{stock.message}</div>
                                    </div>
                            </div>
                        
                        
                        )}
                    </div>


                </div>
            </>
        )


    


}