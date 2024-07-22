import React from 'react'

export type TopStoreProps = {
    index: number
    categoryName: string
}

const TopStores = ({ index, categoryName }: TopStoreProps) => {
    return (
        <div className="flex items-center space-x-4">
            <div className={`w-10 h-10  ${index % 2 == 0 ? "bg-[#C1CF16]" : "bg-gray-200"} rounded `} />
            <div>
                <h4 className="font-semibold">{categoryName}</h4>
                <p className="text-gray-400">134 Products</p>
            </div>
        </div>
    )
}

export default TopStores