import Image from "next/image";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

type menuCardProps = {
  imgUrl: string
  title: string
  description: string
  price: string
  isLoved: boolean
  onChangeIsLoved: (selectedTitle: string) => void
}

export default function MenuCard({imgUrl, title, description, price, isLoved, onChangeIsLoved}: menuCardProps) {
  return (
    <div className="bg-background p-2 w-fit rounded-sm relative min-w-[250px]">
      <button className="absolute top-3 right-3" onClick={() => onChangeIsLoved(title)}>
        {isLoved ? (
          <IoMdHeart size={28} color="red"/>
        ) : (
          <IoIosHeartEmpty size={28}/>
        )}
      </button>
      <Image
        src={imgUrl ?? '/asset/dummy.jpg'}
        alt="menu"
        width={500}
        height={150}
        className="rounded-sm w-full h-[300px]"
      />
      <div className="text-left">
        <div className="font-bold text-lg">{title ?? "-"}</div>
        <div className="text-xs">{description ?? "-"}</div>
        <div className="flex justify-between mt-3">
          <div className="font-extrabold">Rp. {price ?? "-"}</div>
          <button className="text-xs py-1.5 px-2 rounded-md font-bold bg-dark text-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
}
