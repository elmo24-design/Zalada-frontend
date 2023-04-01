import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
//Reducers
import { 
   productReducer, 
   productDetailsReducer, 
   productDeleteReducer, 
   productCreateReducer, 
   productUpdateReducer, 
   productCreateReviewReducer,
   productTopRatedReducer
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { 
   userLoginReducer, 
   userRegisterReducer, 
   userDetailsReducer, 
   userUpdateProfileReducer,
   userUpdateReducer, 
   userListReducer, 
   userDeleteReducer 
} from './reducers/userReducers'
import { 
   orderCreateReducer, 
   orderDetailsReducer, 
   orderPayReducer, 
   orderListProfileReducer, 
   orderListReducer,
   orderDeliverReducer
} from './reducers/orderReducers'

const reducer = combineReducers({
   productList: productReducer,
   productDetails: productDetailsReducer,
   productDelete: productDeleteReducer,
   productCreate: productCreateReducer,
   productUpdate: productUpdateReducer,
   productCreateReview: productCreateReviewReducer,
   productTopRated: productTopRatedReducer,
   cart: cartReducer,
   userLogin: userLoginReducer,
   userRegister: userRegisterReducer,
   userDetails: userDetailsReducer,
   userUpdateProfile: userUpdateProfileReducer,
   userUpdate: userUpdateReducer,
   userList: userListReducer,
   userDelete: userDeleteReducer,
   orderList: orderListReducer,
   orderCreate: orderCreateReducer,
   orderDetails: orderDetailsReducer,
   orderPay: orderPayReducer,
   orderDeliver: orderDeliverReducer,
   orderListProfile: orderListProfileReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
   cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage},
   userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store