import { createBrowserRouter } from "react-router-dom";
import LayoutDashboard from "../components/layout";
import ManageContentCreatePage from "../pages/CourseContentCreate";
import ManageCourseDetailPage from "../pages/CourseDetail";
import ManageCoursePreviewPage from "../pages/Manager/CoursePreview";
import ManagerCoursesPage from "../pages/Manager/Courses";
import ManageCreateCoursePage from "../pages/Manager/CreateCourse";
import ManagerHomePage from "../pages/Manager/Home";
import ManageStudentsPage from "../pages/Manager/Students";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import StudentPage from "../pages/Student/StudentOverview";
import SuccessCheckoutPage from "../pages/SuccessCheckout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHomePage />,
  },
  {
    path: "/manager/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/manager/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/success-checkout",
    element: <SuccessCheckoutPage />,
  },
  {
    path: "/manager",
    element: <LayoutDashboard />,
    children: [
      {
        index: true,
        element: <ManagerHomePage />,
      },
      {
        path: "/manager/courses",
        element: <ManagerCoursesPage />,
      },
      {
        path: "/manager/courses/create",
        element: <ManageCreateCoursePage />,
      },
      {
        path: "/manager/courses/:id",
        element: <ManageCourseDetailPage />,
      },
      {
        path: "/manager/courses/:id/create",
        element: <ManageContentCreatePage />,
      },
      {
        path: "/manager/courses/:id/preview",
        element: <ManageCoursePreviewPage />,
      },
      {
        path: "/manager/students",
        element: <ManageStudentsPage />,
      },
    ],
  },
  {
    path: "/student",
    element: <LayoutDashboard isAdmin={false} />,
    children: [
      {
        index: true,
        element: <StudentPage />,
      },
      {
        path: "/student/detail-course/:id",
        element: <ManageCoursePreviewPage />,
      },
    ],
  },
]);

export default router;
