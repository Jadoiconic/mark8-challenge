import React from "react"
import DefaultLayOut from "@/components/layout/DefaultLayOut"
import SearchBoxLight from "@/components/search/SearchBoxLight"
import OpenYourStore from "@/components/store/OpenYourStore"
import ShopItem from "@/components/store/ShopItem"


const ItemStore = () => {
    return <DefaultLayOut>
        <SearchBoxLight />
        <div className="py-8">
        <ShopItem />
        <ShopItem />
        <ShopItem />
        </div>
        <OpenYourStore />
    </DefaultLayOut>
}


export default ItemStore