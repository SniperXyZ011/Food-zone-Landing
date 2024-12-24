import dummyImg from "../assets/image/image6.jpeg";
import "./Card.css";

export default function Card({ imageUrl, name, description, price }) {
  return (
    <div className="flex rounded-xl h-[150px] w-[300px] m-1 justify-between card">
      <div>
        <img
          src={imageUrl} 
          className="inline-block size-24 rounded-full"
        />
      </div>
      <div className="w-3/5 text-white">
        <span className="font-bold">{name}</span>
        <p className="font-light text-xs mt-1">{description}</p>
        <button className="bg-red-500 p-1 rounded text-sm float-right mt-4 mr-4">
          {price}
        </button>
      </div>
    </div>
  );
}
