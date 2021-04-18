// Import npm packages
import React from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import moment from 'moment';
import './App.css';

const beginningOfTime = "2021-03-22 18:38:40";

class App extends React.Component {
  state = {
    allOrders: [],
    loadedData: [],
    idx : 0,
    hasMore: true
  };

  componentDidMount = () => {
    this.getItems();
  };

  getItems = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({ allOrders: data });
        this.setState({loadedData: data.slice(this.state.idx,5)});
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  fetchMoreData = () => {
    /* 
     *  
     *  This function manages the hasMore property of the infinite-scroll component.
     *  It also updates the loadedData property in the current 
     *  state with the next 5 entries to be displayed.
     * 
     * */ 
    setTimeout(() => {
      if (this.state.idx >= this.state.allOrders.length - 5) {
        this.setState({hasMore : false})
        console.log("All", this.state.allOrders.length, "orders have been displayed.");
      } else {
        this.setState({idx : this.state.idx + 5});
        console.log(String(this.state.idx), "orders have been displayed.");
        const newData = this.state.allOrders.slice(this.state.idx, this.state.idx + 5);
        this.setState({
          loadedData: this.state.loadedData.concat(newData)
        });
      }
    }, 1500);
  };

  // Render JSX
  render() {
    return(
      <div>
        <div className="app">
          <h1 className="title">Top Trending Items</h1>
          <div>

            <InfiniteScroll 
              dataLength={this.state.loadedData.length} 
              next={this.fetchMoreData} 
              scrollThreshold={"65%"}
              hasMore={this.state.hasMore} 
              loader={<h4>Loading...</h4>}
              endMessage={<h4>All orders have been displayed.</h4>}
            >
              {this.state.loadedData.map((post, index) => (
                <div key={index} className="order__display">
                  <h3 >{post.ItemName} {"$"} {post.ProductPrice}</h3>
                  <h4 className="ItemName">{"From: "} {post.Restaurant}</h4>
                  <p className='tagged' >{String(post.Quantity + " purchased recently")}</p>
                  <p className='tagged'>{String("ordered " + moment(post.OrderDate).from(beginningOfTime))}</p>
                </div>
              ))}
            </InfiniteScroll>

          </div>
        </div>
      </div>
    );
  }
}

export default App;