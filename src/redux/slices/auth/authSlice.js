import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '@/config/axios'

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
    mobileCheckLoading: false,
    mobileCheckError: null,
    mobileCheckSuccess: false,
    mobileUser: null,
    faceVerificationLoading: false,
    faceVerificationError: null,
    faceVerificationSuccess: false,
}

export const checkMobileNumber = createAsyncThunk(
    'auth/checkMobile',
    async (mobile, { rejectWithValue }) => {
        try {
            const payload = {
                mob: mobile,
                reqType: "stu"
            };

            // Using the full URL as requested, bypassing the axios instance base URL if needed
            // But since axiosInstance might have a base URL, we should be careful. 
            // If axiosInstance has a base URL, we might need to use a fresh axios call or override it.
            // Assuming axiosInstance is generic enough or we use a direct url.
            // Let's use the axiosInstance but with the full URL which usually overrides baseURL in axios.
            const response = await axiosInstance.post('https://dev.gaitview.com:449/login/custListByMob', payload);
            console.log('Mobile Check Response:', response);

            const data = response.data;

            if (data.value && Array.isArray(data.value) && data.value.length > 0) {
                return data.value[0]; // Return the first user found
            } else {
                return rejectWithValue('Mobile number not found or invalid');
            }
        } catch (error) {
            console.error('Mobile Check Error:', error);
            return rejectWithValue(error.message || 'Network Error');
        }
    }
)

export const verifyFace = createAsyncThunk(
    'auth/verifyFace',
    async ({ image, uid }, { rejectWithValue }) => {
        try {
            // Placeholder for Eswar's API
            // TODO: Replace with actual API endpoint and payload structure
            const payload = {
                image: image, // Base64 string
                uid: uid
            };

            console.log('Verifying Face for UID:', uid);
            // console.log('Image Data:', image.substring(0, 50) + '...');

            // Simulating API call for now
            // const response = await axiosInstance.post('/login/verifyFace', payload);

            // Mock success response REMOVED as per user request
            // await new Promise(resolve => setTimeout(resolve, 1500)); 

            console.log("--- PAYLOAD FOR BACKEND (ESWAR) ---");
            console.log(JSON.stringify(payload));
            console.log("-----------------------------------");

            return rejectWithValue("API Endpoint not yet configured. Please send Base64 to backend.");

        } catch (error) {
            console.error('Face Verification Error:', error);
            return rejectWithValue(error.message || 'Verification Failed');
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const loginPayload = {
                uid: credentials.uid,
                pwd: credentials.pwd,
                appType: "erp",
                logType: "emp",
                ip: "223.185.48.247", // TODO: Make dynamic if needed
            };

            // const response = await axiosInstance.post('/login/authenticate', loginPayload);
            // console.log('Login Response:', response);

            // let data = response.data;
            // // Handle nested value format if present
            // if (data.value) {
            //     data = data.value;
            // }

            // Mock response
            const data = {
                ResponseStatus: 'Success',
                ResponseMessage: 'Login successful',
                uid: credentials.uid,
                name: 'Test User',
                role: 'admin'
            };

            console.log('Login Data (Mocked):', data);

            if (data.ResponseStatus === 'Success') {
                localStorage.setItem("userData", JSON.stringify(data));
                return data;
            } else {
                return rejectWithValue(data.ResponseMessage || 'Login failed');
            }
        } catch (error) {
            console.error('Login Error:', error);
            if (error.response) {
                console.error('Error Data:', error.response.data);
                console.error('Error Status:', error.response.status);
                return rejectWithValue(error.response.data?.ResponseMessage || 'Login failed');
            }
            return rejectWithValue(error.message || 'Network Error');
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.error = null
            state.mobileCheckSuccess = false
            state.mobileUser = null
        },
        resetMobileCheck: (state) => {
            state.mobileCheckLoading = false
            state.mobileCheckError = null
            state.mobileCheckSuccess = false
            state.mobileUser = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(checkMobileNumber.pending, (state) => {
                state.mobileCheckLoading = true
                state.mobileCheckError = null
                state.mobileCheckSuccess = false
            })
            .addCase(checkMobileNumber.fulfilled, (state, action) => {
                state.mobileCheckLoading = false
                state.mobileCheckSuccess = true
                state.mobileUser = action.payload
            })
            .addCase(checkMobileNumber.rejected, (state, action) => {
                state.mobileCheckLoading = false
                state.mobileCheckError = action.payload
                state.mobileCheckSuccess = false
            })
            .addCase(verifyFace.pending, (state) => {
                state.faceVerificationLoading = true
                state.faceVerificationError = null
                state.faceVerificationSuccess = false
            })
            .addCase(verifyFace.fulfilled, (state) => {
                state.faceVerificationLoading = false
                state.faceVerificationSuccess = true
            })
            .addCase(verifyFace.rejected, (state, action) => {
                state.faceVerificationLoading = false
                state.faceVerificationError = action.payload
                state.faceVerificationSuccess = false
            })
    },
})

export const { logout, resetMobileCheck } = authSlice.actions
export default authSlice.reducer
