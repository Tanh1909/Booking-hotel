import BookingLayout from "../layouts/BookingLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import Booking from "../pages/Booking";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
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
];
export default routes;
