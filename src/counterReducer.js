import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // counterValue: 0,
    formValues: {
        name: '',
        age: '',
        designation: '',
        company: '',
        gender: '',
    },
    submitValues: [],
    isOpenModal: false,
}


// export const counterSlice = createSlice({
//     name: "reduxCounter",
//     initialState,
//     reducers: {
//         increment: (stateValue) => {
//             stateValue.counterValue += 1
//         },
//         decrement: (stateValue) => {
//             stateValue.counterValue -= 1
//         },
//     }
// })


export const formSubmission = createSlice({
    name: "formData",
    initialState,
    reducers: {
        inputData: (state, e) => {
            state.formValues[e.payload.target.name] = e?.payload?.target?.value;
        },
        submitData: (state, e) => {
            state.submitValues.push(e?.payload);
            state.formValues = {
                name: '',
                age: '',
                designation: '',
                company: '',
                gender: null,
            }
        },
        isModal: (state, e) => {
            state.isOpenModal = true
        },
        editRow: (state, e) => {
            state.formValues = e?.payload
        },
        updateData: (state, e) => {
            state.submitValues.map((item, index) => {
                if (item?.age === e?.payload?.age) {
                    state.submitValues[index] = e?.payload
                }
            })
            state.formValues = {
                name: '',
                age: '',
                designation: '',
                company: '',
                gender: null,
            }
        },
        closeModal: (state) => {
            state.isOpenModal = false
        },
        deleteRow: (state, e) => {
            let aa = state.submitValues
            const reomoveMatchValue = aa.findIndex((obj) => obj.age === e?.payload)
            aa.splice(reomoveMatchValue, 1)
            state.isOpenModal = false
        }
    },
})

export const {
    inputData,
    submitData,
    isModal,
    editRow,
    updateData,
    closeModal,
    deleteRow
} = formSubmission.actions;

export default formSubmission.reducer;


// export const {increment,decrement} = counterSlice.actions;
// export default counterSlice.reducer;
