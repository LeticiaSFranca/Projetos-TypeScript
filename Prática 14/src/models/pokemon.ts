class Pokemon {
    private _id : number = 0;
    private _nome: string = "";
    private _geracao: number = 0;
    private _lendario: boolean = false;

    constructor(id : number, nome: string, geracao:number, lendario: boolean) {
        this._id = id
        this._nome = nome
        this._geracao = geracao
        this._lendario = lendario 
    }

    get id(): number {
        return this._id
    }

    get nome() : string {
        return this._nome
    }

    get geracao() : number {
        return this._geracao
    }

    get lendario() : boolean {
        return this._lendario
    }
}

export default Pokemon