class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            topone: 0,
            toptwo: 0,
            topthree: 0,
            topfour: 0,
            topfive: 0,
            topsix: 0,
            topseven: 0,
            topeight: 0,
            topnine: 0,
            topten: 0,
            length: 0,
            wtopone: '',
            wtoptwo: '',
            wtopthree: '',
            wtopfour: '',
            wtopfive: '',
            wtopsix: '',
            wtopseven: '',
            wtopeight: '',
            wtopnine: '',
            wtopten: ''
        };

        this.sortedSongs = [];
        this.list = window.lyricData

        this.sortSongs();
    }

    sortSongs() {
        var str = '';
        var obj = {};
        this.list.forEach(function(element) {
            str += element.lyrics;
        });

        var arrstr = str.split(' ');
        arrstr.forEach((element) => {
            if(obj.hasOwnProperty(element)) {
                obj[element]++;
            } else {
                obj[element] = 1;
            }
        });

        for (var key in obj) {
            this.sortedSongs.push([key, obj[key]]);
        }
        
        this.sortedSongs = this.sortedSongs.sort((a,b) =>{
            return a[1] - b[1];
        });
    }

    loadDefaultChart() {

        this.setState({
            topone: this.sortedSongs[this.sortedSongs.length-1][1],
            toptwo: this.sortedSongs[this.sortedSongs.length-2][1],
            topthree: this.sortedSongs[this.sortedSongs.length-3][1],
            topfour: this.sortedSongs[this.sortedSongs.length-4][1],
            topfive: this.sortedSongs[this.sortedSongs.length-5][1],
            topsix: this.sortedSongs[this.sortedSongs.length-6][1],
            topseven: this.sortedSongs[this.sortedSongs.length-7][1],
            topeight: this.sortedSongs[this.sortedSongs.length-8][1],
            topnine: this.sortedSongs[this.sortedSongs.length-9][1],
            topten: this.sortedSongs[this.sortedSongs.length-10][1],
            length: this.sortedSongs.length,
            wtopone: this.sortedSongs[this.sortedSongs.length-1][0],
            wtoptwo: this.sortedSongs[this.sortedSongs.length-2][0],
            wtopthree: this.sortedSongs[this.sortedSongs.length-3][0],
            wtopfour: this.sortedSongs[this.sortedSongs.length-4][0],
            wtopfive: this.sortedSongs[this.sortedSongs.length-5][0],
            wtopsix: this.sortedSongs[this.sortedSongs.length-6][0],
            wtopseven: this.sortedSongs[this.sortedSongs.length-7][0],
            wtopeight: this.sortedSongs[this.sortedSongs.length-8][0],
            wtopnine: this.sortedSongs[this.sortedSongs.length-9][0],
            wtopten: this.sortedSongs[this.sortedSongs.length-10][0]
        });
    } 

    topTen(e) {
        e.preventDefault();

        this.loadDefaultChart();

    }

    topArtist() {
        var artists = {};

        this.list.forEach(function(element) {
            if(artists.hasOwnProperty(element.artist)){
                artists[element.artist]++;
             } else {
                 artists[element.artist] = 1;
             }
        });

        var sortedArrayArtis= [];

        for (var key in artists) {
            sortedArrayArtis.push([key, artists[key]]);
        }

        sortedArrayArtis = sortedArrayArtis.sort((a,b) =>{
            return a[1] - b[1];
        });

         this.setState({
            topone: sortedArrayArtis[sortedArrayArtis.length-1][1],
            toptwo: sortedArrayArtis[sortedArrayArtis.length-2][1],
            topthree: sortedArrayArtis[sortedArrayArtis.length-3][1],
            topfour: sortedArrayArtis[sortedArrayArtis.length-4][1],
            topfive: sortedArrayArtis[sortedArrayArtis.length-5][1],
            topsix: sortedArrayArtis[sortedArrayArtis.length-6][1],
            topseven: sortedArrayArtis[sortedArrayArtis.length-7][1],
            topeight: sortedArrayArtis[sortedArrayArtis.length-8][1],
            topnine: sortedArrayArtis[sortedArrayArtis.length-9][1],
            topten: sortedArrayArtis[sortedArrayArtis.length-10][1],
            length: sortedArrayArtis.length,
            wtopone: sortedArrayArtis[sortedArrayArtis.length-1][0],
            wtoptwo: sortedArrayArtis[sortedArrayArtis.length-2][0],
            wtopthree: sortedArrayArtis[sortedArrayArtis.length-3][0],
            wtopfour: sortedArrayArtis[sortedArrayArtis.length-4][0],
            wtopfive: sortedArrayArtis[sortedArrayArtis.length-5][0],
            wtopsix: sortedArrayArtis[sortedArrayArtis.length-6][0],
            wtopseven: sortedArrayArtis[sortedArrayArtis.length-7][0],
            wtopeight: sortedArrayArtis[sortedArrayArtis.length-8][0],
            wtopnine: sortedArrayArtis[sortedArrayArtis.length-9][0],
            wtopten: sortedArrayArtis[sortedArrayArtis.length-10][0]
        });       
    }

    clearChart(e) {
        e.preventDefault();

        this.setState({
            topone: 0,
            toptwo: 0,
            topthree: 0,
            topfour: 0,
            topfive: 0,
            topsix: 0,
            topseven: 0,
            topeight: 0,
            topnine: 0,
            topten: 0,
            wtopone: '',
            wtoptwo: '',
            wtopthree: '',
            wtopfour: '',
            wtopfive: '',
            wtopsix: '',
            wtopseven: '',
            wtopeight: '',
            wtopnine: '',
            wtopten: ''           
        });

    }

    render() {
        return (
            <div>
                <br />
                <button type='submit' className='myButton' onClick={this.clearChart.bind(this)}>
                Clear Chart
                </button>
                <button type='submit' className='myButton' onClick={this.topTen.bind(this)}>
                Top 10 Song Lyrics
                </button>
                <button type='submit' className='myButton' onClick={this.topArtist.bind(this)}>
                Top Arists (by hits)
                </button>
                <br /><br />
                Length: {this.state.length}
                    <div className="chart">
                    {this.state.wtopone}
                    <div style={{width: this.state.topone}}>{this.state.topone}</div>
                    {this.state.wtoptwo}
                    <div style={{width: this.state.toptwo}}>{this.state.toptwo}</div>
                    {this.state.wtopthree}
                    <div style={{width: this.state.topthree}}>{this.state.topthree}</div>
                    {this.state.wtopfour}
                    <div style={{width: this.state.topfour}}>{this.state.topfour}</div>
                    {this.state.wtopfive}
                    <div style={{width: this.state.topfive}}>{this.state.topfive}</div>
                    {this.state.wtopsix}
                    <div style={{width: this.state.topsix}}>{this.state.topsix}</div>
                    {this.state.wtopseven}
                    <div style={{width: this.state.topseven}}>{this.state.topseven}</div>
                    {this.state.wtopeight}
                    <div style={{width: this.state.topeight}}>{this.state.topeight}</div>
                    {this.state.wtopnine}
                    <div style={{width: this.state.topnine}}>{this.state.topnine}</div>
                    {this.state.wtopten}
                    <div style={{width: this.state.topten}}>{this.state.topten}</div>
                </div>
            </div>
        );
    }
}

window.App = App;

ReactDOM.render(<App />, document.getElementById('app'));