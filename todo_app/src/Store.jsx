import { configureStore} from '@reduxjs/toolkit'
import TodoSlice from './TodoSlice'
const Store =configureStore({
    reducer:{
        // define a key:value;
        mytodo:TodoSlice
    }
})


export default Store;