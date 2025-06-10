'use client'

import { useState } from 'react'
import { menu } from '@data/menu'
import CardMenu from '@components/CardMenu'
import styles from '@styles/Menu.module.css'

const categories = ['Pizza', 'Pâtes', 'Salade', 'Boisson', 'Menus Spéciaux']

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Pizza')

  const filteredItems = menu.filter((item) => item.type === activeCategory)

  return (
    <section className={styles.menu}>
      {/* Navigation des catégories */}
      <div className={styles.categories}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryBtn} ${category === activeCategory ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Affichage des éléments du menu */}
      <div className={styles.menuItems}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <CardMenu key={item.name} name={item.name} type={item.type} />
          ))
        ) : (
          <p className={styles.noItems}>Aucun élément trouvé dans cette catégorie.</p>
        )}
      </div>

    </section>
  )
}
