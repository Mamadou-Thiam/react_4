import './App.css';
import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Mamadou_THIAM",
        bio: "web dev à gomycode",
        imagesrc: "https://i.pinimg.com/564x/e1/8e/e9/e18ee90472197862dd73cac1a34aac3a.jpg",
        profession: "etudiant"
      },
      show: false,
    };
     }
    toogle = () => {
      this.setState((prevent) => ({
        show: !prevent.show   
      }))
    }
    render() {
      const { fullName, bio, imagesrc, profession } = this.state.person
      return (
        <>
          <div>
            {
              this.state.show && (
                <Card style={{ width: '18rem' }} className='style'>
                  <Card.Img variant="top" src={imagesrc} className='cardStyle' />
                  <Card.Body>
                    <Card.Title>{fullName}</Card.Title>
                    <Card.Text>
                      <p>{bio}</p>
                      <p> {profession}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              )
            }
          </div>
          <div>
          <Button  className='butt' onClick={this.toogle}></Button>
          {
            this.state.show ? 'hidden' : 'show'
          }

        </div>
        </>
      )
    }
 }


export default App;