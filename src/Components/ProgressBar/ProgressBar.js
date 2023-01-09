import ProgressBar from 'react-bootstrap/ProgressBar';
import "./ProgressBar.css";

function ProgressBarCustom(props) {
  return  <div className='progressBarCustom'>
      <div className='d-flex w-100'>
        <ProgressBar now={props.now} variant="warning" className='w-75' label={`75%`}/>
        <label className='totalRaised w-25'>₹{props.total}</label>
      </div>
     
  </div>
}

export default ProgressBarCustom;