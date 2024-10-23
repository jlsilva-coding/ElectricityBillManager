import axios from 'axios';
import path from 'path';
import fs from 'fs';
import { NotificationService } from './NotificationService.js';
import { SimulationRequest } from '../data/SimulationRequest.js';
import { SimulationResult, Resultado } from '../data/SimulationResult.js';
import { ErrorService } from './ErrorService.js';
import { Utils } from '../Utils.js';
import { Constants } from '../Constants.js';
//import adherenceInfo from "../data/adherenceInfo.json";

export class OfferService {
    private static INSTANCE: OfferService;

    private errorHandler: ErrorService = ErrorService.getInstance();
    private notificationService: NotificationService = NotificationService.getInstance();

    static {
        this.INSTANCE = new OfferService();
    }

    public static getInstance(): OfferService {
        return this.INSTANCE;
    }

    public isOffersFileValid(filePath: string) {
        if (fs.existsSync(filePath)) {
            const fileTime = fs.statSync(filePath).mtimeMs;
            return Date.now() - fileTime < Constants.OFFERS_EXPIRATION_TIME_MILLIS;
        }
        return false;
    }

    public async getOffers(request: SimulationRequest, outFilePath?: string): Promise<SimulationResult | undefined> {
        const cachedOffersPath = outFilePath == undefined ? Constants.OFFERS_FILE_PATH : outFilePath;

        if (this.isOffersFileValid(cachedOffersPath)) {
            return Utils.loadJSON(cachedOffersPath) as SimulationResult;
        }

        const url = Constants.SIMULATOR_URL;
        const headers = {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            Accept: 'application/json, text/javascript, */*; q=0.01',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest',
            'sec-ch-ua-mobile': '?0',
            'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"Windows"',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            host: 'simulador.precos.erse.pt',
        };

        const response = await axios.post(url, request, { headers: headers }).catch((error) => {
            return error;
        });
        if (!ErrorService.isSuccessCode(response.status)) {
            this.errorHandler.throwError('Fetching electricity offers from ERSE', response.status);
        }
        const response_obj = response.data as SimulationResult;

        fs.writeFileSync(cachedOffersPath, JSON.stringify(response_obj, null, 4), {});
        return response_obj;
    }





}