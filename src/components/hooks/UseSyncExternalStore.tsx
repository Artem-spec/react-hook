import { Container } from "react-bootstrap"
import { useSyncExternalStore } from "react";

import Menu from "../Menu"

export const UseSyncExternalStore = () => {

    const isOnline = useSyncExternalStore(subscribe, getSnapshot);
    return (
        <div>
            <Menu />
            <Container>
                <h3 className=" mt-3">useSyncExternalStore</h3>
                <p>Позволяет подписаться какое-то на внешнее хранилище</p>
                <p>useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?) </p>
                <h3>{isOnline ? '✅ Online' : '❌ Disconnected'}</h3>
            </Container>
        </div>
    )
}

function getSnapshot() {
    return navigator.onLine;
}

function subscribe(callback: { (this: Window, ev: Event): any; (this: Window, ev: Event): any; (this: Window, ev: Event): any; (this: Window, ev: Event): any; }) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
    };
}