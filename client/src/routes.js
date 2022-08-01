import Home from './pages/Home'
import Catalog from './pages/Catalog'
import ProductPage from './pages/ProductPage'
import Feedback from './pages/Feedback'
import Contacts from './pages/Contacts'
import Schedule from './pages/Schedule'
import Basket from './pages/Bascket'
import Bookings from './components/schedule/Bookings'
import BookingPage from './components/schedule/BookingPage'
import Messages from './components/contacts/Messages'
import MessagePage from './components/contacts/MessagePage'
import Orders from './pages/Orders'
import OrderPage from './pages/OrderPage'
import History from './components/profile/History'
import HistoryPage from './components/profile/HistoryPage'
import Profile from './pages/Profile'
import Auth from './pages/Auth'

import { HOME_ROUTE, BASKET_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, CONTACT_ROUTE, PROFILE_ROUTE, FEEDBACK_ROUTE, ORDERS_ROUTE, SCHEDULE_ROUTE, SEWING_ROUTE, FITTING_ROUTE, BOOKING_ROUTE, MESSAGE_ROUTE, HISTORY_ROUTE } from "./utils/consts.js"

export const adminRoutes = [
    {
        path: ORDERS_ROUTE,
        Component: Orders
    },
    {
        path: ORDERS_ROUTE + "/:id",
        Component: OrderPage
    },
    {
        path: BOOKING_ROUTE,
        Component: Bookings
    },
    {
        path: BOOKING_ROUTE + "/:id",
        Component: BookingPage
    },
    {
        path: MESSAGE_ROUTE,
        Component: Messages
    },
    {
        path: MESSAGE_ROUTE + "/:id",
        Component: MessagePage
    }
]

export const authRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: HISTORY_ROUTE,
        Component: History
    },
    {
        path: HISTORY_ROUTE + "/:id",
        Component: HistoryPage
    },
    {
        path: FEEDBACK_ROUTE,
        Component: Feedback
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: PRODUCT_ROUTE + "/:id",
        Component: ProductPage
    },

    {
        path: SCHEDULE_ROUTE,
        Component: Schedule
    },
    {
        path: SEWING_ROUTE,
        Component: Schedule
    },
    {
        path: FITTING_ROUTE,
        Component: Schedule
    },
    {
        path: CONTACT_ROUTE,
        Component: Contacts
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]