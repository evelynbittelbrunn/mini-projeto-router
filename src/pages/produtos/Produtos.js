import React, { useEffect, useState } from 'react'
import styles from "./Produtos.module.css"
import { Link } from 'react-router-dom';
import Head from '../../components/head/Head';

const Produtos = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/')
        .then(response => response.json())
        .then(json => setProdutos(json));
    }, []);

    console.log(produtos);

    return (
        <section className={`${styles.produtos} anime-left`}>
            <Head title="Produtos" description="Produtos" />
            {produtos.map(item => {
                return (
                    <Link to={`produto/${item.id}`} key={item.id}>
                        <img src={item.fotos[0].src} alt={item.nome} />
                        <h1 className={styles.nome}>{item.nome}</h1>
                    </Link>
                )
            })}
        </section>
    )
}

export default Produtos