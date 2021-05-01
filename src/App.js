import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App container" >
      <div>
        <ProfilePhoto/>
        <br/>
        <br/>
        </div>
      <div><FullName/></div>
<br/>
<br/>
<br/>
<br/>
     <div><Address/></div>
     <br/>
     <Button  className="btn"variant="warning">Message</Button>  <Button className="btn"variant="warning">Following</Button>
    </div>
  );
}

export default App;
