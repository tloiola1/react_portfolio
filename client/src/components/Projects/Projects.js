// import React, {Component} from 'react';
// import {Col, Button} from 'react-bootstrap';
// import {Img} from '../../components/Images';
// import PORT from '../../utils/PORTFOLIO';

// class Projects extends Component {

//     componentDidMount() {
//         this.loadContent();
//     };
//     constructor(props) {
//         super(props);
//         this.state = {
//             portfolio: []
//         }
//     }

//     loadContent() {
//         PORT
//             .getPortfolio()
//             .then(res => {
//                 // console.log(res);
//                 this.setState({portfolio: res.data});
//             })
//             .catch(err => console.log(err));
//     };

//     render() {
//         return (
//             <span>
//             <Col md={12}>
//                 <h2 className='margin-top white'>Portfolio</h2>
//                 <hr/>
//             </Col>
//             {this.state.portfolio.length
//                 ? (
//                     <span>
//                         {this
//                             .state
//                             .portfolio
//                             .map(project => (
//                                 <Col md={6}>
//                                     <div key={project.id} className='background'>
//                                         <a href={project.link} target='_blank'>
//                                             <Img className='portfolio_img' alt='portfolio_img' src={project.img}/>
//                                         </a>
//                                         <Button
//                                             className='project_name blue039be5'
//                                             eventKey="0"
//                                             onSelect={() => {
//                                             this.renderContent(0)
//                                         }}>{project.name}</Button>
//                                     </div>
//                                 </Col>
//                             ))}
//                     </span>
//                 )
//                 : <span/>}
//             </span>
//         )
//     }
// }

// export default Projects;