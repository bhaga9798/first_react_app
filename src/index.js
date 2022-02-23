import ReactDOM from 'react-dom'
import App from './App.js'
import './index.css'
const JSONObj = [
  [
    { editable: false, label: "Row 1 Column 1" },
    { editable: true, label: "Row 1 Column 2" },
  ],
  [
    { editable: false, label: "Row 2 Column 1", hint: "Some Hint" },
    { editable: false, label: "Row 2 Column 2" },
  ],
  [
    {
      editable: false,
      label: "Row 3 Column 1",
      hint: "Some Hint 2",
      icon: "Alert",
    },
    { editable: false, label: "Row 3 Column 2" },
  ],
];
ReactDOM.render(
  <App details={JSONObj}/>, 
  document.getElementById('root')
)
