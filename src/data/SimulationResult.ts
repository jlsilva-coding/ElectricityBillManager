export interface SimulationResult {
    status: string;
    message: string;
    TotalResultados: number;
    MinhaFaturaPrecoAcesso: string;
    MinhaFaturaPrecoEnergia: string;
    MinhaFaturaPrecoTaxasImpostos: string;
    MinhaFaturaPrecoTotal: string;
    Comercializadores: Comercializador[];
    Resultados: Resultado[];
    DadosSimulacao: DadosSimulacao;
}

export interface Comercializador {
    code: string;
    name: string;
}

export interface Resultado {
    Id: string;
    PrecoAcesso: number;
    PrecoEnergia: number;
    PrecoTaxasImpostos: number;
    PrecoOutrosServicos: number;
    PrecoDescontoCondicionado: number;
    PrecoTotal: number;
    Oferta: Oferum[];
}

export interface Oferum {
    TipoOferta: string;
    Comercializador: string;
    Nome: string;
    Descricao: string;
    Url: string;
    Logotipo: string;
    UrlComercializador: string;
    DebitoDirecto: string;
    RestricoesAdicionais: string;
    RestricoesAdicionaisTexto: string;
    IndexacaoSpot: string;
    DescontoCondicionado: string;
    DescontoCondicionadoTexto: string;
    OutrosServicos: string;
    OutrosServicosTexto: string;
    TipoContagem: string;
    Contratacao: string;
    ModoContratacao: string;
    Faturacao: string;
    TipoFaturacao: string;
    Pagamento: string;
    PrecoTermoFixo: string;
    PrecoTermoenergia: string;
    RevisaodePrecos: string;
    Segmento: string;
    TipoFornecimento: string;
    DuracaoContrato: string;
    DataInicioOferta: string;
    DataFimOferta: string;
    MeiosAtendimento: string;
    ModoPagamento: string;
    Energia100Verde: string;
    ParceriasObrigatorias: string;
    TarifaSocial: string;
    OutrasCondicoes: string;
    DescontosFixosTexto: string;
    DescontosPercentuaisTexto: string;
    ServicosAdicionaisObrigatoriosTexto: string;
    ServicosAdicionaisOpcionaisTexto: string;
    FichaPadronizada: string;
    CondicoesGeraisContrato: string;
    RevisaoPrecos: string;
    TextoERSE: string;
    PrecoTermoenergia2: string;
    PrecoTermoenergia3: string;
    TipoFidelizacao: string;
    ContactoComercialTel: string;
    ContactoWEBouMAIL: string;
    Contrat_Telef: string;
    Contrat_Elect: string;
    Contrat_Presen: string;
    PrecoTermoFixoGNIfDual: string;
    PrecoTermoEnergiaGNIfDual: string;
    CodOferta: string;
    NovosClientes: string;
    Fidelizacao: string;
    FamiliasNumerosas: string;
}

export interface DadosSimulacao {
    ELE_countingCycle: string;
    ELE_consumptionPeriod1: string;
    ELE_consumptionPeriod2: string;
    ELE_power: string;
    ELE_timePeriod: string;
    ELE_tf: string;
    ELE_t1: string;
    ELE_t2: string;
    ELE_t3: string;
}
