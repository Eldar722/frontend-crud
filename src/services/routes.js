import {
    HOME,
    CREATE,
    READ,
    UPDATE,
    DELETE,
    ERROR
} from "./consts";

import Home from "../pages/HomePage.vue";
import Create from "../pages/CreatePage.vue";
import Read from "../pages/ReadPage.vue";
import Update from "../pages/UpdatePage.vue";
import Delete from "../pages/DeletePage.vue";
import ErrorPage from "@/components/ErrorPage.vue";

export const routes = [
    {
        path: HOME,
        component: Home,
    },
    {
        path: CREATE,
        component: Create,
    },
    {
        path: READ,
        component: Read,
    },
    {
        path: UPDATE,
        component: Update,
    },
    {
        path: DELETE,
        component: Delete,
    },
    {
        path: ERROR,
        component: ErrorPage
    }
]