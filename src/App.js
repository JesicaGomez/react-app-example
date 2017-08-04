import React, { Component } from 'react';
import { Container, Card, Icon, Image} from 'semantic-ui-react';


class App extends Component {
    render() {
      const style = {
         display: 'flex',
         justifyContent: 'space-around',
         flexWrap: 'wrap'
      }

      const cards = [
        {
          title: "Guillermo",
          date: new Date(),
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          friends: 300,
          image: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
        },

        {
          title: "Jesica",
          date: new Date(),
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          friends: 300,
          image: 'https://react.semantic-ui.com/assets/images/avatar/large/molly.png'
        },

        {
          title: "Juan",
          date: new Date(),
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          friends: 300,
          image: 'https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg'
        },

        {
          title: "Guillermo",
          date: new Date(),
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          friends: 300,
          image: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
        },

        {
          title: "Jesica",
          date: new Date(),
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          friends: 300,
          image: 'https://react.semantic-ui.com/assets/images/avatar/large/molly.png'
        },

        {
          title: "Juan",
          date: new Date(),
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          friends: 300,
          image: 'https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg'
        }
      ]

      return (
      <Container style={style} >
              {cards.map(item => (
                  <Card style={{margin: '0'}}>
                    <Image src={item.image} />
                    <Card.Content>
                      <Card.Header>
                        <div>{item.title}</div>
                      </Card.Header>
                      <Card.Meta>
                        <span className='date'>
                          <div>{item.date.toString()}</div>
                        </span>
                      </Card.Meta>
                      <Card.Description>
                        <div>{item.description}</div>          
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name='user' />
                        <div>{item.friends}</div> 
                      </a>
                    </Card.Content>
                  </Card>
               ))}
      </Container>
      );
    }
}

export default App;
