import { Oferum, SimulationResult } from "../data/SimulationResult.js";
import { ErrorService } from "./ErrorService.js";
import { NotificationService } from "./NotificationService.js";

export class AdherenceService {

    private errorHandler: ErrorService = ErrorService.getInstance();
    private notificationService: NotificationService = NotificationService.getInstance();
    private static INSTANCE: AdherenceService;

    static {
        this.INSTANCE = new AdherenceService();
    }

    public static getInstance(): AdherenceService {
        return this.INSTANCE;
    }

    public notifyUserAboutPossibleAdherence(simulationResult: SimulationResult): void {
        const firstResult = simulationResult.Resultados[0];
        const currentPrice = Number(simulationResult.MinhaFaturaPrecoTotal.replace(",", ".")) // value comes with commas from erse
        if (firstResult.PrecoTotal < currentPrice) {

            const offer = firstResult.Oferta[0]
            const message = `Found a cheaper contractor!\n Current price: ${currentPrice} Expected price: ${firstResult.PrecoTotal}\n Check it at ${offer.Url}`;
            this.notificationService.sendNotification(message);
        }
    }
    /**
     * This function should take care of the adherence to the contract. it can either be throw scrapping the website and filling the necessary information,
     * Or sending an email, depending on the contractor
     * @param offer the offer to adhere
     * @returns true if the adherence goes well
     */
    public adhereOffer(offer: Oferum): boolean {
        return false
    }

}