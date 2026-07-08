import { useEffect } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

function useWebSocket(refreshTasks: () => void) {

    useEffect(() => {

        const client = new Client({

            webSocketFactory: () =>
                new SockJS("http://localhost:8083/ws"),

            reconnectDelay: 5000,

            onConnect: () => {

                client.subscribe("/topic/tasks", () => {

                    refreshTasks();

                });

            },

        });

        client.activate();

        return () => client.deactivate();

    }, []);

}

export default useWebSocket;