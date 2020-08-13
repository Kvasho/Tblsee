import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import './gallery.scss';
import '../../Styles/common.scss'
import PageTitle from '../../Components/PageTitle';
import HeaderBlack from '../../Components/HeaderBlack'
import 'react-image-lightbox/style.css';
import FsLightbox from 'fslightbox-react';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayRooms: [],
            arrayRoomsFirst: [],
            offset: 0,
            data: [],
            perPage: 9,
            currentPage: 0,
            photoIndex: 0,
            toggler: false
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get(`https://core.tbilisee.ge/api/gallery?group=all`)
            .then(res => {   
                this.setState({arrayRoomsFirst: res.data.image})
                let arrayRooms = [];
                this.setState({
                    arrayRooms: arrayRooms
                })
                for(let item of this.state.arrayRoomsFirst){
                    let text = 'https://core.tbilisee.ge/'+item;
                    arrayRooms.push(text)
                }
                let data = res.data.image
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const Tbilisee = 'https://core.tbilisee.ge/';
                const postData = slice.map((pd,index) => <React.Fragment>                     
                            <img className="gallery-img" src={Tbilisee + pd} alt="" key={index} onClick={this.toggler}/>                                              
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
    toggler = () => {
        const currentState = this.state.toggler;
            this.setState({ toggler: !currentState });
    }

    componentDidMount() {
        this.receivedData()
    }
    render() {
        const Tbilisee = 'https://core.tbilisee.ge/';
        return (
            <div>
                <HeaderBlack/>
                
                <FsLightbox
                    toggler={this.state.toggler}
                    sources={[
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-03T11:59:22.466Zgallery-1.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-03T11:59:35.165Zgallery-2.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-03T11:59:49.375Zgallery-3.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-03T12:00:05.975Zgallery-1.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-03T12:00:16.297Zgallery-3.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-03T12:00:24.008Zgallery-2.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-03T12:01:14.315Zgallery-2.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-03T12:01:46.302Zgallery-page-2.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-03T12:01:57.371Zgallery-page-3.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-03T12:02:17.190Zgallery-1.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-03T12:02:44.448Zgallery-page-2.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-03T12:02:57.481Zgallery-3.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-03T12:03:07.144Zgallery-1.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-03T12:03:18.870Zgallery-page-3.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-03T12:03:31.662Zgallery-3.jpg",
                    ]}
/>
                {/* <Lightbox isOpen={this.state.isOpen}/> */}
                <PageTitle title="gallery" style={{marginBottom: "10rem"}}/>
                <div className="gallery container-own" onClick={this.toggler}>
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