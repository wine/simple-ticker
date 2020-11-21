// The so called trackers to add to the page, the container name should be unique for each tracker
// and the ticker should be formatted as 'MARKET:TICKER', a easy way to search for tickers
// is through https://www.tradingview.com/.
const trackers = [
    { 'container': 'btc-container', 'ticker': 'BITFINEX:BTCUSD' },
    { 'container': 'eth-container', 'ticker': 'BITFINEX:ETHUSD' },
    { 'container': 'xmr-container', 'ticker': 'BITFINEX:XMRUSD' },
    { 'container': 'xrp-container', 'ticker': 'BITFINEX:XRPUSD' },
    { 'container': 'ltc-container', 'ticker': 'BITFINEX:LTCUSD' },
    { 'container': 'eos-container', 'ticker': 'BITFINEX:EOSUSD' },
    { 'container': 'yfi-container', 'ticker': 'BITFINEX:YFIUSD' },
    { 'container': 'dot-container', 'ticker': 'BITFINEX:DOTUSD' },
]

// Aspect ratio that will be used to calculate the width of the widgets.
const widget_aspect_ratio = 16 / 9

// How many widgets there should be per row, used to calculate the width of the widgets.
const widgets_per_row = 4

// Widget theme for the TradingView widgets, either 'dark' or 'light'.
const widget_theme = 'dark'

// Interval in minutes, 'D' for one day, 'W' for one week.
const widget_interval = '60'

const widget_timezone = 'Etc/UTC'

// The widget width is automatically calculated from the display width, no need to worry about configuring this,
// the widget height is calculated from the width and the aspect ratio defined near the top of this file.
const page_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
const widget_width = (page_width / widgets_per_row) - 4
const widget_height = widget_width / widget_aspect_ratio

// Change background color of the body depending on the widget theme.
document.body.style.backgroundColor = widget_theme == 'dark' ? '#151924' : '#ffffff'

// Add the tracker widgets.
trackers.forEach(tracker => {
    const tracker_div = document.createElement('div')
    tracker_div.setAttribute('id', tracker.container)
    document.getElementById('parent-container').appendChild(tracker_div)

    new TradingView.widget({
        'width': widget_width,
        'height': widget_height,

        'theme': widget_theme,
        'interval': widget_interval,
        'timezone': widget_timezone,

        'container_id': tracker.container,
        'symbol': tracker.ticker,

        'style': '2',
        'locale': 'en',
        'toolbar_bg': '#f1f3f6',
        'enable_publishing': false,
        'hide_top_toolbar': true,
        'hide_legend': false,
        'save_image': false
    })
})