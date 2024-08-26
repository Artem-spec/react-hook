import { createBrowserRouter, Navigate } from "react-router-dom";
import { UseId } from "./components/hooks/UseId";
import { UseTransition } from "./components/hooks/UseTransition";
import { UseSyncExternalStore } from "./components/hooks/UseSyncExternalStore";
import { UseDeferredValue } from "./components/hooks/UseDeferredValue";
import { TestInputs } from "./components/profiler/TestInputs";
import { Profiler } from "react";
import { profilerCallback } from "./components/utils";
import { UseInsertionEffect } from "./components/hooks/UseInsertionEffect";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to={"/use-id"} replace />,

    },
    {
        path: "/use-id",
        element: <UseId />,

    },
    {
        path: "/use-deferred-value",
        element: <UseDeferredValue />
    },
    {
        path: "/use-sync-external-store",
        element: <UseSyncExternalStore />
    },
    {
        path: "/use-transition",
        element: <UseTransition />
    }, {
        path: "/use-insertion-effect",
        element: <UseInsertionEffect />
    },
    {
        path: "/profiler",
        element: <Profiler id="test-inputs" onRender={profilerCallback}><TestInputs /></Profiler>
    },


]);