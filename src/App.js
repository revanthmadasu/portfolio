import './App.scss';
import  React, {useState} from 'react';
import {BlastLetter} from './components/blast-letter/blast-letter';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: [],
      image: ''
    };
  }
  componentDidMount() {
    const blastString = [
      {
        string: "Hello,",
        class: "blast",
        timeOut: 250,
      },
      {
        string: "I'm ",
        name: "Revanth Madasu",
        class: "blast",
        timeOut: 500,
      },
      {
        string: "I'm a Software Developer.",
        class: "blast",
        timeOut:750
      }
    ];

    const tags = [];
    blastString.forEach(item => {
      tags.push({
        tag:
          ( <div className="my-animation d-block">
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
    }, 2000);
  }

  showImage() {
    this.state.image = true;
    this.setState(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <div className="intro-section p-sm-1 m-sm-1 p-md-2 m-md-2 p-lg-4 m-lg-4 p-xl-5 m-xl-5 h-100">
          <div className="p-sm-1 m-sm-1 p-md-2 m-md-2 p-lg-4 m-lg-4 p-xl-5 m-xl-5 d-flex flex-column h-100">
            {
              this.state.image && 
              <div className="profile-pic rounded-circle"></div>
            }
              <h1>
                {this.state.tags}
              </h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
