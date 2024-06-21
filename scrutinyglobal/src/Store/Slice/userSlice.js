import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    password: '',
    accountType:'',
    number:"",
    dob:'',
    address:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    profession:'',
    experience:'',
    salary:''

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateValues: (state,action) => {
            
            switch (action.payload.name) {

                case "name":
                    state.name = action.payload.value;
                    break;
                  case "email":
                    state.email = action.payload.value;
                    break;
            }
           
        },
       
    }
});

export const { updateValues } = userSlice.actions;

export default userSlice.reducer;