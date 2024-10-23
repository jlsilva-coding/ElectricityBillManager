import path from 'path';

export class Constants {
    public static readonly PROJECT_FOLDER = path.resolve('.');
    public static readonly DATA_FOLDER = Constants.PROJECT_FOLDER + '/mockData/';
    public static readonly MOCK_SIMULATION_REQUEST_FILE_PATH = Constants.DATA_FOLDER + 'simulationRequestWithPrice.json';

    /**
     * NotificationService
     */
    public static readonly NOTIFICATION_URL = 'https://ntfy.sh/';
    public static readonly DEFAULT_NEW_ELECTRICITY_DEAL_TOPIC_VAR_NAME = "DEFAULT_NEW_ELECTRICITY_DEAL_TOPIC";
    public static readonly DEFAULT_NEW_ELECTRICITY_DEAL_TOPIC = process.env[Constants.DEFAULT_NEW_ELECTRICITY_DEAL_TOPIC_VAR_NAME];
    public static readonly DEFAULT_ERROR_TOPIC_VAR_NAME = 'DEFAULT_ERROR_TOPIC';
    public static readonly DEFAULT_ERROR_TOPIC = process.env[Constants.DEFAULT_ERROR_TOPIC_VAR_NAME];

    /**
     * Offer Service
     */

    public static readonly OFFERS_EXPIRATION_TIME_MILLIS = 1 * 60 * 60 * 24;
    public static readonly SIMULATOR_URL = 'https://simulador.precos.erse.pt/connectors/simular_eletricidade/';
    public static readonly OFFERS_FILE_PATH = Constants.DATA_FOLDER + 'offers.json';
}
