import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import FacultyOverview from "../pages/faculty/FacultyOverview";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Facuty Overview",
        path: "faculty-overview",
        element: <FacultyOverview />,
      },
    ],
  },
];
