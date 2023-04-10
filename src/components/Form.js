import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from 'reactstrap';
import { inputData, submitData} from '../counterReducer'
import ShowFormTable from './ShowFormTable';

const Form = () => {
    const dispatch = useDispatch()
    const reg = useSelector((state) => state?.formData);

    return (
        <div className='p-5'>
            <div className="pageWrapper">
                <div className="formWrap">
                    <h2 className='text-center'>Registration</h2>
                    <Label>Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        className="input"
                        value={reg.formValues.name}
                        onChange={(e)=> dispatch(inputData(e))}
                    />
                    <Label>Age:</Label>
                    <Input
                        type="number"
                        name="age"
                        className="input"
                        value={reg.formValues.age}
                        onChange={(e)=> dispatch(inputData(e))}
                    />
                    <Label>Designation:</Label>
                    <Input
                        type="text"
                        name="designation"
                        className="input"
                        value={reg.formValues.designation}
                        onChange={(e)=> dispatch(inputData(e))}
                    />
                    <Label>Company:</Label>
                    <Input
                        type="text"
                        name="company"
                        className="input"
                        value={reg.formValues.company}
                        onChange={(e)=> dispatch(inputData(e))}
                    />
                    <div>
                    <Label style={{width: 100}}>Gender:</Label>
                        <Input
                            type="radio"
                            name="gender"
                            id="male"
                            value="Male"
                            onChange={(e)=> dispatch(inputData(e))}
                        />
                        <Label className="mx-2">Male</Label>
                        <Input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            onChange={(e)=> dispatch(inputData(e))}
                        />
                        <Label className="mx-2">Female</Label>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mt-4'>
                        <button className='submitBtn' onClick={()=> dispatch(submitData(reg.formValues))}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            {reg?.submitValues.length > 0 && <ShowFormTable/>}
        </div>
    )
}

export default Form