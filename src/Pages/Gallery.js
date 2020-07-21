import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import PageTitle from '../Components/PageTitle';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import "../Styles/gallery.scss";
import Image from "../Assets/Images/landing-gallery-2.jpg";
import 'react-medium-image-zoom/dist/styles.css';
import HeaderBlack from "../Components/HeaderBlack";

const images = [
    {Image},
    {Image},
    {Image},
    {Image}
]

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          offset: 0,
          data: [],
          perPage: 9,
          currentPage: 0
      };
      this.handlePageClick = this
          .handlePageClick
          .bind(this);
  }
  receivedData() {
      axios
          .get(`https://jsonplaceholder.typicode.com/photos`)
          .then(res => {
              const data = res.data;
              const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
              const postData = slice.map(pd => 
                  <>
                    <img src={pd.thumbnailUrl} alt=""/>
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
      console.log(this.state.data);
    const { photoIndex, isOpen, data } = this.state;
      return (
        <>
        <HeaderBlack/>
          <div className="container-own gallery">
              {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
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
