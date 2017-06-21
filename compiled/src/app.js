'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
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

        _this.sortedSongs = [];
        _this.list = window.lyricData;

        _this.sortSongs();
        return _this;
    }

    _createClass(App, [{
        key: 'sortSongs',
        value: function sortSongs() {
            var str = '';
            var obj = {};
            this.list.forEach(function (element) {
                str += element.lyrics;
            });

            var arrstr = str.split(' ');
            arrstr.forEach(function (element) {
                if (obj.hasOwnProperty(element)) {
                    obj[element]++;
                } else {
                    obj[element] = 1;
                }
            });

            for (var key in obj) {
                this.sortedSongs.push([key, obj[key]]);
            }

            this.sortedSongs = this.sortedSongs.sort(function (a, b) {
                return a[1] - b[1];
            });
        }
    }, {
        key: 'loadDefaultChart',
        value: function loadDefaultChart() {

            this.setState({
                topone: this.sortedSongs[this.sortedSongs.length - 1][1],
                toptwo: this.sortedSongs[this.sortedSongs.length - 2][1],
                topthree: this.sortedSongs[this.sortedSongs.length - 3][1],
                topfour: this.sortedSongs[this.sortedSongs.length - 4][1],
                topfive: this.sortedSongs[this.sortedSongs.length - 5][1],
                topsix: this.sortedSongs[this.sortedSongs.length - 6][1],
                topseven: this.sortedSongs[this.sortedSongs.length - 7][1],
                topeight: this.sortedSongs[this.sortedSongs.length - 8][1],
                topnine: this.sortedSongs[this.sortedSongs.length - 9][1],
                topten: this.sortedSongs[this.sortedSongs.length - 10][1],
                length: this.sortedSongs.length,
                wtopone: this.sortedSongs[this.sortedSongs.length - 1][0],
                wtoptwo: this.sortedSongs[this.sortedSongs.length - 2][0],
                wtopthree: this.sortedSongs[this.sortedSongs.length - 3][0],
                wtopfour: this.sortedSongs[this.sortedSongs.length - 4][0],
                wtopfive: this.sortedSongs[this.sortedSongs.length - 5][0],
                wtopsix: this.sortedSongs[this.sortedSongs.length - 6][0],
                wtopseven: this.sortedSongs[this.sortedSongs.length - 7][0],
                wtopeight: this.sortedSongs[this.sortedSongs.length - 8][0],
                wtopnine: this.sortedSongs[this.sortedSongs.length - 9][0],
                wtopten: this.sortedSongs[this.sortedSongs.length - 10][0]
            });
        }
    }, {
        key: 'topTen',
        value: function topTen(e) {
            e.preventDefault();

            this.loadDefaultChart();
        }
    }, {
        key: 'topArtist',
        value: function topArtist() {
            var artists = {};

            this.list.forEach(function (element) {
                if (artists.hasOwnProperty(element.artist)) {
                    artists[element.artist]++;
                } else {
                    artists[element.artist] = 1;
                }
            });

            var sortedArrayArtis = [];

            for (var key in artists) {
                sortedArrayArtis.push([key, artists[key]]);
            }

            sortedArrayArtis = sortedArrayArtis.sort(function (a, b) {
                return a[1] - b[1];
            });

            this.setState({
                topone: sortedArrayArtis[sortedArrayArtis.length - 1][1],
                toptwo: sortedArrayArtis[sortedArrayArtis.length - 2][1],
                topthree: sortedArrayArtis[sortedArrayArtis.length - 3][1],
                topfour: sortedArrayArtis[sortedArrayArtis.length - 4][1],
                topfive: sortedArrayArtis[sortedArrayArtis.length - 5][1],
                topsix: sortedArrayArtis[sortedArrayArtis.length - 6][1],
                topseven: sortedArrayArtis[sortedArrayArtis.length - 7][1],
                topeight: sortedArrayArtis[sortedArrayArtis.length - 8][1],
                topnine: sortedArrayArtis[sortedArrayArtis.length - 9][1],
                topten: sortedArrayArtis[sortedArrayArtis.length - 10][1],
                length: sortedArrayArtis.length,
                wtopone: sortedArrayArtis[sortedArrayArtis.length - 1][0],
                wtoptwo: sortedArrayArtis[sortedArrayArtis.length - 2][0],
                wtopthree: sortedArrayArtis[sortedArrayArtis.length - 3][0],
                wtopfour: sortedArrayArtis[sortedArrayArtis.length - 4][0],
                wtopfive: sortedArrayArtis[sortedArrayArtis.length - 5][0],
                wtopsix: sortedArrayArtis[sortedArrayArtis.length - 6][0],
                wtopseven: sortedArrayArtis[sortedArrayArtis.length - 7][0],
                wtopeight: sortedArrayArtis[sortedArrayArtis.length - 8][0],
                wtopnine: sortedArrayArtis[sortedArrayArtis.length - 9][0],
                wtopten: sortedArrayArtis[sortedArrayArtis.length - 10][0]
            });
        }
    }, {
        key: 'clearChart',
        value: function clearChart(e) {
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
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement('br', null),
                React.createElement(
                    'button',
                    { type: 'submit', className: 'myButton', onClick: this.clearChart.bind(this) },
                    'Clear Chart'
                ),
                React.createElement(
                    'button',
                    { type: 'submit', className: 'myButton', onClick: this.topTen.bind(this) },
                    'Top 10 Song Lyrics'
                ),
                React.createElement(
                    'button',
                    { type: 'submit', className: 'myButton', onClick: this.topArtist.bind(this) },
                    'Top Arists (by hits)'
                ),
                React.createElement('br', null),
                React.createElement('br', null),
                'Length: ',
                this.state.length,
                React.createElement(
                    'div',
                    { className: 'chart' },
                    this.state.wtopone,
                    React.createElement(
                        'div',
                        { style: { width: this.state.topone } },
                        this.state.topone
                    ),
                    this.state.wtoptwo,
                    React.createElement(
                        'div',
                        { style: { width: this.state.toptwo } },
                        this.state.toptwo
                    ),
                    this.state.wtopthree,
                    React.createElement(
                        'div',
                        { style: { width: this.state.topthree } },
                        this.state.topthree
                    ),
                    this.state.wtopfour,
                    React.createElement(
                        'div',
                        { style: { width: this.state.topfour } },
                        this.state.topfour
                    ),
                    this.state.wtopfive,
                    React.createElement(
                        'div',
                        { style: { width: this.state.topfive } },
                        this.state.topfive
                    ),
                    this.state.wtopsix,
                    React.createElement(
                        'div',
                        { style: { width: this.state.topsix } },
                        this.state.topsix
                    ),
                    this.state.wtopseven,
                    React.createElement(
                        'div',
                        { style: { width: this.state.topseven } },
                        this.state.topseven
                    ),
                    this.state.wtopeight,
                    React.createElement(
                        'div',
                        { style: { width: this.state.topeight } },
                        this.state.topeight
                    ),
                    this.state.wtopnine,
                    React.createElement(
                        'div',
                        { style: { width: this.state.topnine } },
                        this.state.topnine
                    ),
                    this.state.wtopten,
                    React.createElement(
                        'div',
                        { style: { width: this.state.topten } },
                        this.state.topten
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

window.App = App;

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInRvcG9uZSIsInRvcHR3byIsInRvcHRocmVlIiwidG9wZm91ciIsInRvcGZpdmUiLCJ0b3BzaXgiLCJ0b3BzZXZlbiIsInRvcGVpZ2h0IiwidG9wbmluZSIsInRvcHRlbiIsImxlbmd0aCIsInd0b3BvbmUiLCJ3dG9wdHdvIiwid3RvcHRocmVlIiwid3RvcGZvdXIiLCJ3dG9wZml2ZSIsInd0b3BzaXgiLCJ3dG9wc2V2ZW4iLCJ3dG9wZWlnaHQiLCJ3dG9wbmluZSIsInd0b3B0ZW4iLCJzb3J0ZWRTb25ncyIsImxpc3QiLCJ3aW5kb3ciLCJseXJpY0RhdGEiLCJzb3J0U29uZ3MiLCJzdHIiLCJvYmoiLCJmb3JFYWNoIiwiZWxlbWVudCIsImx5cmljcyIsImFycnN0ciIsInNwbGl0IiwiaGFzT3duUHJvcGVydHkiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJsb2FkRGVmYXVsdENoYXJ0IiwiYXJ0aXN0cyIsImFydGlzdCIsInNvcnRlZEFycmF5QXJ0aXMiLCJjbGVhckNoYXJ0IiwiYmluZCIsInRvcFRlbiIsInRvcEFydGlzdCIsIndpZHRoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0YsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDVEEsS0FEUzs7QUFHZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsb0JBQVEsQ0FEQztBQUVUQyxvQkFBUSxDQUZDO0FBR1RDLHNCQUFVLENBSEQ7QUFJVEMscUJBQVMsQ0FKQTtBQUtUQyxxQkFBUyxDQUxBO0FBTVRDLG9CQUFRLENBTkM7QUFPVEMsc0JBQVUsQ0FQRDtBQVFUQyxzQkFBVSxDQVJEO0FBU1RDLHFC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cEQscUJBWkE7QUFhQyx5QkFBS04sS0FBTCxDQUFXa0IsU0FiWjtBQWNBO0FBQUE7QUFBQSwwQkFBSyxPQUFPLEVBQUNpQyxPQUFPLEtBQUtuRCxLQUFMLENBQVdPLFFBQW5CLEVBQVo7QUFBMkMsNkJBQUtQLEtBQUwsQ0FBV087QUFBdEQscUJBZEE7QUFlQyx5QkFBS1AsS0FBTCxDQUFXbUIsU0FmWjtBQWdCQTtBQUFBO0FBQUEsMEJBQUssT0FBTyxFQUFDZ0MsT0FBTyxLQUFLbkQsS0FBTCxDQUFXUSxRQUFuQixFQUFaO0FBQTJDLDZCQUFLUixLQUFMLENBQVdRO0FBQXRELHFCQWhCQTtBQWlCQyx5QkFBS1IsS0FBTCxDQUFXb0IsUUFqQlo7QUFrQkE7QUFBQTtBQUFBLDBCQUFLLE9BQU8sRUFBQytCLE9BQU8sS0FBS25ELEtBQUwsQ0FBV1MsT0FBbkIsRUFBWjtBQUEwQyw2QkFBS1QsS0FBTCxDQUFXUztBQUFyRCxxQkFsQkE7QUFtQkMseUJBQUtULEtBQUwsQ0FBV3FCLE9BbkJaO0FBb0JBO0FBQUE7QUFBQSwwQkFBSyxPQUFPLEVBQUM4QixPQUFPLEtBQUtuRCxLQUFMLENBQVdVLE1BQW5CLEVBQVo7QUFBeUMsNkJBQUtWLEtBQUwsQ0FBV1U7QUFBcEQ7QUFwQkE7QUFiUixhQURKO0FBc0NIOzs7O0VBOU1hMEMsTUFBTUMsUzs7QUFpTnhCN0IsT0FBTzFCLEdBQVAsR0FBYUEsR0FBYjs7QUFFQXdELFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0b3BvbmU6IDAsXG4gICAgICAgICAgICB0b3B0d286IDAsXG4gICAgICAgICAgICB0b3B0aHJlZTogMCxcbiAgICAgICAgICAgIHRvcGZvdXI6IDAsXG4gICAgICAgICAgICB0b3BmaXZlOiAwLFxuICAgICAgICAgICAgdG9wc2l4OiAwLFxuICAgICAgICAgICAgdG9wc2V2ZW46IDAsXG4gICAgICAgICAgICB0b3BlaWdodDogMCxcbiAgICAgICAgICAgIHRvcG5pbmU6IDAsXG4gICAgICAgICAgICB0b3B0ZW46IDAsXG4gICAgICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgICAgICB3dG9wb25lOiAnJyxcbiAgICAgICAgICAgIHd0b3B0d286ICcnLFxuICAgICAgICAgICAgd3RvcHRocmVlOiAnJyxcbiAgICAgICAgICAgIHd0b3Bmb3VyOiAnJyxcbiAgICAgICAgICAgIHd0b3BmaXZlOiAnJyxcbiAgICAgICAgICAgIHd0b3BzaXg6ICcnLFxuICAgICAgICAgICAgd3RvcHNldmVuOiAnJyxcbiAgICAgICAgICAgIHd0b3BlaWdodDogJycsXG4gICAgICAgICAgICB3dG9wbmluZTogJycsXG4gICAgICAgICAgICB3dG9wdGVuOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc29ydGVkU29uZ3MgPSBbXTtcbiAgICAgICAgdGhpcy5saXN0ID0gd2luZG93Lmx5cmljRGF0YVxuXG4gICAgICAgIHRoaXMuc29ydFNvbmdzKCk7XG4gICAgfVxuXG4gICAgc29ydFNvbmdzKCkge1xuICAgICAgICB2YXIgc3RyID0gJyc7XG4gICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgdGhpcy5saXN0LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgc3RyICs9IGVsZW1lbnQubHlyaWNzO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgYXJyc3RyID0gc3RyLnNwbGl0KCcgJyk7XG4gICAgICAgIGFycnN0ci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBvYmpbZWxlbWVudF0rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqW2VsZW1lbnRdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgdGhpcy5zb3J0ZWRTb25ncy5wdXNoKFtrZXksIG9ialtrZXldXSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc29ydGVkU29uZ3MgPSB0aGlzLnNvcnRlZFNvbmdzLnNvcnQoKGEsYikgPT57XG4gICAgICAgICAgICByZXR1cm4gYVsxXSAtIGJbMV07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWREZWZhdWx0Q2hhcnQoKSB7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0b3BvbmU6IHRoaXMuc29ydGVkU29uZ3NbdGhpcy5zb3J0ZWRTb25ncy5sZW5ndGgtMV1bMV0sXG4gICAgICAgICAgICB0b3B0d286IHRoaXMuc29ydGVkU29uZ3NbdGhpcy5zb3J0ZWRTb25ncy5sZW5ndGgtMl1bMV0sXG4gICAgICAgICAgICB0b3B0aHJlZTogdGhpcy5zb3J0ZWRTb25nc1t0aGlzLnNvcnRlZFNvbmdzLmxlbmd0aC0zXVsxXSxcbiAgICAgICAgICAgIHRvcGZvdXI6IHRoaXMuc29ydGVkU29uZ3NbdGhpcy5zb3J0ZWRTb25ncy5sZW5ndGgtNF1bMV0sXG4gICAgICAgICAgICB0b3BmaXZlOiB0aGlzLnNvcnRlZFNvbmdzW3RoaXMuc29ydGVkU29uZ3MubGVuZ3RoLTVdWzFdLFxuICAgICAgICAgICAgdG9wc2l4OiB0aGlzLnNvcnRlZFNvbmdzW3RoaXMuc29ydGVkU29uZ3MubGVuZ3RoLTZdWzFdLFxuICAgICAgICAgICAgdG9wc2V2ZW46IHRoaXMuc29ydGVkU29uZ3NbdGhpcy5zb3J0ZWRTb25ncy5sZW5ndGgtN11bMV0sXG4gICAgICAgICAgICB0b3BlaWdodDogdGhpcy5zb3J0ZWRTb25nc1t0aGlzLnNvcnRlZFNvbmdzLmxlbmd0aC04XVsxXSxcbiAgICAgICAgICAgIHRvcG5pbmU6IHRoaXMuc29ydGVkU29uZ3NbdGhpcy5zb3J0ZWRTb25ncy5sZW5ndGgtOV1bMV0sXG4gICAgICAgICAgICB0b3B0ZW46IHRoaXMuc29ydGVkU29uZ3NbdGhpcy5zb3J0ZWRTb25ncy5sZW5ndGgtMTBdWzFdLFxuICAgICAgICAgICAgbGVuZ3RoOiB0aGlzLnNvcnRlZFNvbmdzLmxlbmd0aCxcbiAgICAgICAgICAgIHd0b3BvbmU6IHRoaXMuc29ydGVkU29uZ3NbdGhpcy5zb3J0ZWRTb25ncy5sZW5ndGgtMV1bMF0sXG4gICAgICAgICAgICB3dG9wdHdvOiB0aGlzLnNvcnRlZFNvbmdzW3RoaXMuc29ydGVkU29uZ3MubGVuZ3RoLTJdWzBdLFxuICAgICAgICAgICAgd3RvcHRocmVlOiB0aGlzLnNvcnRlZFNvbmdzW3RoaXMuc29ydGVkU29uZ3MubGVuZ3RoLTNdWzBdLFxuICAgICAgICAgICAgd3RvcGZvdXI6IHRoaXMuc29ydGVkU29uZ3NbdGhpcy5zb3J0ZWRTb25ncy5sZW5ndGgtNF1bMF0sXG4gICAgICAgICAgICB3dG9wZml2ZTogdGhpcy5zb3J0ZWRTb25nc1t0aGlzLnNvcnRlZFNvbmdzLmxlbmd0aC01XVswXSxcbiAgICAgICAgICAgIHd0b3BzaXg6IHRoaXMuc29ydGVkU29uZ3NbdGhpcy5zb3J0ZWRTb25ncy5sZW5ndGgtNl1bMF0sXG4gICAgICAgICAgICB3dG9wc2V2ZW46IHRoaXMuc29ydGVkU29uZ3NbdGhpcy5zb3J0ZWRTb25ncy5sZW5ndGgtN11bMF0sXG4gICAgICAgICAgICB3dG9wZWlnaHQ6IHRoaXMuc29ydGVkU29uZ3NbdGhpcy5zb3J0ZWRTb25ncy5sZW5ndGgtOF1bMF0sXG4gICAgICAgICAgICB3dG9wbmluZTogdGhpcy5zb3J0ZWRTb25nc1t0aGlzLnNvcnRlZFNvbmdzLmxlbmd0aC05XVswXSxcbiAgICAgICAgICAgIHd0b3B0ZW46IHRoaXMuc29ydGVkU29uZ3NbdGhpcy5zb3J0ZWRTb25ncy5sZW5ndGgtMTBdWzBdXG4gICAgICAgIH0pO1xuICAgIH0gXG5cbiAgICB0b3BUZW4oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5sb2FkRGVmYXVsdENoYXJ0KCk7XG5cbiAgICB9XG5cbiAgICB0b3BBcnRpc3QoKSB7XG4gICAgICAgIHZhciBhcnRpc3RzID0ge307XG5cbiAgICAgICAgdGhpcy5saXN0LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgaWYoYXJ0aXN0cy5oYXNPd25Qcm9wZXJ0eShlbGVtZW50LmFydGlzdCkpe1xuICAgICAgICAgICAgICAgIGFydGlzdHNbZWxlbWVudC5hcnRpc3RdKys7XG4gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgYXJ0aXN0c1tlbGVtZW50LmFydGlzdF0gPSAxO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNvcnRlZEFycmF5QXJ0aXM9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhcnRpc3RzKSB7XG4gICAgICAgICAgICBzb3J0ZWRBcnJheUFydGlzLnB1c2goW2tleSwgYXJ0aXN0c1trZXldXSk7XG4gICAgICAgIH1cblxuICAgICAgICBzb3J0ZWRBcnJheUFydGlzID0gc29ydGVkQXJyYXlBcnRpcy5zb3J0KChhLGIpID0+e1xuICAgICAgICAgICAgcmV0dXJuIGFbMV0gLSBiWzFdO1xuICAgICAgICB9KTtcblxuICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0b3BvbmU6IHNvcnRlZEFycmF5QXJ0aXNbc29ydGVkQXJyYXlBcnRpcy5sZW5ndGgtMV1bMV0sXG4gICAgICAgICAgICB0b3B0d286IHNvcnRlZEFycmF5QXJ0aXNbc29ydGVkQXJyYXlBcnRpcy5sZW5ndGgtMl1bMV0sXG4gICAgICAgICAgICB0b3B0aHJlZTogc29ydGVkQXJyYXlBcnRpc1tzb3J0ZWRBcnJheUFydGlzLmxlbmd0aC0zXVsxXSxcbiAgICAgICAgICAgIHRvcGZvdXI6IHNvcnRlZEFycmF5QXJ0aXNbc29ydGVkQXJyYXlBcnRpcy5sZW5ndGgtNF1bMV0sXG4gICAgICAgICAgICB0b3BmaXZlOiBzb3J0ZWRBcnJheUFydGlzW3NvcnRlZEFycmF5QXJ0aXMubGVuZ3RoLTVdWzFdLFxuICAgICAgICAgICAgdG9wc2l4OiBzb3J0ZWRBcnJheUFydGlzW3NvcnRlZEFycmF5QXJ0aXMubGVuZ3RoLTZdWzFdLFxuICAgICAgICAgICAgdG9wc2V2ZW46IHNvcnRlZEFycmF5QXJ0aXNbc29ydGVkQXJyYXlBcnRpcy5sZW5ndGgtN11bMV0sXG4gICAgICAgICAgICB0b3BlaWdodDogc29ydGVkQXJyYXlBcnRpc1tzb3J0ZWRBcnJheUFydGlzLmxlbmd0aC04XVsxXSxcbiAgICAgICAgICAgIHRvcG5pbmU6IHNvcnRlZEFycmF5QXJ0aXNbc29ydGVkQXJyYXlBcnRpcy5sZW5ndGgtOV1bMV0sXG4gICAgICAgICAgICB0b3B0ZW46IHNvcnRlZEFycmF5QXJ0aXNbc29ydGVkQXJyYXlBcnRpcy5sZW5ndGgtMTBdWzFdLFxuICAgICAgICAgICAgbGVuZ3RoOiBzb3J0ZWRBcnJheUFydGlzLmxlbmd0aCxcbiAgICAgICAgICAgIHd0b3BvbmU6IHNvcnRlZEFycmF5QXJ0aXNbc29ydGVkQXJyYXlBcnRpcy5sZW5ndGgtMV1bMF0sXG4gICAgICAgICAgICB3dG9wdHdvOiBzb3J0ZWRBcnJheUFydGlzW3NvcnRlZEFycmF5QXJ0aXMubGVuZ3RoLTJdWzBdLFxuICAgICAgICAgICAgd3RvcHRocmVlOiBzb3J0ZWRBcnJheUFydGlzW3NvcnRlZEFycmF5QXJ0aXMubGVuZ3RoLTNdWzBdLFxuICAgICAgICAgICAgd3RvcGZvdXI6IHNvcnRlZEFycmF5QXJ0aXNbc29ydGVkQXJyYXlBcnRpcy5sZW5ndGgtNF1bMF0sXG4gICAgICAgICAgICB3dG9wZml2ZTogc29ydGVkQXJyYXlBcnRpc1tzb3J0ZWRBcnJheUFydGlzLmxlbmd0aC01XVswXSxcbiAgICAgICAgICAgIHd0b3BzaXg6IHNvcnRlZEFycmF5QXJ0aXNbc29ydGVkQXJyYXlBcnRpcy5sZW5ndGgtNl1bMF0sXG4gICAgICAgICAgICB3dG9wc2V2ZW46IHNvcnRlZEFycmF5QXJ0aXNbc29ydGVkQXJyYXlBcnRpcy5sZW5ndGgtN11bMF0sXG4gICAgICAgICAgICB3dG9wZWlnaHQ6IHNvcnRlZEFycmF5QXJ0aXNbc29ydGVkQXJyYXlBcnRpcy5sZW5ndGgtOF1bMF0sXG4gICAgICAgICAgICB3dG9wbmluZTogc29ydGVkQXJyYXlBcnRpc1tzb3J0ZWRBcnJheUFydGlzLmxlbmd0aC05XVswXSxcbiAgICAgICAgICAgIHd0b3B0ZW46IHNvcnRlZEFycmF5QXJ0aXNbc29ydGVkQXJyYXlBcnRpcy5sZW5ndGgtMTBdWzBdXG4gICAgICAgIH0pOyAgICAgICBcbiAgICB9XG5cbiAgICBjbGVhckNoYXJ0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG9wb25lOiAwLFxuICAgICAgICAgICAgdG9wdHdvOiAwLFxuICAgICAgICAgICAgdG9wdGhyZWU6IDAsXG4gICAgICAgICAgICB0b3Bmb3VyOiAwLFxuICAgICAgICAgICAgdG9wZml2ZTogMCxcbiAgICAgICAgICAgIHRvcHNpeDogMCxcbiAgICAgICAgICAgIHRvcHNldmVuOiAwLFxuICAgICAgICAgICAgdG9wZWlnaHQ6IDAsXG4gICAgICAgICAgICB0b3BuaW5lOiAwLFxuICAgICAgICAgICAgdG9wdGVuOiAwLFxuICAgICAgICAgICAgd3RvcG9uZTogJycsXG4gICAgICAgICAgICB3dG9wdHdvOiAnJyxcbiAgICAgICAgICAgIHd0b3B0aHJlZTogJycsXG4gICAgICAgICAgICB3dG9wZm91cjogJycsXG4gICAgICAgICAgICB3dG9wZml2ZTogJycsXG4gICAgICAgICAgICB3dG9wc2l4OiAnJyxcbiAgICAgICAgICAgIHd0b3BzZXZlbjogJycsXG4gICAgICAgICAgICB3dG9wZWlnaHQ6ICcnLFxuICAgICAgICAgICAgd3RvcG5pbmU6ICcnLFxuICAgICAgICAgICAgd3RvcHRlbjogJycgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nbXlCdXR0b24nIG9uQ2xpY2s9e3RoaXMuY2xlYXJDaGFydC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICBDbGVhciBDaGFydFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J215QnV0dG9uJyBvbkNsaWNrPXt0aGlzLnRvcFRlbi5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICBUb3AgMTAgU29uZyBMeXJpY3NcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdteUJ1dHRvbicgb25DbGljaz17dGhpcy50b3BBcnRpc3QuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgVG9wIEFyaXN0cyAoYnkgaGl0cylcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICBMZW5ndGg6IHt0aGlzLnN0YXRlLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS53dG9wb25lfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IHRoaXMuc3RhdGUudG9wb25lfX0+e3RoaXMuc3RhdGUudG9wb25lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS53dG9wdHdvfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IHRoaXMuc3RhdGUudG9wdHdvfX0+e3RoaXMuc3RhdGUudG9wdHdvfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS53dG9wdGhyZWV9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogdGhpcy5zdGF0ZS50b3B0aHJlZX19Pnt0aGlzLnN0YXRlLnRvcHRocmVlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS53dG9wZm91cn1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiB0aGlzLnN0YXRlLnRvcGZvdXJ9fT57dGhpcy5zdGF0ZS50b3Bmb3VyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS53dG9wZml2ZX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiB0aGlzLnN0YXRlLnRvcGZpdmV9fT57dGhpcy5zdGF0ZS50b3BmaXZlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS53dG9wc2l4fVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IHRoaXMuc3RhdGUudG9wc2l4fX0+e3RoaXMuc3RhdGUudG9wc2l4fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS53dG9wc2V2ZW59XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogdGhpcy5zdGF0ZS50b3BzZXZlbn19Pnt0aGlzLnN0YXRlLnRvcHNldmVufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS53dG9wZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogdGhpcy5zdGF0ZS50b3BlaWdodH19Pnt0aGlzLnN0YXRlLnRvcGVpZ2h0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS53dG9wbmluZX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiB0aGlzLnN0YXRlLnRvcG5pbmV9fT57dGhpcy5zdGF0ZS50b3BuaW5lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS53dG9wdGVufVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IHRoaXMuc3RhdGUudG9wdGVufX0+e3RoaXMuc3RhdGUudG9wdGVufTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=