import scoreManager from './scoreManager';

export default class score {
    private static _instance: score = new score();
    public count: number = 0;
    public Manager: any;

    private constructor() {}

    public init(start: number): void {
        this.count = start;
        this.Manager = scoreManager.getInstance();
        this.Manager.init();
    }

    public static getInstance(): score {
        return score._instance;
    }
}