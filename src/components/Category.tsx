
const Category = () => {


    const categories = ['all','auto','realty','jobs','other'];



    return (
        <div className={""}>
            <div
                className="flex items-center gap-3 mt-3 -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-white dark:text-gray-800">
                {categories.map((el)=>{
                    return(<li key={el}  className="flex items-center cursor-pointer flex-shrink-0 px-5 py-2  dark:border-gray-300 dark:text-gray-600 capitalize">{el}</li>)
                })}

            </div>
        </div>
    );
};

export default Category;