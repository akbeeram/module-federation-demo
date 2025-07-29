type EventHandler = (...args: any[]) => void;

class EventBus {
    private listeners: { [event: string]: EventHandler[] } = {};

    on(event: string, handler: EventHandler): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(handler);
    }

    off(event: string, handler: EventHandler): void {
        if (!this.listeners[event]) return;
        this.listeners[event] = this.listeners[event].filter(h => h !== handler);
    }

    emit(event: string, ...args: any[]): void {
        if (!this.listeners[event]) return;
        this.listeners[event].forEach(handler => handler(...args));
    }

    clear(): void {
        this.listeners = {};
    }
}

export const eventBus = new EventBus();
