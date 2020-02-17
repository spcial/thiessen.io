import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'
import thumb07 from '../assets/images/thumbs/07.jpg'
import thumb08 from '../assets/images/thumbs/08.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'
import full07 from '../assets/images/fulls/07.jpg'
import full08 from '../assets/images/fulls/08.jpg'

const DEFAULT_IMAGES = [
    { id: '8', src: full08, thumbnail: thumb08, caption: 'Robert Bosch GmbH, Dresden, Germany', description: 'Working as a Data Engineer for 300mm Semiconductor Lab Startup.'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Fraunhofer CML, Hamburg, Germany', description: 'Worked as Software Engineer and Research Associate with development tasks in C#, .NET and Python for workforce scheduling and machine learning.'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Vizrt, Bergen, Norway', description: 'Worked as DevOps-Engineer with development tasks in Python and C++ for a backend transcoding engine. Video & Audio Output Test Automation as well as CI & CD with Jenkins.'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Generali, Hamburg, Germany', description: 'Worked as Software-Developer and IT Consultant for a web-based workflow application written in Java, using OracleDB while migrating from BPM Process Engine to Camunda BPM. Moreover doing a (successful) PoC with Behaviour Driven Development.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Capgemini, Hamburg, Germany', description: 'Worked as Software-Developer in a multi-national distributed team for a international logistics client. Development of a package track & trace application in Java and with great focus on Test Automation.'},
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Freelance - RiskAhead.net', description: 'Side-project where I developed a native android app in Java using REST services in PHP with access to a MySQL database. Huge focus on performance and scalability.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Freelance - MyIdealAd.com', description: 'Freelance side-project with process automation in ZAPIER, Python scripting, development and hosting of a Wordpress Web-Site.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };
	
	    this.handleSubmit = this.handleSubmit.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    handleSubmit(event) {
    	event.preventDefault();
    	if (!event.target.checkValidity()) {
    		this.setState({
        	invalid: true,
        	displayErrors: true,
      	});
      	return;
    }
    const form = event.target;
    const data = new FormData(form);

    for (let name of data.keys()) {
      const input = form.elements[name];
      const parserName = input.dataset.parse;
      console.log('parser name is', parserName);
      if (parserName) {
        const parsedValue = inputParsers[parserName](data.get(name))
        data.set(name, parsedValue);
      }
    }

    data.append('token', 'gdfgdfashdf');
    data.append('receiver', 'dennis@thiessen.io');
    data.append('subject', 'Contact from www.thiessen.io');

    this.setState({
    	res: stringifyFormData(data),
      invalid: false,
      displayErrors: false,
    });

    fetch('https://www.riskahead.net/api/v1/web/sendcustommail', {
       method: 'POST',
       body: data,
     });
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Dennis Thiessen - IT Software Engineering"
        const siteDescription = "Portfolio of Dennis Thiessen - IT Software Engineering"
	    const { res, invalid, displayErrors } = this.state;

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription}/>
                        <html lang="en" />
                        <meta charset="utf-8"/>
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h3>Are you looking for a freelance Full-Stack Developer / Consultant? <br />Look no more!</h3>
                        </header>
                        <p>I&apos;m a <b>Software Engineer</b> and <b>IT Consultant</b> who has work experience in <b>Java</b>, <b>C#</b> and <b>Python</b>. I did multiple projects for various companies and below you can find a short resume and project portfolio. 
                        If you are looking for a passionate <b>IT Freelancer</b>, don&apos;t hesitate to contact me. I mostly work in the D-A-CH area but I am also available for international remote work.</p>
                    
                		<p>Here is a short enumeration of my skills & tools. Further below you can find the project & companies I have worked with. For a full CV, or if you need further information, just contact me.</p>
                		
                        <p><strong>Programming &amp; Script &amp; Markup Languages: </strong></p>
                        <ul>
                        <li>Python</li>
                        <li>Java, J2EE</li>
                        <li>JavaScript</li>
                        <li>C# &amp; .NET</li>
                        <li>PHP</li>
                        <li>HTML &amp; CSS</li>
                        <li>XML &amp; JSON</li>
                        </ul>
                        <p><strong>Databases</strong>:</p>
                        <ul>
                        <li>MySQL</li>
                        <li>MS SQL</li>
                        <li>PostgreSQL</li>
                        <li>CouchDB</li>
                        </ul>
                        <p><strong>Tools &amp; Frameworks:</strong></p>
                        <ul>
                        <li>IDEs: Eclipse, IntelliJ, Android Studio</li>
                        <li>Versioning: git, mercurial, SVN</li>
                        <li>Project Management: JIRA, Confluence, GitLab</li>
                        <li>RPA: UIPath</li>
                        <li>Test Automation: JUnit, Selenium, Serenity BDD</li>
                        <li>Frameworks: .NET, Entity, Spring, PyMath, Pandas, TensorFlow</li>
                        <li>Build &amp; Virtualization: Jenkins, Docker, Kubernetes</li>
                        <li>Web: Apache, RESTless Web-Services</li>
                        </ul>
                        <p><strong>Certifications:</strong></p>
                        <ul>
                        <li>Certified Professional for Software Architecture, Foundation Level (ISAQB)</li>
                        <li>Robotic Process Automation / UIPath Developer Training (UIPath)</li>
                        <li>Camunda BPM Process Engine Basic & Advanced Training (Camunda Services GmbH)</li>
                        <li>ITIL v3 Foundation Certificate in IT Service Management (Serview GmbH)</li>
                        <li>IT Project Management (Integrata AG)</li>
                        </ul>
                        <p><strong>Spoken Languages:</strong></p>
                        <ul>
                        <li>German (mother tongue)</li>
                        <li>English (Fluent)</li>
                        <li>Russian (Basic)</li>
                        <li>Norwegian (Intermediate)</li>
                        </ul>
		            </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                    </section>

                    <section id="three">
                        <h2>Send request</h2>
                        <p>You can contact me via this contact form. <br />I will get in touch with you <b>ASAP</b>.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form onSubmit={this.handleSubmit} noValidate className={displayErrors ? 'displayErrors' : ''}>
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" required/></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" required/></div>
                                        <div className="12u"><textarea name="text" id="text" placeholder="Message" rows="4" required></textarea></div>
                                    </div>
                                <ul className="actions">
                                    <br />
                                   <li><input type="submit" value="Send Message" /></li>
                                </ul>
		    		            </form>

                                <div className="res-block">
                                  {invalid && (
                                    <ShakingError text="Form is not valid, please check your input." />
                                  )}
                                  {!invalid && res && (
                                    <ShakingError text="Message sent successfully." />
                                  )}
                                </div>
                            </div>

                            


                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Dresden<br />
                                        Germany
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        (on request)
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:dennis@thiessen.io">dennis@thiessen.io</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    

                </div>
            </Layout>
        )
    }
}

const inputParsers = {
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};

class ShakingError extends React.Component {
	constructor() { super(); this.state = { key: 0 }; }

	componentWillReceiveProps() {
  	this.setState({ key: ++this.state.key });
  }
  
  render() {
  	return <div key={this.state.key} className="bounce">{this.props.text}</div>;
  }
}

function stringifyFormData(fd) {
  const data = {};
	for (let key of fd.keys()) {
  	data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}

export default HomeIndex
