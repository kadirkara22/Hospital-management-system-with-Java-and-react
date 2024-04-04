import React from 'react'
import Header from '../Header/Header'
import Search from '../Search/Search'
import DepartmanCard from './DepartmanCard'
import styles from "./styles.module.css"
const Departmans = () => {
    return (
        <div>
            <Header />
            <Search />
            <DepartmanCard />
        </div>
    )
}

export default Departmans
