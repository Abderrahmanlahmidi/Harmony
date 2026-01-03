import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import System from "../pages/design/system";
import Buttons from "../pages/design/content/components/atoms/buttons.tsx";
import Introduction from "../pages/design/content/docs/introduction.tsx";
import Colors from "../pages/design/content/components/atoms/colors.tsx";
import TypographyPage from "../pages/design/content/docs/typography.tsx";
import Usage from "../pages/design/content/docs/usage.tsx";
import ButtonIconPage from "../pages/design/content/components/atoms/buttonIcon.tsx";


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
                path: "usage",
                element: <Usage />
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
            } ,
            {
                path: "button-icon",
                element: <ButtonIconPage/>
            }
        ]
    }
])


