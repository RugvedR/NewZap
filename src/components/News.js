import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../News.css';

export class News extends Component {

  articles = [
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Sarfaraz Khan: The 'wandering cricketer' on the road to stardom",
      "description": "Sarfaraz Khan's heavy scoring in domestic cricket has him knocking on the doors of Indian cricket.",
      "url": "https://www.bbc.co.uk/news/world-asia-india-61977063",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4024/production/_125702461_gettyimages-1236953409.jpg",
      "publishedAt": "2022-07-02T23:50:32Z",
      "content": "By Saurabh SomaniSports writer\r\nBefore India's squad for the 2014 Under-19 cricket World Cup left Bangalore, Naushad Khan had come down to the city to meet his son. \r\nSarfaraz Khan had found a spot a… [+5088 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "https://www.facebook.com/bbcnews",
      "title": "India: Police rumble fake 'IPL' cricket league",
      "description": "Police say a gang set up a fake version of the Indian Premier League and fooled Russian gamblers.",
      "url": "https://www.bbc.co.uk/news/world-asia-india-62123966",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12CA5/production/_125856967_p0cl4yjb.jpg",
      "publishedAt": "2022-07-11T12:25:09Z",
      "content": "Media caption, IPL: India police arrest organisers of fake cricket match\r\nPolice in India have arrested a group of conmen who set up a fake version of cricket's Indian Premier League (IPL) and fooled… [+1340 chars]"
    },
    {
      "source": { "id": null, "name": "New York Times" },
      "author": "David Waldstein and Yuvraj Khanna",
      "title": "Staten Island Cricket Club Celebrates Its 150th Anniversary",
      "description": "The club, which has been in continuous operation since before the invention of airplanes and the game of basketball, recently celebrated its 150th anniversary.",
      "url": "https://www.nytimes.com/2022/07/21/sports/staten-island-cricket-club.html",
      "urlToImage": "https://static01.nyt.com/images/2022/07/21/sports/21cricket-StatenIsland-slide-FLS7/21cricket-StatenIsland-slide-FLS7-facebookJumbo.jpg",
      "publishedAt": "2022-07-21T09:00:30Z",
      "content": "The moment that Nancy Johnson saw the gentlemen in white throwing and batting on the thin, sandy pitch carved into Walker Park on Saturday, she flashed back to the 1950s. As a young girl, she had gon… [+788 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "Commonwealth Games: Australia Meg Lanning targets gold medal",
      "description": "Meg Lanning wants to add a Commonwealth Games cricket gold medal to help Australia complete a \"unique\" quadruple.",
      "url": "https://www.bbc.co.uk/sport/cricket/62023008",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/16CF9/production/_125733439_gettyimages-1389613313.jpg",
      "publishedAt": "2022-07-13T08:33:22Z",
      "content": "Australia captain Meg Lanning lifted the women's World Cup in April\r\nMeg Lanning says Australia's players will relish the chance to complete a 'grand slam' of tournament victories at this month's Com… [+2925 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "England v South Africa: Cricket dealt serious warnings during Chester-le-Street match",
      "description": "Cricket is dealt two serious warnings about its future during Tuesday's sweltering one-day international between England and South Africa.",
      "url": "https://www.bbc.co.uk/sport/cricket/62224133",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/72D5/production/_125979392_gettyimages-1409702714.jpg",
      "publishedAt": "2022-07-19T22:03:41Z",
      "content": "Ben Stokes' reluctant goodbye to one-day international cricket should have seen his every move applauded by his home crowd.\r\nBut when the England all-rounder wearily walked off at the change of innin… [+3898 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "England v India: Jonny Bairstow touching new heights in Ben Stokes era",
      "description": "Jonny Bairstow's stellar form is a product of feeling valued, supported and important in the England team, says chief cricket writer Stephan Shemilt.",
      "url": "https://www.bbc.co.uk/sport/cricket/62030245",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/15832/production/_125741188_gettyimages-1406518240.jpg",
      "publishedAt": "2022-07-03T19:40:11Z",
      "content": "From scrapping to saving his career, to soaring into the form of his - or anyone else's - life.\r\nDuring England's awful Ashes campaign, there was a very real possibility that Jonny Bairstow's Test ca… [+5470 chars]"
    },
    {
      "source": { "id": null, "name": "New York Times" },
      "author": "Jonathan Wolfe and Remy Tumin",
      "title": "Your Thursday Evening Briefing",
      "description": "Here’s what you need to know at the end of the day.",
      "url": "https://www.nytimes.com/2022/07/21/briefing/biden-covid-jan-6-committee-hearing.html",
      "urlToImage": "https://static01.nyt.com/images/2022/07/21/multimedia/21evening-briefing-nl-J61-promo/21evening-briefing-nl-J61-facebookJumbo.jpg",
      "publishedAt": "2022-07-21T21:52:00Z",
      "content": "9. In 1872, a group of British financiers living in New York gathered on Staten Island to play a game of cricket. The club has not stopped since.\r\nFor 150 years, the Staten Island Cricket Club has be… [+488 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Ukraine needs ICC membership for game to survive - Reuters.com",
      "description": "The chief executive of Ukraine's cricket board says it \"ticks all the boxes\" to become an associate member of the International Cricket Council (ICC) and that the game would not survive if it was denied entry.",
      "url": "https://www.reuters.com/lifestyle/sports/ukraine-needs-icc-membership-game-survive-2022-07-13/",
      "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=102",
      "publishedAt": "2022-07-13T07:10:00Z",
      "content": "July 13 (Reuters) - The chief executive of Ukraine's cricket board says it \"ticks all the boxes\" to become an associate member of the International Cricket Council (ICC) and that the game would not s… [+2353 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Pakistan wants ICC to regulate growth of T20 leagues - Reuters.com",
      "description": "The Pakistan Cricket Board (PCB) said on Saturday that it has asked the International Cricket Council (ICC) to devise a way to regulate the growth of lucrative Twenty20 leagues with rising concerns about its impact on the sport's calendar.",
      "url": "https://www.reuters.com/lifestyle/sports/pakistan-wants-icc-regulate-growth-t20-leagues-2022-07-16/",
      "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=102",
      "publishedAt": "2022-07-16T08:45:00Z",
      "content": "July 16 (Reuters) - The Pakistan Cricket Board (PCB) said on Saturday that it has asked the International Cricket Council (ICC) to devise a way to regulate the growth of lucrative Twenty20 leagues wi… [+2157 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "England captain Morgan retires from international cricket - Reuters.com",
      "description": "England's Eoin Morgan has retired from international cricket with immediate effect, the World Cup-winning white-ball captain said on Tuesday.",
      "url": "https://www.reuters.com/lifestyle/sports/england-captain-morgan-retires-international-cricket-2022-06-28/",
      "urlToImage": "https://www.reuters.com/resizer/wYsNLeXRPEN3jxKH3SQnmUaNEk8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FR5B45UDJBKCZGLHDPBBR66FTU.jpg",
      "publishedAt": "2022-06-28T13:29:00Z",
      "content": "June 28 (Reuters) - England's Eoin Morgan has retired from international cricket with immediate effect, the World Cup-winning white-ball captain said on Tuesday.\r\nMorgan, who led England to 50-over W… [+1703 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "England captain Morgan to retire from international cricket-reports - Reuters.com",
      "description": "England's World Cup-winning white-ball captain Eoin Morgan is set to announce his retirement from international cricket on Tuesday, ending a career in which he played more than 300 times across 50-over and Twenty20 formats, British media reported.",
      "url": "https://www.reuters.com/lifestyle/sports/england-captain-morgan-retire-international-cricket-reports-2022-06-27/",
      "urlToImage": "https://www.reuters.com/resizer/bbBg950DyiwDMW9dbAwYSG9grXg=/1178x616/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/37M22E3UXZJO5DTJGPADAEPYZI.jpg",
      "publishedAt": "2022-06-27T11:48:00Z",
      "content": "June 27 (Reuters) - England's World Cup-winning white-ball captain Eoin Morgan is set to announce his retirement from international cricket on Tuesday, ending a career in which he played more than 30… [+1702 chars]"
    },
    {
      "source": { "id": null, "name": "Cricketaddictor.com" },
      "author": "More by Vicky Singh",
      "title": "IND vs ENG Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- India Tour of England, 2nd T20I - Cricket Addictor",
      "description": "<ol><li>IND vs ENG Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- India Tour of England, 2nd T20I  Cricket Addictor\r\n</li><li>Throwback Thursday provides a thrilling peek at Hardik 2.0  ESPNcricinfo\r\n</li><li>…",
      "url": "https://cricketaddictor.com/fantasy-cricket/ind-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-india-tour-of-england-2nd-t20i/",
      "urlToImage": "https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/07/Rohit-Sharma-India-T20I-Team.png",
      "publishedAt": "2022-07-09T03:50:05Z",
      "content": "IND vs ENG Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of the match between India and England. They will play against each other for the second tim… [+4600 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "Ben Stokes: England all-rounder says his ODI retirement should be a wake-up call for authorities",
      "description": "England all-rounder Ben Stokes says his retirement from one-day internationals should be a wake-up call for the authorities about the intense schedule.",
      "url": "https://www.bbc.co.uk/sport/cricket/62224125",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/3DC9/production/_125971851_gettyimages-1409685161.jpg",
      "publishedAt": "2022-07-19T12:41:42Z",
      "content": "England all-rounder Ben Stokes says his retirement from one-day internationals should be a wake-up call for the authorities about the intense schedule.\r\nThe 31-year-old said on Monday that Tuesday's … [+2046 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "PA Media",
      "title": "‘The right time’: Eoin Morgan confirms international cricket retirement",
      "description": "<ul><li>World Cup-winning captain revolutionised white-ball sides</li><li>Jos Buttler expected to step up from position of deputy</li></ul>England’s World Cup-winning captain Eoin Morgan insisted now was “the right time” to step down as he announced his retir…",
      "url": "https://amp.theguardian.com/sport/2022/jun/28/the-right-time-eoin-morgan-confirms-international-cricket-retirement",
      "urlToImage": "https://i.guim.co.uk/img/media/aa227c79319df825e4ca297ad0bf4145469ca63a/44_38_4170_2502/master/4170.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=58391e9253ab3dc6acbbf87c66bbb709",
      "publishedAt": "2022-06-28T13:20:58Z",
      "content": "Englands World Cup-winning captain Eoin Morgan insisted now was the right time to step down as he announced his retirement from international cricket.\r\nMorgan has revolutionised Englands limited-over… [+3779 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Tanya Aldred",
      "title": "England v India: first T20 cricket international – live!",
      "description": "<ul><li>Updates from Southampton, starting from 6pm BST</li><li>And you can contact Tanya by email or on Twitter</li></ul>Hello! So here we are, from Baz-ball to, er, Matt-batt in 48 hours.Southampton is the venue for this, the first of three T20s in four day…",
      "url": "https://www.theguardian.com/sport/live/2022/jul/07/england-v-india-first-t20-cricket-international-live",
      "urlToImage": "https://i.guim.co.uk/img/media/8bc2f38ba2cca81799ff7460b7f5891ad79e4cd7/0_0_4125_2475/master/4125.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=68d003ef1e6b387300feb30b7a07d11b",
      "publishedAt": "2022-07-07T16:30:45Z",
      "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\nAnyone want to hazard a guess at the amount of boundaries were going to see today?\r\nAnd if youre sick to death of boundaries, Steve … [+2025 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Tanya Aldred at Southport",
      "title": "Lancashire v Somerset, Yorkshire v Surrey: county cricket – live!",
      "description": "<ul><li>Updates from day one of the County Championship action</li><li>Send your thoughts by email, on Twitter or comment BTL</li></ul>DIVISION ONEChelmsford: Essex v Gloucestershire Continue reading...",
      "url": "https://www.theguardian.com/sport/live/2022/jul/11/lancashire-v-somerset-yorkshire-v-surrey-county-cricket-live",
      "urlToImage": "https://i.guim.co.uk/img/media/08b2cb12fdabb48105c268542346bf1b719a206e/0_387_4447_2669/master/4447.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=94720fd5179cf5d60b54f01e54930568",
      "publishedAt": "2022-07-11T09:57:35Z",
      "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\nNews from Lords, where Middlesex have signed Indian quick Umesh Yadav for the rest of the season. He has played 134 times for India,… [+1276 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Tanya Aldred",
      "title": "England v India: second T20 cricket international – live!",
      "description": "<ul><li>Live updates from Edgbaston, starts 2pm BSTGet in touch! You can email Tanya via email or Twitter</li></ul>Hello! We’re back already - match two in a white-ball July rollercoaster, this the second T20 between the two top sides in the world.The players…",
      "url": "https://www.theguardian.com/sport/live/2022/jul/09/england-v-india-second-t20-cricket-international-live",
      "urlToImage": "https://i.guim.co.uk/img/media/fc7b947f5ed09306162b0c3fb5aa4d1bcd0df255/0_127_3050_1830/master/3050.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=cc6c3be7d6af62edb9b790ce0045dbc4",
      "publishedAt": "2022-07-09T12:48:25Z",
      "content": "England win the toss and will bowl!\r\nTEAMS\r\nEngland: Jason Roy, Jos Buttler, Dawid Malan, Liam Livingstone, Harry Brook Moeen Ali, Sam Curran, David Willey, Chris Jordan, Richard Gleeson, Matt Parkin… [+1005 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Tanya Aldred",
      "title": "County cricket: Lancashire v Somerset, Glamorgan v Nottinghamshire – live!",
      "description": "<ul><li>The Spin: sign up to receive our free weekly cricket email</li><li>And you can email Tanya, tweet @tjaldred or post BTL</li></ul>DIVISION ONEChelmsford: Essex 310 and 79-1 BEAT Gloucestershire 136 and 252 BY NINE WICKETS. Continue reading...",
      "url": "https://www.theguardian.com/sport/live/2022/jul/14/county-cricket-lancashire-v-somerset-glamorgan-v-nottinghamshire-live",
      "urlToImage": "https://i.guim.co.uk/img/media/196480033010fa7491a396e274e8860f3402d877/0_313_4691_2814/master/4691.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=9a6a4b0b5a33ee75fbf062536361fc9c",
      "publishedAt": "2022-07-14T08:48:59Z",
      "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\nI feel I should pay proper homage to Keaton Jennings whose triple century fell slightly under the radar yesterday evening.\r\nIts a sp… [+3259 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Tanya Aldred",
      "title": "Surrey v Essex, Gloucestershire v Hampshire: county cricket – live!",
      "description": "<ul><li>The Spin: sign up for our free weekly cricket newsletter</li><li>And feel free to email Tanya, tweet @tjaldred or post BTL</li></ul>DIVISION ONECheltenham - Gloucestershire v Hampshire Continue reading...",
      "url": "https://www.theguardian.com/sport/live/2022/jul/19/surrey-v-essex-gloucestershire-v-hampshire-county-cricket-live",
      "urlToImage": "https://i.guim.co.uk/img/media/55573e18004796b4b392dcb2e675018b15b074ad/0_343_5151_3090/master/5151.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=f8babe26c2921f45e4bd5b61c96aab26",
      "publishedAt": "2022-07-19T09:17:25Z",
      "content": "Fixtures\r\nDIVISION ONE\r\nCheltenham - Gloucestershire v Hampshire\r\nThe County Ground - Northants v Lancashire\r\nTaunton: Somerset v Yorkshire\r\nThe Oval: Surrey v Essex\r\nEdgbaston: Warwickshire v Kent\r\n… [+955 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Letters",
      "title": "The long history of racism in Yorkshire cricket | Letter",
      "description": "Racist chanting in the stand was a feature of cricket at Headingley in the 1960s, says Philip JaggarAndy Bull’s special report (18 June) is a welcome addition to coverage of the ongoing turmoil within Yorkshire cricket and the factors driving the conflict. Ra…",
      "url": "https://amp.theguardian.com/sport/2022/jun/24/the-long-history-of-racism-in-yorkshire-cricket",
      "urlToImage": "https://i.guim.co.uk/img/media/b2178d5198d28a5b9104ba028af6c25286630fd4/0_512_8192_4915/master/8192.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3a1cd401fcecd834cb76e0a9eada21f5",
      "publishedAt": "2022-06-24T16:59:19Z",
      "content": "Andy Bulls special report (18 June) is a welcome addition to coverage of the ongoing turmoil within Yorkshire cricket and the factors driving the conflict. Racist chanting in the stands was a feature… [+567 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Tim de Lisle (now) and Rob Smyth (later)",
      "title": "England v South Africa: first one-day cricket international – live!",
      "description": "<ul><li>The Spin: sign up for our free weekly cricket newsletter</li><li>And feel free to email Tim or tweet him @TimdeLisle</li></ul>Afternoon everyone and welcome to ... another bloody series! It’s not 48 hours since the end of the last one, and here we go …",
      "url": "https://www.theguardian.com/sport/live/2022/jul/19/england-v-south-africa-first-cricket-one-day-international-live-score-updates",
      "urlToImage": "https://i.guim.co.uk/img/media/2b33ddce042e7a312d99ec027675d1c2965c1e3c/0_151_3026_1816/master/3026.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=d6ea9e929a43436dfcc820707dfce38f",
      "publishedAt": "2022-07-19T11:15:49Z",
      "content": "Toss: SA win and bat\r\nKeshav Maharaj calls heads, and heads it is. It looks a little bit dry, he says. Jos Buttler, always straightforward, admits that he would have batted too. Hot day. He can say t… [+2522 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Tanya Aldred",
      "title": "Surrey v Essex, Northamptonshire v Lancashire: county cricket – live!",
      "description": "<ul><li>Updates from day two around the county grounds</li><li>Day one: shorter sessions played amid extreme heat</li><li>And you can email Tanya, tweet or comment below</li></ul>Cheltenham: Gloucestershire v Hants 203-2The County Ground: Northants 218-7 v La…",
      "url": "https://www.theguardian.com/sport/live/2022/jul/20/cricket-county-championship-essex-surrey-northamptonshire-lancashire-live-updates",
      "urlToImage": "https://i.guim.co.uk/img/media/16f2ed817a83e4ec64756fb066d602984d45b052/0_158_5188_3113/master/5188.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=fbe0a5dcea05326953c9e4a7a3176ec5",
      "publishedAt": "2022-07-20T09:39:18Z",
      "content": "Just to remind you that there will be slightly longer sessions over the next three days at Northampton and Cheltenham to make up for the reduced playing hours yesterday.\r\nHere is Paul Edwards on even… [+2692 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "James Wallace at Lord's (now) and Tim de Lisle (later)",
      "title": "England v India: second one-day cricket international – live!",
      "description": "<ul><li>County cricket – live! Join Tanya Aldred for the latest</li><li>Get in touch! Contact James by email or on Twitter</li></ul>Cast your mind back three whole years. Try it. Hard eh? It’s almost impossible, unless you are a daily diarist a la Palin or Pe…",
      "url": "https://www.theguardian.com/sport/live/2022/jul/14/england-v-india-second-one-day-cricket-international-live",
      "urlToImage": "https://i.guim.co.uk/img/media/73b027166dffa47eefd99bad5f9fd3cb04c5911a/0_13_4875_2926/master/4875.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=5bdd92d6a4fb5b77e5402fd1c3846a53",
      "publishedAt": "2022-07-14T11:37:08Z",
      "content": "On Sky, Eoin Morgan and Ben Stokes are discussing that day three years ago. I still cant get enough of it. \r\nWho is out there watching/reading/listening? Do drop me a line on email or on the twitters… [+2297 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Agence France-Presse in Ahmedabad",
      "title": "Not cricket: fake ‘IPL’ tournament on farm dupes Russian gamblers",
      "description": "Indian police say gang went to great lengths in betting scam reminiscent of the 1973 film The StingA gang set up a fake “Indian Premier League” tournament with farm labourers acting as players to dupe Russian punters in a betting scam reminiscent of the 1973 …",
      "url": "https://amp.theguardian.com/world/2022/jul/11/cricket-fake-ipl-tournament-farm-russian-gamblers-india-police-betting-scam-the-sting",
      "urlToImage": "https://i.guim.co.uk/img/media/3176979fb45ee15d4f4494f195bd3a96e9cf4ce8/0_0_4943_2966/master/4943.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b5da36af10328e9aeb722ea01c287692",
      "publishedAt": "2022-07-11T13:22:30Z",
      "content": "A gang set up a fake Indian Premier League tournament with farm labourers acting as players to dupe Russian punters in a betting scam reminiscent of the 1973 film The Sting.\r\nThe so-called Indian Pre… [+2096 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Tanya Aldred",
      "title": "Lancashire v Somerset, Yorkshire v Surrey: county cricket – live!",
      "description": "<ul><li>Updates from day two of the County Championship games</li><li>Get in touch with Tanya via email or on Twitter</li></ul>DIVISION ONEChelmsford: Essex 127-1 v Gloucestershire 136 all out Continue reading...",
      "url": "https://www.theguardian.com/sport/live/2022/jul/12/lancashire-v-somerset-yorkshire-v-surrey-county-cricket-live-updates",
      "urlToImage": "https://i.guim.co.uk/img/media/7bd105939aeedc2d2a06dd352cf033315d1a46b5/0_132_4284_2571/master/4284.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=e84f7ee60491a7db40be3c38b394c0bb",
      "publishedAt": "2022-07-12T09:13:42Z",
      "content": "Start of play scores\r\nDIVISION ONE\r\nChelmsford: Essex 127-1 v Gloucestershire 136 all out\r\nThe Rose Bowl: Hampshire 42-3 v Warwickshire 217 all out\r\nCanterbury: Kent v Northants 303 all out\r\nTrafalga… [+2764 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Adam Collins (now) and Tom Davies (later)",
      "title": "England v South Africa: second one-day cricket international – live!",
      "description": "<ul><li>Updates on the action at Old Trafford, South Africa lead 1-0</li><li>Any comments? You can email Adam or tweet Adam</li></ul>Afternoon, all. The bad bit first? You won’t believe it... it’s raining at Old Trafford. Quite heavily, so says the world wide…",
      "url": "https://www.theguardian.com/sport/live/2022/jul/22/england-v-south-africa-second-one-day-cricket-international-live",
      "urlToImage": "https://i.guim.co.uk/img/media/b3c516174b1086765df6311eae983dd3517f8020/140_175_2491_1495/master/2491.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=8124e184f255c91b16dcc334f467f119",
      "publishedAt": "2022-07-22T11:15:07Z",
      "content": "Speaking of that England/South Africa Womens series, I was down at Chelmsford with Geoff Lemon on Wednesday interviewing Laura Wolvaardt for our pod, The Final Word. At 23 years of age shes already o… [+4335 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Rob Smyth",
      "title": "Surrey v Essex, Northamptonshire v Lancashire: county cricket – live!",
      "description": "<ul><li>Live County Championship updates from across the country</li><li>And you can email Rob with your thoughts on the action</li></ul>There’s also a men’s ODI between England and South Africa at Old Trafford this afternoon. Yeah, about that.England clinche…",
      "url": "https://www.theguardian.com/sport/live/2022/jul/22/surrey-v-essex-northamptonshire-v-lancashire-county-cricket-live",
      "urlToImage": "https://i.guim.co.uk/img/media/079c73e900e21739475cd770b1b49f15ab9fffcc/0_346_4433_2660/master/4433.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=e61915b761642d2815d53b6d051a0cf2",
      "publishedAt": "2022-07-22T09:27:32Z",
      "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\nMorning all.\r\nHaseeb Hameed x Bazball\r\nHameed has already been scoring at a decidedly sprightly rate this season. \r\nI'd kind of like… [+4544 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Stokes to skip England's T20 series v India, returns for ODIs - Reuters",
      "description": "England test captain Ben Stokes will skip the Twenty20 series against India but will return for the one-day internationals, England's cricket board (ECB) said on Friday.",
      "url": "https://www.reuters.com/lifestyle/sports/stokes-skip-englands-t20-series-v-india-returns-odis-2022-07-01/",
      "urlToImage": "https://www.reuters.com/resizer/KbnA99ntzfBSrZ0gZ01q-zBanWw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/774UDPGY5JNENAZHXF63PP6ZUQ.jpg",
      "publishedAt": "2022-07-01T15:51:00Z",
      "content": "LONDON, July 1 (Reuters) - England test captain Ben Stokes will skip the Twenty20 series against India but will return for the one-day internationals, England's cricket board (ECB) said on Friday.\r\nJ… [+1174 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Buttler replaces Morgan as England's white-ball captain - Reuters.com",
      "description": "Jos Buttler has been appointed England's new limited-overs captain following the retirement of Eoin Morgan, the country's cricket board (ECB) said on Thursday.",
      "url": "https://www.reuters.com/lifestyle/sports/buttler-replaces-morgan-englands-white-ball-captain-2022-06-30/",
      "urlToImage": "https://www.reuters.com/resizer/ED-u2sDqyT6SK18lDN6Ya8HI3KQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RXKQVHVR7ZMDDPC77PFQIU6CCM.jpg",
      "publishedAt": "2022-06-30T14:47:00Z",
      "content": "June 30 (Reuters) - Jos Buttler has been appointed England's new limited-overs captain following the retirement of Eoin Morgan, the country's cricket board (ECB) said on Thursday.\r\nThe 31-year-old, w… [+2093 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "England all-rounder Stokes quits one-day internationals - Reuters.com",
      "description": "England all-rounder Ben Stokes will quit one-day internationals following Tuesday's match against South Africa, the country's cricket board said in a statement.",
      "url": "https://www.reuters.com/lifestyle/sports/england-all-rounder-stokes-quits-one-day-internationals-2022-07-18/",
      "urlToImage": "https://www.reuters.com/resizer/lnB1ikCWL2_xvN8I8TklCYGsw-k=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ACOTAOSOWZIIFPSRW6DCDHWYBY.jpg",
      "publishedAt": "2022-07-18T11:40:00Z",
      "content": "LONDON, July 18 (Reuters) - England all-rounder Ben Stokes will quit one-day internationals following Tuesday's match against South Africa, the country's cricket board said in a statement.\r\n\"I will p… [+1108 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Stokes victim of 'crazy' schedule, says former England captain Hussain - Reuters",
      "description": "The number of games being crammed into the global cricket schedule is \"madness\" and more players could follow Ben Stokes in quitting the one-day format, said former England captain Nasser Hussain.",
      "url": "https://www.reuters.com/lifestyle/sports/stokes-victim-crazy-schedule-says-former-england-captain-hussain-2022-07-19/",
      "urlToImage": "https://www.reuters.com/resizer/4I7n9qKS3bjqlYkJqaQavPqdlMw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/L3QXBAXNSVMCXLK7PUMDR7L5EQ.jpg",
      "publishedAt": "2022-07-19T04:46:00Z",
      "content": "LONDON, July 19 (Reuters) - The number of games being crammed into the global cricket schedule is \"madness\" and more players could follow Ben Stokes in quitting the one-day format, said former Englan… [+1692 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Tanya Aldred",
      "title": "The Spin | Chance to Shine’s long slog breaches boundaries to find first internationals",
      "description": "Lauren Bell and Issy Wong are the first capped players helped by a charity that is successfully taking cricket to the streetsWelcome to The Spin, the Guardian’s weekly (and free) cricket newsletter. Here’s an extract from this week’s edition. To receive the f…",
      "url": "https://amp.theguardian.com/sport/2022/jul/06/chance-to-shine-first-internationals-issy-wong-lauren-bell-cricket-the-spin",
      "urlToImage": "https://i.guim.co.uk/img/media/b6e8fc946614751bfec740d72b56e8eed502b2dc/0_218_4299_2579/master/4299.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5737175e7c63a8c23bb42ddeb4c613ab",
      "publishedAt": "2022-07-06T11:30:13Z",
      "content": "Welcome to The Spin, the Guardians weekly (and free) cricket newsletter. Heres an extract from this weeks edition. To receive the full version every Wednesday, just pop your email in below:\r\nIssy Won… [+5427 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "India, Pakistan players may line up together under Afro-Asia Cup revival plan - Reuters.com",
      "description": "India's Virat Kohli could line up beside Pakistan skipper Babar Azam in the same team next year with the Asian Cricket Council (ACC) planning to revive the Afro-Asia Cup.",
      "url": "https://www.reuters.com/lifestyle/sports/india-pakistan-players-may-line-up-together-under-afro-asia-cup-revival-plan-2022-06-30/",
      "urlToImage": "https://www.reuters.com/resizer/hCfxC64nCN38usRpeFF9NLYuFcw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GDT3CFF52JP7NADT6D5CUAHOPM.jpg",
      "publishedAt": "2022-06-30T07:40:00Z",
      "content": "NEW DELHI, June 30 (Reuters) - India's Virat Kohli could line up beside Pakistan skipper Babar Azam in the same team next year with the Asian Cricket Council (ACC) planning to revive the Afro-Asia Cu… [+1585 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "England v India: Joe Root and Jonny Bairstow complete record chase at Edgbaston",
      "description": "England nonchalantly complete a record chase of 378 to beat India in rapid time on the final morning of the fifth Test at Edgbaston.",
      "url": "https://www.bbc.co.uk/sport/cricket/62031210",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/DD48/production/_125784665_joeroot-jonnybairstow.jpg",
      "publishedAt": "2022-07-05T11:10:52Z",
      "content": "<table><tr><th>Fifth LV Insurance Test, Edgbaston (day five of five)</th></tr>\r\n<tr><td>India 416 (Pant 146, Jadeja 104; Anderson 5-60) &amp; 245 (Pujara 66, Pant 57; Stokes 4-33)</td></tr><tr><td>En… [+4446 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "IPL to get extended window, says BCCI's Shah - Reuters.com",
      "description": "The Indian Premier League (IPL) will have an extended 10-week window in the next international calendar to allow all the world's top cricketers to participate in the popular Twenty20 competition, a top Indian board official told Reuters.",
      "url": "https://www.reuters.com/lifestyle/sports/ipl-get-extended-window-says-bccis-shah-2022-06-29/",
      "urlToImage": "https://www.reuters.com/resizer/hmtKE8cnRvkc5uaXSpIXioKP3Eg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FFSI62ME25PI5CAIHG4KTDEMOA.jpg",
      "publishedAt": "2022-06-29T06:07:00Z",
      "content": "NEW DELHI, June 29 (Reuters) - The Indian Premier League (IPL) will have an extended 10-week window in the next international calendar to allow all the world's top cricketers to participate in the po… [+2369 chars]"
    },
    {
      "source": { "id": null, "name": "Cricbuzz" },
      "author": null,
      "title": "Smriti Mandhana excited by prospect of playing for a medal at CWG, India cricket | Cricbuzz.com - Cricbuzz - Cricbuzz",
      "description": "<ol><li>Smriti Mandhana excited by prospect of playing for a medal at CWG, India cricket | Cricbuzz.com - Cricbuzz  Cricbuzz\r\n</li><li>Commonwealth Games 2022 - Press Conference; Smriti Mandhna, Vice-captain, Indian Cricket Team  Prasar Bharati Sports\r\n</li><…",
      "url": "https://www.cricbuzz.com/cricket-news/123177/mandhana-excited-by-prospect-of-playing-for-a-medal-at-cwg",
      "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c239571/i-got-goosebumps-when-neeraj.jpg",
      "publishedAt": "2022-07-22T07:13:07Z",
      "content": "\"I got goosebumps when Neeraj Chopra got it in the Olympics so definitely we have the opportunity to be there and try and do that. Of course not for the Olympics, but for the Commonwealth,\" Mandhana … [+2481 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "England coach McCullum not a fan of term 'Bazball' - Reuters.com",
      "description": "England coach Brendon McCullum said the term \"Bazball\", used to describe the team's new swashbuckling approach to test cricket since his appointment, is \"silly,\" adding that there is more to England's style of play than all-out attack.",
      "url": "https://www.reuters.com/lifestyle/sports/england-coach-mccullum-not-fan-term-bazball-2022-07-09/",
      "urlToImage": "https://www.reuters.com/resizer/VG9LrPRrGY_LpSGOdlnsW_7qJI8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RC5ZNTYUWNJBRLDIBZC3XQHQFA.jpg",
      "publishedAt": "2022-07-09T06:31:00Z",
      "content": "July 9 (Reuters) - England coach Brendon McCullum said the term \"Bazball\", used to describe the team's new swashbuckling approach to test cricket since his appointment, is \"silly,\" adding that there … [+1794 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Time for Warner's leadership ban to end, says Greg Chappell - Reuters.com",
      "description": "Former Australia captain Greg Chappell has added his voice to the calls for the lifting of the ban on David Warner holding a formal leadership role in Australian cricket.",
      "url": "https://www.reuters.com/lifestyle/sports/time-warners-leadership-ban-end-says-greg-chappell-2022-07-19/",
      "urlToImage": "https://www.reuters.com/resizer/xvSHtFB2EhoFjv1chnZ8AX1c0_0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZXCCPXLTSJNVFO45ODAMQLHOKA.jpg",
      "publishedAt": "2022-07-19T02:57:00Z",
      "content": "SYDNEY, July 19 (Reuters) - Former Australia captain Greg Chappell has added his voice to the calls for the lifting of the ban on David Warner holding a formal leadership role in Australian cricket.\r… [+1548 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Officials investigate racist abuse allegations at Edgbaston test - Reuters.com",
      "description": "Warwickshire County Cricket Club said officials are investigating allegations of racist behaviour among members of the crowd at Edgbaston on the fourth day of the fifth test between England and India.",
      "url": "https://www.reuters.com/lifestyle/sports/officials-investigate-racist-abuse-allegations-edgbaston-test-2022-07-05/",
      "urlToImage": "https://www.reuters.com/resizer/0q0MaiGYbLXKZczt9HhvY1KB6TM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FYGVA4H5RRN2JPIRQEGWR7F4QQ.jpg",
      "publishedAt": "2022-07-05T03:51:00Z",
      "content": "July 5 (Reuters) - Warwickshire County Cricket Club said officials are investigating allegations of racist behaviour among members of the crowd at Edgbaston on the fourth day of the fifth test betwee… [+1797 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "No Kohli or Bumrah in India's T20 squad for Windies - Reuters.com",
      "description": "Batsman Virat Kohli and seamer Jasprit Bumrah have been left out of India's Twenty20 squad for the team's five-match tour of West Indies beginning later this month, the country's cricket board said on Thursday.",
      "url": "https://www.reuters.com/lifestyle/sports/no-kohli-or-bumrah-indias-t20-squad-windies-2022-07-14/",
      "urlToImage": "https://www.reuters.com/resizer/ALLyAVSU8_fQC5u5TpuYVXmZHUs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QEUNJ2EJXRIR3ECW5IRWUV47SQ.jpg",
      "publishedAt": "2022-07-14T09:43:00Z",
      "content": "NEW DELHI, July 14 (Reuters) - Batsman Virat Kohli and seamer Jasprit Bumrah have been left out of India's Twenty20 squad for the team's five-match tour of West Indies beginning later this month, the… [+1818 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Khawaja calls on Big Bash League to privatise to survive - Reuters",
      "description": "Australia batsman Usman Khawaja says the nation's Big Bash League (BBL) needs to open up to private ownership if it is to survive in an increasingly crowded market for T20 cricket content.",
      "url": "https://www.reuters.com/lifestyle/sports/khawaja-calls-big-bash-league-privatise-survive-2022-07-22/",
      "urlToImage": "https://www.reuters.com/resizer/2eiJB8mLcuVMRTFLwohycddjrEc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UQM44LQFT5IUBOCT4FAAGBD6HE.jpg",
      "publishedAt": "2022-07-22T07:21:00Z",
      "content": "MELBOURNE, July 22 (Reuters) - Australia batsman Usman Khawaja says the nation's Big Bash League (BBL) needs to open up to private ownership if it is to survive in an increasingly crowded market for … [+1703 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "COVID rules England wicketkeeper Foakes out of third NZ test - Reuters",
      "description": "England wicket-keeper Ben Foakes will miss the remainder of the third test against New Zealand at Headingley after testing positive for COVID-19, the England and Wales Cricket Board (ECB) said on Sunday.",
      "url": "https://www.reuters.com/lifestyle/sports/covid-rules-england-wicketkeeper-foakes-out-third-nz-test-2022-06-26/",
      "urlToImage": "https://www.reuters.com/resizer/sxRhqflLun9nxrF7vGjqfK2saXw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6CTP5IBYPFJ4FBW4VBVSFUO6YY.jpg",
      "publishedAt": "2022-06-26T08:56:00Z",
      "content": "June 26 (Reuters) - England wicket-keeper Ben Foakes will miss the remainder of the third test against New Zealand at Headingley after testing positive for COVID-19, the England and Wales Cricket Boa… [+712 chars]"
    },
    {
      "source": { "id": null, "name": "International Cricket Council" },
      "author": "ICC",
      "title": "Ricky Ponting analyses Virat Kohli's recent form - International Cricket Council",
      "description": "<ol><li>Ricky Ponting analyses Virat Kohli's recent form  International Cricket Council\r\n</li><li>'If I was India's captain or coach, I'd tell him…': Ponting's message for Kohli  Hindustan Times\r\n</li><li>\"If You Leave Virat Out...\": Ricky Ponting On Why \"It …",
      "url": "https://www.icc-cricket.com/news/2684113",
      "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2022/07/20/11c71aad-e56b-48ab-ab11-674e152e8ad5/GettyImages-1406599355.jpg",
      "publishedAt": "2022-07-20T11:32:43Z",
      "content": "Australia great Ricky Ponting has used the latest episode of The ICC Review to analyse Virat Kohlis recent form, predict what the future holds for the star batter and share his view on what India's b… [+5794 chars]"
    },
    {
      "source": { "id": null, "name": "NDTV News" },
      "author": "NDTV Sports Desk",
      "title": "\"Banned Me From T20s Too\": Kevin Pietersen's Dig At ECB After Ben Stokes Quits ODIs - NDTV Sports",
      "description": "<ol><li>\"Banned Me From T20s Too\": Kevin Pietersen's Dig At ECB After Ben Stokes Quits ODIs  NDTV Sports\r\n</li><li>\"This England shirt deserves 100% of whoever wears it' Ben Stokes on his ODI retirement  Sky Sports Cricket\r\n</li><li>We are not cars, you can't…",
      "url": "https://sports.ndtv.com/cricket/banned-me-from-t20s-too-kevin-pietersens-dig-at-ecb-after-ben-stokes-quits-odis-3175058",
      "urlToImage": "https://c.ndtvimg.com/2022-01/qnhmi0s8_kevin-pietersen-afp_625x300_28_January_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      "publishedAt": "2022-07-20T03:15:45Z",
      "content": "Ben Stokes' premature retirement from ODIs has raised concerns in world cricket. The England Test captain, in his statement announcing ODI retirement, clearly mentioned: \"Three formats are just unsus… [+1687 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Wallabies, England series goes down to the wire at SCG - Reuters",
      "description": "The Sydney Cricket Ground has witnessed dozens of contests between Australia and England over the years but few with the level of brutality anticipated in Saturday's rugby test between the Wallabies and Eddie Jones's tourists.",
      "url": "https://www.reuters.com/lifestyle/sports/wallabies-england-series-goes-down-wire-scg-2022-07-14/",
      "urlToImage": "https://www.reuters.com/resizer/o3VILSn5CYAo5Up9vPs1Qp6rkpo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UKEXXDJ4UVNF5ARMWPFVCK4IAA.jpg",
      "publishedAt": "2022-07-14T09:35:00Z",
      "content": "SYDNEY, July 14 (Reuters) - The Sydney Cricket Ground has witnessed dozens of contests between Australia and England over the years but few with the level of brutality anticipated in Saturday's rugby… [+2452 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "England's Stokes to skip South Africa T20s, Hundred to manage workload - Reuters.com",
      "description": "England test captain Ben Stokes will miss the upcoming three-match Twenty20 international series against South Africa and the Hundred to manage his workload and fitness, the country's cricket board (ECB) said.",
      "url": "https://www.reuters.com/lifestyle/sports/englands-stokes-skip-south-africa-t20s-hundred-manage-workload-2022-07-16/",
      "urlToImage": "https://www.reuters.com/resizer/we6j9sKYPbJVZ6xU61PAUI4_cw4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/L7XOVYTGVVPQBGSUKWCSFH5YLY.jpg",
      "publishedAt": "2022-07-16T07:35:00Z",
      "content": "July 16 (Reuters) - England test captain Ben Stokes will miss the upcoming three-match Twenty20 international series against South Africa and the Hundred to manage his workload and fitness, the count… [+1621 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Trott takes over as Afghanistan head coach before Ireland series - Reuters",
      "description": "Former England batsman Jonathan Trott has been appointed Afghanistan's head coach and will join the squad during their tour of Ireland next month, the country's cricket board has said.",
      "url": "https://www.reuters.com/lifestyle/sports/trott-takes-over-afghanistan-head-coach-before-ireland-series-2022-07-23/",
      "urlToImage": "https://www.reuters.com/resizer/B00upoZBVRSsHarYrYpIWmYJPZ4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XFDR72YJY5MYTIAWQWLXCFKVFI.jpg",
      "publishedAt": "2022-07-23T05:19:00Z",
      "content": "KABUL, July 23 (Reuters) - Former England batsman Jonathan Trott has been appointed Afghanistan's head coach and will join the squad during their tour of Ireland next month, the country's cricket boa… [+1085 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Australia's NBL schedules game for Christmas Day - Reuters.com",
      "description": "The last barrier to a 365-day professional sporting calendar in Australia will come down this year after the National Basketball League (NBL) said on Wednesday that it had scheduled a game on Christmas Day.",
      "url": "https://www.reuters.com/lifestyle/sports/australias-nbl-schedules-game-christmas-day-2022-07-20/",
      "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=104",
      "publishedAt": "2022-07-20T02:15:00Z",
      "content": "SYDNEY, July 20 (Reuters) - The last barrier to a 365-day professional sporting calendar in Australia will come down this year after the National Basketball League (NBL) said on Wednesday that it had… [+1737 chars]"
    },
  ];

    constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }

    // async componentDidMount(){
    //     console.log('component did mount method')
    //     let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=e1653ca971fc4304a17cd692bf3efd76&page=1&pageSize=20';
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
    // }
    
    handlePrevClick = async ()=>{
      console.log("previous clicked");
      
      // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e1653ca971fc4304a17cd692bf3efd76&page=${this.state.page-1}&pageSize=20`;
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // console.log(parsedData);

      // this.setState({
      //   page: this.state.page - 1,
      //   articles: parsedData.articles
      // });

    }

    handleNextClick = async ()=>{
      console.log("next clicked");

      // if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

      // }
      // else{
      //   let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e1653ca971fc4304a17cd692bf3efd76&page=${this.state.page+1}&pageSize=20`;
      //   let data = await fetch(url);
      //   let parsedData = await data.json();
      //   console.log(parsedData);
  
      //   this.setState({
      //     page: this.state.page + 1,
      //     articles: parsedData.articles
      //   });
      // }

    }

  render() {
    return (
      <div className='container my-3' >
        <h1 className='text-center' >Newsapp - Top Headlines</h1>
        <div className="row">
            {this.state.articles.map((element)=>{
                return (<div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>)
            })}
            {/* <div className="col-md-4">
                    <NewsItem title='hello' description='{element.description?element.description.slice(0,80):""}' imageUrl='{element.urlToImage}' newsUrl='{element.url}' />
                </div> */}
             
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
          <div className="page-indicator">Page {this.state.page}</div>
          <button  type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
