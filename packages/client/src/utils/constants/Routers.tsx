import Detail from "../../modules/Pages/Detail";
import Dashboard from "../../modules/Pages/Dashboard";

export const Routers = [
  {
    path: '/details/:id',
    exact: true,
    component: Detail
  },
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard
  },
]
