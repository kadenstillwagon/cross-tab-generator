import './App.css';
import {useState} from 'react';
import FileUploader from './components/FileUploader';
import TopBar from './components/TopBar';
import NewFileButton from './components/NewFileButton';
import DropDownMenu from './components/DropDownMenu';
import CrossTab from './components/CrossTab';

function App() {

  document.body.style = 'background: rgb(31, 31, 31)'

  const [rowsArray, setRowsArray] = useState([]);
  const [values, setValues] = useState([]);
  const [fileUploadVisible, setFileUploadVisible] = useState(true);

  const [dropDownOneSelection, setDropDownOneSelection] = useState('Select Question');
  const [dropDownTwoSelection, setDropDownTwoSelection] = useState('Select Question');


  const passFileDataToParent = (rowsArray, values) => {
    
    setRowsArray(rowsArray);
    setValues(values);
    console.log(rowsArray[0]);
    // console.log(values);

    setFileUploadVisible(false);
  }

  const handleNewFileClick = () => {
    setFileUploadVisible(true);
    setDropDownOneSelection('Select Question');
    setDropDownTwoSelection('Select Question');
  }

  const passDropDownOneSelectionToParent = (DropDownOneSelection) => {
    setDropDownOneSelection(DropDownOneSelection);
  }

  const passDropDownTwoSelectionToParent = (DropDownTwoSelection) => {
    setDropDownTwoSelection(DropDownTwoSelection);
  }

  

  if (fileUploadVisible) {
    return (
      <div className="App">
        <TopBar />
        <FileUploader passToParent={passFileDataToParent}/>
      </div>
    );
  } else {
    return (
        <div className="App">
          <TopBar handleNewFileClick={handleNewFileClick}/>
          <DropDownMenu 
            options={rowsArray[0]}
            passDropDownOneSelectionToParent={passDropDownOneSelectionToParent}
            passDropDownTwoSelectionToParent={passDropDownTwoSelectionToParent}
          />

          {(dropDownOneSelection != 'Select Question' && dropDownTwoSelection != 'Select Question')
             ? <CrossTab rowsArray={rowsArray} values={values} selectionOne={dropDownOneSelection} selectionTwo={dropDownTwoSelection}/> : <div />
          }
        </div>
      );
  }

  
}

export default App;


