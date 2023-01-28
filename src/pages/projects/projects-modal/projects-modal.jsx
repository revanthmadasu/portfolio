import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AchatModal from './aChatModal';
import ReckonModal from './reckonModal';
import DataManagement from './dataManagement';
import './project-modal.scss';
import MastodonModal from './mastodon-modal';
export default function ProjectModal (props) {
    const showModal = props.modalObj.show;
    const title = props.modalObj.project;
    const gitUrl = props.modalObj.gitUrl;
    const [show, setShow] = useState(props.show);
    
    const mapper = {
        aChat: AchatModal,
        Reckon: ReckonModal,
        'Data Management': DataManagement,
        'mastodon.co.in': MastodonModal
    };
    return (
       <Modal show={showModal} onHide={() => props.onHideModal(props.parent)}>
           <Modal.Header closeButton>
                <Modal.Title>
                    {
                        gitUrl && 
                        <a href={gitUrl} target="_blank" className="github position-relative rounded-circle d-inline-block mx-2 my-0 align-top cursor-pointer">
                            <i className="fa fa-github-square position-absolute"></i>
                        </a>
                    }
                    <span className="mx-1 px-1">{title}</span>
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

