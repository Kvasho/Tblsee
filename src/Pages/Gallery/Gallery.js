import React, {Component} from 'react';

// PACKAGES
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Lightbox from 'react-image-lightbox';

// COMPONENTS
import PageTitle from '../../Components/PageTitle';
import HeaderBlack from "../../Components/HeaderBlack";

// IMAGES
import Image from "../../Assets/Images/landing-gallery-2.jpg";

// STYLES
import 'react-image-lightbox/style.css';
import "./gallery.scss";
import 'react-medium-image-zoom/dist/styles.css';


export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          offset: 0,
          data: [],
          perPage: 1,
          currentPage: 0
      };
      this.handlePageClick = this
          .handlePageClick
          .bind(this);
  }
  receivedData() {
      axios
          .get(`https://core.tbilisee.ge/api/gallery?group=room&page=1`)
          .then(res => {
              const data = res.data;
              const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
              const postData = slice.map(image => 
                  <>
                    <img src={image} alt=""/>
                  </>                  
)
              this.setState({
                  pageCount: Math.ceil(3),                
                  postData
              })
          });
  }
  handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
          currentPage: selectedPage,
          offset: offset
      }, () => {
          this.receivedData()
      });

  };

  componentDidMount() {
      this.receivedData()
  }
  render() {
    const { photoIndex, isOpen, data } = this.state;
      return (
        <>
        <HeaderBlack/>
          <div className="container-own gallery">
              {isOpen && (
          <Lightbox
            mainSrc={data[photoIndex]}
            nextSrc={data[(photoIndex + 1) % data.length]}
            prevSrc={data[(photoIndex + data.length - 1) % data.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + data.length - 1) % data.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % data.length,
              })
            }
          />
        )}
              <PageTitle title="gallery" />
              <div className="gallery-pagination">
                  <div style={{ width: "100%" }} onClick={() => this.setState({isOpen: true})}>
                    {this.state.postData}
                  </div>
              </div>
              <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
          </div>
          </>
      )
  }
}
