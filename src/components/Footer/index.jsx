import './styles.css';
import SimboloMaiorIdade from './18+.svg';

function Footer() {
    return (
        <>
            <footer>
                <div className="box-1">
                    <div className="box-1v1">
                        <div className="texto-sobre-nos">
                            Lorem ipsum dolor sit amet consectetur. Urna nulla et vestibulum eros cursus. Rhoncus elit nunc feugiat morbi. Pellentesque mauris adipiscing senectus dictum commodo senectus integer. At consectetur id lectus amet cursus mattis dui urna enim. At sed aliquet vitae tincidunt morbi non adipiscing. Donec vestibulum senectus quis magna fermentum volutpat fermentum tristique tortor. Dapibus vitae in faucibus amet quis. Lorem in sed sapien semper vehicula eros vitae in.
                        </div>
                    </div>
                    <div className="box-1v2">
                        <nav className="btns-footer">
                            <div className="item">Política de Privacidade</div>
                            <div className="item">Jogo Responsável</div>
                            <div className="item">Termos e Condições</div>
                            <div className="item">Política e AML</div>
                        </nav>
                        <div className="campo">
                            <div className="simbolo-maior-idade"></div>
                        </div>
                    </div>
                </div>
                <div className="box-2">
                    <div className="copyright-contato">
                        <div className="item">Copyright@2022. Bicho Fácil - Todos os direitos reservados.</div>
                        <div className="item">duvidas@bichofacil.com</div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;