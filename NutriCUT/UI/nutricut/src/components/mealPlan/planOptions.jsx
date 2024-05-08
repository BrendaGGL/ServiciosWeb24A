import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import day from '../../static/images/Plan Dia.jpg'
import week from '../../static/images/Week Plan.png'
import { Link } from 'react-router-dom';

export function PlanOptions() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
        <Button variant="primary" onClick={handleShow}>
        Crear
        </Button>

    

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Elige el plan alimenticio</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className="row-center">
            <Card>
                <Link to= "/day_plan">
                    <h5 className='center'>Dia</h5>
                    <img src={day}/>
                </Link>
            </Card>  
        </div>
        <div className="row-center">
            <Card>
            <Link to= "/week_plan">
                <h5 className='center'>Semana</h5>
                <img src={week}/>
                </Link>
            </Card>
            
        </div>



        </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Cerrar
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    );
}


const Card = styled.div `

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');


    min-height:  10rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 2rem;
        position: relative;
        left: 160px;
        width: 150px;
        height: 100px;
        object-fit: cover;
        transition: 1s ease;
    }

    img:hover{
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
        transition: 1s ease;
        cursor: pointer;
    }


    h5{
        position: relative;
        z-index: 10;
        left: 50%;
        transform: translate(-50%, 0%);
        color: black;
        width: 100%;
        text-align: center;
        font-weight: 300;
        font-size: 2rem;
        font-family: 'Roboto';
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h5:hover{
        cursor: pointer;
    }

`
