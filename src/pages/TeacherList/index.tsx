import React, { useState, FormEvent } from 'react'
import './styles.css'
import PageHeader from '../../components/Page-Header'
import TeacherItem, {Teacher} from '../../components/TeacherItem'
import Input from '../../components/input';
import Select from '../../components/Select';
import api from '../../services/api';




function TeacherList(){
    const [teachers, setTeachers] = useState([]);
    const [ subject, setSubject] = useState('');
    const [ week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(event: FormEvent){
        event.preventDefault();

        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        });

        console.log(response.data);
        setTeachers(response.data);

        console.log(
            {
                subject,
                week_day,
                time
            }
        )
    }

    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis">
                <form id="search-teachers" onSubmit={searchTeachers}>
                <Select 
                    name="subject" 
                    label="Matéria"
                    value={subject}
                    onChange={event => {setSubject(event.target.value)}}
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
                    <Select 
                    name="week_day" 
                    label="Dia da semana"
                    value={week_day}
                    onChange={event=>{setWeek_day(event.target.value)}}
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
                    type="time" 
                    name="time" 
                    label="Hora"
                    value={time}
                    onChange={event=>{setTime(event.target.value)}} />

                    <button type="submit">Buscar</button>

                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher : Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>
        </div>
    );
}

export default TeacherList;