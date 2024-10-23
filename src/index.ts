import { OfferService } from './services/OfferService.js';
import { SimulationRequestFactory } from './data/SimulationRequest.js';
import { ErrorService } from './services/ErrorService.js';
import { Constants } from './Constants.js';
import { v7 as uuidV7 } from 'uuid';
import { AdherenceService } from './services/AdherenceService.js';

async function run() {
    const requestId = uuidV7();
    ErrorService.getInstance().requestId = requestId;

    const request = SimulationRequestFactory.getSimulationRequestFromFile(
        Constants.MOCK_SIMULATION_REQUEST_FILE_PATH,
    );
    if (request === undefined) {
        ErrorService.getInstance().throwError("Error getting simulation request");
    }

    const offers = await OfferService.getInstance().getOffers(request!);

    if (offers === undefined) {
        ErrorService.getInstance().throwError("Error getting offers");
    }
    AdherenceService.getInstance().notifyUserAboutPossibleAdherence(offers!);


}

function main(): void {
    run();
}
main();
