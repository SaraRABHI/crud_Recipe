import React from 'react'

import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const ModalRecipe = ({ recipe, show, handleClose, handleDelete}) => {

    return (
        <div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{recipe.nom}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{recipe.ingredients}</Modal.Body>
            <Modal.Footer>
            <Button variant="success" onClick={() => this.setState({...this.state, modalEdit: true})} >
                Update
            </Button>
            <Button variant="danger" onClick={() => handleDelete(recipe.id)}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>
     
      </div>
        // <div className="modal fade" tabindex="-1" role="dialog" id="readModal">
        //     <div className="modal-dialog" role="document">
        //         <div className="modal-content" >
        //         <div className="modal-header">
        //             <h5 className="modal-title">{recipe.nom}</h5>
        //             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //             <span aria-hidden="true">&times;</span>
        //             </button>
        //         </div>
        //         <div className="modal-body">
        //             <p>{recipe.ingredients}</p>
        //         </div>
        //         <div className="modal-footer">
        //             <button type="button" className="btn btn-warning"

        //             >Update</button>
        //             <button type="button" className="btn btn-danger"
        //             onClick={() => this.handleDelete(recipe.nom)}>Delete</button>
        //             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        //         </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ModalRecipe