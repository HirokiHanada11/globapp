export const nameToCoords = {"United Arab Emirates":[24,54],"Argentina":[-34,-64],"Australia":[-27,133],"Austria":[47.33333333,13.33333333],"Belgium":[50.83333333,4],"Bulgaria":[43,25],"Brazil":[-10,-55],"Canada":[60,-95],"Switzerland":[47,8],"China":[35,105],"Colombia":[4,-72],"Cuba":[21.5,-80],"Czech Republic":[49.75,15.5],"Germany":[51,9],"Egypt":[27,30],"France":[46,2],"United Kingdom":[54,-2],"Greece":[39,22],"Hong Kong":[22.267,114.188],"Hungary":[47,20],"Indonesia":[-5,120],"India":[20,77],"Ireland":[53,-8],"Israel":[31.47,35.13],"Italy":[42.83333333,12.83333333],"Japan":[36,138],"South Korea":[37,127.5],"Lithuania":[56,24],"Latvia":[57,25],"Morocco":[32,-5],"Mexico":[23,-102],"Malaysia":[2.5,112.5],"Nigeria":[10,8],"Netherlands":[52.5,5.75],"Norway":[62,10],"New Zealand":[-41,174],"Philippines":[13,122],"Poland":[52,20],"Portugal":[39.5,-8],"Romania":[46,25],"Russia":[60,100],"Saudi Arabia":[25,45],"Singapore":[1.36666666,103.8],"Serbia":[44,21],"Slovakia":[48.66666666,19.5],"Slovenia":[46.11666666,14.81666666],"Sweden":[62,15],"Thailand":[15,100],"Turkey":[39,35],"Taiwan":[23.5,121],"Ukraine":[49,32],"United States":[38,-97],"Venezuela":[8,-66],"South Africa":[-29,24]};
export const codeToCoords = {"AE":[24,54],"AR":[-34,-64],"AU":[-27,133],"AT":[47.33333333,13.33333333],"BE":[50.83333333,4],"BG":[43,25],"BR":[-10,-55],"CA":[60,-95],"CH":[47,8],"CN":[35,105],"CO":[4,-72],"CU":[21.5,-80],"CZ":[49.75,15.5],"DE":[51,9],"EG":[27,30],"FR":[46,2],"GB":[54,-2],"GR":[39,22],"HK":[22.267,114.188],"HU":[47,20],"ID":[-5,120],"IN":[20,77],"IE":[53,-8],"IL":[31.47,35.13],"IT":[42.83333333,12.83333333],"JP":[36,138],"KR":[37,127.5],"LT":[56,24],"LV":[57,25],"MA":[32,-5],"MX":[23,-102],"MY":[2.5,112.5],"NG":[10,8],"NL":[52.5,5.75],"NO":[62,10],"NZ":[-41,174],"PH":[13,122],"PL":[52,20],"PT":[39.5,-8],"RO":[46,25],"RU":[60,100],"SA":[25,45],"SG":[1.36666666,103.8],"RS":[44,21],"SK":[48.66666666,19.5],"SI":[46.11666666,14.81666666],"SE":[62,15],"TH":[15,100],"TR":[39,35],"TW":[23.5,121],"UA":[49,32],"US":[38,-97],"VE":[8,-66],"ZA":[-29,24]};
export const soucresToCountry = new Object();
const newsSources = [{
        "id": "abc-news",
        "name": "ABC News",
        "description": "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
        "url": "https://abcnews.go.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "abc-news-au",
        "name": "ABC News (AU)",
        "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
        "url": "http://www.abc.net.au/news",
        "category": "general",
        "language": "en",
        "country": "au"
    }, {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English",
        "description": "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
        "url": "http://www.aljazeera.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "ars-technica",
        "name": "Ars Technica",
        "description": "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
        "url": "http://arstechnica.com",
        "category": "technology",
        "language": "en",
        "country": "us"
    }, {
        "id": "associated-press",
        "name": "Associated Press",
        "description": "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
        "url": "https://apnews.com/",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "australian-financial-review",
        "name": "Australian Financial Review",
        "description": "The Australian Financial Review reports the latest news from business, finance, investment and politics, updated in real time. It has a reputation for independent, award-winning journalism and is essential reading for the business and investor community.",
        "url": "http://www.afr.com",
        "category": "business",
        "language": "en",
        "country": "au"
    }, {
        "id": "axios",
        "name": "Axios",
        "description": "Axios are a new media company delivering vital, trustworthy news and analysis in the most efficient, illuminating and shareable ways possible.",
        "url": "https://www.axios.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "bbc-news",
        "name": "BBC News",
        "description": "Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.",
        "url": "http://www.bbc.co.uk/news",
        "category": "general",
        "language": "en",
        "country": "gb"
    }, {
        "id": "bbc-sport",
        "name": "BBC Sport",
        "description": "The home of BBC Sport online. Includes live sports coverage, breaking news, results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all the main world sports, plus major events such as the Olympic Games.",
        "url": "http://www.bbc.co.uk/sport",
        "category": "sports",
        "language": "en",
        "country": "gb"
    }, {
        "id": "bleacher-report",
        "name": "Bleacher Report",
        "description": "Sports journalists and bloggers covering NFL, MLB, NBA, NHL, MMA, college football and basketball, NASCAR, fantasy sports and more. News, photos, mock drafts, game scores, player profiles and more!",
        "url": "http://www.bleacherreport.com",
        "category": "sports",
        "language": "en",
        "country": "us"
    }, {
        "id": "bloomberg",
        "name": "Bloomberg",
        "description": "Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.",
        "url": "http://www.bloomberg.com",
        "category": "business",
        "language": "en",
        "country": "us"
    }, {
        "id": "breitbart-news",
        "name": "Breitbart News",
        "description": "Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.",
        "url": "http://www.breitbart.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "business-insider",
        "name": "Business Insider",
        "description": "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
        "url": "http://www.businessinsider.com",
        "category": "business",
        "language": "en",
        "country": "us"
    }, {
        "id": "business-insider-uk",
        "name": "Business Insider (UK)",
        "description": "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
        "url": "http://uk.businessinsider.com",
        "category": "business",
        "language": "en",
        "country": "gb"
    }, {
        "id": "buzzfeed",
        "name": "Buzzfeed",
        "description": "BuzzFeed is a cross-platform, global network for news and entertainment that generates seven billion views each month.",
        "url": "https://www.buzzfeed.com",
        "category": "entertainment",
        "language": "en",
        "country": "us"
    }, {
        "id": "cbc-news",
        "name": "CBC News",
        "description": "CBC News is the division of the Canadian Broadcasting Corporation responsible for the news gathering and production of news programs on the corporation's English-language operations, namely CBC Television, CBC Radio, CBC News Network, and CBC.ca.",
        "url": "http://www.cbc.ca/news",
        "category": "general",
        "language": "en",
        "country": "ca"
    }, {
        "id": "cbs-news",
        "name": "CBS News",
        "description": "CBS News: dedicated to providing the best in journalism under standards it pioneered at the dawn of radio and television and continue in the digital age.",
        "url": "http://www.cbsnews.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "cnn",
        "name": "CNN",
        "description": "View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN",
        "url": "http://us.cnn.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "crypto-coins-news",
        "name": "Crypto Coins News",
        "description": "Providing breaking cryptocurrency news - focusing on Bitcoin, Ethereum, ICOs, blockchain technology, and smart contracts.",
        "url": "https://www.ccn.com",
        "category": "technology",
        "language": "en",
        "country": "us"
    }, {
        "id": "engadget",
        "name": "Engadget",
        "description": "Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronics.",
        "url": "https://www.engadget.com",
        "category": "technology",
        "language": "en",
        "country": "us"
    }, {
        "id": "entertainment-weekly",
        "name": "Entertainment Weekly",
        "description": "Online version of the print magazine includes entertainment news, interviews, reviews of music, film, TV and books, and a special area for magazine subscribers.",
        "url": "http://www.ew.com",
        "category": "entertainment",
        "language": "en",
        "country": "us"
    }, {
        "id": "espn",
        "name": "ESPN",
        "description": "ESPN has up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more.",
        "url": "http://espn.go.com",
        "category": "sports",
        "language": "en",
        "country": "us"
    }, {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info",
        "description": "ESPN Cricinfo provides the most comprehensive cricket coverage available including live ball-by-ball commentary, news, unparalleled statistics, quality editorial comment and analysis.",
        "url": "http://www.espncricinfo.com/",
        "category": "sports",
        "language": "en",
        "country": "us"
    }, {
        "id": "financial-post",
        "name": "Financial Post",
        "description": "Find the latest happenings in the Canadian Financial Sector and stay up to date with changing trends in Business Markets. Read trading and investing advice from professionals.",
        "url": "http://business.financialpost.com",
        "category": "business",
        "language": "en",
        "country": "ca"
    }, {
        "id": "football-italia",
        "name": "Football Italia",
        "description": "Italian football news, analysis, fixtures and results for the latest from Serie A, Serie B and the Azzurri.",
        "url": "http://www.football-italia.net",
        "category": "sports",
        "language": "en",
        "country": "it"
    }, {
        "id": "fortune",
        "name": "Fortune",
        "description": "Fortune 500 Daily and Breaking Business News",
        "url": "http://fortune.com",
        "category": "business",
        "language": "en",
        "country": "us"
    }, {
        "id": "four-four-two",
        "name": "FourFourTwo",
        "description": "The latest football news, in-depth features, tactical and statistical analysis from FourFourTwo, the UK&#039;s favourite football monthly.",
        "url": "http://www.fourfourtwo.com/news",
        "category": "sports",
        "language": "en",
        "country": "gb"
    }, {
        "id": "fox-news",
        "name": "Fox News",
        "description": "Breaking News, Latest News and Current News from FOXNews.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.",
        "url": "http://www.foxnews.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "fox-sports",
        "name": "Fox Sports",
        "description": "Find live scores, player and team news, videos, rumors, stats, standings, schedules and fantasy games on FOX Sports.",
        "url": "http://www.foxsports.com",
        "category": "sports",
        "language": "en",
        "country": "us"
    }, {
        "id": "google-news",
        "name": "Google News",
        "description": "Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News.",
        "url": "https://news.google.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "google-news-au",
        "name": "Google News (Australia)",
        "description": "Comprehensive, up-to-date Australia news coverage, aggregated from sources all over the world by Google News.",
        "url": "https://news.google.com",
        "category": "general",
        "language": "en",
        "country": "au"
    }, {
        "id": "google-news-ca",
        "name": "Google News (Canada)",
        "description": "Comprehensive, up-to-date Canada news coverage, aggregated from sources all over the world by Google News.",
        "url": "https://news.google.com",
        "category": "general",
        "language": "en",
        "country": "ca"
    }, {
        "id": "google-news-in",
        "name": "Google News (India)",
        "description": "Comprehensive, up-to-date India news coverage, aggregated from sources all over the world by Google News.",
        "url": "https://news.google.com",
        "category": "general",
        "language": "en",
        "country": "in"
    }, {
        "id": "google-news-uk",
        "name": "Google News (UK)",
        "description": "Comprehensive, up-to-date UK news coverage, aggregated from sources all over the world by Google News.",
        "url": "https://news.google.com",
        "category": "general",
        "language": "en",
        "country": "gb"
    }, {
        "id": "hacker-news",
        "name": "Hacker News",
        "description": "Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by Paul Graham's investment fund and startup incubator, Y Combinator. In general, content that can be submitted is defined as \"anything that gratifies one's intellectual curiosity\".",
        "url": "https://news.ycombinator.com",
        "category": "technology",
        "language": "en",
        "country": "us"
    }, {
        "id": "ign",
        "name": "IGN",
        "description": "IGN is your site for Xbox One, PS4, PC, Wii-U, Xbox 360, PS3, Wii, 3DS, PS Vita and iPhone games with expert reviews, news, previews, trailers, cheat codes, wiki guides and walkthroughs.",
        "url": "http://www.ign.com",
        "category": "entertainment",
        "language": "en",
        "country": "us"
    }, {
        "id": "independent",
        "name": "Independent",
        "description": "National morning quality (tabloid) includes free online access to news and supplements. Insight by Robert Fisk and various other columnists.",
        "url": "http://www.independent.co.uk",
        "category": "general",
        "language": "en",
        "country": "gb"
    }, {
        "id": "mashable",
        "name": "Mashable",
        "description": "Mashable is a global, multi-platform media and entertainment company.",
        "url": "https://mashable.com",
        "category": "entertainment",
        "language": "en",
        "country": "us"
    }, {
        "id": "medical-news-today",
        "name": "Medical News Today",
        "description": "Medical news and health news headlines posted throughout the day, every day.",
        "url": "http://www.medicalnewstoday.com",
        "category": "health",
        "language": "en",
        "country": "us"
    }, {
        "id": "msnbc",
        "name": "MSNBC",
        "description": "Breaking news and in-depth analysis of the headlines, as well as commentary and informed perspectives from The Rachel Maddow Show, Morning Joe & more.",
        "url": "http://www.msnbc.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "mtv-news",
        "name": "MTV News",
        "description": "The ultimate news source for music, celebrity, entertainment, movies, and current events on the web. It's pop culture on steroids.",
        "url": "http://www.mtv.com/news",
        "category": "entertainment",
        "language": "en",
        "country": "us"
    }, {
        "id": "mtv-news-uk",
        "name": "MTV News (UK)",
        "description": "All the latest celebrity news, gossip, exclusive interviews and pictures from the world of music and entertainment.",
        "url": "http://www.mtv.co.uk/news",
        "category": "entertainment",
        "language": "en",
        "country": "gb"
    }, {
        "id": "national-geographic",
        "name": "National Geographic",
        "description": "Reporting our world daily: original nature and science news from National Geographic.",
        "url": "http://news.nationalgeographic.com",
        "category": "science",
        "language": "en",
        "country": "us"
    }, {
        "id": "national-review",
        "name": "National Review",
        "description": "National Review: Conservative News, Opinion, Politics, Policy, & Current Events.",
        "url": "https://www.nationalreview.com/",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "nbc-news",
        "name": "NBC News",
        "description": "Breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture.",
        "url": "http://www.nbcnews.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "news24",
        "name": "News24",
        "description": "South Africa's premier news source, provides breaking news on national, world, Africa, sport, entertainment, technology and more.",
        "url": "http://www.news24.com",
        "category": "general",
        "language": "en",
        "country": "za"
    }, {
        "id": "new-scientist",
        "name": "New Scientist",
        "description": "Breaking science and technology news from around the world. Exclusive stories and expert analysis on space, technology, health, physics, life and Earth.",
        "url": "https://www.newscientist.com/section/news",
        "category": "science",
        "language": "en",
        "country": "us"
    }, {
        "id": "news-com-au",
        "name": "News.com.au",
        "description": "We say what people are thinking and cover the issues that get people talking balancing Australian and global moments — from politics to pop culture.",
        "url": "http://www.news.com.au",
        "category": "general",
        "language": "en",
        "country": "au"
    }, {
        "id": "newsweek",
        "name": "Newsweek",
        "description": "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
        "url": "https://www.newsweek.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "new-york-magazine",
        "name": "New York Magazine",
        "description": "NYMAG and New York magazine cover the new, the undiscovered, the next in politics, culture, food, fashion, and behavior nationally, through a New York lens.",
        "url": "http://nymag.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "next-big-future",
        "name": "Next Big Future",
        "description": "Coverage of science and technology that have the potential for disruption, and analysis of plans, policies, and technology that enable radical improvement.",
        "url": "https://www.nextbigfuture.com",
        "category": "science",
        "language": "en",
        "country": "us"
    }, {
        "id": "nfl-news",
        "name": "NFL News",
        "description": "The official source for NFL news, schedules, stats, scores and more.",
        "url": "http://www.nfl.com/news",
        "category": "sports",
        "language": "en",
        "country": "us"
    }, {
        "id": "nhl-news",
        "name": "NHL News",
        "description": "The most up-to-date breaking hockey news from the official source including interviews, rumors, statistics and schedules.",
        "url": "https://www.nhl.com/news",
        "category": "sports",
        "language": "en",
        "country": "us"
    }, {
        "id": "politico",
        "name": "Politico",
        "description": "Political news about Congress, the White House, campaigns, lobbyists and issues.",
        "url": "https://www.politico.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "polygon",
        "name": "Polygon",
        "description": "Polygon is a gaming website in partnership with Vox Media. Our culture focused site covers games, their creators, the fans, trending stories and entertainment news.",
        "url": "http://www.polygon.com",
        "category": "entertainment",
        "language": "en",
        "country": "us"
    }, {
        "id": "recode",
        "name": "Recode",
        "description": "Get the latest independent tech news, reviews and analysis from Recode with the most informed and respected journalists in technology and media.",
        "url": "http://www.recode.net",
        "category": "technology",
        "language": "en",
        "country": "us"
    }, {
        "id": "reddit-r-all",
        "name": "Reddit /r/all",
        "description": "Reddit is an entertainment, social news networking service, and news website. Reddit's registered community members can submit content, such as text posts or direct links.",
        "url": "https://www.reddit.com/r/all",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "reuters",
        "name": "Reuters",
        "description": "Reuters.com brings you the latest news from around the world, covering breaking news in business, politics, entertainment, technology, video and pictures.",
        "url": "http://www.reuters.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "rte",
        "name": "RTE",
        "description": "Get all of the latest breaking local and international news stories as they happen, with up to the minute updates and analysis, from Ireland's National Broadcaster.",
        "url": "https://www.rte.ie/news",
        "category": "general",
        "language": "en",
        "country": "ie"
    }, {
        "id": "talksport",
        "name": "TalkSport",
        "description": "Tune in to the world's biggest sports radio station - Live Premier League football coverage, breaking sports news, transfer rumours &amp; exclusive interviews.",
        "url": "http://talksport.com",
        "category": "sports",
        "language": "en",
        "country": "gb"
    }, {
        "id": "techcrunch",
        "name": "TechCrunch",
        "description": "TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.",
        "url": "https://techcrunch.com",
        "category": "technology",
        "language": "en",
        "country": "us"
    }, {
        "id": "techradar",
        "name": "TechRadar",
        "description": "The latest technology news and reviews, covering computing, home entertainment systems, gadgets and more.",
        "url": "http://www.techradar.com",
        "category": "technology",
        "language": "en",
        "country": "us"
    }, {
        "id": "the-american-conservative",
        "name": "The American Conservative",
        "description": "Realism and reform. A new voice for a new generation of conservatives.",
        "url": "http://www.theamericanconservative.com/",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "the-globe-and-mail",
        "name": "The Globe And Mail",
        "description": "The Globe and Mail offers the most authoritative news in Canada, featuring national and international news.",
        "url": "https://www.theglobeandmail.com",
        "category": "general",
        "language": "en",
        "country": "ca"
    }, {
        "id": "the-hill",
        "name": "The Hill",
        "description": "The Hill is a top US political website, read by the White House and more lawmakers than any other site -- vital for policy, politics and election campaigns.",
        "url": "http://thehill.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "the-hindu",
        "name": "The Hindu",
        "description": "The Hindu. latest news, analysis, comment, in-depth coverage of politics, business, sport, environment, cinema and arts from India's national newspaper.",
        "url": "http://www.thehindu.com",
        "category": "general",
        "language": "en",
        "country": "in"
    }, {
        "id": "the-huffington-post",
        "name": "The Huffington Post",
        "description": "The Huffington Post is a politically liberal American online news aggregator and blog that has both localized and international editions founded by Arianna Huffington, Kenneth Lerer, Andrew Breitbart, and Jonah Peretti, featuring columnists.",
        "url": "http://www.huffingtonpost.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "the-irish-times",
        "name": "The Irish Times",
        "description": "The Irish Times online. Latest news including sport, analysis, business, weather and more from the definitive brand of quality news in Ireland.",
        "url": "https://www.irishtimes.com",
        "category": "general",
        "language": "en",
        "country": "ie"
    }, {
        "id": "the-jerusalem-post",
        "name": "The Jerusalem Post",
        "description": "The Jerusalem Post is the leading online newspaper for English speaking Jewry since 1932, bringing news and updates from the Middle East and all over the Jewish world.",
        "url": "https://www.jpost.com/",
        "category": "general",
        "language": "en",
        "country": "is"
    }, {
        "id": "the-lad-bible",
        "name": "The Lad Bible",
        "description": "The LAD Bible is one of the largest community for guys aged 16-30 in the world. Send us your funniest pictures and videos!",
        "url": "https://www.theladbible.com",
        "category": "entertainment",
        "language": "en",
        "country": "gb"
    }, {
        "id": "the-next-web",
        "name": "The Next Web",
        "description": "The Next Web is one of the world’s largest online publications that delivers an international perspective on the latest news about Internet technology, business and culture.",
        "url": "http://thenextweb.com",
        "category": "technology",
        "language": "en",
        "country": "us"
    }, {
        "id": "the-sport-bible",
        "name": "The Sport Bible",
        "description": "TheSPORTbible is one of the largest communities for sports fans across the world. Send us your sporting pictures and videos!",
        "url": "https://www.thesportbible.com",
        "category": "sports",
        "language": "en",
        "country": "gb"
    }, {
        "id": "the-times-of-india",
        "name": "The Times of India",
        "description": "Times of India brings the Latest News and Top Breaking headlines on Politics and Current Affairs in India and around the World, Sports, Business, Bollywood News and Entertainment, Science, Technology, Health and Fitness news, Cricket and opinions from leading columnists.",
        "url": "http://timesofindia.indiatimes.com",
        "category": "general",
        "language": "en",
        "country": "in"
    }, {
        "id": "the-verge",
        "name": "The Verge",
        "description": "The Verge covers the intersection of technology, science, art, and culture.",
        "url": "http://www.theverge.com",
        "category": "technology",
        "language": "en",
        "country": "us"
    }, {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal",
        "description": "WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.",
        "url": "http://www.wsj.com",
        "category": "business",
        "language": "en",
        "country": "us"
    }, {
        "id": "the-washington-post",
        "name": "The Washington Post",
        "description": "Breaking news and analysis on politics, business, world national news, entertainment more. In-depth DC, Virginia, Maryland news coverage including traffic, weather, crime, education, restaurant reviews and more.",
        "url": "https://www.washingtonpost.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "the-washington-times",
        "name": "The Washington Times",
        "description": "The Washington Times delivers breaking news and commentary on the issues that affect the future of our nation.",
        "url": "https://www.washingtontimes.com/",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "time",
        "name": "Time",
        "description": "Breaking news and analysis from TIME.com. Politics, world news, photos, video, tech reviews, health, science and entertainment news.",
        "url": "http://time.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "usa-today",
        "name": "USA Today",
        "description": "Get the latest national, international, and political news at USATODAY.com.",
        "url": "http://www.usatoday.com/news",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "vice-news",
        "name": "Vice News",
        "description": "Vice News is Vice Media, Inc.'s current affairs channel, producing daily documentary essays and video through its website and YouTube channel. It promotes itself on its coverage of \"under - reported stories\".",
        "url": "https://news.vice.com",
        "category": "general",
        "language": "en",
        "country": "us"
    }, {
        "id": "wired",
        "name": "Wired",
        "description": "Wired is a monthly American magazine, published in print and online editions, that focuses on how emerging technologies affect culture, the economy, and politics.",
        "url": "https://www.wired.com",
        "category": "technology",
        "language": "en",
        "country": "us"
    }]

newsSources.map(source => {
    let key = source.name;
    let code = source.country.toUpperCase();
    soucresToCountry[key] = {
        country: code,
        coords: codeToCoords[code],
    }
});



// const Countries = [
//     {
//         "timezones": [
//             "America/Aruba"
//         ], 
//         "latlng": [
//             12.5, 
//             -69.96666666
//         ], 
//         "name": "Aruba", 
//         "country_code": "AW", 
//         "capital": "Oranjestad"
//     }, 
//     {
//         "timezones": [
//             "Asia/Kabul"
//         ], 
//         "latlng": [
//             33, 
//             65
//         ], 
//         "name": "Afghanistan", 
//         "country_code": "AF", 
//         "capital": "Kabul"
//     }, 
//     {
//         "timezones": [
//             "Africa/Luanda"
//         ], 
//         "latlng": [
//             -12.5, 
//             18.5
//         ], 
//         "name": "Angola", 
//         "country_code": "AO", 
//         "capital": "Luanda"
//     }, 
//     {
//         "timezones": [
//             "America/Anguilla"
//         ], 
//         "latlng": [
//             18.25, 
//             -63.16666666
//         ], 
//         "name": "Anguilla", 
//         "country_code": "AI", 
//         "capital": "The Valley"
//     }, 
//     {
//         "timezones": [
//             "Europe/Mariehamn"
//         ], 
//         "latlng": [
//             60.116667, 
//             19.9
//         ], 
//         "name": "\u00c5land Islands", 
//         "country_code": "AX", 
//         "capital": "Mariehamn"
//     }, 
//     {
//         "timezones": [
//             "Europe/Tirane"
//         ], 
//         "latlng": [
//             41, 
//             20
//         ], 
//         "name": "Albania", 
//         "country_code": "AL", 
//         "capital": "Tirana"
//     }, 
//     {
//         "timezones": [
//             "Europe/Andorra"
//         ], 
//         "latlng": [
//             42.5, 
//             1.5
//         ], 
//         "name": "Andorra", 
//         "country_code": "AD", 
//         "capital": "Andorra la Vella"
//     }, 
//     {
//         "timezones": [
//             "Asia/Dubai"
//         ], 
//         "latlng": [
//             24, 
//             54
//         ], 
//         "name": "United Arab Emirates", 
//         "country_code": "AE", 
//         "capital": "Abu Dhabi"
//     }, 
//     {
//         "timezones": [
//             "America/Argentina/Buenos_Aires", 
//             "America/Argentina/Cordoba", 
//             "America/Argentina/Salta", 
//             "America/Argentina/Jujuy", 
//             "America/Argentina/Tucuman", 
//             "America/Argentina/Catamarca", 
//             "America/Argentina/La_Rioja", 
//             "America/Argentina/San_Juan", 
//             "America/Argentina/Mendoza", 
//             "America/Argentina/San_Luis", 
//             "America/Argentina/Rio_Gallegos", 
//             "America/Argentina/Ushuaia"
//         ], 
//         "latlng": [
//             -34, 
//             -64
//         ], 
//         "name": "Argentina", 
//         "country_code": "AR", 
//         "capital": "Buenos Aires"
//     }, 
//     {
//         "timezones": [
//             "Asia/Yerevan"
//         ], 
//         "latlng": [
//             40, 
//             45
//         ], 
//         "name": "Armenia", 
//         "country_code": "AM", 
//         "capital": "Yerevan"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Pago_Pago"
//         ], 
//         "latlng": [
//             -14.33333333, 
//             -170
//         ], 
//         "name": "American Samoa", 
//         "country_code": "AS", 
//         "capital": "Pago Pago"
//     }, 
//     {
//         "timezones": [
//             "Antarctica/McMurdo", 
//             "Antarctica/Casey", 
//             "Antarctica/Davis", 
//             "Antarctica/DumontDUrville", 
//             "Antarctica/Mawson", 
//             "Antarctica/Palmer", 
//             "Antarctica/Rothera", 
//             "Antarctica/Syowa", 
//             "Antarctica/Troll", 
//             "Antarctica/Vostok"
//         ], 
//         "latlng": [
//             -90, 
//             0
//         ], 
//         "name": "Antarctica", 
//         "country_code": "AQ", 
//         "capital": null
//     }, 
//     {
//         "timezones": [
//             "Indian/Kerguelen"
//         ], 
//         "latlng": [
//             -49.25, 
//             69.167
//         ], 
//         "name": "French Southern and Antarctic Lands", 
//         "country_code": "TF", 
//         "capital": "Port-aux-Fran\u00e7ais"
//     }, 
//     {
//         "timezones": [
//             "America/Antigua"
//         ], 
//         "latlng": [
//             17.05, 
//             -61.8
//         ], 
//         "name": "Antigua and Barbuda", 
//         "country_code": "AG", 
//         "capital": "Saint John's"
//     }, 
//     {
//         "timezones": [
//             "Australia/Lord_Howe", 
//             "Antarctica/Macquarie", 
//             "Australia/Hobart", 
//             "Australia/Currie", 
//             "Australia/Melbourne", 
//             "Australia/Sydney", 
//             "Australia/Broken_Hill", 
//             "Australia/Brisbane", 
//             "Australia/Lindeman", 
//             "Australia/Adelaide", 
//             "Australia/Darwin", 
//             "Australia/Perth", 
//             "Australia/Eucla"
//         ], 
//         "latlng": [
//             -27, 
//             133
//         ], 
//         "name": "Australia", 
//         "country_code": "AU", 
//         "capital": "Canberra"
//     }, 
//     {
//         "timezones": [
//             "Europe/Vienna"
//         ], 
//         "latlng": [
//             47.33333333, 
//             13.33333333
//         ], 
//         "name": "Austria", 
//         "country_code": "AT", 
//         "capital": "Vienna"
//     }, 
//     {
//         "timezones": [
//             "Asia/Baku"
//         ], 
//         "latlng": [
//             40.5, 
//             47.5
//         ], 
//         "name": "Azerbaijan", 
//         "country_code": "AZ", 
//         "capital": "Baku"
//     }, 
//     {
//         "timezones": [
//             "Africa/Bujumbura"
//         ], 
//         "latlng": [
//             -3.5, 
//             30
//         ], 
//         "name": "Burundi", 
//         "country_code": "BI", 
//         "capital": "Bujumbura"
//     }, 
//     {
//         "timezones": [
//             "Europe/Brussels"
//         ], 
//         "latlng": [
//             50.83333333, 
//             4
//         ], 
//         "name": "Belgium", 
//         "country_code": "BE", 
//         "capital": "Brussels"
//     }, 
//     {
//         "timezones": [
//             "Africa/Porto-Novo"
//         ], 
//         "latlng": [
//             9.5, 
//             2.25
//         ], 
//         "name": "Benin", 
//         "country_code": "BJ", 
//         "capital": "Porto-Novo"
//     }, 
//     {
//         "timezones": [
//             "Africa/Ouagadougou"
//         ], 
//         "latlng": [
//             13, 
//             -2
//         ], 
//         "name": "Burkina Faso", 
//         "country_code": "BF", 
//         "capital": "Ouagadougou"
//     }, 
//     {
//         "timezones": [
//             "Asia/Dhaka"
//         ], 
//         "latlng": [
//             24, 
//             90
//         ], 
//         "name": "Bangladesh", 
//         "country_code": "BD", 
//         "capital": "Dhaka"
//     }, 
//     {
//         "timezones": [
//             "Europe/Sofia"
//         ], 
//         "latlng": [
//             43, 
//             25
//         ], 
//         "name": "Bulgaria", 
//         "country_code": "BG", 
//         "capital": "Sofia"
//     }, 
//     {
//         "timezones": [
//             "Asia/Bahrain"
//         ], 
//         "latlng": [
//             26, 
//             50.55
//         ], 
//         "name": "Bahrain", 
//         "country_code": "BH", 
//         "capital": "Manama"
//     }, 
//     {
//         "timezones": [
//             "America/Nassau"
//         ], 
//         "latlng": [
//             24.25, 
//             -76
//         ], 
//         "name": "Bahamas", 
//         "country_code": "BS", 
//         "capital": "Nassau"
//     }, 
//     {
//         "timezones": [
//             "Europe/Sarajevo"
//         ], 
//         "latlng": [
//             44, 
//             18
//         ], 
//         "name": "Bosnia and Herzegovina", 
//         "country_code": "BA", 
//         "capital": "Sarajevo"
//     }, 
//     {
//         "timezones": [
//             "America/St_Barthelemy"
//         ], 
//         "latlng": [
//             18.5, 
//             -63.41666666
//         ], 
//         "name": "Saint Barth\u00e9lemy", 
//         "country_code": "BL", 
//         "capital": "Gustavia"
//     }, 
//     {
//         "timezones": [
//             "Europe/Minsk"
//         ], 
//         "latlng": [
//             53, 
//             28
//         ], 
//         "name": "Belarus", 
//         "country_code": "BY", 
//         "capital": "Minsk"
//     }, 
//     {
//         "timezones": [
//             "America/Belize"
//         ], 
//         "latlng": [
//             17.25, 
//             -88.75
//         ], 
//         "name": "Belize", 
//         "country_code": "BZ", 
//         "capital": "Belmopan"
//     }, 
//     {
//         "timezones": [
//             "Atlantic/Bermuda"
//         ], 
//         "latlng": [
//             32.33333333, 
//             -64.75
//         ], 
//         "name": "Bermuda", 
//         "country_code": "BM", 
//         "capital": "Hamilton"
//     }, 
//     {
//         "timezones": [
//             "America/La_Paz"
//         ], 
//         "latlng": [
//             -17, 
//             -65
//         ], 
//         "name": "Bolivia", 
//         "country_code": "BO", 
//         "capital": "Sucre"
//     }, 
//     {
//         "timezones": [
//             "America/Noronha", 
//             "America/Belem", 
//             "America/Fortaleza", 
//             "America/Recife", 
//             "America/Araguaina", 
//             "America/Maceio", 
//             "America/Bahia", 
//             "America/Sao_Paulo", 
//             "America/Campo_Grande", 
//             "America/Cuiaba", 
//             "America/Santarem", 
//             "America/Porto_Velho", 
//             "America/Boa_Vista", 
//             "America/Manaus", 
//             "America/Eirunepe", 
//             "America/Rio_Branco"
//         ], 
//         "latlng": [
//             -10, 
//             -55
//         ], 
//         "name": "Brazil", 
//         "country_code": "BR", 
//         "capital": "Bras\u00edlia"
//     }, 
//     {
//         "timezones": [
//             "America/Barbados"
//         ], 
//         "latlng": [
//             13.16666666, 
//             -59.53333333
//         ], 
//         "name": "Barbados", 
//         "country_code": "BB", 
//         "capital": "Bridgetown"
//     }, 
//     {
//         "timezones": [
//             "Asia/Brunei"
//         ], 
//         "latlng": [
//             4.5, 
//             114.66666666
//         ], 
//         "name": "Brunei", 
//         "country_code": "BN", 
//         "capital": "Bandar Seri Begawan"
//     }, 
//     {
//         "timezones": [
//             "Asia/Thimphu"
//         ], 
//         "latlng": [
//             27.5, 
//             90.5
//         ], 
//         "name": "Bhutan", 
//         "country_code": "BT", 
//         "capital": "Thimphu"
//     }, 
//     {
//         "timezones": [
//             "Europe/Oslo"
//         ],
//         "latlng": [
//             -54.43333333, 
//             3.4
//         ], 
//         "name": "Bouvet Island", 
//         "country_code": "BV", 
//         "capital": null
//     }, 
//     {
//         "timezones": [
//             "Africa/Gaborone"
//         ], 
//         "latlng": [
//             -22, 
//             24
//         ], 
//         "name": "Botswana", 
//         "country_code": "BW", 
//         "capital": "Gaborone"
//     }, 
//     {
//         "timezones": [
//             "Africa/Bangui"
//         ], 
//         "latlng": [
//             7, 
//             21
//         ], 
//         "name": "Central African Republic", 
//         "country_code": "CF", 
//         "capital": "Bangui"
//     }, 
//     {
//         "timezones": [
//             "America/St_Johns", 
//             "America/Halifax", 
//             "America/Glace_Bay", 
//             "America/Moncton", 
//             "America/Goose_Bay", 
//             "America/Blanc-Sablon", 
//             "America/Toronto", 
//             "America/Nipigon", 
//             "America/Thunder_Bay", 
//             "America/Iqaluit", 
//             "America/Pangnirtung", 
//             "America/Atikokan", 
//             "America/Winnipeg", 
//             "America/Rainy_River", 
//             "America/Resolute", 
//             "America/Rankin_Inlet", 
//             "America/Regina", 
//             "America/Swift_Current", 
//             "America/Edmonton", 
//             "America/Cambridge_Bay", 
//             "America/Yellowknife", 
//             "America/Inuvik", 
//             "America/Creston", 
//             "America/Dawson_Creek", 
//             "America/Fort_Nelson", 
//             "America/Vancouver", 
//             "America/Whitehorse", 
//             "America/Dawson"
//         ], 
//         "latlng": [
//             60, 
//             -95
//         ], 
//         "name": "Canada", 
//         "country_code": "CA", 
//         "capital": "Ottawa"
//     }, 
//     {
//         "timezones": [
//             "Indian/Cocos"
//         ], 
//         "latlng": [
//             -12.5, 
//             96.83333333
//         ], 
//         "name": "Cocos (Keeling) Islands", 
//         "country_code": "CC", 
//         "capital": "West Island"
//     }, 
//     {
//         "timezones": [
//             "Europe/Zurich"
//         ], 
//         "latlng": [
//             47, 
//             8
//         ], 
//         "name": "Switzerland", 
//         "country_code": "CH", 
//         "capital": "Bern"
//     }, 
//     {
//         "timezones": [
//             "America/Santiago", 
//             "Pacific/Easter"
//         ], 
//         "latlng": [
//             -30, 
//             -71
//         ], 
//         "name": "Chile", 
//         "country_code": "CL", 
//         "capital": "Santiago"
//     }, 
//     {
//         "timezones": [
//             "Asia/Shanghai", 
//             "Asia/Urumqi"
//         ], 
//         "latlng": [
//             35, 
//             105
//         ], 
//         "name": "China", 
//         "country_code": "CN", 
//         "capital": "Beijing"
//     }, 
//     {
//         "timezones": [
//             "Africa/Abidjan"
//         ], 
//         "latlng": [
//             8, 
//             -5
//         ], 
//         "name": "Ivory Coast", 
//         "country_code": "CI", 
//         "capital": "Yamoussoukro"
//     }, 
//     {
//         "timezones": [
//             "Africa/Douala"
//         ], 
//         "latlng": [
//             6, 
//             12
//         ], 
//         "name": "Cameroon", 
//         "country_code": "CM", 
//         "capital": "Yaound\u00e9"
//     }, 
//     {
//         "timezones": [
//             "Africa/Kinshasa", 
//             "Africa/Lubumbashi"
//         ], 
//         "latlng": [
//             0, 
//             25
//         ], 
//         "name": "DR Congo", 
//         "country_code": "CD", 
//         "capital": "Kinshasa"
//     }, 
//     {
//         "timezones": [
//             "Africa/Brazzaville"
//         ], 
//         "latlng": [
//             -1, 
//             15
//         ], 
//         "name": "Republic of the Congo", 
//         "country_code": "CG", 
//         "capital": "Brazzaville"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Rarotonga"
//         ], 
//         "latlng": [
//             -21.23333333, 
//             -159.76666666
//         ], 
//         "name": "Cook Islands", 
//         "country_code": "CK", 
//         "capital": "Avarua"
//     }, 
//     {
//         "timezones": [
//             "America/Bogota"
//         ], 
//         "latlng": [
//             4, 
//             -72
//         ], 
//         "name": "Colombia", 
//         "country_code": "CO", 
//         "capital": "Bogot\u00e1"
//     }, 
//     {
//         "timezones": [
//             "Indian/Comoro"
//         ], 
//         "latlng": [
//             -12.16666666, 
//             44.25
//         ], 
//         "name": "Comoros", 
//         "country_code": "KM", 
//         "capital": "Moroni"
//     }, 
//     {
//         "timezones": [
//             "Atlantic/Cape_Verde"
//         ], 
//         "latlng": [
//             16, 
//             -24
//         ], 
//         "name": "Cape Verde", 
//         "country_code": "CV", 
//         "capital": "Praia"
//     }, 
//     {
//         "timezones": [
//             "America/Costa_Rica"
//         ], 
//         "latlng": [
//             10, 
//             -84
//         ], 
//         "name": "Costa Rica", 
//         "country_code": "CR", 
//         "capital": "San Jos\u00e9"
//     }, 
//     {
//         "timezones": [
//             "America/Havana"
//         ], 
//         "latlng": [
//             21.5, 
//             -80
//         ], 
//         "name": "Cuba", 
//         "country_code": "CU", 
//         "capital": "Havana"
//     }, 
//     {
//         "timezones": [
//             "America/Curacao"
//         ], 
//         "latlng": [
//             12.116667, 
//             -68.933333
//         ], 
//         "name": "Cura\u00e7ao", 
//         "country_code": "CW", 
//         "capital": "Willemstad"
//     }, 
//     {
//         "timezones": [
//             "Indian/Christmas"
//         ], 
//         "latlng": [
//             -10.5, 
//             105.66666666
//         ], 
//         "name": "Christmas Island", 
//         "country_code": "CX", 
//         "capital": "Flying Fish Cove"
//     }, 
//     {
//         "timezones": [
//             "America/Cayman"
//         ], 
//         "latlng": [
//             19.5, 
//             -80.5
//         ], 
//         "name": "Cayman Islands", 
//         "country_code": "KY", 
//         "capital": "George Town"
//     }, 
//     {
//         "timezones": [
//             "Asia/Nicosia"
//         ], 
//         "latlng": [
//             35, 
//             33
//         ], 
//         "name": "Cyprus", 
//         "country_code": "CY", 
//         "capital": "Nicosia"
//     }, 
//     {
//         "timezones": [
//             "Europe/Prague"
//         ], 
//         "latlng": [
//             49.75, 
//             15.5
//         ], 
//         "name": "Czech Republic", 
//         "country_code": "CZ", 
//         "capital": "Prague"
//     }, 
//     {
//         "timezones": [
//             "Europe/Berlin", 
//             "Europe/Busingen"
//         ], 
//         "latlng": [
//             51, 
//             9
//         ], 
//         "name": "Germany", 
//         "country_code": "DE", 
//         "capital": "Berlin"
//     }, 
//     {
//         "timezones": [
//             "Africa/Djibouti"
//         ], 
//         "latlng": [
//             11.5, 
//             43
//         ], 
//         "name": "Djibouti", 
//         "country_code": "DJ", 
//         "capital": "Djibouti"
//     }, 
//     {
//         "timezones": [
//             "America/Dominica"
//         ], 
//         "latlng": [
//             15.41666666, 
//             -61.33333333
//         ], 
//         "name": "Dominica", 
//         "country_code": "DM", 
//         "capital": "Roseau"
//     }, 
//     {
//         "timezones": [
//             "Europe/Copenhagen"
//         ], 
//         "latlng": [
//             56, 
//             10
//         ], 
//         "name": "Denmark", 
//         "country_code": "DK", 
//         "capital": "Copenhagen"
//     }, 
//     {
//         "timezones": [
//             "America/Santo_Domingo"
//         ], 
//         "latlng": [
//             19, 
//             -70.66666666
//         ], 
//         "name": "Dominican Republic", 
//         "country_code": "DO", 
//         "capital": "Santo Domingo"
//     }, 
//     {
//         "timezones": [
//             "Africa/Algiers"
//         ], 
//         "latlng": [
//             28, 
//             3
//         ], 
//         "name": "Algeria", 
//         "country_code": "DZ", 
//         "capital": "Algiers"
//     }, 
//     {
//         "timezones": [
//             "America/Guayaquil", 
//             "Pacific/Galapagos"
//         ], 
//         "latlng": [
//             -2, 
//             -77.5
//         ], 
//         "name": "Ecuador", 
//         "country_code": "EC", 
//         "capital": "Quito"
//     }, 
//     {
//         "timezones": [
//             "Africa/Cairo"
//         ], 
//         "latlng": [
//             27, 
//             30
//         ], 
//         "name": "Egypt", 
//         "country_code": "EG", 
//         "capital": "Cairo"
//     }, 
//     {
//         "timezones": [
//             "Africa/Asmara"
//         ], 
//         "latlng": [
//             15, 
//             39
//         ], 
//         "name": "Eritrea", 
//         "country_code": "ER", 
//         "capital": "Asmara"
//     }, 
//     {
//         "timezones": [
//             "Africa/El_Aaiun"
//         ], 
//         "latlng": [
//             24.5, 
//             -13
//         ], 
//         "name": "Western Sahara", 
//         "country_code": "EH", 
//         "capital": "El Aai\u00fan"
//     }, 
//     {
//         "timezones": [
//             "Europe/Madrid", 
//             "Africa/Ceuta", 
//             "Atlantic/Canary"
//         ], 
//         "latlng": [
//             40, 
//             -4
//         ], 
//         "name": "Spain", 
//         "country_code": "ES", 
//         "capital": "Madrid"
//     }, 
//     {
//         "timezones": [
//             "Europe/Tallinn"
//         ], 
//         "latlng": [
//             59, 
//             26
//         ], 
//         "name": "Estonia", 
//         "country_code": "EE", 
//         "capital": "Tallinn"
//     }, 
//     {
//         "timezones": [
//             "Africa/Addis_Ababa"
//         ], 
//         "latlng": [
//             8, 
//             38
//         ], 
//         "name": "Ethiopia", 
//         "country_code": "ET", 
//         "capital": "Addis Ababa"
//     }, 
//     {
//         "timezones": [
//             "Europe/Helsinki"
//         ], 
//         "latlng": [
//             64, 
//             26
//         ], 
//         "name": "Finland", 
//         "country_code": "FI", 
//         "capital": "Helsinki"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Fiji"
//         ], 
//         "latlng": [
//             -18, 
//             175
//         ], 
//         "name": "Fiji", 
//         "country_code": "FJ", 
//         "capital": "Suva"
//     }, 
//     {
//         "timezones": [
//             "Atlantic/Stanley"
//         ], 
//         "latlng": [
//             -51.75, 
//             -59
//         ], 
//         "name": "Falkland Islands", 
//         "country_code": "FK", 
//         "capital": "Stanley"
//     }, 
//     {
//         "timezones": [
//             "Europe/Paris"
//         ], 
//         "latlng": [
//             46, 
//             2
//         ], 
//         "name": "France", 
//         "country_code": "FR", 
//         "capital": "Paris"
//     }, 
//     {
//         "timezones": [
//             "Atlantic/Faroe"
//         ], 
//         "latlng": [
//             62, 
//             -7
//         ], 
//         "name": "Faroe Islands", 
//         "country_code": "FO", 
//         "capital": "T\u00f3rshavn"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Chuuk", 
//             "Pacific/Pohnpei", 
//             "Pacific/Kosrae"
//         ], 
//         "latlng": [
//             6.91666666, 
//             158.25
//         ], 
//         "name": "Micronesia", 
//         "country_code": "FM", 
//         "capital": "Palikir"
//     }, 
//     {
//         "timezones": [
//             "Africa/Libreville"
//         ], 
//         "latlng": [
//             -1, 
//             11.75
//         ], 
//         "name": "Gabon", 
//         "country_code": "GA", 
//         "capital": "Libreville"
//     }, 
//     {
//         "timezones": [
//             "Europe/London"
//         ], 
//         "latlng": [
//             54, 
//             -2
//         ], 
//         "name": "United Kingdom", 
//         "country_code": "GB", 
//         "capital": "London"
//     }, 
//     {
//         "timezones": [
//             "Asia/Tbilisi"
//         ], 
//         "latlng": [
//             42, 
//             43.5
//         ], 
//         "name": "Georgia", 
//         "country_code": "GE", 
//         "capital": "Tbilisi"
//     }, 
//     {
//         "timezones": [
//             "Europe/Guernsey"
//         ], 
//         "latlng": [
//             49.46666666, 
//             -2.58333333
//         ], 
//         "name": "Guernsey", 
//         "country_code": "GG", 
//         "capital": "St. Peter Port"
//     }, 
//     {
//         "timezones": [
//             "Africa/Accra"
//         ], 
//         "latlng": [
//             8, 
//             -2
//         ], 
//         "name": "Ghana", 
//         "country_code": "GH", 
//         "capital": "Accra"
//     }, 
//     {
//         "timezones": [
//             "Europe/Gibraltar"
//         ], 
//         "latlng": [
//             36.13333333, 
//             -5.35
//         ], 
//         "name": "Gibraltar", 
//         "country_code": "GI", 
//         "capital": "Gibraltar"
//     }, 
//     {
//         "timezones": [
//             "Africa/Conakry"
//         ], 
//         "latlng": [
//             11, 
//             -10
//         ], 
//         "name": "Guinea", 
//         "country_code": "GN", 
//         "capital": "Conakry"
//     }, 
//     {
//         "timezones": [
//             "America/Guadeloupe"
//         ], 
//         "latlng": [
//             16.25, 
//             -61.583333
//         ], 
//         "name": "Guadeloupe", 
//         "country_code": "GP", 
//         "capital": "Basse-Terre"
//     }, 
//     {
//         "timezones": [
//             "Africa/Banjul"
//         ], 
//         "latlng": [
//             13.46666666, 
//             -16.56666666
//         ], 
//         "name": "Gambia", 
//         "country_code": "GM", 
//         "capital": "Banjul"
//     }, 
//     {
//         "timezones": [
//             "Africa/Bissau"
//         ], 
//         "latlng": [
//             12, 
//             -15
//         ], 
//         "name": "Guinea-Bissau", 
//         "country_code": "GW", 
//         "capital": "Bissau"
//     }, 
//     {
//         "timezones": [
//             "Africa/Malabo"
//         ], 
//         "latlng": [
//             2, 
//             10
//         ], 
//         "name": "Equatorial Guinea", 
//         "country_code": "GQ", 
//         "capital": "Malabo"
//     }, 
//     {
//         "timezones": [
//             "Europe/Athens"
//         ], 
//         "latlng": [
//             39, 
//             22
//         ], 
//         "name": "Greece", 
//         "country_code": "GR", 
//         "capital": "Athens"
//     }, 
//     {
//         "timezones": [
//             "America/Grenada"
//         ], 
//         "latlng": [
//             12.11666666, 
//             -61.66666666
//         ], 
//         "name": "Grenada", 
//         "country_code": "GD", 
//         "capital": "St. George's"
//     }, 
//     {
//         "timezones": [
//             "America/Godthab", 
//             "America/Danmarkshavn", 
//             "America/Scoresbysund", 
//             "America/Thule"
//         ], 
//         "latlng": [
//             72, 
//             -40
//         ], 
//         "name": "Greenland", 
//         "country_code": "GL", 
//         "capital": "Nuuk"
//     }, 
//     {
//         "timezones": [
//             "America/Guatemala"
//         ], 
//         "latlng": [
//             15.5, 
//             -90.25
//         ], 
//         "name": "Guatemala", 
//         "country_code": "GT", 
//         "capital": "Guatemala City"
//     }, 
//     {
//         "timezones": [
//             "America/Cayenne"
//         ], 
//         "latlng": [
//             4, 
//             -53
//         ], 
//         "name": "French Guiana", 
//         "country_code": "GF", 
//         "capital": "Cayenne"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Guam"
//         ], 
//         "latlng": [
//             13.46666666, 
//             144.78333333
//         ], 
//         "name": "Guam", 
//         "country_code": "GU", 
//         "capital": "Hag\u00e5t\u00f1a"
//     }, 
//     {
//         "timezones": [
//             "America/Guyana"
//         ], 
//         "latlng": [
//             5, 
//             -59
//         ], 
//         "name": "Guyana", 
//         "country_code": "GY", 
//         "capital": "Georgetown"
//     }, 
//     {
//         "timezones": [
//             "Asia/Hong_Kong"
//         ], 
//         "latlng": [
//             22.267, 
//             114.188
//         ], 
//         "name": "Hong Kong", 
//         "country_code": "HK", 
//         "capital": "City of Victoria"
//     },
//     {
//         "timezones": [
//             "America/Tegucigalpa"
//         ], 
//         "latlng": [
//             15, 
//             -86.5
//         ], 
//         "name": "Honduras", 
//         "country_code": "HN", 
//         "capital": "Tegucigalpa"
//     }, 
//     {
//         "timezones": [
//             "Europe/Zagreb"
//         ], 
//         "latlng": [
//             45.16666666, 
//             15.5
//         ], 
//         "name": "Croatia", 
//         "country_code": "HR", 
//         "capital": "Zagreb"
//     }, 
//     {
//         "timezones": [
//             "America/Port-au-Prince"
//         ], 
//         "latlng": [
//             19, 
//             -72.41666666
//         ], 
//         "name": "Haiti", 
//         "country_code": "HT", 
//         "capital": "Port-au-Prince"
//     }, 
//     {
//         "timezones": [
//             "Europe/Budapest"
//         ], 
//         "latlng": [
//             47, 
//             20
//         ], 
//         "name": "Hungary", 
//         "country_code": "HU", 
//         "capital": "Budapest"
//     }, 
//     {
//         "timezones": [
//             "Asia/Jakarta", 
//             "Asia/Pontianak", 
//             "Asia/Makassar", 
//             "Asia/Jayapura"
//         ], 
//         "latlng": [
//             -5, 
//             120
//         ], 
//         "name": "Indonesia", 
//         "country_code": "ID", 
//         "capital": "Jakarta"
//     }, 
//     {
//         "timezones": [
//             "Europe/Isle_of_Man"
//         ], 
//         "latlng": [
//             54.25, 
//             -4.5
//         ], 
//         "name": "Isle of Man", 
//         "country_code": "IM", 
//         "capital": "Douglas"
//     }, 
//     {
//         "timezones": [
//             "Asia/Kolkata"
//         ], 
//         "latlng": [
//             20, 
//             77
//         ], 
//         "name": "India", 
//         "country_code": "IN", 
//         "capital": "New Delhi"
//     }, 
//     {
//         "timezones": [
//             "Indian/Chagos"
//         ], 
//         "latlng": [
//             -6, 
//             71.5
//         ], 
//         "name": "British Indian Ocean Territory", 
//         "country_code": "IO", 
//         "capital": "Diego Garcia"
//     }, 
//     {
//         "timezones": [
//             "Europe/Dublin"
//         ], 
//         "latlng": [
//             53, 
//             -8
//         ], 
//         "name": "Ireland", 
//         "country_code": "IE", 
//         "capital": "Dublin"
//     }, 
//     {
//         "timezones": [
//             "Asia/Tehran"
//         ], 
//         "latlng": [
//             32, 
//             53
//         ], 
//         "name": "Iran", 
//         "country_code": "IR", 
//         "capital": "Tehran"
//     }, 
//     {
//         "timezones": [
//             "Asia/Baghdad"
//         ], 
//         "latlng": [
//             33, 
//             44
//         ], 
//         "name": "Iraq", 
//         "country_code": "IQ", 
//         "capital": "Baghdad"
//     }, 
//     {
//         "timezones": [
//             "Atlantic/Reykjavik"
//         ], 
//         "latlng": [
//             65, 
//             -18
//         ], 
//         "name": "Iceland", 
//         "country_code": "IS", 
//         "capital": "Reykjavik"
//     }, 
//     {
//         "timezones": [
//             "Asia/Jerusalem"
//         ], 
//         "latlng": [
//             31.47, 
//             35.13
//         ], 
//         "name": "Israel", 
//         "country_code": "IL", 
//         "capital": "Jerusalem"
//     }, 
//     {
//         "timezones": [
//             "Europe/Rome"
//         ], 
//         "latlng": [
//             42.83333333, 
//             12.83333333
//         ], 
//         "name": "Italy", 
//         "country_code": "IT", 
//         "capital": "Rome"
//     }, 
//     {
//         "timezones": [
//             "America/Jamaica"
//         ], 
//         "latlng": [
//             18.25, 
//             -77.5
//         ], 
//         "name": "Jamaica", 
//         "country_code": "JM", 
//         "capital": "Kingston"
//     }, 
//     {
//         "timezones": [
//             "Europe/Jersey"
//         ], 
//         "latlng": [
//             49.25, 
//             -2.16666666
//         ], 
//         "name": "Jersey", 
//         "country_code": "JE", 
//         "capital": "Saint Helier"
//     }, 
//     {
//         "timezones": [
//             "Asia/Amman"
//         ], 
//         "latlng": [
//             31, 
//             36
//         ], 
//         "name": "Jordan", 
//         "country_code": "JO", 
//         "capital": "Amman"
//     }, 
//     {
//         "timezones": [
//             "Asia/Tokyo"
//         ], 
//         "latlng": [
//             36, 
//             138
//         ], 
//         "name": "Japan", 
//         "country_code": "JP", 
//         "capital": "Tokyo"
//     }, 
//     {
//         "timezones": [
//             "Asia/Almaty", 
//             "Asia/Qyzylorda", 
//             "Asia/Aqtobe", 
//             "Asia/Aqtau", 
//             "Asia/Oral"
//         ], 
//         "latlng": [
//             48, 
//             68
//         ], 
//         "name": "Kazakhstan", 
//         "country_code": "KZ", 
//         "capital": "Astana"
//     }, 
//     {
//         "timezones": [
//             "Africa/Nairobi"
//         ], 
//         "latlng": [
//             1, 
//             38
//         ], 
//         "name": "Kenya", 
//         "country_code": "KE", 
//         "capital": "Nairobi"
//     }, 
//     {
//         "timezones": [
//             "Asia/Bishkek"
//         ], 
//         "latlng": [
//             41, 
//             75
//         ], 
//         "name": "Kyrgyzstan", 
//         "country_code": "KG", 
//         "capital": "Bishkek"
//     }, 
//     {
//         "timezones": [
//             "Asia/Phnom_Penh"
//         ], 
//         "latlng": [
//             13, 
//             105
//         ], 
//         "name": "Cambodia", 
//         "country_code": "KH", 
//         "capital": "Phnom Penh"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Tarawa", 
//             "Pacific/Enderbury", 
//             "Pacific/Kiritimati"
//         ], 
//         "latlng": [
//             1.41666666, 
//             173
//         ], 
//         "name": "Kiribati", 
//         "country_code": "KI", 
//         "capital": "South Tarawa"
//     }, 
//     {
//         "timezones": [
//             "America/St_Kitts"
//         ], 
//         "latlng": [
//             17.33333333, 
//             -62.75
//         ], 
//         "name": "Saint Kitts and Nevis", 
//         "country_code": "KN", 
//         "capital": "Basseterre"
//     }, 
//     {
//         "timezones": [
//             "Asia/Seoul"
//         ], 
//         "latlng": [
//             37, 
//             127.5
//         ], 
//         "name": "South Korea", 
//         "country_code": "KR", 
//         "capital": "Seoul"
//     }, 
//     {
//         "timezones": ["Europe/Belgrade"], 
//         "latlng": [
//             42.666667, 
//             21.166667
//         ], 
//         "name": "Kosovo", 
//         "country_code": "XK", 
//         "capital": "Pristina"
//     }, 
//     {
//         "timezones": [
//             "Asia/Kuwait"
//         ], 
//         "latlng": [
//             29.5, 
//             45.75
//         ], 
//         "name": "Kuwait", 
//         "country_code": "KW", 
//         "capital": "Kuwait City"
//     }, 
//     {
//         "timezones": [
//             "Asia/Vientiane"
//         ], 
//         "latlng": [
//             18, 
//             105
//         ], 
//         "name": "Laos", 
//         "country_code": "LA", 
//         "capital": "Vientiane"
//     }, 
//     {
//         "timezones": [
//             "Asia/Beirut"
//         ], 
//         "latlng": [
//             33.83333333, 
//             35.83333333
//         ], 
//         "name": "Lebanon", 
//         "country_code": "LB", 
//         "capital": "Beirut"
//     }, 
//     {
//         "timezones": [
//             "Africa/Monrovia"
//         ], 
//         "latlng": [
//             6.5, 
//             -9.5
//         ], 
//         "name": "Liberia", 
//         "country_code": "LR", 
//         "capital": "Monrovia"
//     }, 
//     {
//         "timezones": [
//             "Africa/Tripoli"
//         ], 
//         "latlng": [
//             25, 
//             17
//         ], 
//         "name": "Libya", 
//         "country_code": "LY", 
//         "capital": "Tripoli"
//     }, 
//     {
//         "timezones": [
//             "America/St_Lucia"
//         ], 
//         "latlng": [
//             13.88333333, 
//             -60.96666666
//         ], 
//         "name": "Saint Lucia", 
//         "country_code": "LC", 
//         "capital": "Castries"
//     }, 
//     {
//         "timezones": [
//             "Europe/Vaduz"
//         ], 
//         "latlng": [
//             47.26666666, 
//             9.53333333
//         ], 
//         "name": "Liechtenstein", 
//         "country_code": "LI", 
//         "capital": "Vaduz"
//     }, 
//     {
//         "timezones": [
//             "Asia/Colombo"
//         ], 
//         "latlng": [
//             7, 
//             81
//         ], 
//         "name": "Sri Lanka", 
//         "country_code": "LK", 
//         "capital": "Colombo"
//     }, 
//     {
//         "timezones": [
//             "Africa/Maseru"
//         ], 
//         "latlng": [
//             -29.5, 
//             28.5
//         ], 
//         "name": "Lesotho", 
//         "country_code": "LS", 
//         "capital": "Maseru"
//     }, 
//     {
//         "timezones": [
//             "Europe/Vilnius"
//         ], 
//         "latlng": [
//             56, 
//             24
//         ], 
//         "name": "Lithuania", 
//         "country_code": "LT", 
//         "capital": "Vilnius"
//     }, 
//     {
//         "timezones": [
//             "Europe/Luxembourg"
//         ], 
//         "latlng": [
//             49.75, 
//             6.16666666
//         ], 
//         "name": "Luxembourg", 
//         "country_code": "LU", 
//         "capital": "Luxembourg"
//     }, 
//     {
//         "timezones": [
//             "Europe/Riga"
//         ], 
//         "latlng": [
//             57, 
//             25
//         ], 
//         "name": "Latvia", 
//         "country_code": "LV", 
//         "capital": "Riga"
//     }, 
//     {
//         "timezones": [
//             "Asia/Macau"
//         ], 
//         "latlng": [
//             22.16666666, 
//             113.55
//         ], 
//         "name": "Macau", 
//         "country_code": "MO", 
//         "capital": null
//     }, 
//     {
//         "timezones": [
//             "America/Marigot"
//         ], 
//         "latlng": [
//             18.08333333, 
//             -63.95
//         ], 
//         "name": "Saint Martin", 
//         "country_code": "MF", 
//         "capital": "Marigot"
//     }, 
//     {
//         "timezones": [
//             "Africa/Casablanca"
//         ], 
//         "latlng": [
//             32, 
//             -5
//         ], 
//         "name": "Morocco", 
//         "country_code": "MA", 
//         "capital": "Rabat"
//     }, 
//     {
//         "timezones": [
//             "Europe/Monaco"
//         ], 
//         "latlng": [
//             43.73333333, 
//             7.4
//         ], 
//         "name": "Monaco", 
//         "country_code": "MC", 
//         "capital": "Monaco"
//     }, 
//     {
//         "timezones": [
//             "Europe/Chisinau"
//         ], 
//         "latlng": [
//             47, 
//             29
//         ], 
//         "name": "Moldova", 
//         "country_code": "MD", 
//         "capital": "Chi\u0219in\u0103u"
//     }, 
//     {
//         "timezones": [
//             "Indian/Antananarivo"
//         ], 
//         "latlng": [
//             -20, 
//             47
//         ], 
//         "name": "Madagascar", 
//         "country_code": "MG", 
//         "capital": "Antananarivo"
//     }, 
//     {
//         "timezones": [
//             "Indian/Maldives"
//         ], 
//         "latlng": [
//             3.25, 
//             73
//         ], 
//         "name": "Maldives", 
//         "country_code": "MV", 
//         "capital": "Mal\u00e9"
//     }, 
//     {
//         "timezones": [
//             "America/Mexico_City", 
//             "America/Cancun", 
//             "America/Merida", 
//             "America/Monterrey", 
//             "America/Matamoros", 
//             "America/Mazatlan", 
//             "America/Chihuahua", 
//             "America/Ojinaga", 
//             "America/Hermosillo", 
//             "America/Tijuana", 
//             "America/Bahia_Banderas"
//         ], 
//         "latlng": [
//             23, 
//             -102
//         ], 
//         "name": "Mexico", 
//         "country_code": "MX", 
//         "capital": "Mexico City"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Majuro", 
//             "Pacific/Kwajalein"
//         ], 
//         "latlng": [
//             9, 
//             168
//         ], 
//         "name": "Marshall Islands", 
//         "country_code": "MH", 
//         "capital": "Majuro"
//     }, 
//     {
//         "timezones": [
//             "Europe/Skopje"
//         ], 
//         "latlng": [
//             41.83333333, 
//             22
//         ], 
//         "name": "Macedonia", 
//         "country_code": "MK", 
//         "capital": "Skopje"
//     }, 
//     {
//         "timezones": [
//             "Africa/Bamako"
//         ], 
//         "latlng": [
//             17, 
//             -4
//         ], 
//         "name": "Mali", 
//         "country_code": "ML", 
//         "capital": "Bamako"
//     }, 
//     {
//         "timezones": [
//             "Europe/Malta"
//         ], 
//         "latlng": [
//             35.83333333, 
//             14.58333333
//         ], 
//         "name": "Malta", 
//         "country_code": "MT", 
//         "capital": "Valletta"
//     }, 
//     {
//         "timezones": [
//             "Asia/Rangoon"
//         ], 
//         "latlng": [
//             22, 
//             98
//         ], 
//         "name": "Myanmar", 
//         "country_code": "MM", 
//         "capital": "Naypyidaw"
//     }, 
//     {
//         "timezones": [
//             "Europe/Podgorica"
//         ], 
//         "latlng": [
//             42.5, 
//             19.3
//         ], 
//         "name": "Montenegro", 
//         "country_code": "ME", 
//         "capital": "Podgorica"
//     }, 
//     {
//         "timezones": [
//             "Asia/Ulaanbaatar", 
//             "Asia/Hovd", 
//             "Asia/Choibalsan"
//         ], 
//         "latlng": [
//             46, 
//             105
//         ], 
//         "name": "Mongolia", 
//         "country_code": "MN", 
//         "capital": "Ulan Bator"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Saipan"
//         ], 
//         "latlng": [
//             15.2, 
//             145.75
//         ], 
//         "name": "Northern Mariana Islands", 
//         "country_code": "MP", 
//         "capital": "Saipan"
//     }, 
//     {
//         "timezones": [
//             "Africa/Maputo"
//         ], 
//         "latlng": [
//             -18.25, 
//             35
//         ], 
//         "name": "Mozambique", 
//         "country_code": "MZ", 
//         "capital": "Maputo"
//     }, 
//     {
//         "timezones": [
//             "Africa/Nouakchott"
//         ], 
//         "latlng": [
//             20, 
//             -12
//         ], 
//         "name": "Mauritania", 
//         "country_code": "MR", 
//         "capital": "Nouakchott"
//     }, 
//     {
//         "timezones": [
//             "America/Montserrat"
//         ], 
//         "latlng": [
//             16.75, 
//             -62.2
//         ], 
//         "name": "Montserrat", 
//         "country_code": "MS", 
//         "capital": "Plymouth"
//     }, 
//     {
//         "timezones": [
//             "America/Martinique"
//         ], 
//         "latlng": [
//             14.666667, 
//             -61
//         ], 
//         "name": "Martinique", 
//         "country_code": "MQ", 
//         "capital": "Fort-de-France"
//     }, 
//     {
//         "timezones": [
//             "Indian/Mauritius"
//         ], 
//         "latlng": [
//             -20.28333333, 
//             57.55
//         ], 
//         "name": "Mauritius", 
//         "country_code": "MU", 
//         "capital": "Port Louis"
//     }, 
//     {
//         "timezones": [
//             "Africa/Blantyre"
//         ], 
//         "latlng": [
//             -13.5, 
//             34
//         ], 
//         "name": "Malawi", 
//         "country_code": "MW", 
//         "capital": "Lilongwe"
//     }, 
//     {
//         "timezones": [
//             "Asia/Kuala_Lumpur", 
//             "Asia/Kuching"
//         ], 
//         "latlng": [
//             2.5, 
//             112.5
//         ], 
//         "name": "Malaysia", 
//         "country_code": "MY", 
//         "capital": "Kuala Lumpur"
//     }, 
//     {
//         "timezones": [
//             "Indian/Mayotte"
//         ], 
//         "latlng": [
//             -12.83333333, 
//             45.16666666
//         ], 
//         "name": "Mayotte", 
//         "country_code": "YT", 
//         "capital": "Mamoudzou"
//     }, 
//     {
//         "timezones": [
//             "Africa/Windhoek"
//         ], 
//         "latlng": [
//             -22, 
//             17
//         ], 
//         "name": "Namibia", 
//         "country_code": "NA", 
//         "capital": "Windhoek"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Noumea"
//         ], 
//         "latlng": [
//             -21.5, 
//             165.5
//         ], 
//         "name": "New Caledonia", 
//         "country_code": "NC", 
//         "capital": "Noum\u00e9a"
//     }, 
//     {
//         "timezones": [
//             "Africa/Niamey"
//         ], 
//         "latlng": [
//             16, 
//             8
//         ], 
//         "name": "Niger", 
//         "country_code": "NE", 
//         "capital": "Niamey"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Norfolk"
//         ], 
//         "latlng": [
//             -29.03333333, 
//             167.95
//         ], 
//         "name": "Norfolk Island", 
//         "country_code": "NF", 
//         "capital": "Kingston"
//     }, 
//     {
//         "timezones": [
//             "Africa/Lagos"
//         ], 
//         "latlng": [
//             10, 
//             8
//         ], 
//         "name": "Nigeria", 
//         "country_code": "NG", 
//         "capital": "Abuja"
//     }, 
//     {
//         "timezones": [
//             "America/Managua"
//         ], 
//         "latlng": [
//             13, 
//             -85
//         ], 
//         "name": "Nicaragua", 
//         "country_code": "NI", 
//         "capital": "Managua"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Niue"
//         ], 
//         "latlng": [
//             -19.03333333, 
//             -169.86666666
//         ], 
//         "name": "Niue", 
//         "country_code": "NU", 
//         "capital": "Alofi"
//     }, 
//     {
//         "timezones": [
//             "Europe/Amsterdam"
//         ], 
//         "latlng": [
//             52.5, 
//             5.75
//         ], 
//         "name": "Netherlands", 
//         "country_code": "NL", 
//         "capital": "Amsterdam"
//     }, 
//     {
//         "timezones": [
//             "Europe/Oslo"
//         ], 
//         "latlng": [
//             62, 
//             10
//         ], 
//         "name": "Norway", 
//         "country_code": "NO", 
//         "capital": "Oslo"
//     }, 
//     {
//         "timezones": [
//             "Asia/Kathmandu"
//         ], 
//         "latlng": [
//             28, 
//             84
//         ], 
//         "name": "Nepal", 
//         "country_code": "NP", 
//         "capital": "Kathmandu"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Nauru"
//         ], 
//         "latlng": [
//             -0.53333333, 
//             166.91666666
//         ], 
//         "name": "Nauru", 
//         "country_code": "NR", 
//         "capital": "Yaren"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Auckland", 
//             "Pacific/Chatham"
//         ], 
//         "latlng": [
//             -41, 
//             174
//         ], 
//         "name": "New Zealand", 
//         "country_code": "NZ", 
//         "capital": "Wellington"
//     }, 
//     {
//         "timezones": [
//             "Asia/Muscat"
//         ], 
//         "latlng": [
//             21, 
//             57
//         ], 
//         "name": "Oman", 
//         "country_code": "OM", 
//         "capital": "Muscat"
//     }, 
//     {
//         "timezones": [
//             "Asia/Karachi"
//         ], 
//         "latlng": [
//             30, 
//             70
//         ], 
//         "name": "Pakistan", 
//         "country_code": "PK", 
//         "capital": "Islamabad"
//     }, 
//     {
//         "timezones": [
//             "America/Panama"
//         ], 
//         "latlng": [
//             9, 
//             -80
//         ], 
//         "name": "Panama", 
//         "country_code": "PA", 
//         "capital": "Panama City"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Pitcairn"
//         ], 
//         "latlng": [
//             -25.06666666, 
//             -130.1
//         ], 
//         "name": "Pitcairn Islands", 
//         "country_code": "PN", 
//         "capital": "Adamstown"
//     }, 
//     {
//         "timezones": [
//             "America/Lima"
//         ], 
//         "latlng": [
//             -10, 
//             -76
//         ], 
//         "name": "Peru", 
//         "country_code": "PE", 
//         "capital": "Lima"
//     }, 
//     {
//         "timezones": [
//             "Asia/Manila"
//         ], 
//         "latlng": [
//             13, 
//             122
//         ], 
//         "name": "Philippines", 
//         "country_code": "PH", 
//         "capital": "Manila"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Palau"
//         ], 
//         "latlng": [
//             7.5, 
//             134.5
//         ], 
//         "name": "Palau", 
//         "country_code": "PW", 
//         "capital": "Ngerulmud"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Port_Moresby", 
//             "Pacific/Bougainville"
//         ], 
//         "latlng": [
//             -6, 
//             147
//         ], 
//         "name": "Papua New Guinea", 
//         "country_code": "PG", 
//         "capital": "Port Moresby"
//     }, 
//     {
//         "timezones": [
//             "Europe/Warsaw"
//         ], 
//         "latlng": [
//             52, 
//             20
//         ], 
//         "name": "Poland", 
//         "country_code": "PL", 
//         "capital": "Warsaw"
//     }, 
//     {
//         "timezones": [
//             "America/Puerto_Rico"
//         ], 
//         "latlng": [
//             18.25, 
//             -66.5
//         ], 
//         "name": "Puerto Rico", 
//         "country_code": "PR", 
//         "capital": "San Juan"
//     }, 
//     {
//         "timezones": [
//             "Asia/Pyongyang"
//         ], 
//         "latlng": [
//             40, 
//             127
//         ], 
//         "name": "North Korea", 
//         "country_code": "KP", 
//         "capital": "Pyongyang"
//     }, 
//     {
//         "timezones": [
//             "Europe/Lisbon", 
//             "Atlantic/Madeira", 
//             "Atlantic/Azores"
//         ], 
//         "latlng": [
//             39.5, 
//             -8
//         ], 
//         "name": "Portugal", 
//         "country_code": "PT", 
//         "capital": "Lisbon"
//     }, 
//     {
//         "timezones": [
//             "America/Asuncion"
//         ], 
//         "latlng": [
//             -23, 
//             -58
//         ], 
//         "name": "Paraguay", 
//         "country_code": "PY", 
//         "capital": "Asunci\u00f3n"
//     }, 
//     {
//         "timezones": [
//             "Asia/Gaza", 
//             "Asia/Hebron"
//         ], 
//         "latlng": [
//             31.9, 
//             35.2
//         ], 
//         "name": "Palestine", 
//         "country_code": "PS", 
//         "capital": "Ramallah"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Tahiti", 
//             "Pacific/Marquesas", 
//             "Pacific/Gambier"
//         ], 
//         "latlng": [
//             -15, 
//             -140
//         ], 
//         "name": "French Polynesia", 
//         "country_code": "PF", 
//         "capital": "Papeet\u0113"
//     }, 
//     {
//         "timezones": [
//             "Asia/Qatar"
//         ], 
//         "latlng": [
//             25.5, 
//             51.25
//         ], 
//         "name": "Qatar", 
//         "country_code": "QA", 
//         "capital": "Doha"
//     }, 
//     {
//         "timezones": [
//             "Indian/Reunion"
//         ], 
//         "latlng": [
//             -21.15, 
//             55.5
//         ], 
//         "name": "R\u00e9union", 
//         "country_code": "RE", 
//         "capital": "Saint-Denis"
//     }, 
//     {
//         "timezones": [
//             "Europe/Bucharest"
//         ], 
//         "latlng": [
//             46, 
//             25
//         ], 
//         "name": "Romania", 
//         "country_code": "RO", 
//         "capital": "Bucharest"
//     }, 
//     {
//         "timezones": [
//             "Europe/Kaliningrad", 
//             "Europe/Moscow", 
//             "Europe/Simferopol", 
//             "Europe/Volgograd", 
//             "Europe/Kirov", 
//             "Europe/Astrakhan", 
//             "Europe/Samara", 
//             "Europe/Ulyanovsk", 
//             "Asia/Yekaterinburg", 
//             "Asia/Omsk", 
//             "Asia/Novosibirsk", 
//             "Asia/Barnaul", 
//             "Asia/Tomsk", 
//             "Asia/Novokuznetsk", 
//             "Asia/Krasnoyarsk", 
//             "Asia/Irkutsk", 
//             "Asia/Chita", 
//             "Asia/Yakutsk", 
//             "Asia/Khandyga", 
//             "Asia/Vladivostok", 
//             "Asia/Ust-Nera", 
//             "Asia/Magadan", 
//             "Asia/Sakhalin", 
//             "Asia/Srednekolymsk", 
//             "Asia/Kamchatka", 
//             "Asia/Anadyr"
//         ], 
//         "latlng": [
//             60, 
//             100
//         ], 
//         "name": "Russia", 
//         "country_code": "RU", 
//         "capital": "Moscow"
//     }, 
//     {
//         "timezones": [
//             "Africa/Kigali"
//         ], 
//         "latlng": [
//             -2, 
//             30
//         ], 
//         "name": "Rwanda", 
//         "country_code": "RW", 
//         "capital": "Kigali"
//     }, 
//     {
//         "timezones": [
//             "Asia/Riyadh"
//         ], 
//         "latlng": [
//             25, 
//             45
//         ], 
//         "name": "Saudi Arabia", 
//         "country_code": "SA", 
//         "capital": "Riyadh"
//     }, 
//     {
//         "timezones": [
//             "Africa/Khartoum"
//         ], 
//         "latlng": [
//             15, 
//             30
//         ], 
//         "name": "Sudan", 
//         "country_code": "SD", 
//         "capital": "Khartoum"
//     }, 
//     {
//         "timezones": [
//             "Africa/Dakar"
//         ], 
//         "latlng": [
//             14, 
//             -14
//         ], 
//         "name": "Senegal", 
//         "country_code": "SN", 
//         "capital": "Dakar"
//     }, 
//     {
//         "timezones": [
//             "Asia/Singapore"
//         ], 
//         "latlng": [
//             1.36666666, 
//             103.8
//         ], 
//         "name": "Singapore", 
//         "country_code": "SG", 
//         "capital": "Singapore"
//     }, 
//     {
//         "timezones": [
//             "Atlantic/South_Georgia"
//         ], 
//         "latlng": [
//             -54.5, 
//             -37
//         ], 
//         "name": "South Georgia", 
//         "country_code": "GS", 
//         "capital": "King Edward Point"
//     }, 
//     {
//         "timezones": [
//             "Arctic/Longyearbyen"
//         ], 
//         "latlng": [
//             78, 
//             20
//         ], 
//         "name": "Svalbard and Jan Mayen", 
//         "country_code": "SJ", 
//         "capital": "Longyearbyen"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Guadalcanal"
//         ], 
//         "latlng": [
//             -8, 
//             159
//         ], 
//         "name": "Solomon Islands", 
//         "country_code": "SB", 
//         "capital": "Honiara"
//     }, 
//     {
//         "timezones": [
//             "Africa/Freetown"
//         ], 
//         "latlng": [
//             8.5, 
//             -11.5
//         ], 
//         "name": "Sierra Leone", 
//         "country_code": "SL", 
//         "capital": "Freetown"
//     }, 
//     {
//         "timezones": [
//             "America/El_Salvador"
//         ], 
//         "latlng": [
//             13.83333333, 
//             -88.91666666
//         ], 
//         "name": "El Salvador", 
//         "country_code": "SV", 
//         "capital": "San Salvador"
//     }, 
//     {
//         "timezones": [
//             "Europe/San_Marino"
//         ], 
//         "latlng": [
//             43.76666666, 
//             12.41666666
//         ], 
//         "name": "San Marino", 
//         "country_code": "SM", 
//         "capital": "City of San Marino"
//     }, 
//     {
//         "timezones": [
//             "Africa/Mogadishu"
//         ], 
//         "latlng": [
//             10, 
//             49
//         ], 
//         "name": "Somalia", 
//         "country_code": "SO", 
//         "capital": "Mogadishu"
//     }, 
//     {
//         "timezones": [
//             "America/Miquelon"
//         ], 
//         "latlng": [
//             46.83333333, 
//             -56.33333333
//         ], 
//         "name": "Saint Pierre and Miquelon", 
//         "country_code": "PM", 
//         "capital": "Saint-Pierre"
//     }, 
//     {
//         "timezones": [
//             "Europe/Belgrade"
//         ], 
//         "latlng": [
//             44, 
//             21
//         ], 
//         "name": "Serbia", 
//         "country_code": "RS", 
//         "capital": "Belgrade"
//     }, 
//     {
//         "timezones": [
//             "Africa/Juba"
//         ], 
//         "latlng": [
//             7, 
//             30
//         ], 
//         "name": "South Sudan", 
//         "country_code": "SS", 
//         "capital": "Juba"
//     }, 
//     {
//         "timezones": [
//             "Africa/Sao_Tome"
//         ], 
//         "latlng": [
//             1, 
//             7
//         ], 
//         "name": "S\u00e3o Tom\u00e9 and Pr\u00edncipe", 
//         "country_code": "ST", 
//         "capital": "S\u00e3o Tom\u00e9"
//     }, 
//     {
//         "timezones": [
//             "America/Paramaribo"
//         ], 
//         "latlng": [
//             4, 
//             -56
//         ], 
//         "name": "Suriname", 
//         "country_code": "SR", 
//         "capital": "Paramaribo"
//     }, 
//     {
//         "timezones": [
//             "Europe/Bratislava"
//         ], 
//         "latlng": [
//             48.66666666, 
//             19.5
//         ], 
//         "name": "Slovakia", 
//         "country_code": "SK", 
//         "capital": "Bratislava"
//     }, 
//     {
//         "timezones": [
//             "Europe/Ljubljana"
//         ], 
//         "latlng": [
//             46.11666666, 
//             14.81666666
//         ], 
//         "name": "Slovenia", 
//         "country_code": "SI", 
//         "capital": "Ljubljana"
//     }, 
//     {
//         "timezones": [
//             "Europe/Stockholm"
//         ], 
//         "latlng": [
//             62, 
//             15
//         ], 
//         "name": "Sweden", 
//         "country_code": "SE", 
//         "capital": "Stockholm"
//     }, 
//     {
//         "timezones": [
//             "Africa/Mbabane"
//         ], 
//         "latlng": [
//             -26.5, 
//             31.5
//         ], 
//         "name": "Swaziland", 
//         "country_code": "SZ", 
//         "capital": "Lobamba"
//     }, 
//     {
//         "timezones": [
//             "America/Lower_Princes"
//         ], 
//         "latlng": [
//             18.033333, 
//             -63.05
//         ], 
//         "name": "Sint Maarten", 
//         "country_code": "SX", 
//         "capital": "Philipsburg"
//     }, 
//     {
//         "timezones": [
//             "Indian/Mahe"
//         ], 
//         "latlng": [
//             -4.58333333, 
//             55.66666666
//         ], 
//         "name": "Seychelles", 
//         "country_code": "SC", 
//         "capital": "Victoria"
//     }, 
//     {
//         "timezones": [
//             "Asia/Damascus"
//         ], 
//         "latlng": [
//             35, 
//             38
//         ], 
//         "name": "Syria", 
//         "country_code": "SY", 
//         "capital": "Damascus"
//     }, 
//     {
//         "timezones": [
//             "America/Grand_Turk"
//         ], 
//         "latlng": [
//             21.75, 
//             -71.58333333
//         ], 
//         "name": "Turks and Caicos Islands", 
//         "country_code": "TC", 
//         "capital": "Cockburn Town"
//     }, 
//     {
//         "timezones": [
//             "Africa/Ndjamena"
//         ], 
//         "latlng": [
//             15, 
//             19
//         ], 
//         "name": "Chad", 
//         "country_code": "TD", 
//         "capital": "N'Djamena"
//     }, 
//     {
//         "timezones": [
//             "Africa/Lome"
//         ], 
//         "latlng": [
//             8, 
//             1.16666666
//         ], 
//         "name": "Togo", 
//         "country_code": "TG", 
//         "capital": "Lom\u00e9"
//     }, 
//     {
//         "timezones": [
//             "Asia/Bangkok"
//         ], 
//         "latlng": [
//             15, 
//             100
//         ], 
//         "name": "Thailand", 
//         "country_code": "TH", 
//         "capital": "Bangkok"
//     }, 
//     {
//         "timezones": [
//             "Asia/Dushanbe"
//         ], 
//         "latlng": [
//             39, 
//             71
//         ], 
//         "name": "Tajikistan", 
//         "country_code": "TJ", 
//         "capital": "Dushanbe"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Fakaofo"
//         ], 
//         "latlng": [
//             -9, 
//             -172
//         ], 
//         "name": "Tokelau", 
//         "country_code": "TK", 
//         "capital": "Fakaofo"
//     }, 
//     {
//         "timezones": [
//             "Asia/Ashgabat"
//         ], 
//         "latlng": [
//             40, 
//             60
//         ], 
//         "name": "Turkmenistan", 
//         "country_code": "TM", 
//         "capital": "Ashgabat"
//     }, 
//     {
//         "timezones": [
//             "Asia/Dili"
//         ], 
//         "latlng": [
//             -8.83333333, 
//             125.91666666
//         ], 
//         "name": "Timor-Leste", 
//         "country_code": "TL", 
//         "capital": "Dili"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Tongatapu"
//         ], 
//         "latlng": [
//             -20, 
//             -175
//         ], 
//         "name": "Tonga", 
//         "country_code": "TO", 
//         "capital": "Nuku'alofa"
//     }, 
//     {
//         "timezones": [
//             "America/Port_of_Spain"
//         ], 
//         "latlng": [
//             11, 
//             -61
//         ], 
//         "name": "Trinidad and Tobago", 
//         "country_code": "TT", 
//         "capital": "Port of Spain"
//     }, 
//     {
//         "timezones": [
//             "Africa/Tunis"
//         ], 
//         "latlng": [
//             34, 
//             9
//         ], 
//         "name": "Tunisia", 
//         "country_code": "TN", 
//         "capital": "Tunis"
//     }, 
//     {
//         "timezones": [
//             "Europe/Istanbul"
//         ], 
//         "latlng": [
//             39, 
//             35
//         ], 
//         "name": "Turkey", 
//         "country_code": "TR", 
//         "capital": "Ankara"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Funafuti"
//         ], 
//         "latlng": [
//             -8, 
//             178
//         ], 
//         "name": "Tuvalu", 
//         "country_code": "TV", 
//         "capital": "Funafuti"
//     }, 
//     {
//         "timezones": [
//             "Asia/Taipei"
//         ], 
//         "latlng": [
//             23.5, 
//             121
//         ], 
//         "name": "Taiwan", 
//         "country_code": "TW", 
//         "capital": "Taipei"
//     }, 
//     {
//         "timezones": [
//             "Africa/Dar_es_Salaam"
//         ], 
//         "latlng": [
//             -6, 
//             35
//         ], 
//         "name": "Tanzania", 
//         "country_code": "TZ", 
//         "capital": "Dodoma"
//     }, 
//     {
//         "timezones": [
//             "Africa/Kampala"
//         ], 
//         "latlng": [
//             1, 
//             32
//         ], 
//         "name": "Uganda", 
//         "country_code": "UG", 
//         "capital": "Kampala"
//     }, 
//     {
//         "timezones": [
//             "Europe/Kiev", 
//             "Europe/Uzhgorod", 
//             "Europe/Zaporozhye"
//         ], 
//         "latlng": [
//             49, 
//             32
//         ], 
//         "name": "Ukraine", 
//         "country_code": "UA", 
//         "capital": "Kiev"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Johnston", 
//             "Pacific/Midway", 
//             "Pacific/Wake"
//         ], 
//         "latlng": [
//             19.2911437, 
//             166.618332
//         ], 
//         "name": "United States Minor Outlying Islands", 
//         "country_code": "UM", 
//         "capital": null
//     }, 
//     {
//         "timezones": [
//             "America/Montevideo"
//         ], 
//         "latlng": [
//             -33, 
//             -56
//         ], 
//         "name": "Uruguay", 
//         "country_code": "UY", 
//         "capital": "Montevideo"
//     }, 
//     {
//         "timezones": [
//             "America/New_York", 
//             "America/Detroit", 
//             "America/Kentucky/Louisville", 
//             "America/Kentucky/Monticello", 
//             "America/Indiana/Indianapolis", 
//             "America/Indiana/Vincennes", 
//             "America/Indiana/Winamac", 
//             "America/Indiana/Marengo", 
//             "America/Indiana/Petersburg", 
//             "America/Indiana/Vevay", 
//             "America/Chicago", 
//             "America/Indiana/Tell_City", 
//             "America/Indiana/Knox", 
//             "America/Menominee", 
//             "America/North_Dakota/Center", 
//             "America/North_Dakota/New_Salem", 
//             "America/North_Dakota/Beulah", 
//             "America/Denver", 
//             "America/Boise", 
//             "America/Phoenix", 
//             "America/Los_Angeles", 
//             "America/Anchorage", 
//             "America/Juneau", 
//             "America/Sitka", 
//             "America/Metlakatla", 
//             "America/Yakutat", 
//             "America/Nome", 
//             "America/Adak", 
//             "Pacific/Honolulu"
//         ], 
//         "latlng": [
//             38, 
//             -97
//         ], 
//         "name": "United States", 
//         "country_code": "US", 
//         "capital": "Washington D.C."
//     }, 
//     {
//         "timezones": [
//             "Asia/Samarkand", 
//             "Asia/Tashkent"
//         ], 
//         "latlng": [
//             41, 
//             64
//         ], 
//         "name": "Uzbekistan", 
//         "country_code": "UZ", 
//         "capital": "Tashkent"
//     }, 
//     {
//         "timezones": [
//             "Europe/Vatican"
//         ], 
//         "latlng": [
//             41.9, 
//             12.45
//         ], 
//         "name": "Vatican City", 
//         "country_code": "VA", 
//         "capital": "Vatican City"
//     }, 
//     {
//         "timezones": [
//             "America/St_Vincent"
//         ], 
//         "latlng": [
//             13.25, 
//             -61.2
//         ], 
//         "name": "Saint Vincent and the Grenadines", 
//         "country_code": "VC", 
//         "capital": "Kingstown"
//     }, 
//     {
//         "timezones": [
//             "America/Caracas"
//         ], 
//         "latlng": [
//             8, 
//             -66
//         ], 
//         "name": "Venezuela", 
//         "country_code": "VE", 
//         "capital": "Caracas"
//     }, 
//     {
//         "timezones": [
//             "America/Tortola"
//         ], 
//         "latlng": [
//             18.431383, 
//             -64.62305
//         ], 
//         "name": "British Virgin Islands", 
//         "country_code": "VG", 
//         "capital": "Road Town"
//     }, 
//     {
//         "timezones": [
//             "America/St_Thomas"
//         ], 
//         "latlng": [
//             18.35, 
//             -64.933333
//         ], 
//         "name": "United States Virgin Islands", 
//         "country_code": "VI", 
//         "capital": "Charlotte Amalie"
//     }, 
//     {
//         "timezones": [
//             "Asia/Ho_Chi_Minh"
//         ], 
//         "latlng": [
//             16.16666666, 
//             107.83333333
//         ], 
//         "name": "Vietnam", 
//         "country_code": "VN", 
//         "capital": "Hanoi"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Efate"
//         ], 
//         "latlng": [
//             -16, 
//             167
//         ], 
//         "name": "Vanuatu", 
//         "country_code": "VU", 
//         "capital": "Port Vila"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Wallis"
//         ], 
//         "latlng": [
//             -13.3, 
//             -176.2
//         ], 
//         "name": "Wallis and Futuna", 
//         "country_code": "WF", 
//         "capital": "Mata-Utu"
//     }, 
//     {
//         "timezones": [
//             "Pacific/Apia"
//         ], 
//         "latlng": [
//             -13.58333333, 
//             -172.33333333
//         ], 
//         "name": "Samoa", 
//         "country_code": "WS", 
//         "capital": "Apia"
//     }, 
//     {
//         "timezones": [
//             "Asia/Aden"
//         ], 
//         "latlng": [
//             15, 
//             48
//         ], 
//         "name": "Yemen", 
//         "country_code": "YE", 
//         "capital": "Sana'a"
//     }, 
//     {
//         "timezones": [
//             "Africa/Johannesburg"
//         ], 
//         "latlng": [
//             -29, 
//             24
//         ], 
//         "name": "South Africa", 
//         "country_code": "ZA", 
//         "capital": "Pretoria"
//     }, 
//     {
//         "timezones": [
//             "Africa/Lusaka"
//         ], 
//         "latlng": [
//             -15, 
//             30
//         ], 
//         "name": "Zambia", 
//         "country_code": "ZM", 
//         "capital": "Lusaka"
//     }, 
//     {
//         "timezones": [
//             "Africa/Harare"
//         ], 
//         "latlng": [
//             -20, 
//             30
//         ], 
//         "name": "Zimbabwe", 
//         "country_code": "ZW", 
//         "capital": "Harare"
//     }
// ]

// const newsApiCountries = 'aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltlvmamxmyngnlnonzphplptrorsrusasesgsiskthtrtwuausveza'
// export const newsApiCountriesArray = new Array();
// for(let i = 0; i <= newsApiCountries.length; i+=2){
//     newsApiCountriesArray.push(newsApiCountries.slice(i, i+2).toUpperCase())
// }

// let filteredCountries = Countries.filter(country => newsApiCountriesArray.includes(country["country_code"]));



// filteredCountries.forEach((country) => {
//     let key1 = country.name;
//     let key2 = country['country_code'];
//     nameToCoords[key1] = country.latlng;
//     codeToCoords[key2] = country.latlng;
// })

// console.log(JSON.stringify(nameToCoords));
// console.log(JSON.stringify(codeToCoords));
