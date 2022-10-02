import React from "react";
import "./styles.css";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
function App() {
  return (
    <div className="App">
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
      <table id="table-to-xls" className="table">
        <tr className="row">
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
