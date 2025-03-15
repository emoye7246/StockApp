export const Spinner = () => {

    return (

        <>
            <div style={{fontFamily: 'playfairText'}} className='flex flex-row gap-x-10 justify-center items-center'>
                <div className="w-8 h-8 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
                <div className="text-2xl text-white">Please wait while we grab those stocks</div>
            </div>
        </>
    )
}