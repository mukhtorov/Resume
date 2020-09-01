import React from 'react'
import {Body,Title,Header,Line, Img ,Content,Container,Italic,Bold,ContentS,LineX, ImgV,} from './Styleb'

export default () => {
  return (
    <Body>
     <Header>
       <Header.Left>
         <Title>Rivojiddin Abdunazarov</Title>
         <Content>
           Full-stack web and mobile develoer. Graduated Indian
           first coding bootcamp called “The Hacking School”
           </Content>
         </Header.Left>
          <Img/>
      </Header>
      <Line/>
      {/* <ImgV/> */}
      <Title>Experience</Title>
      <Container>
          <Container.Le>
            
            <Italic>
              Sejong, Seoul, South Korea. March 2019 - precent
            </Italic>
            <Italic>
              Seoul, South Korea  August 2019 - March 2020
            </Italic>
            <Italic>
            Gangnam, Seoul, South Korea. June 2019 - September 2019
            </Italic>
            <Italic>
            Sejong, Seoul, South Korea. March 2019 - precent
            </Italic>
          </Container.Le>
          <LineX/>
          
       <Container.Ri>
           <Bold>
             Webbrain Academy<br/> CEO
           </Bold>
               <ContentS>
                 Coding Bootcamp, specialized for web development
               </ContentS>
           <Bold>
                 BounceCode<br/>
                 Team Leader
          </Bold>
              < ContentS>
                Worked as a full-stack web and mobile developer
              </ContentS>
           <Bold>
              HUB DNC<br/>
              Front End React.js developer
           </Bold>
               <ContentS>
                 Three months reactjs internship
                </ContentS>
           <Bold>
                 Sejong University<br/>
                 Teacher assistant
                 </Bold>
           <ContentS>
              Teacher assistant on c and web programming language classes
           </ContentS>
       </Container.Ri>
    </Container> 
    <Line/> 
    <Title>Education</Title> 
    <Container>
    
          <Container.Le>
           
            <Italic>
            Seoul, South Korea.01/03/2015 ~ 2020
            </Italic>
            <Italic>
            Hyderabad, India 01/08/2018~01/02/2019
            </Italic>
            <Italic>
            Gangnam, Seoul, South Korea 01/03/2017~28/11/2017
            </Italic>
          </Container.Le>
          <LineX/>
       <Container.Ri>
          <Bold>
          Sejong University Bachelor of Computer science and engineering


          </Bold>
          <Bold>
          The Hacking School Full-stack web development
          </Bold>
          <Bold>
          Sejong University Korean Language 
          </Bold>
               
       </Container.Ri>
    </Container>
    <Line/>
    <Title>Company Projects</Title>  
    <Container.Bottom>
        <ContentS.Last>
            <b>Woojin:</b> Bus Tracking system(Source private)<br/>
            <b>Boonpod:</b> Q&A (Source private)<br/>
            <b>Pringtingcider:</b> Commercial (Source private)(demo)<br/>
            <b>3D:</b> 3D sharing android app (Source private)<br/>
        </ContentS.Last>
    </Container.Bottom>
     <Title>Personal Projects</Title>
    <Container.Bottom>
       <ContentS.Last>
           <b>DXB Bazar: </b> Commercial (Source link) demo<br/>
           <b>Quran::</b>Audi music (Source link)<br/>
           <b>NeedHouse:</b>Rent house, ios and android app (Source private)<br/>
           <b>React Tag::</b> Moderen Visit Card (Source private) demo<br/>
       </ContentS.Last>
    </Container.Bottom>
   
         
       

     
     
     
     
     
     
     
     
     {/* <Flex2>  
      < Flex1>
         <Title>Rivojiddin Abdunazarov</Title>
         <Header>Full-stack web and mobile develoer. Graduated Indian
          first coding bootcamp called “The Hacking School”
         </Header> 
       </Flex1>
      <Img />
    </Flex2>
      <Line></Line> */}
    </Body>
    
  )
}