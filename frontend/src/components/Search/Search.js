import React, { useState } from 'react'
import styles from './styles.module.css'
const Search = () => {
    const [search1, setSearch1] = useState()
    const [search2, setSearch2] = useState()
    const handleChange = (e) => {
        setSearch1(e.target.value)
    }
    return (

        <div className={styles.form}>
            <div className={styles.searchInputDiv}>
                <input onChange={handleChange} value={search1} className={styles.searchInput} placeholder="Bölüm seçiniz" />
            </div>
            <div className={styles.searchInputDiv}>
                <input onChange={handleChange} value={search2} className={styles.searchInput} placeholder="Doktor ara..." />
                <button type="submit" className={styles.button}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18">
                        <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="1.67" transform="translate(1 1)">
                            <circle cx="7.11" cy="7.11" r="7.11"></circle><path d="M16 16l-3.87-3.87"></path>
                        </g>
                    </svg>
                </button>
            </div>
        </div>



    )
}

export default Search
