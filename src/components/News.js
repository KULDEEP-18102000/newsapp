// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps={
    country:'in',
    pagesize: 8,
    category:'General',
  }
  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number
  }
    articles=[
        {
          "source": { "id": "the-washington-post", "name": "The Washington Post" },
          "author": "Rachel Lerman, Aaron Gregg, Praveena Somasundaram",
          "title": "Apple workers in Maryland vote on whether to unionize - The Washington Post",
          "description": "Apple workers in Towson, Md., voted Saturday night to unionize and join the International Association of Machinists and Aerospace Workers.",
          "url": "https://www.washingtonpost.com/technology/2022/06/18/apple-union-vote/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PPZICIHMTQI6ZH4QPHPR7MUCSY.jpg&w=1440",
          "publishedAt": "2022-06-19T03:29:00Z",
          "content": "Placeholder while article actions load\r\nApple workers in the Baltimore area voted to join a union Saturday, becoming the first of the tech giants U.S. retail stores to do so.\r\nThe vote means workers … [+5586 chars]"
        },
        {
          "source": { "id": null, "name": "YouTube" },
          "author": null,
          "title": "Cup Final, Gm2: Lightning @ Avalanche 6/18 | NHL Playoffs 2022 - NHL",
          "description": "Extended highlights of the Tampa Bay Lightning at the Colorado Avalanche",
          "url": "https://www.youtube.com/watch?v=6f6FZoJONgo",
          "urlToImage": "https://i.ytimg.com/vi/6f6FZoJONgo/maxresdefault.jpg",
          "publishedAt": "2022-06-19T03:15:26Z",
          "content": null
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Story by Reuters",
          "title": "Internet Explorer's final resting place: as a 'world-class joke' in South Korea - CNN",
          "description": "For Jung Ki-young, a South Korean software engineer, Microsoft's decision to retire its Internet Explorer web browser marked the end of a quarter-century love-hate relationship with the technology.",
          "url": "https://www.cnn.com/2022/06/18/asia/internet-explorer-gravestone-viral-south-korea-intl-hnk/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220618224304-internet-explorer-gravestone-viral-south-korea-intl-hnk-super-tease.jpg",
          "publishedAt": "2022-06-19T02:54:00Z",
          "content": "SeoulFor Jung Ki-young, a South Korean software engineer, Microsoft's decision to retire its Internet Explorer web browser marked the end of a quarter-century love-hate relationship with the technolo… [+1780 chars]"
        },
        {
          "source": { "id": null, "name": "Spaceflight Now" },
          "author": null,
          "title": "Live coverage: SpaceX counting down to midnight hour launch from Florida – Spaceflight Now - Spaceflight Now",
          "description": null,
          "url": "https://spaceflightnow.com/2022/06/19/falcon-9-globalstar-fm15-live-coverage/",
          "urlToImage": null,
          "publishedAt": "2022-06-19T02:01:52Z",
          "content": "Live coverage of the countdown and launch of a SpaceX Falcon 9 rocket from Space Launch Complex 40 at Cape Canaveral Space Force Station in Florida with the Globalstar FM15 voice and data relay satel… [+7056 chars]"
        },
        {
          "source": { "id": null, "name": "ESPN" },
          "author": null,
          "title": "Will Zalatoris, Matt Fitzpatrick emerge with lead at U.S. Open; Jon Rahm stumbles on 18 - ESPN",
          "description": "Will Zalatoris and Matt Fitzpatrick emerged atop the leaderboard at the U.S. Open on Saturday during a brutal round in which eight players had at least a share of the lead at some point.",
          "url": "https://www.espn.com/golf/story/_/id/34114295/will-zalatoris-matt-fitzpatrick-emerge-lead-us-open-jon-rahm-stumbles-18",
          "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0619%2Fr1026712_1296x729_16%2D9.jpg",
          "publishedAt": "2022-06-19T01:40:25Z",
          "content": "BROOKLINE, Mass. -- Eight players spent time atop the leaderboard, all of them getting kicked around -- some worse than others -- on a U.S. Open course that felt every bit like the toughest test in g… [+4477 chars]"
        },
        {
          "source": { "id": "fox-news", "name": "Fox News" },
          "author": "Andrew Miller",
          "title": "Biden National Security Adviser Jake Sullivan tests positive for COVID-19 - Fox News",
          "description": "White House National Security Adviser Jake Sullivan has tested positive for the coronavirus but his office says that he has not been in close contact with the president.",
          "url": "https://www.foxnews.com/politics/biden-national-security-adviser-jake-sullivan-tests-positive-covid-19",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/02/AP22042702781677.jpg",
          "publishedAt": "2022-06-19T01:26:05Z",
          "content": "White House National Security Adviser Jake Sullivan has tested positive for COVID-19, the National Security Council announced on Saturday. \r\n\"National Security Advisor Jake Sullivan tested positive t… [+2218 chars]"
        },
        {
          "source": { "id": "cbs-news", "name": "CBS News" },
          "author": "Alexander Tin",
          "title": "CDC and FDA clear the way for COVID vaccines for kids under 5 - CBS News",
          "description": "Panels of outside vaccine advisers to the CDC and FDA both voted unanimously this week to back the shots from Moderna as well as Pfizer and BioNTech.",
          "url": "https://www.cbsnews.com/news/covid-vaccine-kids-under-5-pfizer-moderna-fda-authorize/",
          "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2022/06/16/484e2a08-b397-473d-ba69-e538ebf72e9e/thumbnail/1200x630g4/be1d5b15adc15209b705e3b208c22e43/gettyimages-1396327271.jpg",
          "publishedAt": "2022-06-19T01:24:00Z",
          "content": "Some 20 million babies, toddlers, and preschoolers are now eligible to be vaccinated for COVID-19, after the Centers for Disease Control and Prevention's Director Dr. Rochelle Walensky signed off on … [+9648 chars]"
        },
        {
          "source": { "id": null, "name": "PINKVILLA" },
          "author": "Pinkvilla Desk",
          "title": "Father's Day 2022: Saif Ali Khan to Abhishek Bachchan, 8 superstar fathers on their bond with their kids - PINKVILLA",
          "description": "This Father2019s Day, let2019s look at what B2019Town fathers have had to say about their children.",
          "url": "https://www.pinkvilla.com/entertainment/news/father-s-day-2022-saif-ali-khan-abhishek-bachchan-8-superstar-fathers-their-bond-their-kids-1146282",
          "urlToImage": "https://www.pinkvilla.com/files/styles/fbimagesection/public/saif-abhishek-social.jpg?itok=Z85iGfrZ",
          "publishedAt": "2022-06-19T00:29:51Z",
          "content": "With Father’s Day here, it’s time to celebrate the wonderful dads in the tinsel town of Bollywood. Although it’s easy to forget, the talented and handsome men that we watch on celluloid, are much mor… [+6320 chars]"
        },
        {
          "source": { "id": null, "name": "KENS5.com" },
          "author": "Teresa Velasco",
          "title": "Uvalde police never tried to open doors to classrooms where shooter was inside, Express-News reports - KENS5.com",
          "description": "A source told the San Antonio Express-News that police may have assumed the doors were locked, according to a new report.",
          "url": "https://www.kens5.com/article/news/special-reports/uvalde-school-shooting/uvalde-roob-elementary-school-shooting-police-investigation/273-fa58a24a-072e-4f66-8dd4-a717c6ce29dd",
          "urlToImage": "https://media.kens5.com/assets/KENS/images/faee8208-f738-41d6-a81b-21ef29c98a6d/faee8208-f738-41d6-a81b-21ef29c98a6d_1140x641.jpg",
          "publishedAt": "2022-06-19T00:02:00Z",
          "content": "SAN ANTONIO According to a new report by the San Antonio Express-News, a surveillance video shows police never tried to open the doors at Robb Elementary leading to the classrooms where the shooter w… [+2341 chars]"
        },
        {
          "source": { "id": null, "name": "WTHR" },
          "author": "WTHR.com staff",
          "title": "Health officials identify 1st probable case of monkeypox in Indiana - WTHR",
          "description": "The patient remains isolated, and health officials said they are working to identify anyone the patient may have had close contact with while infectious.",
          "url": "https://www.wthr.com/article/news/local/monkeypox-indiana-department-of-health-first-probable-case/531-3f792487-68d2-411b-8a07-f9e419cb7ffc",
          "urlToImage": "https://media.tegna-media.com/assets/WBNS/images/c660701a-5bc7-4db6-a8aa-e6cd92c36bf8/c660701a-5bc7-4db6-a8aa-e6cd92c36bf8_1140x641.jpg",
          "publishedAt": "2022-06-18T23:45:00Z",
          "content": "INDIANAPOLIS The first probable case of monkeypox in Indiana this year has been identified, state health officials announced Saturday. \r\nThe Indiana Department of Health completed initial testing of … [+1621 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "Fed's Waller backs another big rate hike for 'all in' inflation fight - Reuters.com",
          "description": "Federal Reserve Governor Christopher Waller on Saturday became the latest U.S. central banker to pledge a whatever-it-takes approach to fighting inflation, three days after the Fed raised interest rates by three-quarters of a percentage point and signaled mor…",
          "url": "https://www.reuters.com/business/finance/feds-waller-wants-another-75-basis-point-hike-all-in-inflation-fight-2022-06-18/",
          "urlToImage": "https://www.reuters.com/resizer/3tjkMrlO8nyzqUcACYUnOWW8Dhw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BUV4GUINIJOCHAUKRRZLOFATRY.jpg",
          "publishedAt": "2022-06-18T23:26:00Z",
          "content": "June 18 (Reuters) - Federal Reserve Governor Christopher Waller on Saturday became the latest U.S. central banker to pledge a whatever-it-takes approach to fighting inflation, three days after the Fe… [+3488 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "Islamic State claims attack on Sikh temple in Kabul that killed two - Reuters.com",
          "description": "An attack claimed by Islamic State on a Sikh temple in the Afghan capital Kabul on Saturday killed at least two people and injured seven, officials said, another deadly incident in a spate of violence targeting minorities and places of worship.",
          "url": "https://www.reuters.com/world/asia-pacific/blast-hits-sikh-temple-afghan-capital-kabul-temple-official-2022-06-18/",
          "urlToImage": "https://www.reuters.com/resizer/usnhr7NyU53rcNaEaTfAP8TaTKI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FJNTBTVEFJJG3BHKZGKYMNZGA4.jpg",
          "publishedAt": "2022-06-18T23:15:00Z",
          "content": "KABUL, June 18 (Reuters) - An attack claimed by Islamic State on a Sikh temple in the Afghan capital Kabul on Saturday killed at least two people and injured seven, officials said, another deadly inc… [+3066 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Claire Colbert and Raja Razek, CNN",
          "title": "Yellowstone River flooding is a 1 in 500-year event, US Geological Survey says - CNN",
          "description": "The devastating flooding that occurred along the Yellowstone River this week constitutes a 1 in 500 year event, according to a US Geological Survey news release.",
          "url": "https://www.cnn.com/2022/06/17/weather/yellowstone-river-flooding-historic/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220617141502-04-yellowstone-park-flooding-0613-super-tease.jpg",
          "publishedAt": "2022-06-18T23:00:00Z",
          "content": "(CNN)The devastating flooding that occurred along the Yellowstone River this week constitutes a 1 in 500-year event, according to a US Geological Survey (USGS) news release.\r\nUnprecedented rain and r… [+4488 chars]"
        },
        {
          "source": { "id": "abc-news", "name": "ABC News" },
          "author": "ABC News",
          "title": "Building collapse after fire kills 1 firefighter; 5 injured - ABC News",
          "description": "Authorities say a building caught fire and later collapsed in north Philadelphia, killing one firefighter and injuring five other people after all became trapped",
          "url": "https://abcnews.go.com/US/wireStory/firefighters-trapped-philadelphia-building-collapse-85480140",
          "urlToImage": "https://s.abcnews.com/images/US/WireAP_766235dd34be40ec82b86652d9030ab8_16x9_992.jpg",
          "publishedAt": "2022-06-18T22:56:02Z",
          "content": "PHILADELPHIA -- A building caught fire and later collapsed in Philadelphia, killing one firefighter and injuring five other people, two critically, after all became trapped early Saturday, authoritie… [+3300 chars]"
        },
        {
          "source": { "id": null, "name": "WAVY.com" },
          "author": "Tannock Blair",
          "title": "Four inmates wanted after escaping federal prison in central VA - WAVY.com",
          "description": "Authorities are currently searching for four inmates after they reportedly walked away from a federal minimum-security facility in the early hours of Saturday, June 18.",
          "url": "https://www.wavy.com/news/virginia/four-inmates-wanted-after-escaping-federal-prison-in-central-va/",
          "urlToImage": "https://www.wavy.com/wp-content/uploads/sites/3/2022/06/feature-24.png?w=1280",
          "publishedAt": "2022-06-18T22:50:30Z",
          "content": "HOPEWELL, Va. (WRIC) — Authorities are currently searching for four inmates after they reportedly walked away from a federal minimum-security facility in the early hours of Saturday, June 18.\r\nClick … [+2132 chars]"
        },
        {
          "source": { "id": "cbs-news", "name": "CBS News" },
          "author": "William Harwood",
          "title": "NASA starts countdown for moon rocket's fourth fueling attempt - CBS News",
          "description": "If the fueling test goes well, NASA hopes to launch the SLS rocket on its maiden flight late this summer.",
          "url": "https://www.cbsnews.com/news/nasa-space-launch-system-moon-rocket-fourth-fueling-attempt/",
          "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2022/06/18/3dc25b18-db3a-42ef-ad95-62c661760a2e/thumbnail/1200x630/4e0bdb0c0876f060df62ad1bd11d1e20/moon10.jpg",
          "publishedAt": "2022-06-18T22:14:00Z",
          "content": "Countdown clocks began ticking Saturday for NASA's fourth attempt to complete a dress rehearsal countdown and fueling test of its Space Launch System moon rocket, a requirement before the huge booste… [+4591 chars]"
        },
        {
          "source": { "id": "usa-today", "name": "USA Today" },
          "author": "Mike Snider",
          "title": "Two actors in Netflix show 'The Chosen One' die in Mexico crash - USA TODAY",
          "description": "Two actors on the Netflix series \"The Chosen One\" were killed and six others who were part of the cast and crew were injured after a crash in Mexico.",
          "url": "https://www.usatoday.com/story/entertainment/tv/2022/06/18/netflix-actors-the-chosen-one-die-accident-mexico/7670442001/",
          "urlToImage": "https://www.gannett-cdn.com/presto/2022/04/20/USAT/ac8feca8-daa0-4ecc-8850-8c36c36fff9b-AFP_AFP_328L8FZ.jpg?crop=5573,3135,x0,y278&width=3200&height=1801&format=pjpg&auto=webp",
          "publishedAt": "2022-06-18T22:00:18Z",
          "content": "Two actors on the Netflix series \"The Chosen One\" were killed and six others who were part of the cast and crew were injured after the van they were in crashed near Mulegé on the Baja California Sur … [+2317 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Nicole Goodkind, CNN Business",
          "title": "The most popular air travel day this year was a mess. That won't change anytime soon - CNN",
          "description": "Americans gained a new federal holiday last year: Juneteenth. This year the holiday, which commemorates of the end of slavery in the United States, falls on Sunday but it will be observed in many places on Monday, June 20.",
          "url": "https://www.cnn.com/2022/06/18/economy/air-travel-summer-junteenth/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220618093006-san-francisco-airport-0613-restricted-super-tease.jpg",
          "publishedAt": "2022-06-18T21:38:00Z",
          "content": "New York (CNN Business)Americans gained a new federal holiday last year: Juneteenth. This year the holiday, which commemorates of the end of slavery in the United States, falls on Sunday but it will … [+3548 chars]"
        },
        {
          "source": { "id": "fox-news", "name": "Fox News" },
          "author": "Adam Sabes",
          "title": "Los Angeles suspect who allegedly killed two El Monte police officers died by suicide: Coroner - Fox News",
          "description": "The Los Angeles suspect who is accused of killing two El Monte police officers on Tuesday night died by suicide as a result of a gunshot wound to the head, officials say.",
          "url": "https://www.foxnews.com/us/los-angeles-suspect-allegedly-killed-two-el-monte-police-officers-died-suicide-coroner",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/06/justin-william-flores.jpg",
          "publishedAt": "2022-06-18T21:37:44Z",
          "content": "Editor's note: This story discusses suicide. If you or someone you know is having thoughts of suicide, please contact the National Suicide Prevention Lifeline at 1-800-273-TALK (8255).\r\nThe suspect w… [+3078 chars]"
        },
        {
          "source": { "id": null, "name": "AL.com" },
          "author": "Lee Roop | lroop@al.com",
          "title": "Church shooting suspect was licensed gun dealer warned by federal agents about missing guns - AL.com",
          "description": "Smith had not recorded the sale or other disposition of a firearm in the required seven days, ATF investigators determined.",
          "url": "https://www.al.com/news/2022/06/church-shooting-suspect-was-licensed-gun-dealer-warned-by-federal-agents-about-missing-guns.html",
          "urlToImage": "https://www.al.com/resizer/xLFFjJhe_0eZ-3DrzLUwKrn0d7A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/B5U5NB7L7JCY5PRYGFRNXB5BEY.jpg",
          "publishedAt": "2022-06-18T21:31:00Z",
          "content": "Robert Findlay Smith, the man charged with killing three people in a Birmingham-area church last week, is a formerly licensed federal gun dealer cited and warned by federal authorities for failing to… [+2301 chars]"
        }
      ]
    constructor(props){
        super(props);
        console.log("Hello I am a constructor");
        this.state={
            articles:this.articles,
            loading:false,
            page:1
        }
        document.title=`${this.props.category}-News`;
    }
    async componentDidMount(){
        console.log("cdm");
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=1f466951bc984525a4f89ed14924bf87&page=1&pagesize=${this.props.pagesize}`;
        this.setState({
          loading:true
        })
        let data=await fetch(url);
        let parsedData=await data.json()
        this.setState({articles:parsedData.articles,
          totalresults:parsedData.totalResults,
           loading:false})
    }
    handlepreviousclick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=1f466951bc984525a4f89ed14924bf87&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
        this.setState({
          loading:true
        })
        let data=await fetch(url);
        let parsedData=await data.json()
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles,
            loading:false
        })
    }
    handlenextclick=async()=>{
        if(!(this.state.page+1>Math.ceil(this.state.totalresults/this.props.pagesize))){
          let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=1f466951bc984525a4f89ed14924bf87&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
          this.setState({
            loading:true
          })
            let data=await fetch(url);
            let parsedData=await data.json()
            this.setState({
                page:this.state.page+1,
                articles:parsedData.articles,
                loading:false
        }
        )
        }
    }
  render() {
    console.log("render");
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin:'35px 0px'}}>Top news on {this.props.category}</h1>
        {this.state.loading&&<Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark}" onClick={this.handlepreviousclick}>&larr; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalresults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News