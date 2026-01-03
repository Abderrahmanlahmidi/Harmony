import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import System from "../pages/design/system";
import Buttons from "../pages/design/content/buttons";
import Introduction from "../pages/design/content/introduction";
import Colors from "../pages/design/content/colors";
import TypographyPage from "../pages/design/content/typography";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/system",
        element: <System />,
        children: [
            {
                index: true,
                element: <Introduction />
            },
            {
                path: "buttons",
                element: <Buttons />
            },
            {
                path: "colors",
                element: <Colors />
            },
            {
                path: "typography",
                element: <TypographyPage />
            }
        ]
    }
])


