import Home from "./pages/home/Home"
import UserList from "./pages/users/UserList";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Analytics from "./pages/analytics/Analytics";
import Transactions from "./pages/transactions/Transactions";
import Sales from "./pages/sales/Sales";
import Mail from "./pages/mail/Mail";
import Feedback from "./pages/feedback/Feedback";
import Messages from "./pages/messages/Messages";
import Manage from "./pages/manage/Manage";
import Reports from "./pages/reports/Reports";


let routes = [
    {path:'/', element: <Home />},
    {path:'/analytics', element: <Analytics />},
    {path:'/sales', element: <Sales />},
    {path:'/products', element: <Products />},
    {path:'/users', element: <UserList />},
    {path:'/new-user', element: <NewUser />},
    {path:'/product/:productID', element: <Product />},
    {path:'/transactions', element: <Transactions />},
    {path:'/mail', element: <Mail />},
    {path:'/feedback', element: <Feedback />},
    {path:'/messages', element: <Messages />},
    {path:'/manage', element: <Manage />},
    {path:'/staff-analytics', element: <Analytics />},
    {path:'/reports', element: <Reports />}
]

export default routes;