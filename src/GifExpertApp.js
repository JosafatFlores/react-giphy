import React, { useState } from 'react'

import { CategoryAdd } from './Components/CategoryAdd'
import { GifGrid } from './Components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Fortnite'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map((category) => {
                        return <GifGrid
                            key={category}
                            category={category}
                        />
                    })
                }
            </ol>
        </>
    )
}
