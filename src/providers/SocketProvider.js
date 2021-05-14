import React, {useContext, useLayoutEffect, useRef} from 'react';
import io from 'socket.io-client';

const SocketContext = React.createContext(undefined)

export const useSocket = () => {
    return useContext(SocketContext);
}

export const SocketProvider = ({children, socketUri}) => {
    const socket = useRef(null);

    useLayoutEffect(() => {
        socket.current = io.connect(socketUri ?? process.env.REACT_APP_SOCKET_URI)
        return () => socket.current.disconnect();
    }, [socketUri])


    const listener = (topic, cb) => {
        socket.current.on(topic, data => cb(data))
    }

    const emitter = (topic, data, cb) => {
        socket.current.emit(topic, data);
        if (cb) {
            cb(data);
        }
    }

    return (
        <SocketContext.Provider value={{socket: socket.current, listener, emitter}}>
            {children}
        </SocketContext.Provider>
    )
}