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
import BadgesPage from "../pages/design/content/components/atoms/badges.tsx";
import AlertsPage from "../pages/design/content/components/atoms/alerts.tsx";
import CardsPage from "../pages/design/content/components/atoms/cards.tsx";
import SpinnersPage from "../pages/design/content/components/atoms/spinners.tsx";
import ModalsPage from "../pages/design/content/components/atoms/modals.tsx";
import RadiosPage from "../pages/design/content/components/atoms/radios.tsx";
import CheckboxesPage from "../pages/design/content/components/atoms/checkboxes.tsx";
import TogglesPage from "../pages/design/content/components/atoms/toggles.tsx";
import ProgressPage from "../pages/design/content/components/atoms/progress.tsx";
import SearchPage from "../pages/design/content/components/atoms/search.tsx";




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
            {
                path: "badges",
                element: <BadgesPage />
            },
            {
                path: "alerts",
                element: <AlertsPage />
            },
            {
                path: "cards",
                element: <CardsPage />
            },
            {
                path: "spinners",
                element: <SpinnersPage />
            },
            {
                path: "modals",
                element: <ModalsPage />
            },
            {
                path: "radios",
                element: <RadiosPage />
            },
            {
                path: "checkboxes",
                element: <CheckboxesPage />
            },
            {
                path: "toggles",
                element: <TogglesPage />
            },
            {
                path: "progress",
                element: <ProgressPage />
            },
            {
                path: "search",
                element: <SearchPage />
            }
        ]
    }
])
