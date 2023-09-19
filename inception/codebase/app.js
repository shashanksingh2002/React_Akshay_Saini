

const heading = React.createElement('div',{id:'heading'},
React.createElement('ol',{},
[React.createElement('li',{},'1st paragraph'),
React.createElement('li',{},'2nd Paragraph')]
));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    heading
);