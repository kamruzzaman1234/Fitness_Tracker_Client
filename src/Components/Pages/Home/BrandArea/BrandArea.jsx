const BrandArea = ()=>{
    return(
        <div className="py-10 bg-gray-700">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
                    <div>
                        <div className="mb-6">
                            <h2 className="text-[24px] text-white">Recommended <br /> Brands</h2>
                        </div>
                        <div>
                        <div className="flex justify-center items-center border-2 border-white w-[50%] py-3">
     <div className="">
        <button
         
          className="bg-gray-800 text-[30px] px-4 text-white    hover:bg-gray-600"
        >
          ❮
        </button>
      </div>
      <div className="">
        <button
          
          className="bg-gray-800 text-[30px] px-4 text-white hover:bg-gray-600"
        >
          ❯
        </button>
      </div>
     </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co.com/b1FY2yQ/company-name-and-logo.jpg"
                        className="w-full h-[140px]" alt="" />
                    </div>
                    <div>
                        <img className="h-[140px] w-full" 
                        src="https://i.ibb.co.com/X3z1zXY/aa-letter-monogram-bold-company-name-logo-609138-89.jpg" alt="" />
                    </div>
                    <div>
                      <img className="h-[140px] w-full" 
                        src="https://i.ibb.co.com/X3z1zXY/aa-letter-monogram-bold-company-name-logo-609138-89.jpg" alt="" />

                    </div>
                    <div>
                        <img className="h-[140px] w-full" 
                        src="https://i.ibb.co.com/X3z1zXY/aa-letter-monogram-bold-company-name-logo-609138-89.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div> 

    )
}
export default BrandArea;