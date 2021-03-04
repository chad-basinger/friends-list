// BUILDING A CLASS COMPONENT (Steps 1-4)

// Step 1: import React, {Component} from 'react';
import React, {Component} from 'react';

//Step 2: Build your component with a javascript class and have it extend the component class from react
class ClassComponent extends Component {
    constructor(){
        super();
        this.state = {
            pictureInput: '',
            nameInput: '',
            friends: []
        }
    }

    handlePictureInput(event){
        //setState is used in React to update values
        this.setState({pictureInput: event.target.value})
    }

    handleNameInput(event){
        this.setState({nameInput: event.target.value})
    }

    addFriend(){
        //react doesn't allow push directly to the original value/array
        let newFriends = this.state.friends.slice()
        newFriends.push({picture: this.state.pictureInput, name: this.state.nameInput })

        //updating the friends array AND clearing the picture and name input fields
        this.setState({friends: newFriends, pictureInput: '', nameInput: '' })
    }

    //Step 3: Use render to display some JSX *required
    render(){
        console.log(this.state.friends)
        return (
            <section>
                <span>Picture:</span>
                <input value={this.state.pictureInput} onChange={event => this.handlePictureInput(event)}/>
                <span>Name:</span>
                <input value={this.state.nameInput} onChange={event => this.handleNameInput(event)}/>
                <button onClick={() => this.addFriend()}>Add Friend</button>
                { this.state.friends.map((element, index) => (
                    <div key={index}>
                        <img src={element.picture} alt={element.name}/>
                        <p>{element.name}</p>
                    </div>
                )) }
            </section>
        )
    }

}

//Step 4: Export your component to make it available to your application
export default ClassComponent;


//Element Structure
//Span, Input, Span, Input, Button

//Track user input for a picture url and a name (through events)

//When user clicks the button, it adds that friend to a friends list
// and displays the friends list on the screen

//Data(belongs in this.state)
//pictureInput - empty string
// nameInput - empty string
// friends - array


//friend - object(contain a picture and a name property)