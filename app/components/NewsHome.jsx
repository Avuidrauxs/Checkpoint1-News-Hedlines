import React from 'react';

export default NewsHome extends React.Component{
  constructor(props){
    super(props)

    this.state{
      newsSources: [
              {
     "id": "bbc-sport",
     "name": "BBC Sport",
     "description": "The home of BBC Sport online. Includes live sports coverage, breaking news, results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all the main world sports, plus major events such as the Olympic Games.",
     "url": "http://www.bbc.co.uk/sport",
     "category": "sport",
     "language": "en",
     "country": "gb",
     "urlsToLogos": {
       "small": "",
       "medium": "",
       "large": ""
     },
     "sortBysAvailable": [
       "top"
     ]
   },
   {
     "id": "espn",
     "name": "ESPN",
     "description": "ESPN has up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more.",
     "url": "http://espn.go.com",
     "category": "sport",
     "language": "en",
     "country": "us",
     "urlsToLogos": {
       "small": "",
       "medium": "",
       "large": ""
     },
     "sortBysAvailable": [
       "top"
     ]
   },
   {
     "id": "espn-cric-info",
     "name": "ESPN Cric Info",
     "description": "ESPN Cricinfo provides the most comprehensive cricket coverage available including live ball-by-ball commentary, news, unparalleled statistics, quality editorial comment and analysis.",
     "url": "http://www.espncricinfo.com/",
     "category": "sport",
     "language": "en",
     "country": "us",
     "urlsToLogos": {
       "small": "",
       "medium": "",
       "large": ""
     },
     "sortBysAvailable": [
       "top",
       "latest"
     ]
   }
        }
      ]
    }

  }
  render(){


  }
}
