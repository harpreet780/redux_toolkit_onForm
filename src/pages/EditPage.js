import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from 'reactstrap';
import { editRow, inputData, updateData } from '../counterReducer';
import { useLocation, useNavigate } from 'react-router-dom';

const EditPage = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    let location = useLocation();
    // const editData = location?.state.data;
    const editData = useSelector((state) => state?.formData?.formValues);
    console.log(editData,"showw")
    
useEffect(()=>{
     dispatch(editRow(location?.state.data))
},[])

    return (
        <div>
            <div className="formWrap p-5">
                <h2 className='text-center text-decoration-underline'>Edit Profile Page</h2>
                <Label>Name:</Label>
                <Input
                    type="text"
                    name="name"
                    className="input"
                    value={editData.name}
                    onChange={(e) => dispatch(inputData(e))}
                />
                <Label>Age:</Label>
                <Input
                    type="number"
                    name="age"
                    className="input"
                    value={editData.age}
                    onChange={(e) => dispatch(inputData(e))}
                />
                <Label>Designation:</Label>
                <Input
                    type="text"
                    name="designation"
                    className="input"
                    value={editData.designation}
                    onChange={(e) => dispatch(inputData(e))}
                />
                <Label>Company:</Label>
                <Input
                    type="text"
                    name="company"
                    className="input"
                    value={editData.company}
                    onChange={(e) => dispatch(inputData(e))}
                />
                <div>
                    <Label style={{ width: 100 }}>Gender:</Label>
                    <Input
                        type="radio"
                        name="gender"
                        id="male"
                        value={editData.gender}
                        onChange={(e) => dispatch(inputData(e))}
                    />
                    <Label className="mx-2">Male</Label>
                    <Input
                        type="radio"
                        name="gender"
                        id="female"
                        value={editData.gender}
                        onChange={(e) => dispatch(inputData(e))}
                    />
                    <Label className="mx-2">Female</Label>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center mt-4'>
                <button className='submitBtn' onClick={() => {
                    dispatch(updateData(editData))
                    navigate('/')
                }}>
                   Update
                </button>
            </div>
        </div>
    )
}

export default EditPage;