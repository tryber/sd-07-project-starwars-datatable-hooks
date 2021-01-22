import React, { Component } from 'react';
import './Loading.css';

export class Loading extends Component {
  render() {
    return (
      <div className="main">
        <div className="bb8">
          <div className="bb8-body">
            <div className="dot dot-1">
              <div className="line line-1" />
              <div className="line line-2" />
              <div className="line line-3" />
            </div>
            <div className="dot dot-2" />
            <div className="circle circle-1" />
            <div className="circle circle-2" />
            <div className="circle circle-3" />
          </div>
          <div className="body-shadow-crop">
            <div className="body-shadow" />
          </div>
          <div className="bb8-head">
            <div className="head-bottom">
              <div className="head-side-1" />
              <div className="head-side-2" />
              <div className="head-bottom-base" />
            </div>
            <div className="head-top-crop">
              <div className="head-top" />
            </div>
            <div className="lens" />
            <div className="freckle" />
          </div>
          <div className="speedlines">
            <div className="one tail" />
            <div className="two tail" />
            <div className="three" />
            <div className="four" />
            <div className="five tail" />
          </div>
          <div className="sparkles">
            <div className="one small pulse-1" />
            <div className="two blue small pulse-2" />
            <div className="three blue med pulse-3" />
            <div className="four orange pulse-2" />
            <div className="five orange pulse-1" />
            <div className="six blue small pulse" />
            <div className="seven blue small pulse" />
            <div className="eight small pulse-3" />
            <div className="nine pulse" />
            <div className="ten orange small-1 pulse" />
            <div className="eleven small pulse" />
            <div className="twelve small pulse-2" />
            <div className="thirteen orange small pulse" />
            <div className="fourteen orange med pulse-3" />
            <div className="fifteen small pulse-1" />
            <div className="sixteen small pulse" />
          </div>
          <div className="ground">
            <div className="one">
              <div className="bump move-1" />
            </div>
            <div className="two" />
            <div className="three">
              <div className="bump move-2" />
            </div>
            <div className="four">
              <div className="bump" />
            </div>
            <div className="five" />
            <div className="six">
              <div className="bump move-2" />
            </div>
            <div className="seven">
              <div className="bump" />
            </div>
            <div className="eight">
              <div className="bump move-1" />
            </div>
          </div>
        </div>
        <div className="credit">
          Original Illustration  by
          <a href="https://dribbble.com/shots/2408834-BB-8">Justas Galaburda</a>
          &nbsp;&nbsp;&middot;&nbsp;&nbsp; Animation by
          <a href="https://www.youtube.com/watch?v=QZdj42liTtU">DevTips</a>
        </div>
      </div>
    );
  }
}

export default Loading;
