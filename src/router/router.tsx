import { createBrowserRouter } from "react-router-dom";

import System from "../pages/design/system";
import Home from "../pages/home";
import Colors from "../pages/design/content/components/atoms/colors.tsx";
import Usage from "../pages/design/content/docs/usage.tsx";
import Introduction from "../pages/design/content/docs/introduction.tsx";

import ButtonsPage from "../pages/design/content/components/atoms/buttons.tsx";
import TypographyPage from "../pages/design/content/docs/typography.tsx";
import ButtonsIconPage from "../pages/design/content/components/atoms/buttonIcon.tsx";
import InputsPage from "../pages/design/content/components/atoms/inputs.tsx";


import ColorPalette from "../pages/design/content/docs/colorPalette.tsx";

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
                element: <ButtonsPage />
            },
            {
                path: "colors",
                element: <Colors />
            },
            {
                path: "color-palette",
                element: <ColorPalette />
            },
            {
                path: "typography",
                element: <TypographyPage />
            },
            {
                path: "button-icon",
                element: <ButtonsIconPage />
            },
            {
                path: "inputs",
                element: <InputsPage />
            },
        ]
    }
])


