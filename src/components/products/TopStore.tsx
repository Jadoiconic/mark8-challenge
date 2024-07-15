import React from 'react'

interface TopStoreProps{
index:number
}

const TopStores = ({index}: TopStoreProps) => {
    return (
        <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <div>
                <h4 className="font-semibold">Awesome Shop {index +1}</h4>
                <p className="text-gray-400">134 Products</p>
            </div>
        </div>
    )
}

export default TopStores