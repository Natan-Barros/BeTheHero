import React, {useState} from 'react';
import './style.css';
import {Link, useHistory} from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../Services/api';

export default function Register() {
    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    
    const history = useHistory();

    async function handleRegister(e) { 
        e.preventDefault();
        
        const data = {name, 
           email,
           whatsapp,
           city,
           uf
        };

        try {
            
            const response = await api.post('ongs', data);
            alert(`Seu id de acesso: ${response.data.id}`)
            history.push('/')
        } catch(err) {
            alert('Erro no cadastro tente novamente');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to ="/">
                        <FiArrowLeft size={16} coler="#E02041"></FiArrowLeft>
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                      placeholder="Nome da ONG" 
                       value={name}
                      onChange = {e => SetName(e.target.value)}
                    />
                    <input 
                      type="email" 
                      placeholder="E-mail"
                      value={email}
                      onChange = {e => SetEmail(e.target.value)}
                    />
                    <input 
                      placeholder="Whatsapp"
                      value={whatsapp}
                      onChange = {e => setWhatsapp(e.target.value)}                      
                    />

                    <div className="input-group">
                        <input 
                          placeholder="Cidade"                        
                          value={city}
                          onChange = {e => setCity(e.target.value)}
                        />
                        <input 
                          placeholder="UF" 
                          style={{width: 80}}                        
                          value={uf}
                          onChange = {e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>

    )
}