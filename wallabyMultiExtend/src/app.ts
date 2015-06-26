class App {
    private _el;

    constructor(el) {
        this._el = el;
    }

    public render() {
        this._el.html('require.js up and running');
    }
}

export = App;
