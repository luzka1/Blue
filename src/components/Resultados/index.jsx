import './styles.css'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";

function Resultados() {

    // SETANDO A POSIÇÃO DO SLIDER 

    const slider = useRef(null);

    // CAPTURA DE INFORMAÇÕES DA API 

    const [info, setInfo] = useState([])

    // CONEXÃO COM A API 

    useEffect(() => {
        axios.get("http://localhost:3000/static/data.json")
            .then((response) => {
                setInfo(response.data)
            })
            .catch(() => {
                console.log("erro");
            })
    }, [])

    // CONFIGURANDO OS BOTÕES 

    const leftClick = (e) => {
        e.preventDefault();
        slider.current.scrollLeft -= slider.current.offsetWidth;
    }

    const rightClick = (e) => {
        e.preventDefault();
        slider.current.scrollLeft += slider.current.offsetWidth;
    }

    return (
        <>
            <div className="container">
                <div className="btn-jogar">
                    <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                    >Jogar Agora</motion.button>
                    </div>
                <div className="innerContainer">

                    <motion.div
                        className="btnLeft"
                        onClick={leftClick}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}>&#x276E;</motion.div>

                    <div className="slider-resultados" ref={slider}>

                        {info.map((infos, key) => {
                            return (
                                <div className="box" key={key}>
                                    <div className="box-titulo">
                                        <div className="lottery_name">{infos.lottery_name}</div>
                                        <div className="lottery_date">{infos.lottery_date}</div>
                                    </div>
                                    <div className="conteudo">
                                        {infos.result.map((item, key) => (
                                            <div className="linha" key={key}>
                                                <div className="item-negrito">{item.posicao}</div>
                                                <div className="item-negrito">{item.numero}</div>
                                                <div className="item">{item.grupo}</div>
                                                <div className="item">{item.bicho}</div>
                                                <br />
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <motion.div
                        className="btnRight"
                        onClick={rightClick}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}>&#x276F;</motion.div>

                </div>
            </div>
        </>
    )
}

export default Resultados;