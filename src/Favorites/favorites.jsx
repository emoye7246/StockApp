import { useContext } from "react"
import { SearchContext } from "../App"

export const Favorites = () => {


        const {favorites} = useContext(SearchContext)

        console.log(favorites)

        return (

            <>
                <div className="min-h-screen flex flex-col" id="fade">

                    <div>
                        {favorites.map((stock) => 

                            <div>stock</div>
                      
                        
                        )}
                    </div>


                </div>
            </>
        )


    


}