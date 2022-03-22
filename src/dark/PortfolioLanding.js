import React,{useState} from "react";
import Scrollspy from 'react-scrollspy';
import {Row,Container,Col,Card,Form,Button,Nav} from 'react-bootstrap';
import { FiMenu } from "react-icons/fi";
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiFillFacebook,AiFillGithub ,AiFillLinkedin,AiOutlineWhatsApp} from 'react-icons/ai';

import { faCoffee, faUserAstronaut,faFacebook } from '@fortawesome/free-solid-svg-icons';
import  * as reactScrool from "react-scroll";
import { Image } from 'antd';
import { useRef } from 'react';
import axios from 'axios';
import swal from "sweetalert";
const PortfolioLanding = () => {
  const [validated, setValidated] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  let developer=false;
  let url="http://localhost:3005";
  let urlProductions="https://ramez-ecommerce.herokuapp.com";
  let urlFull=developer ? url: urlProductions ;
  const [isMenuIcon, setIsMenuIcon] = useState(true);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const formRef = useRef(null);

  //setNombre
  const [width, setWidth] = React.useState(window.innerWidth);
  const scrollSpyData = ["sobreMi", "proyecto", "Habilidades", "contacto"];
  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true);
    const form = event.currentTarget;
    /*if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }*/


    axios.post(urlFull+"/security/registerContact", {
      "nombre":nombre,
      "correo":correo,
      "mensaje":mensaje
    })
    .then(res => {
      setValidated(false);
      if(res.data.estado){
        swal({
          icon: "success",
          text: "El Mensaje se registro con exíto en unos momentos estaremos en contacto."
        });
        setNombre("");
        setCorreo("");
        setMensaje("");
      }else{
        swal({
          icon: "warning",
          text: "Hubo un error en el envio de mensaje."
        });
      }
      try {
        console.log("res",formRef.current.reset()); 
        // formRef.resetFields();
        form.reset();
      } catch (error) {
        console.log("error",error);
      }


      
    }).catch((e)=>{console.log("e",e);});
  };
  //width 
  React.useEffect(() => {
    console.log("width",width);
    if(width<=900){
      setIsMenuIcon(true);
    }else{
      setIsMenuIcon(false);
    }
  }, [width]);
  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);
  return (<div> 
    <div className="active-dark">
      <div className="particles" id="tsparticles" >
        <canvas className="tsparticles-canvas-el" width="385" height="570" ></canvas>
      </div>

      <header className="header__main-container">
        <nav className="navbar__content-container navbar__main-container">
          <span><font className="vertical-align"><font className="fonttitle fonttitleApp vertical-align"> Portafolio web</font></font></span>
          {
             isMenuIcon ?

             <div className="menuFi">
               <FiMenu onClick={()=>{setIsMenu(!isMenu);}} />
             </div>
             :
             null 
             
          }
          {
            isMenuIcon==false ||  isMenu==true  ?
              <div
              
              className="routerList">
                <div className={isMenuIcon==false ||  isMenu==true ? "navbar__menu-container " : "navbar__menu-container-hide"} > 
                  <center className="centerList">
                    <Scrollspy 
                        className="containerListt" 
                        data={scrollSpyData}>

                        <li>
                          <Nav to="#sobreMi" onClick={()=>{setIsMenu(false);}}>
                            <reactScrool.Link
                              activeClass="activeCategoryLink"
                              className={"sobreMi"}
                              to={"sobreMi"}
                              spy={true}
                              smooth={true}
                              duration={500}
                              offset={10}
                              onClick={()=>{setIsMenu(false);}}
                              >  

                              Sobre Mi
                              </reactScrool.Link>  </Nav>
                          </li>
                         <li>
                          <Nav to="#proyecto" onClick={()=>{setIsMenu(false);}}>
                            <reactScrool.Link
                              activeClass="activeCategoryLink"
                              className={"proyecto"}
                              to={"proyecto".toString()}
                              spy={true}
                              smooth={true}
                              duration={500}
                              offset={10}
                              onClick={()=>{setIsMenu(false);}}
                              >  

                              Proyectos
                              </reactScrool.Link>  </Nav>
                          </li>
                          <li>
                            <reactScrool.Link
                              activeClass="activeCategoryLink"
                              className={"Habilidades"}
                              to={"Habilidades".toString()}
                              spy={true}
                              smooth={true}
                              duration={500}
                              offset={10}
                              onClick={()=>{setIsMenu(false);}}
                            >  

                              <Nav to="#Habilidades">Habilidades</Nav>
                            </reactScrool.Link> 
                          </li>
                          <li>
                              <reactScrool.Link
                                activeClass="activeCategoryLink"
                                className={"contacto"}
                                to={"contacto".toString()}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={10}
                                onClick={()=>{setIsMenu(false);}}
                              > 
                                <Nav to="#contacto">Contacto</Nav>
                              </reactScrool.Link> 
                          </li>
                      
                    </Scrollspy>
                  </center>

                  
                </div>
              </div>

              :
              null
          }

        </nav>
       
        <div className="header__title-content">
            <h2 className="header__title-welcome">
              <font className="vertical-align">
                <font  className="vertical-align">Bienvenido a mi Portafolio </font>              
              </font>
              <font  className="vertical-align"></font>
            </h2>
            <p className="header__title-presentation">
                <font className="vertical-align">
                  <font className="vertical-align">Mi nombre es </font>
                </font><b>
                <font className="vertical-align">
                  <font className="vertical-align">Juan Ramírez Sánchez</font>
                </font></b>
            </p>

        </div>
      </header>
      <ScrollAnimation
        animateIn="bounceInRight"
        animateOut="fadeOut"
        duration={0.5}
        delay={0}
      >
            <section id="sobreMi"  className="contentSilderSobreMi">
              <h2 className="titleSubTitle">Sobre mí </h2>
                <Container className="about__content-container" fluid>
                  
                  <Row  className="rowContent">
                    <Col className="colItem" xs={12} md={12} xl={6} >
                      <Container className="Container__content-container" fluid>
                        <center>
                          <Card.Img className="cardImg" variant="top" src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-1/125951858_3851591298217144_3810312621732437677_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeESgPiPFNgYuQKKLZ3Aiwabz8bW4AOOxQzPxtbgA47FDNwFdzb7Tk9TbGOJVaz2ZQbU8YElL64znKj-IK2cL9Wd&_nc_ohc=j92qwdt6v-gAX-OnoC9&_nc_ht=scontent.fpiu2-2.fna&oh=00_AT-pQcfkwFC5k3ykg3RF8hjws_4DwROdVOTE6lAq1GB33Q&oe=625D8C6C" />
                        </center>
                      </Container>
                    </Col>
                    <Col className="colItem" xs={12} md={12} xl={6} >
                      
                          <Card.Title className="cardTitle">¡Hola!</Card.Title>  
                          <p>
                          Soy Juan Ramírez Sánchez y soy desarrollador web, me encanta el desarrollo web y el desarrollo móvil. He realizado algunos proyectos y puedes ver mis mejores proyectos aquí o buscar mi github donde tengo todos mis proyectos.
                          </p>
                    </Col>
                  </Row>
                </Container>
            </section >

       
      </ScrollAnimation>
      <ScrollAnimation
            animateIn="bounceInLeft"
            animateOut="fadeOut"
            duration={1.2}
          >
        <section id="proyecto" className="contentSilderSobreMi">
          <h2 className="titleSubTitle">Proyectos </h2>
          <Container className="about__content-container" fluid>
            
            <Row  className="rowContent">
              <Col className="colItem" xs={12} md={12} xl={4} >
                <center >
                  <Image
                      className="cardImgFullImage"
                      src="./ventasadmin.png"
                    />
                </center>
              </Col>
              <Col className="colItem" xs={12} md={12} xl={4} >
                <center >
                  <Image
                    className="cardImgFull cardImgFullImage"
                    src="./ecommerce.png"
                  />
                </center>
              </Col>
              
            </Row>
          </Container>
        </section>
      </ScrollAnimation>
      
      <section id="Habilidades" className="contentSilderCourses">
          <h2 className="titleSubTitle">Habilidades </h2>
        <Container fluid>
          <Row  className="rowContent">
            <Col className="colItem" xs={12} md={12} xl={4} >
            <ScrollAnimation
              animateIn="bounceInLeft"
              animateOut="fadeOut"
              duration={1.2}
            >
              <Card   style={{ width: '100%',padding:10 }}>
                <Card.Img className="cardImg" variant="top" src="data:image/png;base64,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" />
                
                <Card.Title className="cardTitle">React</Card.Title>  
              </Card>
            </ScrollAnimation>
             
            </Col>
            <Col className="colItem" xs={12} md={12} xl={4} >
              <ScrollAnimation
                animateIn="bounceInLeft"
                animateOut="fadeOut"
                duration={1.2}
              >
                <Card style={{ width: '100%',padding:10 }}>
                  <Card.Img className="cardImg" variant="top" src="data:image/png;base64,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" />
                  <Card.Title className="cardTitle">Angular</Card.Title>  
                </Card>
              </ScrollAnimation>
             
            </Col>
            <Col className="colItem" xs={12} md={12} xl={4} >
              <ScrollAnimation
                animateIn="bounceInLeft"
                animateOut="fadeOut"
                duration={1.2}
              >
                <Card style={{width: '100%',padding:10 }}>
                  <Card.Img className="cardImg" variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAxlBMVEX///9BuIM0SV5OvIs4UWJCvoUzPltBu4Q0Rl09t4EzQFw0RV0os3gzQlw4tn80tX04cGry+vb5/fs2W2M/p33a7+VBtYI7hnE7i3M3ZWbL6drm9e4jPFSZ1bg8lHa849Ci2L45d2yGzqw+n3pArX9qxJo1VmI0TV8/pXw2YGXg8um64s5Wvo+DzaoPMUwcN1Fuf4mOnKI4bGmg2L06f287iXJ3yaJDXGqhrLHb4eFPY3G7xMft8fFqfIaLmJ/M1NVcb3wArW08K6G+AAAH1UlEQVR4nOWdaVsTPRiFmaHQAl0EBRVBEEHcWFRecEHR//+nXkHiBW3mzHOSPFnG+7OdJKTklHNfqXNH8xxndU/K4cWcGxfiIXr1GTf9am9udbjEUPXrQS1l67PTgj9viUcY1P2Kmv9wdW5ue1Ix9J8vi+dTn1w6LPjyWD7A8vM+NfvJ9vUI4yXqRQsPiU0+dVjxqfz5g4cL1NyXxjcj7JCb/GhRvgfHX+gFfyG2ePERt8XDnT9jvCc3+cGKfBO+0iv+Kt/ilQfkFr+/HWN9SL2u2mB+k7+RC/52In/4aIOb+HDdjHI+pl7YfzySz6omV0w8efSYe0+Pj/6Oskpucv9QPq2tD9SCP8iTqT7kFlxdJ5NhVzGhjpmEopLpJZlMu3dHol76+/B6QyQIk1Dfiee+4Y6tqro3EptQ+zoJdcUk0z633uHm/bEOyIR6IU+oWv7x+kL+0JUXZDIdTI31lk0oYsXihGKSaYWbbzV8Nj3aHplQT4iE2pIteI04p0dPyGTamx2O+02u+j3i47UsoX4QfzO9It/Tk7XZ8diEeskcXpKEYpJp0SuZDPPUM6qFp0SSfBes+CfxvKdkMs1bR9wkD6995mPIVeuCr4hjyzeZDAfc4bVwJj+8Br3WFRPnwujMM5kMz8hNruRzbC+AiKqnrsl5ziaTgU4o4n29ZTks78AkE1v1jLebh52Qn7xeEQn1A644djIZ3pEJ9TrUx2uq6nlNJtM79KOeJzf5I1EA/QTjEsm08tGx6rGjmVAnzQlFVT1sMq03DnvDObnJRELVh42jEp0KnUzneMF8Qsnn2pxQVDJ5VD12EiiKS+I97SYhMPEVxSmRTKyEWGpfMF0AeSdUDAmBia0oYkgIDK0oiOPaUgDFkRAYTUUxm1Dy1/pICIyqophOKEZC9IInk0FTUUwlFJVMQaoeO9SDvRQFo8f9JAQmmkTnJASZTA1Vjx02oQhFMbirKGJKCEwkRUFJCDaZ3lIrpgug/1wURWQJgYmiKFJVPXYiKIr4EgKjryjiSwiMuqJIISEwioqivlYUKSQERllRpJEQmD3y8KIUxWUaCYHRVBQMEZLJwCoKJqEIwkoIjKKikENLCJdkMmgmlJhlparHjqaiEBJcQmA0FYUUtarHDq0oQh9eGhICo6goJKhICIymRBegIyEwioqiHSUJgdFUFK1oSQiM6i2KlgVrSQiMpqJoQU9CYD4pKgpIjKrHDjUspygQqhICo6koALoSAqOoKJpRlhAYWlGEOK61JQTmSPEWRQPqEgKjqSjsDHrkseVe9djRVBRW0iWTgRqeUxTWLY4hITB0AeS3yXEkBIa+5+dzeLFVzzhkMhnoAsgnkwfkWK4SAqOpKKaIJiEw8RRFRAmBiaYoYkoIDCvRHRVFVAmBYRNqw22T40oIDJtQTooisoTA0AWQ0x4nqnrsbJN/QzkUQPElBIZNKFpROH4dkx5sQtEFUAoJgVFWFEkkBIZWFNwm55RMBlVFQUsIzWQyqCaUz9cx6aGoKDRvQviwRB5eYkWRUEJg1BRFDlWPHSVFkVRCYJQUBa3Hg0oIDKsoRLcoEksIzBqbUAJFkVxCYBQURXoJgSF/5doVRQYSAhNcUeSbTIbAX0U4IpNJRUJgAt+iyENCYGhFgRIqEwmBCakoaAkxjppMhoCKIh8JgQl2iyIjCYEJdosix6rHTiBFkZWEwIS6RZFl1WMniKLITUJgAtyiSHATwocAtyjykxAYb0WRoYTAeN+iSHMTwgdPRZHoJoQPnrco8pQQGC9FQSfTburlXkNN+b6iyFZCYDwUBX0TInEyGZwVRcYSAuOsKNLehPDBUVFkLSEwq063KAbsHb24EgLjpChylxAYaup/FEX2EgLjUAAtZy8hMLSiWMzhJoQP/C0K8t+nkBAYUlFUZBQnkRAYVlFwqN2E8IEsgDhSSQgMqSgYkkkIDJtQBOmrHjtkQslJKCEwdEJJyaHqsUMqCilpJQSGVBQyEksIjEpC5VL12CELIAnJJQSGVRQCck0mA6ko2olyE8IHVlG0km8yGUhF0UZeVY8d8hZFG6mXI4BUFJi8k8kQMKEyTyYDqygA+UgIDKkomslIQmBYRdFIjlWPHVJRNC54N/VC5JBFZQN5Vj12ghRAuUkITIACKDsJgQlQAOUnITCsophhUkoyGXwVRZYSAuNZAOUpITDkFz1NbXFJyWTwSqiyksngkVDZSgiMR0LlX/XYcVYUGepxIY4Jpf51THo4JtSkiKrHjlMBVEjVY8dJUeQuITDk/5Z0TfYSAuOgKEpNJgOtKCafUk/ZF1KiZ63HZexw7+uSk8lAJVTRyWSgFEUpEgJDKIoM7uiFgEioYXFVjx2xoihJQmDEe5x6osEQFkBlVj12RAVQNnf0QiAqgEqTEBiBoihOQmDaFUWBEgLTWgCVKCEwLYqiSAmBaUmoLiWTASZUoRICAxOqW8lkAIqiXAmBaSyACpYQmMaE6l4yGRru+XWi6rHToCjKlhAYq6IoXEJgrAVQ6RICY1EU5UsIjOUWReopKTOjKLogITBTiqLDyWSYSqhuSAjMPUVRzE0IH+7doph0OpkMdxRFdyQE5t9JJsPfAqiLVY+d2wKosJsQPtwWQN2seuzcKIqOSQjMtaLonITA/E6o7lY9duY7KCEwm7/+mWQy7KYa+H/Nwf9ngke70wAAAABJRU5ErkJggg==" />
                  <Card.Title className="cardTitle">Vue</Card.Title>  
                </Card>
              </ScrollAnimation>

              
            </Col>
          </Row>
          <Row className="rowContent">
            <Col className="colItem" xs={12} md={12} xl={4} >
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="fadeOut"
                duration={1.2}
              >
                <Card     style={{ width: '100%',padding:10 }}>
                  <Card.Img className="cardImg" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png" />
                  <Card.Title className="cardTitle">Laravel</Card.Title>  
                </Card>
              </ScrollAnimation>

            </Col>
            <Col className="colItem" xs={12} md={12} xl={4} >
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="fadeOut"
                duration={1.2}
              >
                <Card style={{ width: '100%',padding:10 }}>
                  <Card.Img className="cardImg" variant="top" src="data:image/png;base64,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" />
                  <Card.Title className="cardTitle">Node js</Card.Title>  
                </Card>

              </ScrollAnimation>
             
            </Col>
            <Col className="colItem" xs={12} md={12} xl={4} >
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="fadeOut"
                duration={1.2}
              >
                <Card style={{width: '100%',padding:10 }}>
                  <Card.Img className="cardImg" variant="top" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/54/4ed1d02bfe11e9b16e4738100f1cb7/logo-java-spring-boot-cloud_.jpg?auto=format%2Ccompress&dpr=1" />
                    <Card.Title className="cardTitle">Spring Boot</Card.Title>  
                </Card>
              </ScrollAnimation>
             
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contacto" className="contentSilderContactame">
          <h2 className="titleSubTitle title__content">Contactame </h2>
          <Container fluid>
            <Card className="cardContacto">
              <Form    ref={formRef}  validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control 
                    required
                    type="text" 
                    value={nombre}
                    placeholder=""
                    autoComplete="off"
                    onChange={(e)=>{setNombre(e.target.value);}}
                    />
                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlCorreo">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control required type="email" placeholder=""
                   autoComplete="off" 
                   value={correo}
                   onChange={(e)=>{setCorreo(e.target.value);}} />
                  <Form.Control.Feedback></Form.Control.Feedback>

                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlMensaje">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control 
                    value={mensaje}
                    required 
                    as="textarea" 
                    rows={3} 
                    autoComplete="off"
                    onChange={(e)=>{setMensaje(e.target.value);}} />
                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>
                <center>
                  <Button  type="submit">Registrar</Button>
                </center>
              </Form>
            </Card>

          </Container>
      </section>


    </div>
    <footer className="footer">
        <div className="site-footer">
            
            <div className="redes-sociales">
              <center>
                <ul className="listRedes" style={{listStyle:"none",marginTop:20}}>
                    <li><a href="https://github.com/jramez1996/" target="_blank"> <AiFillGithub style={{fontSize:48}} /> </a> </li>  
                    <li> <a href="https://www.facebook.com/juan.ramirezsanchez.399/" target="_blank"><AiFillFacebook style={{fontSize:48}} /> </a> </li>  
                    <li><a href="https://www.linkedin.com/in/juan-ramirez-sanchez-405355222/" target="_blank"><AiFillLinkedin style={{fontSize:48}} /></a> </li>  
                    <li><a href="https://api.whatsapp.com/send?phone=51983415111" target="_blank"><AiOutlineWhatsApp style={{fontSize:48}}/></a> </li>  
                  </ul>
              </center>

            </div>
            <div className="copyright">
              <center>
                  <p data-section="Footer" data-value="footer-info">Page created by Nahuel61920</p>
                  <p>© 2022. All Rights Reserved.</p>
              </center>
                
            </div>
        </div>
    </footer>    
    </div>
  );
};

export default PortfolioLanding;
