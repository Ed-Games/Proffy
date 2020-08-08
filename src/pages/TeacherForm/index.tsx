import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/Page-Header'
import './styles.css'
import Input from '../../components/input';
import { useHistory } from 'react-router-dom'

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/textarea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm(){
    const history = useHistory();
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '',},
    ]);

    const [name, setname] = useState('');

    const[avatar, setAvatar] = useState('');

    const[whatsapp,setWhatsapp] = useState('');

    const [bio,setBio] = useState('');

    const [subject,setSubject] = useState('');
    const [cost, setCost] = useState('');
  

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '',}

        ]);
    }

    function setScheduleItemValue(position: number,field: string, value:string){
        const updateScheduleItem = scheduleItems.map((scheduleItem, index) => {
            if(index===position){
                return {
                    ...scheduleItem, [field] : value
                }
            }

            return scheduleItem;
        });
        setScheduleItems(updateScheduleItem);
    }

    function handleCreateClass(event: FormEvent){
        event.preventDefault();

        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(()=>{
            alert('Cadastro realizado com sucesso!');
            history.push('/');
        }).catch(()=>{
            alert('Erro no cadastro!')
        })

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems
        })
    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas"
            description="O primeiro passo é preencher este formulario de inscrição " />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus Dados</legend>

                        <Input 
                        name="name" 
                        label="Nome completo" 
                        value={name} 
                        onChange={(event) => {
                            setname(event.target.value)
                        }} />

                        <Input 
                        name="avatar" 
                        label="Avatar"
                        value={avatar}
                        onChange={(event)=>{setAvatar(event.target.value)}}
                        />
                        <Input 
                        name="whatsapp" 
                        label="whatsapp" 
                        value={whatsapp}
                        onChange={(event)=>{setWhatsapp(event.target.value)}}
                        />
                        <Textarea 
                        name="bio"
                        label="Biografia"
                        value={bio}
                        onChange={(event)=>{setBio(event.target.value)}}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>
                            Sobre a aula
                        </legend>
                        
                        <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={(event)=>{
                            setSubject(event.target.value)
                        }}
                        options={[
                            { value: 'Artes', label: 'Artes'},
                            { value: 'Portugês', label: 'Portugês'},
                            { value: 'Matemática', label: 'Matemática'},
                            { value: 'História', label: 'História'},
                            { value: 'Geografia', label: 'Geografia'},
                            { value: 'Biolgia', label: 'Biolgia'},
                            { value: 'Química', label: 'Química'},
                            { value: 'Físca', label: 'Físca'},
                            { value: 'Sociologia', label: 'Sociologia'},
                            { value: 'Filosofia', label: 'Filosofia'}
                        ]} />
                        <Input 
                        name="coast" 
                        label="Custo da sua hora por aula" 
                        value={cost}
                        onChange={(event)=>{setCost(event.target.value)}}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários Disponíveis <button onClick={addNewScheduleItem} type="button">+ Novo horário</button>
                        </legend>

                    {scheduleItems.map((scheduleItem, index) =>{
                        return(
                            <div key={scheduleItem.week_day} className="schedule-item">
                            <Select 
                            name="week_day" 
                            label="Dia da semana"
                            value={scheduleItem.week_day}
                            onChange={event => setScheduleItemValue(index,'week_day', event.target.value)}
                            options={[
                                { value: '0', label: 'Domingo'},
                                { value: '1', label: 'Segunda-Feira'},
                                { value: '3', label: 'Terça-Feira'},
                                { value: '4', label: 'Quarta-Feira'},
                                { value: '5', label: 'Quinta-Feira'},
                                { value: '6', label: 'Sexta-Feira'},
                                { value: '7', label: 'Sabado'},
                            ]} />
                            <Input 
                            name="from" 
                            label="Das" type="time"
                            value={scheduleItem.from}
                            onChange={event => setScheduleItemValue(index,'from', event.target.value)} 
                            />
                            <Input 
                            name="to" 
                            label="até as" type="time"
                            value={scheduleItem.to}
                            onChange={event => setScheduleItemValue(index,'to', event.target.value)} 
                            />
                            </div>
                        );
                    })}

                        
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="aviso importante"/>
                            Importante <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">Salvar Cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;