import axios, { AxiosRequestConfig } from 'axios';
import { Constants } from '../Constants.js';

export class NotificationService {
    private readonly url;
    private readonly defaultTopic;
    private readonly defaultErrorTopic;

    private static INSTANCE: NotificationService;

    static {
        this.INSTANCE = new NotificationService(
            Constants.NOTIFICATION_URL,
            Constants.DEFAULT_NEW_ELECTRICITY_DEAL_TOPIC,
            Constants.DEFAULT_ERROR_TOPIC,
        );
    }
    constructor(url: string, defaultTopic?: string, defaultErrorTopic?: string) {

        if (defaultErrorTopic === undefined || defaultTopic === undefined) {
            throw new Error("defaultTopic and defaultErrorTopic not found in environment variables");
        }
        this.url = url;
        this.defaultTopic = defaultTopic;
        this.defaultErrorTopic = defaultErrorTopic;
    }

    public static getInstance(): NotificationService {
        return this.INSTANCE;
    }
    public sendNotification(message: string, topic: string = this.defaultTopic): void {
        const config: AxiosRequestConfig = {
            headers: { Tags: 'eyes' },
        };
        console.info(`sending notification"${message}" to topic"${this.defaultTopic}"`)
        axios.post(this.url + topic, message).catch((error) => {
            return console.error(`Error sending notification: ${error}`);
        });
    }

    public sendErrorNotification(message: string, topic: string = this.defaultErrorTopic): void {
        const config: AxiosRequestConfig = {
            headers: { Tags: 'warning' },
        };

        axios.post(this.url + topic, message, config).catch((error) => {
            return console.error(`Error sending notification: ${error}`);
        });
    }
}
