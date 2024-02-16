import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./Home.scss"

export const Home = () => {

    return(
        <>

         
        
        <div className="homepage">
        <header className="header">
        <h1>Welcome to Covid and Vaccine Awareness</h1>
        </header>
        <main className="main-content">
        {/* COVID-19 Info Section */}
        <section className="section covid-info">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <div className="content-wrapper">
                  <h2>COVID-19 Information</h2>
                  <p>
                    COVID-19 is an infectious disease caused by the novel coronavirus SARS-CoV-2. It primarily spreads through respiratory droplets when an infected person talks, coughs, or sneezes. The disease can range from mild symptoms to severe illness and even death, particularly among older adults and those with underlying health conditions.
                  </p>
                  <p>
                    Symptoms of COVID-19 may include fever or chills, cough, shortness of breath or difficulty breathing, fatigue, muscle or body aches, headache, new loss of taste or smell, sore throat, congestion or runny nose, nausea or vomiting, and diarrhea. Some individuals may be asymptomatic carriers, meaning they show no symptoms but can still spread the virus to others.
                  </p>
                  <p>
                    To prevent the spread of COVID-19, it's essential to follow public health guidelines such as wearing masks, practicing social distancing, washing hands frequently, and getting vaccinated.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="illustration">
                  <img src="covid19-1.svg" alt="COVID-19" className="pic"/>
                  <img src="covid19-2.svg" alt="COVID-19" className="pic"/>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Symptoms Section */}
        <section className="section symptoms">
          <Container>
            <Row className="align-items-center">
              <Col md={6} order={2}>
                <div className="content-wrapper">
                  <h2>Symptoms</h2>
                  <p>
                    COVID-19 symptoms can vary widely and may appear 2-14 days after exposure to the virus. Common symptoms include fever or chills, cough, shortness of breath or difficulty breathing, fatigue, muscle or body aches, headache, new loss of taste or smell, sore throat, congestion or runny nose, nausea or vomiting, and diarrhea.
                  </p>
                  <p>
                    In severe cases, COVID-19 can lead to pneumonia, acute respiratory distress syndrome (ARDS), organ failure, and death. It's important to seek medical attention if you experience severe symptoms such as difficulty breathing, persistent chest pain, confusion, bluish lips or face, or inability to stay awake.
                  </p>
                </div>
              </Col>
              <Col md={6} order={1}>
                <div className="illustration">
                  <img src="symp-1.svg"  alt="Symptoms" className="pic"/>
                  <img src="symp-2.svg"  alt="Symptoms" className="pic"/>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Preventive Measures Section */}
        <section className="section preventive-measures">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <div className="content-wrapper">
                  <h2>Preventive Measures</h2>
                  <p>
                    To reduce the risk of contracting or spreading COVID-19, it's important to follow preventive measures recommended by health authorities:
                  </p>
                  <ul>
                    <li>Wear a mask in public settings, especially when social distancing is not possible.</li>
                    <li>Maintain at least 6 feet of distance from others who are not from your household.</li>
                    <li>Wash your hands often with soap and water for at least 20 seconds, especially after being in a public place, touching your face, or blowing your nose, coughing, or sneezing.</li>
                    <li>Use hand sanitizer containing at least 60% alcohol if soap and water are not available.</li>
                    <li>Cover your mouth and nose with a tissue or your elbow when you cough or sneeze.</li>
                    <li>Clean and disinfect frequently-touched surfaces daily, including tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.</li>
                  </ul>
                </div>
              </Col>
              <Col md={6}>
                <div className="illustration">
                  <img src="pre-1.svg" alt="Preventive Measures" className="pic"/>
                  <img src="pre-2.svg" alt="Preventive Measures" className="pic"/>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Vaccine Awareness Section */}
        <section className="section vaccine-awareness">
          <Container>
            <Row className="align-items-center">
              <Col md={6} order={2}>
                <div className="content-wrapper">
                  <h2>Vaccine Awareness</h2>
                  <p>
                    Vaccination is a key tool in combating the COVID-19 pandemic. COVID-19 vaccines have been developed to provide protection against the virus and help prevent severe illness, hospitalization, and death.
                  </p>
                  <p>
                    COVID-19 vaccines have undergone rigorous testing to ensure safety and efficacy. They work by stimulating the immune system to produce an immune response similar to that produced by natural infection, without causing the disease itself.
                  </p>
                  <p>
                    Vaccines are currently being distributed worldwide, prioritizing high-risk groups, healthcare workers, and essential workers. It's important to stay informed about vaccine availability, eligibility criteria, and vaccination sites in your area.
                  </p>
                </div>
              </Col>
              <Col md={6} order={1}>
                <div className="illustration">
                  <img src="vac-1.svg" alt="Vaccine Awareness" className="pic"/>
                  <img src="vac-2.svg" alt="Vaccine Awareness" className="pic"/>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>

            
          
        </>
    )
}