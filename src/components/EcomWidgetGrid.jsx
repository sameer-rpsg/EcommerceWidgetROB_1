import React from 'react'
import EcomWidgetCard from './EcomWidgetCard'
import styles from "@/components/Ecomwidget.module.css"
const EcomWidgetGrid = () => {
  return (
    <div className={styles.EcomWidgetGridWrapper}>
      <EcomWidgetCard imgSrc="https://www.manifestmagazine.in/_next/image?url=https%3A%2F%2Fcdn.manifestmagazine.in%2Feditor-images%2F2025-09-03T10%253A57%253A29.653Z-GG3786-1_cc0c0728-b1eb-44e6-9519-3b4541dbd76e_4_11zon.jpeg&w=1920&q=75"/>
      <div className={styles.EcomGridText}>
        <span>"If someone wants to make a difference, they need to be able to feel uncomfortable"</span>
      </div>
    </div>
  )
}

export default EcomWidgetGrid
