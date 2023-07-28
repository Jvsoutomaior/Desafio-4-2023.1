import './styles.css';
import { useState } from "react";

export default function Main(){
    var id = 1;
    const [tasks, setTasks] = useState([
        {
            id: 1,
            taskText: "Atualizar kanban",
            taskResponible: "João",
            taskDate: "02/11/2020",
            taskDescription: "atualizar o kanban...",
        }
    ]);
    const [doing, setDoing] = useState([
        {
            id: 1,
            doingText: "Fazendo",
            doingResponible: "João",
            doingDescription: "a fazer",
            doingDate: "02/11/2020",
        }
    ]);
    const [done, setDone] = useState([
        {
            id: 1,
            doneText: "ja Feito",
            doneResponible: "João",
            doneDate: "02/11/2020",
            doneDescription: "Terminado",
        }
    ]);

    const [taskText, setText] = useState("");
    const [taskResponible, setResponsible] = useState("");
    const [taskDate, setDate] = useState("");
    const [taskDescription, setDescription] = useState("");

    const [doingText, setDoingText] = useState("");
    const [doingResponible, setDoingResponsible] = useState("");
    const [doingDate, setDoingDate] = useState("");
    const [doingDescription, setDoingDescription] = useState("");

    const [doneText, setDoneText] = useState("");
    const [doneResponible, setDoneResponsible] = useState("");
    const [doneDate, setDoneDate] = useState("");
    const [doneDescription, setDoneDescription] = useState("");


    function handleSubmit(event){
        event.preventDefault();
        const newTasks = [...tasks,
        {
            id: ++id,
            taskText,
            taskResponible,
            taskDate,
            taskDescription,
        },
        ];
        setTasks(newTasks);
        resetForm();
    }
    function resetForm(){
        setText("");
        setResponsible("");
        setDate("");
        setDescription("");
    }
    function handleSubmit2(event){
        event.preventDefault();
        const newDoing = [...doing,
        {
            id: ++id,
            doingText,
            doingResponible,
            doingDate,
            doingDescription,
        },
        ];
        setDoing(newDoing);
        resetForm2();
    }
    function resetForm2(){
        setDoingText("");
        setDoingResponsible("");
        setDoingDate("");
        setDoingDescription("");
    }
    function handleSubmit3(event){
        event.preventDefault();
        const newDone = [...done,
        {
            id: ++id,
            doneText,
            doneResponible,
            doneDate,
            doneDescription,
        },
        ];
        setDone(newDone);
        resetForm3();
    }
    function resetForm3(){
        setDoneText("");
        setDoneResponsible("");
        setDoneDate("");
        setDoneDescription("");
    }

    return(
        <main className="main">
            <div id='coluna'>
                <h1>A Fazer</h1>
                <div id='card' className='task'>
                    {tasks.map((task) =>(
                        <div key={task.id}>
                            <p id='inputArea1'>{task.taskText}</p>
                            
                            <p>{task.taskResponible}</p>
                            <p>{task.taskDate}</p>
                            <p>{task.taskDescription}</p>
                        </div>
                    ) )}
                </div>
                <form onSubmit={handleSubmit} id='form'>
                    <div id="inputArea1">
                        <input id='inputtexto' type="text" placeholder="Fazer" value={taskText} onChange={(event)=>
                                setText(event.target.value) }>
                        </input>
                    </div>       
                    <div id='inputArea2'>
                            <input id='inputInside' type="text" placeholder="Responsavel" value={taskResponible} onChange={(event)=>
                                setResponsible(event.target.value)}></input>
                            <input id='inputInside' type="date" value={taskDate} onChange={(event)=>
                                setDate(event.target.value)}></input>
                            <input id='descricao' type="text" placeholder="Descrição" value={taskDescription} onChange={(event)=>
                                setDescription(event.target.value)}></input>
                    </div>
                    <div id='buttonArea'>
                        <button onClick={(event) => {
                            event.preventDefault();
                            resetForm(); 
                        } }>X</button>
                        <button>Submit</button>
                    </div>
                </form>
            </div>

            <div id='coluna'>
                <h1>Fazendo</h1>
                <div id='tasks'>
                    {doing.map((doing) =>(
                            <div key={doing.id}>
                                <div>
                                    <p id='inputArea1'>{doing.doingText}</p>
                                </div>
                                <p>{doing.doingResponible}</p>
                                <p>{doing.doingDate}</p>
                                <p>{doing.doingDescription}</p>
                            </div>
                    ) )}

                </div>

                <form onSubmit={handleSubmit2} id='form'>
                    <div id="inputArea1">
                        <input id='inputtexto' type="text" placeholder="Fazer" value={doingText} onChange={(event)=>
                                setDoingText(event.target.value) }>
                        </input>
                    </div>
                    
                    <div id='inputArea2'>
                            <input id='inputInside' type="text" placeholder="Responsavel" value={doingResponible} onChange={(event)=>
                                setDoingResponsible(event.target.value)}></input>
                            <input id='inputInside' type="date" value={doingDate} onChange={(event)=>
                                setDoingDate(event.target.value)}></input>
                            <input id='descricao' type="text" placeholder="Descrição" value={doingDescription} onChange={(event)=>
                                setDoingDescription(event.target.value)}></input>
                    </div>
  
                    <div id='buttonArea'>
                        <button onClick={(event) => {
                            event.preventDefault();
                            resetForm2(); 
                        } }>X</button>
                        <button>Submit</button>
                    </div>

                </form>
            </div>

            <div id='coluna'>
                <h1>Feito</h1>

                <div id='tasks'>
                    {done.map((done) =>(
                            <div key={done.id}>
                                <div>
                                    <p id='inputArea1'>{done.doneText}</p>
                                </div>
                                <p>{done.doneResponible}</p>
                                <p>{done.doneDate}</p>
                                <p>{done.doneDescription}</p>
                            </div>
                    ) )}

                </div>

                <form onSubmit={handleSubmit3} id='form'>
                    <div id="inputArea1">
                        <input id='inputtexto' type="text" placeholder="Fazer" value={doneText} onChange={(event)=>
                                setDoneText(event.target.value) }>
                        </input>
                    </div>
                    
                    <div id='inputArea2'>
                            <input id='inputInside' type="text" placeholder="Responsavel" value={doneResponible} onChange={(event)=>
                                setDoneResponsible(event.target.value)}></input>
                            <input id='inputInside' type="date" value={doneDate} onChange={(event)=>
                                setDoneDate(event.target.value)}></input>
                            <input id='descricao' type="text" placeholder="Descrição" value={doneDescription} onChange={(event)=>
                                setDoneDescription(event.target.value)}></input>
                    </div>
  
                    <div id='buttonArea'>
                        <button onClick={(event) => {
                            event.preventDefault();
                            resetForm(); 
                        } }>X</button>
                        <button>Submit</button>
                    </div>

                </form>    
            </div>

        </main>
    )
}