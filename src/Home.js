import React from 'react';
import Back from './C.jpg';
import {Image} from 'react-bootstrap'


class Home extends React.Component {
    render(){
      return (
        <div id="home">
           <Image src={Back} width="100%" height="550"/>
        </div>
      );
    }
}

export default Home