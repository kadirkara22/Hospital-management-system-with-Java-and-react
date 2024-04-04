import React from 'react'
import Header from '../Header/Header'
import Search from '../Search/Search'
import DoctorCards from './DoctorCards'

import styles from "./styles.moduele.css"
const Doctors = () => {
    return (
        <div>
            <Header />
            <Search />
            <DoctorCards />

        </div>


    )
}

export default Doctors
