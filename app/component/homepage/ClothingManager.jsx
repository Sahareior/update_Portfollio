import React, { useState, useEffect } from 'react'
import { Speaking } from './../../../public/models/Abc'

const ClothingManager = ({ clothingItems }) => {
  const [currentOutfit, setCurrentOutfit] = useState({
    top: 'default',
    bottom: 'default',
    footwear: 'default',
    hair: 'default'
  })
  const [currentItemIndex, setCurrentItemIndex] = useState(0)

  // Function to apply clothing from API data
  const applyClothing = (clothingData) => {
    // Assuming clothingData has properties like type, style, color, etc.
    const newOutfit = {
      top: clothingData.type === 'top' ? clothingData.style : currentOutfit.top,
      bottom: clothingData.type === 'bottom' ? clothingData.style : currentOutfit.bottom,
      footwear: clothingData.type === 'footwear' ? clothingData.style : currentOutfit.footwear,
      hair: clothingData.type === 'hair' ? clothingData.style : currentOutfit.hair,
    }
    setCurrentOutfit(newOutfit)
  }

  // Cycle through clothing items (for demo)
  useEffect(() => {
    if (clothingItems && clothingItems.length > 0) {
      const interval = setInterval(() => {
        const nextIndex = (currentItemIndex + 1) % clothingItems.length
        setCurrentItemIndex(nextIndex)
        applyClothing(clothingItems[nextIndex])
      }, 3000) // Change outfit every 3 seconds

      return () => clearInterval(interval)
    }
  }, [clothingItems, currentItemIndex])

  return (
    <Speaking 
      clothing={currentOutfit}
      scale={1} 
      position={[0, 0, 0]} 
    />
  )
}

export default ClothingManager