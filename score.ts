import scoreManager from './scoreManager';

export default class score {
    private static _instance: score;
    public count: number = 0;
    public Manager: any;

    private constructor() {}

    public init(start: number): void {
        this.count = start;
        this.Manager = scoreManager.getInstance();
        this.Manager.init(this.count);
    }

    public static getInstance(): score {
        if (!score._instance) {
            score._instance = new score();
        }
        return this._instance;
    }
}