import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { closeModal, deleteRow, isModal } from '../counterReducer';
import { useNavigate } from 'react-router-dom';

const ShowFormTable = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const showData = useSelector((state) => state?.formData);
    const isOpen = useSelector((state) => state.formData.isOpenModal);
    const [saveItem,setSaveItem]=useState(null);
    
    return (
        <div className='formWrap mt-5'>
            <table className='table'>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Designation</th>
                    <th>Company</th>
                    <th>Gender</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {showData?.submitValues.map((obj) => {
                        return (
                            <tr>
                                <td>{obj.name}</td>
                                <td>{obj.age}</td>
                                <td>{obj.designation}</td>
                                <td>{obj.company}</td>
                                <td>{obj.gender}</td>
                                <td>
                                    <tr className="action-icons">
                                        <td className="edit">
                                            <button onClick={() => navigate('/edit', {
                                                state: { data: obj }
                                            })}>
                                                <MdModeEditOutline />
                                            </button>
                                        </td>
                                        <td className="delete">
                                            <button
                                                onClick={() => {
                                                    setSaveItem(obj.age)
                                                    dispatch(isModal())
                                                }}
                                            >
                                                <RiDeleteBin5Line />
                                            </button>
                                        </td>
                                    </tr>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <Modal
                isOpen={isOpen}
                toggle={isOpen}
            >
                <ModalHeader >Are you sure</ModalHeader>
                <ModalBody>
                    Are you sure to delete this row?
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => dispatch(closeModal())}>
                        Cancel
                    </Button>{' '}
                    <Button color="primary" onClick={() => dispatch(deleteRow(saveItem))}>
                        Yes
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ShowFormTable;