import React from 'react'
import EcomWidgetCard from './EcomWidgetCard'
import styles from "@/components/Ecomwidget.module.css"
const EcomWidgetGrid = () => {
  return (
    <div className={styles.EcomWidgetGridWrapper}>
      <EcomWidgetCard imgSrc="https://world.maxandco.com/mediaObject/maxandco4/HOMEPAGE/22-10-25/ASSET-DESKTOP-20251017T154201Z-1-001/ASSET-DESKTOP/occhiali_maxandco_double_desktop/original/occhiali_maxandco_double_desktop.jpg"/>
      <div className={styles.EcomGridText}>
        <span>"If someone wants to make a difference, they need to be able to feel uncomfortable"</span>
      </div>
    </div>
  )
}

export default EcomWidgetGrid
