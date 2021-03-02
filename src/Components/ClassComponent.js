// BUILDING A CLASS COMPONENT (Steps 1-4)

// Step 1: import React, {Component} from 'react';
import React, {Component} from 'react';

//Step 2: Build your component with a javascript class and have it extend the component class from react
class ClassComponent extends Component {
    //Step 3: Use render to display some JSX *required
    render(){
        return (
            <section>Class Component</section>
        )
    }

}

//Step 4: Export your component to make it available to your application
export default ClassComponent;