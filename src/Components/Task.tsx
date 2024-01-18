import { useState } from "react";
import Modal from "./Modal";

interface taskProps {
    id: string,
    title: string,
    date: Date
    description?: string,
    creation?: number,
    dueDate?: number,
    subTasks?: JSX.Element[]

}

function Task(prop : taskProps) {
    const [showModal, setShowModal] = useState(false);
    const [isChecked, setChecked] = useState(false)

    function toggleChecked() {
        setChecked(!isChecked)

    }

    return (
        <div>
            <input className='ml-3 mr-4' checked={isChecked} onChange={toggleChecked} type="checkbox"></input>
            <label className={isChecked ? 'line-through text-white/50' : ''} onClick={onClick}>{prop.title}</label>
            {prop.subTasks ? <div className="indent-8">{prop.subTasks}</div> : null}
            {showModal && <Modal showModal={showModal} setShowModal={setShowModal}/>}
        </div>
    );
    function onClick() {
        setShowModal(true)
    }
}

export default Task;
