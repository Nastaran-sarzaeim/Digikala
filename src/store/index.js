import userSlice from "./userSlice";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartSlice from "./cartSlice";

const persistConfig = {
    key: 'root',
    storage,
}

const RootReducer = combineReducers({
    user: userSlice,
    cart: cartSlice,
})

const persistedReducer = persistReducer(persistConfig, RootReducer)

export const store = configureStore({ reducer: persistedReducer })

export const persistor = persistStore(store)

