

export default function NavBar(){
    return <div className="h-36 bg-neutral-800">
    <div className="flex flex-col">
        <div className="flex justify-between p-1 m-4 mt-8 px-36">
            <div className="text-white font-bold text-2xl">F<span className="text-red-600">oo</span>dy Z<span className="text-red-600">o</span>ne</div>
            <div className=""><input type="text" placeholder="Search Food..." className="rounded  border-2 border-red-600 bg-transparent text-white placeholder-white p-1 font-light text-sm" /></div>
        </div>
        <div className="flex text-white gap-2 justify-center">
            <button className="bg-red-500 px-1 rounded">All</button>
            <button className="bg-red-500 px-1 rounded">Breakfast</button>
            <button className="bg-red-500 px-1 rounded">Lunch</button>
            <button className="bg-red-500 px-1 rounded">Dinner</button>
        </div>
        </div>
    </div>
}