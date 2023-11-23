import { createSlice } from "@reduxjs/toolkit";
import { 
  authSignup,
  authActivate,
  authLogin,
  authLoader,
  authCheck,
  authRefresh,
  authFacebook,
  authGoogle,
} from "../thunks/authThunk";

const initialState = {
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated: null,
  user: null,
  loading: false
}

export const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    signup: (state) => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      state.access = null;
      state.refresh = null;
      state.isAuthenticated = false;
      state.user = null;
    },
    activate: (state) => {
      state.loading = false;
    },
    login: (state, action) => {
      if (action.payload && action.payload.access && action.payload.refresh) {
        localStorage.setItem('access', action.payload.access);
        localStorage.setItem('refresh', action.payload.refresh);
    
        state.access = action.payload.access;
        state.refresh = action.payload.refresh;
        state.isAuthenticated = true;
      }
    },
    loader: (state, action) => {
      state.loading = false;
      state.user=action.payload
    },
    check:(state)=>{
      state
    },
    refresh:(state,action )=>{
      state.access=action.payload
    },
    logout:(state)=>{
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      state.access =null,
      state.refresh=null,
      state.isAuthenticated= false,
      state.user= null
    },
    googleSuccess:(state,action)=>{
      localStorage.setItem('access', action.payload.access);
      localStorage.setItem('refresh', action.payload.refresh);
  
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      state.isAuthenticated = true;

    },
    facebookSuccess:(state,action)=>{
      localStorage.setItem('access', action.payload.access);
      localStorage.setItem('refresh', action.payload.refresh);
  
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      state.isAuthenticated = true;

    }
  },
  extraReducers: (builder) => {
    builder.addCase(authSignup.fulfilled, (state) => {
      state.loading = false
    })

    builder.addCase(authActivate.fulfilled, (state) => {
      state.loading = false
    })

    builder.addCase(authLogin.fulfilled, (state) => {
      state.loading = false;
    })

    builder.addCase(authLoader.fulfilled, (state,action) => {
      state.loading = false;
      state.user = action.payload;

    })

    builder.addCase(authCheck.fulfilled, (state) => {
      state.isAuthenticated = true;
    })

    builder.addCase(authRefresh.fulfilled, (state) => {
      state.loading = false;
      state.payload
    })

    builder.addCase(authGoogle.fulfilled, (state,action) => {
      state.loading = false;
      state.access = action.payload.access; // Asigna el valor de access desde action.payload
      state.refresh = action.payload.refresh; // Asigna el valor de refresh desde action.payload
      state.user = action.payload.user;
    })

    builder.addCase(authFacebook.fulfilled, (state,action) => {
      state.loading = false;
      state.access = action.payload.access; // Asigna el valor de access desde action.payload
      state.refresh = action.payload.refresh; // Asigna el valor de refresh desde action.payload
      state.user = action.payload.user;
    })

  },
});
export const { signup, activate, login, loader,logout,googleSuccess,facebookSuccess } = authSlice.actions;

export default authSlice.reducer;
