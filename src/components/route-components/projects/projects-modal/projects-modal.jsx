import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AchatModal from './aChatModal';
import ReckonModal from './reckonModal';
import DataManagement from './dataManagement';
import './project-modal.scss';
export default function ProjectModal (props) {
    const showModal = props.modalObj.show;
    const title = props.modalObj.project;
    const [show, setShow] = useState(props.show);
    
    const mapper = {
        aChat: AchatModal,
        Reckon: ReckonModal,
        'Data Management': DataManagement
    };
    return (
       <Modal show={showModal} onHide={() => props.onHideModal(props.parent)}>
           <Modal.Header closeButton>
                <Modal.Title>
                    {title}
                </Modal.Title>
           </Modal.Header>

           <Modal.Body>
               {
                   mapper[title] ? mapper[title]() : <h1>None</h1>
               }
           </Modal.Body>
       </Modal>
    )
}

