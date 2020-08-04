import React from 'react'
import Whatsapp from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg" alt="Exemplo de Proffy"/>
                        <div>
                            <strong>Um Proffy</strong>
                            <span>A Matéria que ele leciona</span>
                        </div>
                    </header>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada ex vel sagittis ornare. Suspendisse potenti. 
                    <br/> <br />
                    Proin pulvinar massa id augue bibendum sagittis. Quisque magna libero, dictum sit amet lacinia eu, dictum vel diam. Aenean tristique cursus diam non mollis. Aenean varius tincidunt aliquet. Sed a ex rhoncus, commodo magna a, feugiat odio. Praesent ultrices leo quam, faucibus convallis risus ultrices in. Sed ipsum odio, auctor at velit eu, ultricies mattis nunc. In consectetur erat non erat tempor, eu sollicitudin metus mollis. Duis sem augue, auctor ac euismod at, lacinia id est.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 20,00</strong>
                        </p>
                        <button type="button" >
                            <img src={Whatsapp} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;