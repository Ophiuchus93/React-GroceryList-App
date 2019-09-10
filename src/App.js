import React from 'react';
import List from "./List";
import GroceryForm from "./GroceryForm";
import './App.css';

class App extends React.Component {
  state = {
    groceries: [
      { id: 1, name: "Milk", complete: false, },
      { id: 2, name: "Apples", complete: false, },
      { id: 3, name: "Ice Cream", complete: false, },
    ],
  };

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

   addItem = (name) => {
     const {groceries} = this.state;
     const grocery = { name, id: this.getUniqId(), complete: false}
     this.setState({ groceries: [grocery, ...groceries]})
   }

   
 
   handleClick = (id) => {
     const { groceries } = this.state;
     this.setState({
       groceries: groceries.map( grocery => {
         if (grocery.id === id) {
           return {
             ...grocery,
             complete: !grocery.complete
            }
          }
          return grocery
        })
      })
    }

    render() {
      return (                             
        <div>                             
        <GroceryForm addItem={this.addItem} />
        <List name="Grocery List" items={this.state.groceries} groceryClick={this.handleClick} />                                                          
      </div>                             
    );
  }
}                             
                // render = () => {
  //   const { groceries, } = this.state
  //   return < List name="Grocery List" items={groceries} /> 
  // }
//   render (){
//     return (
//       <div>
//         <ul>
//         {this.renderGroceries()}
//         </ul>
//       </div>
//     );
//   };
// };

export default App;
