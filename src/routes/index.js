import BookingLayout from "../layouts/BookingLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import Booking from "../pages/Booking";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import Troll from "../pages/Troll";

const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/booking",
    element: <BookingLayout />,
    children: [
      {
        index: true,
        element: <Booking />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
    ],
  },
  {
    path: "/troll",
    element: <Troll />,
  },
];
export default routes;
