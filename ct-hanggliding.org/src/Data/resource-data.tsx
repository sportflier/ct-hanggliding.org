const ResourceLinks = [
    { category: "club", name: "Hudson Valley Free Flyers", description: "A non-profit organization dedicated to flying foot-launchable aircraft in the foothills of the Catskill mountains, New York.", url: "https://hudsonvalleyfreeflyers.org", image: "https://hudsonvalleyfreeflyers.org/wp-content/uploads/2020/12/IMG_2437f-best-hd-hero.jpg" },
    { category: "club", name: "Hyner Club", description: "Central PA", url: "http://www.hynerclub.com/index.php", image: "http://www.hynerclub.com/assets/images/logo_small.jpg" },
    { category: "club", name: "Massachusetts Hang Gliding Association", description: "", url: "http://www.masshga.org", image: "https://i0.wp.com/www.masshga.org/wp-content/uploads/2018/05/cropped-IMG_0367.jpg?w=1575&ssl=1" },
    { category: "club", name: "Mount Brace Outdoor Club", description: "Millerton, NY", url: "https://mtbraceclub.com", image: "https://img1.wsimg.com/isteam/ip/ac31399f-3ae5-439e-8676-86738d1eb7d9/header.jpg/:/rs=w:1279,m" },
    { category: "club", name: "New England Paragliding & Hang-Gliding Club", description: "", url: "https://nephc.org", image: "https://nephc.org/wp-content/uploads/2019/01/cropped-cropped-IMG_9329-2-1320x0.jpg" },
    { category: "club", name: "Rochester Area Flyers", description: "", url: "http://www.rochesterareaflyers.com", image: "https://images.squarespace-cdn.com/content/v1/56453a9de4b0177ad4138b5c/1613593875380-RVI149NMDEERN6WHJCTJ/FlyingHG+East4MirrorRightBorder.jpg?format=750w" },
    { category: "club", name: "Vermont Hang Gliding Association", description: "", url: "https://vhga.aero", image: "https://vhga.aero/wp-content/uploads/2021/11/titlebar_2_vhpa.jpg" },
    { category: "other", name: "Foundation For Free Flight", description: "Dedicated to promoting and preserving free flight", url: "https://foundationforfreeflight.org", image: "https://foundationforfreeflight.org/wp-content/uploads/2020/05/PGhdr_AB050903.jpg" },
    { category: "other", name: "HangGliding.Org", description: "News, Articles, Classifieds, Forums", url: "https://www.hanggliding.org", image: "https://www.hanggliding.org/wp-content/uploads/2017/06/hgorfHEADER.jpg" },
    { category: "other", name: "The Cloudbase Foundation", description: "Using free flight for charity work", url: "https://www.thecloudbasefoundation.org", image: "https://images.squarespace-cdn.com/content/v1/5d1793f21653650001c2a908/1561826742462-77RDHEXXAJHPSSP6KFYZ/CBF1.jpg?format=500w" },
    { category: "other", name: "The Oz Report", description: "News, Articles, Classifieds, Forums", url: "http://ozreport.com", image: "http://ozreport.com/images/ozReportLogoHM1_left.64n.gif" },
    { category: "other", name: "United States Hang Gliding & Paragliding Association", description: "", url: "https://www.ushpa.org", image: "https://www.ushpa.org/images/ushpa/home/xl_background-home-felix.jpg" },
    { category: "other", name: "Wills Wing Hang Gliding Equipment", description: "", url: "https://www.willswing.com", image: "https://www.willswing.com/wp-content/uploads/2021/03/monarch_falcon_voight.jpg" },
    { category: "school", name: "Blue Sky", description: "Manquin, VA", url: "https://www.blueskyhg.com", image: "https://www.blueskyhg.com/rotatorpictures/DSCN8715.jpg" },
    { category: "school", name: "Eco-Flight Hang Gliding", description: "Central Massachusetts - Robert Stewart, (413) 253-5852", url: "mailto:ecoflighthg@gmail.com", image: "" },
    { category: "school", name: "Hang Glide New England", description: "New Braintree, MA", url: "http://www.hangglidenewengland.com", image: "https://hangglidenewengland.com/wp-content/uploads/2021/04/vlcsnap-2015-03-16-18h33m35s31.png" },
    { category: "school", name: "Kitty Hawk Kites", description: "Multiple locations along the East Coast", url: "https://www.kittyhawk.com/adventures/hang-gliding/", image: "https://374b8a2fe67x3k946j2kbrmh-wpengine.netdna-ssl.com/wp-content/uploads/2012/01/IMG_2280g-e1328210986171-1800x1200.jpg" },
    { category: "school", name: "Lookout Mountain Flight Park", description: "Rising Fawn, GA", url: "https://www.flylookout.com", image: "https://lirp.cdn-website.com/689dcbfc/dms3rep/multi/opt/DSC_1786-1920w.jpg" },
    { category: "school", name: "Morningside Flight Park", description: "Claremont, NH", url: "https://flymorningside.kittyhawk.com", image: "https://flymorningside.kittyhawk.com/wp-content/uploads/2015/06/Rob-at-Landing-at-Dusk-1800x1200.jpg" },
    { category: "school", name: "Susquehanna Flight Park", description: "Cooperstown, NY", url: "https://cooperstownhanggliding.com", image: "https://b2u.e84.myftpupload.com/wp-content/uploads/2021/04/imagejpeg_1.jpg" },
    { category: "school", name: "The Florida Ridge Airsports Park", description: "Clewiston, FL", url: "https://www.thefloridaridge.com", image: "https://www.thefloridaridge.com/files/4514/4717/8422/slide1.jpg" },
    { category: "school", name: "Thermal Valley Hang Gliding", description: "Lenoir, NC", url: "https://www.thermalvalley.net/", image: "https://www.thermalvalley.net/x/cdn/?https://storage.googleapis.com/wzukusers/user-28936792/images/5be0f055d74b1hiJ2E70/O-first-hang-time_Moment.jpg" },
    { category: "school", name: "US Hang Gliding", description: "Middletown, NY ", url: "https://www.facebook.com/ushginc", image: "" },
    { category: "school", name: "Wallaby Ranch", description: "Davenport, FL", url: "http://www.wallaby.com", image: "http://www.wallaby.com/images/newtop.jpg" },
    { category: "school", name: "Wilotree Park", description: "Groveland, FL", url: "https://www.wilotreepark.com", image: "https://static.wixstatic.com/media/c0c89d_6a874ef3657840a1a64d8cfa221e859d~mv2.jpeg/v1/fill/w_270,h_234,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c0c89d_6a874ef3657840a1a64d8cfa221e859d~mv2.jpeg" },
    { category: "video", name: "Big Blue Sky", description: "Documentary of the history of hang gliding", url: "https://youtu.be/-hRSUjJFmCc", image: "https://i.ytimg.com/vi/-hRSUjJFmCc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUMxZrMNITXiiDNlaETcCCishrvQ" },
    { category: "video", name: "Free Flyers", description: "Documentary profiles hang gliding in Utah", url: "https://youtu.be/dtFpURLUO0I", image: "https://i.ytimg.com/vi/dtFpURLUO0I/mqdefault.jpg" },
    { category: "video", name: "Live The Dream", description: "Documentary of a young woman learning how to fly, very inspirational", url: "https://vimeo.com/46406544", image: "https://i.vimeocdn.com/video/441586533-ffbd03c1d0cdac7583e704b42b1962b832bd8942a1e4b1d9e226df3e51f34006-d?mw=1000&mh=563" },
    { category: "video", name: "The Flyingest Flying", description: "Documentary of the history of hang gliding. (2003, full movie)", url: "https://youtu.be/YOHLtRna5Zk", image: "https://i.ytimg.com/vi/YOHLtRna5Zk/mqdefault.jpg" },
]

export const ResourceLinkGroups = [
    { category: "school", name: "Schools & Flight Parks" },
    { category: "club", name: "Local Clubs" },
    { category: "other", name: "Other Resources" },
    { category: "video", name: "Professional Films & Documentaries" },

]

export default ResourceLinks;