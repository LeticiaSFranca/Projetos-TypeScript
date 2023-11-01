import IAviao from "./aviao.js";

/* Classe Turboélice */

export default class Turboelice implements IAviao {
    private _velocidadeAtualDeVoo: number = 0.0;
    private readonly _velocidadeMinimaDeVoo: number = 300.0;
    private readonly _velocidadeAceleracao: number = 5.0;
    private _nome: string = "";

    public constructor(nome: string) {
        this._nome = nome;
    }

    public get nome(): string {
        return this._nome;
    }

    public decolar(): void {
        if (this._velocidadeAtualDeVoo == 0) {
            this._velocidadeAtualDeVoo = this._velocidadeMinimaDeVoo;
        }
    }

    public acelerar(): void {
        this._velocidadeAtualDeVoo += this._velocidadeAceleracao;
    }
    
    public desacelerar(): void {
        if (this._velocidadeAtualDeVoo > this._velocidadeMinimaDeVoo) {
            this._velocidadeAtualDeVoo -= this._velocidadeAceleracao;
        }
    }
    
    public pousar(): void {
        if (this._velocidadeAtualDeVoo == this._velocidadeMinimaDeVoo) {
            this._velocidadeAtualDeVoo = 0;
        }
    }
}
