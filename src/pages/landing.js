import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Marvel from '../Marvel.png'
import VS from '../VS.png'
import DC from '../DC.png'


function Landing(){

    // const [apiData, setApiData] = useState([]);
    // const [missionName, setMissionName] = useState("Loading");
    // const [missionPatch, setMissionPatch] = useState("");
    // const [launchYear, setLaunchYear] = useState("");
    // const [launchSuccess, setLaunchSuccess] = useState("");


    // useEffect(()=>{
    //     axios.get('https://api.spacexdata.com/v3/launches')
    //     .then((response) => {
    //         console.log(response);
    //         const index = 0;
    //         // setApiData(response.data)
    //         setMissionName(response.data[index].mission_name)
    //         setMissionPatch(response.data[index].links.mission_patch)
    //         setLaunchYear(response.data[index].launch_year)
    //         if (response.data[index].launch_seccess){
    //             setLaunchSuccess("Success")
    //         }else{
    //             setLaunchSuccess("Failed")
    //         }
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }, [])

    return(
        <div className="App">
{/* <Card style={{ width: '20%', marginLeft: '10%', marginTop: '10%', float: 'left'}}>
    <Card.Img variant="top" src={Marvel}  />
        <Card.Body>
            <Card.Title>About The API</Card.Title>
            <Card.Text>
                The API is a data source containing information about heroes and villains from both universes - Marvel and DC. 
            </Card.Text>
        </Card.Body>
        </Card>

        <Card style={{ width: '20%', marginLeft: '10%', marginTop: '10%', float: 'left'}}>
        <Card.Img variant="top" src={VS}  />
                <Card.Body>
                    <Card.Title>Reason for API</Card.Title>
                    <Card.Text>
                    The data that is given can be used to see more information about the heroes and villains or it can be used to compare two characters to see who has a more favorable outcome according to the stats that are provided.
                    </Card.Text>
                </Card.Body>
            </Card> 
            <Card style={{ width: '20%', marginLeft: '10%', marginTop: '10%', float: 'left'}}>
            <Card.Img variant="top" src={DC}  />
                <Card.Body>
                    <Card.Title>Outline Of Data</Card.Title>
                    <Card.Text>
                    The data used can give you more information about a specific character.You will be able to see their power stats (Intelligence, Strength, Speed, Durability, Power and Combat) , biography (Full Name, Alter Egos, Aliases, Place of Birth, First Appearance, Publisher, Alignment), appearance (Gender, Race, Height, Weight, Eye Color, Hair Color), work (Occupation, Base of operation), connections (Group Affiliation, Relatives) and an image.
                    </Card.Text>
    </Card.Body>
</Card>  */}
           
            <Carousel fade style={{marginTop:'10%'}}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src= {Marvel}
                alt="First slide"
                style={{marginLeft: 'auto', marginRight: 'auto'}}
                />
                <Carousel.Caption>
                <h3>About The API</h3>
                <p>The API is a data source containing information about heroes and villains from both universes - Marvel and DC.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={VS}
                alt="Second slide"
                style={{marginLeft: 'auto', marginRight: 'auto'}}
                />

                <Carousel.Caption>
                <h3>Reason for API</h3>
                <p>The data that is given can be used to see more information about the heroes and villains or it can be used to compare two characters to see who has a more favorable outcome according to the stats that are provided.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={DC}
                alt="Third slide"
                style={{marginLeft: 'auto', marginRight: 'auto'}}
                />

                <Carousel.Caption>
                <h3>Outline of API</h3>
                <p>
                The data used can give you more information about a specific character.You will be able to see their power stats (Intelligence, Strength, Speed, Durability, Power and Combat) , biography (Full Name, Alter Egos, Aliases, Place of Birth, First Appearance, Publisher, Alignment), appearance (Gender, Race, Height, Weight, Eye Color, Hair Color), work (Occupation, Base of operation), connections (Group Affiliation, Relatives) and an image.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Landing;