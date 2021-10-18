import React, { Component } from "react";

const withDetails = (View, getItem, getImageUrl, records) => {
    return class extends Component {
      state = {
        item: null
      };
  
      componentDidMount() {
        this.updateItem();
      }
  
      componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId){
          this.updateItem();
        }
      }
  
      updateItem() {
        getItem(this.props.itemId)
          .then((item) => {
            this.setState({ 
              item
             });
          });
      }
  
      render(){
        const { item } = this.state;
  
        if (!item) {
          return <span>Select an item from a list</span>;
        }
  
        return (
          <View {...this.props} getImageUrl={getImageUrl} item={item}></View>
        );
      }
    }
  }
  
  export default withDetails;