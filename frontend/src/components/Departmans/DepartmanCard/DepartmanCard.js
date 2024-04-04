import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import doctorsData from "../../api/doctors.json"
const DepartmanCard = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(doctorsData)
    }, [])
    return (
        <div className={styles.container}>
            {
                cards.length && cards.map(card => (
                    <div key={card.id}>
                        <img src="https://hisarhospital.com/wp-content/uploads/2019/10/anestezi.svg" className={styles.imageProfile} alt="doctor" />
                        <div className={styles.name}>{card.specialist}</div>

                    </div>
                ))
            }
        </div>
    )
}

export default DepartmanCard
