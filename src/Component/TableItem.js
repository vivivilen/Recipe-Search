import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.scss';
import { ModalBody } from '../Component/ModalBody';

Modal.setAppElement('#root');

export const TableItem = (props) => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => { setOpenModal(true) }
    const handleClose = () => { setOpenModal(false) }

    // const forClick = () => { console.log(props.name) }

    return (
        <tbody>
            <tr onClick={handleOpen}>
                <td><img src={props.image} alt={props.image} /></td>
                <td>{props.name}</td>
                <td>{Math.round(props.energy)} kcal</td>
            </tr>
            <Modal isOpen={openModal} onRequestClose={handleClose}
                style={{
                    overlay: {
                        background: 'rgba(46, 49, 49, 0.5)',
                        width: '100%'
                    },
                    content: {
                        width: '800px',
                        height: 'auto',
                        margin: 'auto',
                        borderRadius: '10px'
                    }
                }}>
                <ModalBody data={props}/>
            </Modal>
        </tbody>
    )
}