/* Interface Avião - Definição do Contrato */

export default interface IAviao {
    decolar(): void;
    acelerar(): void;
    desacelerar(): void;
    pousar(): void;
}