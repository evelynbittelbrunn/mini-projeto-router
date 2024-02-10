import React, { useEffect, useState } from 'react'
import styles from "./Produto.module.css"
import { useParams } from 'react-router-dom'
import Head from '../../components/head/Head';

const Produto = () => {
    const [produto, setProduto] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function fetchProduto(url) {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setProduto(json);
            } catch(erro) {
                setError('Um erro ocorreu');
            } finally {
                setLoading(false);
            }
        }

        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    }, [id]);

    if (error) return <p>{error}</p>;
    if (loading) return <div className='loading'></div>;
    if (produto === null) return;
    return (
        <section className={`${styles.produto} anime-left`}>
            <Head title={produto.nome} description="Esse é um produto" />
            <div>
                {produto.fotos.map(foto => <img key={foto.src} src={foto.src} alt={foto.titulo} />)}
            </div>
            <div>
                <h1>{produto.nome}</h1>
                <span className={styles.preco}>R$ {produto.preco}</span>
                <p className={styles.descricao}>{produto.descricao}</p>
            </div>
        </section>
    )
}

export default Produto