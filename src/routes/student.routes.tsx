import OfferedCourese from "../pages/student/OfferedCourese";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentsPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Offered Course",
        path: "offered-course",
        element: <OfferedCourese />,
      },
    ],
  },
];
