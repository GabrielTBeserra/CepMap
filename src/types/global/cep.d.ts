export { };

declare global {
    interface Cep {
        cep: string;
        logradouro: string;
        complemento: string;
        bairro: string;
        localidade: string;
        uf: string;
        ibge: string;
        gia: string;
        ddd: string;
        siafi: string;
        lon: number;
        lat: number;
    }
}