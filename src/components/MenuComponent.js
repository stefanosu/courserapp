import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
       //this.state stores properties related to this component that we can make use of
        this.state = {
          selectedDish:null
        }
    }


    onDishSelect(dish){
      this.setState({ selectedDish: dish});
    }

    renderDish(dish){
      if(dish != null){
          return(
          <Card>
            <CardImg width="100%"  src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
          );
      }
      else {
        return(
            <div></div>
          );
      }
    }

    render() {
       
        const menu = this.props.dishes.map((dish) => {
            return (
 // Whenever you construct a list of items in React every item requires a key attribute to be specified for it.
 // Because the key helps when React is rendering these items on the screen the key helps react to recongize each one of these elements so the key will enable it to identify each of these elements uniquely when it sees that it needs to update the UI in case more items are added to the list 
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                      <CardImg width="100%"  src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
            <div className="row">
              {this.renderDish(this.state.selectedDish)}
             </div> 
          </div>
        );
    }
}

export default Menu;





