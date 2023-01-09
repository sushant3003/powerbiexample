import { Component } from 'react';
import { fetchImages } from '../../utils/validate';
import { connect } from "react-redux";
import "./Main.css";
import Carousel from "../Carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PieChart } from 'react-minimal-pie-chart';

import {
    FacebookIcon,
    FacebookMessengerIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
    FacebookMessengerShareButton,
    FacebookShareCount,
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
import ProgressBarCustom from '../ProgressBar/ProgressBar';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            url: 'https://'
        }

    }

    componentDidMount() {
        fetchImages().then((images) => {
            this.setState({ images: images });
        });
    }

    onUrlChange=(e)=>{

        this.setState({url: e.target.value?.trim()});

    }

    render() {

        const header =
            <div className="header position-fixed w-100">
                <div className="title">Home</div>
            </div>;
        const shareUrl = this.state.url;
        const title = 'GitHub';
        return (
            <div>
                {header}
                <h2 className='username col-5'>{this.props.signInState?.userDetails?.email}</h2>
                <div className='row col-12  justify-content-end d-flex mt-5'>
                    {/* <button className='navigate col-2 mr-2' style={{ marginLeft: window.innerWidth * 0.2 }}>
                        <a href="/power">Power BI</a>
                    </button> */}
                    {/* <button className='navigate col-2 ml-2' style={{ marginLeft: window.innerWidth * 0.02 }} >
                        <a href="/home">Sign Out</a>
                    </button> */}
                </div>
                <div className='w-100 align-center d-flex justify-content-center'>
                    <div className='align-center w-75'>
                        <Carousel  
                        showArrows={true}
                        stopOnHover={true}
                        centerMode={true}/>
                    </div>
                </div>
                <div className='progressBarDiv'>
                    <ProgressBarCustom now={60} total={"5,00,000"} raised={200000}/>
                </div>
                <div className='w-100 align-center d-flex justify-content-center'>
                    <div className='chartDiv align-center mt-3'>
                        <PieChart
                            data={[
                                { title: 'One', value: 32, color: '#e90fb0' },
                                { title: 'Two', value: 8, color: '#15b8dd' },
                            ]}
                            animate
                            animationDuration={500}
                            animationEasing="ease-out"
                            lengthAngle={360}
                            paddingAngle={0}
                            startAngle={340}
                            viewBoxSize={[100, 100]}
                            labelPosition={65}
                            segmentsShift={1}
                            label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                            labelStyle={{ fontSize: '10px', fill: '#fff' , fontWeight: 'bold'}}
                            />
                    </div>
                </div>
               
                 <div className='ml-5 mb-5'>
                    <input value={this.state.url}
                     type='text' 
                     onChange={(e)=> this.onUrlChange(e)} 
                     className="inputURL"
                     placeholder='Enter URL'
                     >                        
                    </input>
                </div>

                <div className="Demo__some-network mb-5">
                    <FacebookShareButton
                        url={shareUrl}
                        quote={title}
                        className="Demo__some-network__share-button"
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                        <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
                            {count => count}
                        </FacebookShareCount>
                    <FacebookMessengerShareButton
                        url={shareUrl}
                        appId="521270401588372"
                        className="Demo__some-network__share-button"
                    >
                        <FacebookMessengerIcon size={32} round />
                    </FacebookMessengerShareButton>
                    <TwitterShareButton
                        url={shareUrl}
                        title={title}
                        className="Demo__some-network__share-button"
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <TelegramShareButton
                        url={shareUrl}
                        title={title}
                        className="Demo__some-network__share-button"
                    >
                        <TelegramIcon size={32} round />
                    </TelegramShareButton>
                    <WhatsappShareButton
                        url={shareUrl}
                        title={title}
                        separator=":: "
                        className="Demo__some-network__share-button"
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>

                    <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                </div>               
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    signInState: state.SignInReducer,
});

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);