import React from "react";

// router settings for future developing

const Home = React.lazy(() => import('../pages/Home'));

export const router = [
    // default router is linked to Home component
    {
        path:"",
        element: Home
    }
]