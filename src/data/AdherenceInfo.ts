/**
 * Data that will be used to sign a contract
 */
export interface AdherenceInfo {
    CPE: string;
    'Tipo De Contratação': string;
    'Potência a Contratar': number;
    'Opção Tarifária': string;
    'Horas tarifário': string;
    Nome: string;
    Apelidos: string;
    'BI/CC': string;
    Email: string;
    NIF: string;
    'Data de Nascimento': string;
    Telemóvel: string;
    Rua: string;
    Nº: number;
    'Fração/andar': string;
    'Código Postal': string;
    Localidade: string;
    'Cliente Titular': string;
    Utilização: string;
    'Tarifa Social': boolean;
    'Familia Numerosa': boolean;
    'Nome do Devedor': string;
    Morada: string;
    País: string;
    'NIB/IBAN': string;
    'SWIFT/BIC': string;
    'Máximo Débito Direto': number;
    'Email para Fatura eletrónica': string;
}
