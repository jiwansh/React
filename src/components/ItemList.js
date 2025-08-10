import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
    console.log(items);
    return (<div>
        {
            items?.map((item) => (
                <div key={item?.card?.info?.id}
                    className=" text-left p-2 m-2 border-gray-200 border-b-2 flex justify-between">
                    
                    <div className="w-9/12">
                        <div className="p-2">
                            <span >{item?.card?.info?.name}</span><br />
                            <span> ₹ {item?.card?.info?.price / 100}</span>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="p-2 w-3/12 ">
                        <div className="absolute ">
                            <button className="p-2 bg-black text-white shadow-lg mx-14">Add +</button>
                        </div>
                        
                        <img src={CDN_URL + item?.card?.info?.imageId} />
                    </div>
                     
                </div>
            ))}

    </div>);

};
export default ItemList;