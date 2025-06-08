export default function Card({ stats, category, description }){
    return (
        <div className="text-center w-60 h-60 bg-blue-500 px-10 flex flex-col justify-center items-center my-10 gap-2 rounded-3xl">
            <div className="text-5xl text-white font-bold">{stats}</div>
            <div className="text-2xl text-white">{category}</div>
            <div className="font-serif text-white text-lg">{description}</div>
        </div>
    );
}