import React from 'react'
import EcomWidgetCard from './EcomWidgetCard'
import styles from "@/components/Ecomwidget.module.css"
const EcomWidgetGrid = () => {
  return (
    <div className={styles.EcomWidgetGridWrapper}>
      <EcomWidgetCard imgSrc="https://www.robbreportindia.com/_next/image?url=https%3A%2F%2Fcdn.robbreportindia.com%2Feditor-images%2F2025-09-08T13%253A19%253A49.861Z-RR%2520Inline%2520%25283%2529.jpg&w=3840&q=75"/>
      <div className={styles.EcomGridText}>
        <span>"If someone wants to make a difference, they need to be able to feel uncomfortable"</span>
      </div>
    </div>
  )
}

export default EcomWidgetGrid
