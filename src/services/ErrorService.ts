import { NotificationService } from './NotificationService.js';

export class ErrorService {
    private _requestId!: string;
    public set requestId(value: string) {
        this._requestId = value;
    }
    private static INSTANCE: ErrorService;

    static {
        this.INSTANCE = new ErrorService();
        this.getInstance().requestId = '';
    }

    public static getInstance(): ErrorService {
        return this.INSTANCE;
    }
    private handleErrorPrivate(errorMessage: string): void {
        console.error(errorMessage);
        NotificationService.getInstance().sendErrorNotification(errorMessage);
    }
    public handleError(action: string, code?: number, requestId: string = this._requestId): void {
        const message = `Error ${action}:\n requestId:${requestId}\n httpStatusCode:${code}`;
        this.handleErrorPrivate(message);
    }
    public throwError(action: string, code?: number, requestId: string = this._requestId): void {
        const message = `Error ${action}:\n requestId:${requestId}\n httpStatusCode:${code}`;
        this.handleErrorPrivate(message);
        throw new Error(message);
    }

    public static isSuccessCode(httpStatusCode: number | undefined) {
        return httpStatusCode !== undefined && httpStatusCode.toString()[0] == '2';
    }
}
