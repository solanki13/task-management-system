import { useEffect } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

function useWebSocket(refreshTasks: () => void) {
  useEffect(() => {
    const client = new Client({
      webSocketFactory: () =>
        new SockJS(import.meta.env.VITE_API_URL + "/ws"),

      reconnectDelay: 5000,

      onConnect: () => {
        client.subscribe("/topic/tasks", () => {
          refreshTasks();
        });
      },
    });

    client.activate();

    return () => {
      client.deactivate().catch(console.error);
    };
  }, [refreshTasks]);
}

export default useWebSocket;