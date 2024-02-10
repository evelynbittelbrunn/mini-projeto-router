import React from 'react'
import styles from './Contato.module.css'
import foto from '../../img/contato.jpg'
import Head from '../../components/head/Head'

const Contato = () => {
  return (
    <section className={`${styles.contato} anime-left`}>
        <Head title="Contato" description="Entre em contato." />
        <img src={foto} alt="Máquina de escrever" />
        <div className={styles.dados}>
            <h1>Entre em contato.</h1>
            <ul>
                <li>email@teste.com</li>
                <li>(47) 9 9999-9999</li>
                <li>Rua Ali Perto, 765</li>
            </ul>
        </div>
    </section>
  )
}

export default Contato