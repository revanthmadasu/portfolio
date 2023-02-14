import React, { Component } from 'react';
import BlastLetter from 'components/blast-letter';
import Summary from 'components/summary';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';
import "./home-route.scss";
export class HomeRoute extends Component {
    constructor() {
        super();
        this.state = {
          tags: [],
          image: '',
          showSkills: false
        };
      }
      componentDidMount() {
      
        const blastString = [
          {
            string: "Hello,",
            class: "blast",
            // timeOut: 250,
            timeOut: 0
          },
          {
            string: "I'm ",
            name: "Revanth Madasu.",
            class: "blast",
            // timeOut: 500,
            timeOut: 0
          },
          {
            string: "I'm a Software Developer.",
            class: "blast",
            // timeOut:750
            timeOut: 0
          }
        ];
    
        const tags = [];
        blastString.forEach(item => {
          tags.push({
            tag:
              ( <div className="my-animation d-block w3-animate-left">
                  <span className="d-inline-block">
                    {
                      item.string.split('').map(char => {
                        return (<BlastLetter letter={char} className={item.class}></BlastLetter>)
                      })
                    }
                  </span>
                  {item.name && 
                    <span className="d-inline-block">
                    {
                      item.name.split('').map(char => {
                        return (<BlastLetter letter={char} className='name blast'></BlastLetter>)
                      })
                    }
                  </span>
                  }
              </div>
              ),
            timeOut: item.timeOut
          }
          )
        });
        const currTags = [];
        const recursiveFuntion = (index) => {
          if(index === tags.length) {
            setTimeout(() => this.showSkills(), 0)
            return;
          } else {
            setTimeout(() => {
              currTags.push(tags[index].tag);
              this.setState({
                tags: currTags
              });
              recursiveFuntion(index+1);
            }, tags[index].timeOut);
          }
        };
        recursiveFuntion(0);
        setTimeout(() => {
          this.showImage();
        // }, 2000);
      }, 0);
      }
    
      showImage() {
        this.state.image = true;
        this.setState(this.state);
      }
    
      showSkills() {
        this.state.showSkills = true;
        this.setState(this.state);
      }
    imageIntroContainerClass = classNames("image-intro-container", {
        "d-flex": isMobile,
        "py-3": isMobile
    });
    imageContainerClass = classNames({
        "image-container-mobile": isMobile,
        "image-container-desktop": !isMobile
    });
    introMsgContainerClass = classNames({
      "intro-msg-container-mobile": isMobile,
      "intro-msg-container-desktop": !isMobile
    });
    render() {    
        return (
            <div className="intro-section h-100 overflow-auto custom-scroll">
                <div className="row">
                <div className="col-xs-12 col-sm-12 col-lg-12 col-xl-6 col-md-12 w3-animate-left">
                  <div className={this.imageIntroContainerClass}>
                    <div className={this.imageContainerClass}>
                        {
                            this.state.image && 
                            <div className="profile-pic rounded-circle m-lg-5"></div>
                        }
                    </div>
                    <div className={this.introMsgContainerClass}>
                        <h1 className="my-3 m-lg-5 m-sm-3 my-sm-3">
                            {this.state.tags}
                        </h1>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-xl-6 col-lg-12 col-md-12">
                    <div className="about-section pt-lg-5 pb-lg-4 px-lg-3 dark-rounded-box">
                    {
                        this.state.showSkills && 
                        <React.Fragment>
                        <Summary></Summary>
                        </React.Fragment>
                    }
                    </div>
                </div>
                </div>
            </div>
        )   
    }
}