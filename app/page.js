import Link from 'next/link'
import { clothing } from './DataDB'

export default function Home() {
  return (<div> 
    
    <div className="grid grid-cols-5 gap-3 p-5">
      {clothing.map((e)=>
      <Link href={`/product/${e.itemId}`} key={e.itemImage}>
      
      <div className="flex flex-col border max-w-md hover:scale-105 cursor-pointer">
        <img src={e.itemImage} alt="itemImage" className="w-full object-cover aspect-square" />

        <div className="flex flex-col p-2">

        <h1>{e.itemName}</h1>
        <p className="font-bold">{e.itemPrice}/-</p>
        </div>
      </div></Link>)}
     </div>
    </div>
    )
}
