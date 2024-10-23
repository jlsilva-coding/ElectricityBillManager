import { Utils } from '../Utils.js';

export interface SimulationRequest {
    caseType: string;
    cycle: string;
    electCalendar: string;
    electCalendarPeriodEnd: string;
    electCalendarPeriodStart: string;
    electCheias: string;
    electFastDays: string;
    electFastEuro: string;
    electFaturaCheias: string;
    electFaturaFixo: string;
    electFaturaPonta: string;
    electFaturaVazio: string;
    electPonta: string;
    electSupply: string;
    electVazio: string;
    filtro_FamiliasNumerosas: string;
    filtro_Fidelizacao: string;
    filtro_IndexacaoSpot: string;
    filtro_NovosClientes: string;
    filtro_SemPrecosIndexados: string;
    filtro_SemReembolsos: string;
    filtro_SemRestricoesAdicionais: string;
    filtro_ServicosAdicionais: string;
    filtro_comercializadores: string;
    filtro_contratacao: string;
    filtro_energia100Renovavel: string;
    filtro_faturacao: string;
    filtro_pagamento: string;
    idioma: string;
    pageStartIndex: string;
    pageStep: string;
    showElectPrice: string;
    socialOffer: string;
}
const electSupplyMap: Record<number, string> = {
    1.15: '0',
    2.3: '1',
    3.45: '2',
    4.6: '3',
    5.75: '4',
    6.9: '5',
    10.35: '6',
    13.8: '7',
    17.25: '8',
    20.7: '9',
    27.6: '10',
    34.5: '11',
    41.4: '12',
};

const cycleMap: Record<string, string> = {
    Simples: '1',
    'Bi-Horária': '2',
    'Tri-Horária': '3',
};

const electCalendarMap: Record<string, string> = {
    '1 Mês': '0',
    '2 Meses': '1',
    '12 Meses': '2',
    'A definir': '3',
};
export class SimulationRequestFactory {
    public static getSimplePersonalizedSimulationRequest(
        electPonta: string,
        cycle: string,
        electCalendar: string,
        electSupply: number,
        electCheias?: string,
        electVazio?: string,
        electCalendarPeriodStart?: string,
        electCalendarPeriodEnd?: string,
    ): SimulationRequest | null {
        const request = this.getDefaultSimulationRequest();
        request.caseType = '3';
        request.cycle = cycleMap[cycle];
        request.electCalendar = electCalendarMap[electCalendar];
        if (electCalendar == '3') {
            if (typeof electCalendarPeriodEnd == undefined || typeof electCalendarPeriodStart == undefined) {
                return null;
            }
            request.electCalendarPeriodStart = electCalendarPeriodStart!;
            request.electCalendarPeriodEnd = electCalendarPeriodEnd!;
        }
        request.electSupply = electSupplyMap[electSupply];
        switch (cycleMap[request.cycle]) {
            case '3':
                if (typeof electVazio == undefined) {
                    return null;
                }
                request.electVazio = electVazio!;
            case '2':
                if (typeof electCheias == undefined) {
                    return null;
                }
                request.electCheias = electCheias!;
            case '1':
                request.electPonta = electPonta;
        }
        return request;
    }
    public static getSimulationRequestFromFile(filePath: string): SimulationRequest | undefined {
        return Utils.loadJSON(filePath) as SimulationRequest;
    }
    private static getDefaultSimulationRequest(): SimulationRequest {
        const request: SimulationRequest = {
            caseType: '',
            cycle: '',
            electCalendar: '',
            electCalendarPeriodEnd: '',
            electCalendarPeriodStart: '',
            electCheias: '',
            electFastDays: '',
            electFastEuro: '',
            electFaturaCheias: '',
            electFaturaFixo: '',
            electFaturaPonta: '',
            electFaturaVazio: '',
            electPonta: '',
            electSupply: '',
            electVazio: '',
            filtro_FamiliasNumerosas: '0',
            filtro_Fidelizacao: '0',
            filtro_IndexacaoSpot: '1',
            filtro_NovosClientes: '1',
            filtro_SemPrecosIndexados: '1',
            filtro_SemReembolsos: '1',
            filtro_SemRestricoesAdicionais: '0',
            filtro_ServicosAdicionais: '0',
            filtro_comercializadores: '',
            filtro_contratacao: '1',
            filtro_energia100Renovavel: '0',
            filtro_faturacao: '1',
            filtro_pagamento: '1',
            idioma: '1',
            pageStartIndex: '0',
            pageStep: '10',
            showElectPrice: 'true',
            socialOffer: '1',
        };
        return request;
    }
}
