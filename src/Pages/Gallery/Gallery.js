import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import './gallery.scss';
import '../../Styles/common.scss'
import Masonry from 'react-masonry-css'
import PageTitle from '../../Components/PageTitle';
import HeaderBlack from '../../Components/HeaderBlack'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 9,
            currentPage: 0,
            photoIndex: 0,
            isOpen: true
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get(`https://core.tbilisee.ge/api/gallery?group=all`)
            .then(res => {   
                let data = res.data.image
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const Tbilisee = 'https://core.tbilisee.ge/';
                const postData = slice.map((pd,index) => <React.Fragment>
 
                    <img className="full" src={Tbilisee + pd} alt="" key={index} onClick={() => this.setState({ isOpen: true })}/>
                </React.Fragment>)
                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
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
        const Tbilisee = 'https://core.tbilisee.ge/';
        return (
            <div>
                <HeaderBlack/>
                <Lightbox isOpen={this.state.isOpen}/>
                <PageTitle title="gallery" style={{marginBottom: "10rem"}}/>
                <div className="gallery container-own">
               {this.state.postData}
                </div>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={""}
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
        )
    }
}