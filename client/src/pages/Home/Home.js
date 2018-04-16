import React, {Component} from 'react';
import validator from 'react-validation';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
    Grid,
    Row,
    Col,
    Nav,
    Navbar,
    NavItem,
    Button,
    FormGroup,
    FormControl,
    ControlLabel, 
    Modal,
} from 'react-bootstrap';
import {Img} from '../../components/Images';
import PORT from '../../utils/PORTFOLIO';
import ADMIN from "../../utils/ADMIN";

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            index: 0,
            carousel: 0,
            render: 0,
            portfolio: [],
            connect: [],
            admin: [],
            myself: [],
            background_img: '',
            profile_img: '',
            write_this: `the project background
            your role and responsibilities 
            your process (if related)
            which programs you used (if related) 
            the outcome.`,
            show: false,
            project_name: '',
            project_caption: '',
            project_img: '',
            project_header: '',
            project_techs: '',
            project_github: '',
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    
    componentDidMount() {
        this.loadContent();
    };
    
    loadContent() {
        PORT
        .Get()
            .then(res => {
                // console.log(res);
                this.setState({portfolio: res.data});
                this.Writer();
            })
            .catch(err => console.log(err));
            
        ADMIN
            .Get()
            .then(res => {
                this.setMyAdminStates(res.data[this.state.index]);
            })
            .catch(err => console.log(err));
            
    };
    setMyAdminStates(data) {
        this.setState({admin: data});
        this.setState({myself: data.myself});
        this.setState({connect: data.connect_imgs});
        //  console.log(this.state.myself); this.setState({profile_img: data.profile_img})
    }
    
    renderContent(eventkey) {
        this.setState({render: eventkey});
    }
    
    getValidationEmail() {
        if(!this.state.email === ''){
            if (validator.isEmail(this.state.email));
            else return 'error';
            return null;
        }
    }
    
    handleName = event => this.setState({ name: event.target.value });
    handleEmail = event => this.setState({ email: event.target.value });
    handleMessage = event => this.setState({ message: event.target.value });
    
    openModal(img, name, header, caption, techs, github){
        this.setState({ project_img : img });
        this.setState({ project_name: name });
        this.setState({ project_header : header });
        this.setState({ project_caption: caption });
        this.setState({ project_techs : techs });
        this.setState({ project_github : github });
        this.setState({ show: true });
    }

    closeModal() {
        this.setState({ show: false });
    }

    render() {
        return (
            <body>
                <Navbar fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>

                            <a href="/">
                                <strong>
                                    <span className='l'>L</span>
                                    <span className='t'>T</span>
                                </strong>
                            </a>

                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem
                                eventKey="0"
                                onSelect={() => {
                                this.renderContent(0)
                            }}>
                                <h4>Home</h4>
                            </NavItem>
                            <NavItem
                                eventKey="1"
                                onSelect={() => {
                                this.renderContent(1)
                            }}>
                                <h4>About Me</h4>
                            </NavItem>
                            <NavItem
                                eventKey="2"
                                onSelect={() => {
                                this.renderContent(2)
                            }}>
                                <h4>Portfolio</h4>
                            </NavItem>
                            <NavItem
                                eventKey="3"
                                onSelect={() => {
                                this.renderContent(3)
                            }}>
                                <h4>Contact Me</h4>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div>
                    <Img
                        className="background_img"
                        alt="background_img"
                        src={this.state.admin.background_img}/>
                </div>
                <Grid>
                    <Row>
                    {this.state.render === 0
                        ?
                        <span>
                            <Col md={12}>
                                <Img
                                    className="profile_img margin-top w3-animate-opacity"
                                    alt="profile_img"
                                    src={this.state.admin.profile_img}/>
                            </Col>
                            <Col md={12} className='text-center'>
                                <h1 className=' white w3-animate-opacity'>
                                Thanks for the opportunity to show my hobby
                                <br/>
                                My passion
                                <br/>
                                And to present myself as developer
                                </h1>
                            </Col>
                        </span>
                        :  this.state.render === 1
                            ? <span>
                                    <Col md={2} mdOffset={5} xs={4} xsOffset={4}>
                                        <Img
                                            className="profile_img margin-top w3-animate-left"
                                            alt="profile_img"
                                            src={this.state.admin.profile_img}/>    
                                    </Col>
                                    <h2 className='white'>{this.state.admin.about_header}</h2>
                                    <hr/>
                                    <Col md={10} mdOffset={1} xs={10} xsOffset={1} className='background  w3-animate-right'>
                                        <p className='about_caption white w3-animate-opacity'>
                                            {this.state.admin.about_caption}
                                        </p>
                                    </Col>
                                </span>
                            : this.state.render === 2
                                ? <span>
                                        <Col md={12}>
                                            <h2 className='margin-top white'>Portfolio</h2>
                                            <hr/>
                                        </Col>
                                        {this.state.portfolio.length
                                            ? (
                                                <span>
                                                    {this
                                                        .state
                                                        .portfolio
                                                        .map(project => (
                                                            <Col md={6}>
                                                                <div key={project.id} className='background w3-container w3-center w3-animate-zoom'>
                                                                    <a href={project.link} target='_blank'>
                                                                        <Img className='portfolio_img' alt='portfolio_img' src={project.img}/>
                                                                    </a>
                                                                </div>
                                                                    <Button
                                                                        className='project_name blue039be5 w3-container w3-center w3-animate-zoom'
                                                                        onClick={() => {
                                                                        this.openModal( project.img, project.name, project.header, project.caption, project.techs,  project.github)
                                                                    }}>{project.name}</Button>
                                                            </Col>
                                                        ))}
                                                </span>
                                            )
                                            : <span/>}
                                    </span>
                                : this.state.render === 3
                                    ? <span>
                                            <Col md={7}>
                                                <h2 className='margin-top white w3-animate-opacity'>{this.state.admin.contact_header}</h2>
                                                <hr/>
                                                <form>
                                                    <FormGroup
                                                        controlId="formBasicText">
                                                        <ControlLabel className='white'>Name</ControlLabel>
                                                        <FormControl
                                                            type="text"
                                                            value={this.state.name}
                                                            placeholder=""
                                                            onChange={this.handleName}/>
                                                        <FormControl.Feedback/>
                                                    </FormGroup>
                                                    <FormGroup
                                                        controlId="formBasicText">
                                                        <ControlLabel className='white'>Email</ControlLabel>
                                                        <FormControl
                                                            type="text"
                                                            value={this.state.email}
                                                            placeholder=""
                                                            onChange={this.handleEmail}/>
                                                        <FormControl.Feedback/>
                                                    </FormGroup>
                                                    <FormGroup controlId="formControlsTextarea">
                                                        <ControlLabel className='white'>Message</ControlLabel>
                                                        <FormControl componentClass="textarea" placeholder="textarea" 
                                                        type="text"
                                                        value={this.state.message}
                                                        onChange={this.handleMessage}/>
                                                    </FormGroup>
                                                </form>
                                            </Col>
                                            <Col md={5}>
                                                <h2 className='margin-top white w3-animate-opacity'>
                                                    {this.state.admin.connect_header}
                                                </h2>
                                                <hr/>
                                                <Col md={12}>
                                                {this.state.connect.length
                                                 ? (
                                                     <span>
                                                        {this.state.connect.map(connect=>(
                                                            <span key={connect.id}>
                                                            <Col md={4}>
                                                                <a href={connect.link} target='_blank'>
                                                                <Img className='connect_img w3-animate-right' alt='connect_img' src={connect.img}/>
                                                                </a>
                                                             </Col>
                                                            </span>
                                                         ))}
                                                     </span>
                                                 )
                                                 : <span/>} 
                                                 </Col>
                                                <Col md={12}>
                                                <div className='background margin-top'>
                                                    <p className='about_caption white w3-animate-opacity'>
                                                        {this.state.admin.connect_caption}
                                                    </p>
                                                </div>
                                                </Col>
                                            </Col>
                                        </span>
                                    : <span />}
                        <Modal show={this.state.show} onHide={this.closeModal}>
                            <Modal.Header closeButton>
                                <Modal.Title><img className='modal_img' src={this.state.project_img} alt='modal_img'/>{'  '}<h3>{this.state.project_name}</h3></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h3>
                                    {this.state.project_header}
                                </h3>
                                <h4>
                                    {this.state.project_caption}
                                </h4>
                                <h3>
                                    Technologies I Have Used
                                </h3>
                                <h4>
                                    {this.state.project_techs}
                                </h4>
                            </Modal.Body>
                            <a href={this.state.project_github} target='_blank'>
                            <Img className='project_github' src='http://res.cloudinary.com/promanager/image/upload/v1519439870/gitHub_htdxaz.png'/></a>
                            <Modal.Footer>
                                <Button onClick={this.closeModal}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </Row>
                </Grid>
                <div className='margin-top'/>
                <footer class="page-footer">
                    <div class="container">
                        <div class="row">
                            <div class="footer">
                                <small class="small-footer">©copyright LT</small>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        )
    }
}

export default Home;

/*
<Col md={7}>

</Col>
<Col md={5}>
<h2 class="page-header col-sm-12">
Connect With Me
</h2>
<hr/>
<div class="col-ls-4 col-md-4 col-sm-4">
<a href="https://github.com/tloiola1" target="_blank">
    <img src="assets/images/gitHub.png" alt="gitHub" class="igf"/>
</a>
</div>
<div class="col-ls-4 col-md-4 col-sm-4">
<a href="https://www.linkedin.com/in/tarciso-loiola-264a1437/" target="_blank">
    <img src="assets/images/linkedin.png" alt="LinkedIn" class="igf"/>
</a>
</div>
<div class="col-ls-4 col-md-4 col-sm-4">
<a href="https://www.freecodecamp.com/tloiola1" target="_blank">
    <img src="assets/images/freecodecamp.png" alt="freecodecamp" class="igf"/>
</a>
</div>
</Col>
<hr/>
<p class="text-justify">
Want to get in touch with me? Would you like to know more about myself or my experience. Maybe an invitation to play some
futebol(soccer), or maybe a few tips about where to go during your vacation in Brasil... fell free to drop me a line
anytime.
<br/> I promisse to reply as soon as I can.
</p>

*/