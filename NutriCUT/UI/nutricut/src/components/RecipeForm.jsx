import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";


export function FormRecipe() {
const [show, setShow] = useState(false);
const [showEdit, setEdit] = useState(false);
const [showDelete, setDelete] = useState(false);

const handleClose = () => setShow(false) & setEdit(false) & setDelete(false);
const handleAdd = () => setShow(true);
const handleEdit = () => setEdit(true);
const handleDelete = () => setDelete(true);
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [image, setImage] = useState('');
const [id, setID] = useState('');

const edit = async e => {
    e.preventDefault();
    const recipe = {
        title: title,
        image : image,
        description: description
        };

    
    await axios.put('http://localhost:8000/api/recipes/'+id,
    recipe ,{headers: 
    {'Content-Type': 'application/json'}});

    window.location.reload();

}


const add = async e => {
    e.preventDefault();
    const recipe = {
        title: title,
        image : image,
        description: description
        };

    
    await axios.post('http://localhost:8000/api/recipes',
    recipe ,{headers: 
    {'Content-Type': 'application/json'}});

    window.location.reload();
}

const destroy = async e => {
    e.preventDefault();
    
    await axios.delete('http://localhost:8000/api/recipes/'+id);

    window.location.reload();

}



return (
    <>
    <Button variant="primary" onClick={handleAdd}>
        Agregar
    </Button>

    <Button variant="info" onClick={handleEdit}>
        Editar
    </Button>

    <Button variant="danger" onClick={handleDelete}>
        Eliminar
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><form  onSubmit={add} action='/panel_admin/recipes' >
            <div className="input-box">
                <span className="icon"><ion-icon name="person"></ion-icon></span>
                <input type="text" name="title"value={title} onChange={e => setTitle(e.target.value)} required/>
                <label>Title</label>
            </div>
            <div className="input-box">
                <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="text" name="password" value={description} onChange={e => setDescription(e.target.value)} required/>
                <label>Description</label>
             </div>
             <div className="input-box">
                <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="text" name="password" value={image} onChange={e => setImage(e.target.value)} required/>
                <label>Image</label>
             </div>
             <button type="submit" className="btn-primary">Guardar</button>
         </form></Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        </Modal.Footer>
    </Modal>

    <Modal show={showEdit} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><form  onSubmit={edit}>
            <div className="input-box">
                <span className="icon"><ion-icon name="person"></ion-icon></span>
                <input type="text" name="id"value={id} onChange={e => setID(e.target.value)} required/>
                <label>ID</label>
            </div>
            <div className="input-box">
                <span className="icon"><ion-icon name="person"></ion-icon></span>
                <input type="text" name="title"value={title} onChange={e => setTitle(e.target.value)} required/>
                <label>Title</label>
            </div>
            <div className="input-box">
                <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="text" name="password" value={description} onChange={e => setDescription(e.target.value)} required/>
                <label>Description</label>
             </div>
             <div className="input-box">
                <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="text" name="password" value={image} onChange={e => setImage(e.target.value)} required/>
                <label>Image</label>
             </div>
             <button type="submit" className="btn-primary">Guardar</button>
         </form></Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        </Modal.Footer>
    </Modal>

    <Modal show={showDelete} onHide={handleDelete}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><form  onSubmit={destroy}>
            <div className="input-box">
                <span className="icon"><ion-icon name="person"></ion-icon></span>
                <input type="text" name="id"value={id} onChange={e => setID(e.target.value)} required/>
                <label>ID</label>
            </div>
             <button type="submit" className="btn-primary">Guardar</button>
         </form></Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        </Modal.Footer>
    </Modal>

    </>
);
}
