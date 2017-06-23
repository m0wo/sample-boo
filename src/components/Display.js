import React, { Component } from 'react';
import Nav from './Nav';
import { CloudinaryContext, Video } from 'cloudinary-react';
import axios from 'axios';

class Display extends Component {

  state = { videos: [] };

  getVideos() {
    axios.get('http://res.cloudinary.com/dnytkcx1g/video/list/sampleBoo.json')
          .then(res => {
            console.log(res.data.resources);
            this.setState({ videos: res.data.resources});
    });
  }

  componentDidMount() {
    this.getVideos();
  }

  render() {

    const { videos }  = this.state;

    return (
      <div>
        <Nav />
        <div className="col-sm-12 hero-image">
         <div className="hero-text">
           <h1 className="hero-title">SampleBoo</h1>
           <p className="hero-subtitle">Share Your Samples.</p>
         </div>
       </div>
        <h2 className="text-center">Latest Samples</h2>
        <hr/>

        <div className="col-sm-12">
          <CloudinaryContext cloudName="dnytkcx1g">
            { videos.map((data, index) => (
                <div className="col-sm-4" key={index}>
                  <div className="embed-responsive embed-responsive-4by3">
                    <Video publicId={data.public_id} width="300" height="300" poster={`http://res.cloudinary.com/dnytkcx1g/video/upload/h_300,w_500,fl_waveform/${data.public_id}.png`} controls></Video>
                  </div>
                  <div> Created at {data.created_at} </div>
                </div>
              ))
            }
          </CloudinaryContext>
        </div>
      </div>
    );
  }
}

export default Display;
