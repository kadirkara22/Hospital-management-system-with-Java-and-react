import React, { useEffect, useState } from 'react'
import doctorsData from "../../api/doctors.json"
import styles from "./styles.module.css"
const DoctorCard = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(doctorsData)
    }, [])
    return (
        <div className={styles.container}>
            {
                cards.length && cards.map(card => (
                    <div key={card.id}>
                        <img src={card.imageProfile} className={styles.imageProfile} alt="doctor" />
                        <div className={styles.name}>{card.title} {card.firstName} {card.lastName}</div>
                        <div className={styles.specialist}>{card.specialist}</div>
                        <button className={styles.button}>RANDEVU AL</button>
                    </div>
                ))
            }
        </div>
    )
}

export default DoctorCard
