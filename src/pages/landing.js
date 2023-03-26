import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Marvel from '../Marvel.png'
import VS from '../VS.png'
import DC from '../DC.png'


function Landing() {

    // const [ quote, setQuote ] = useState('')
    // const getData = () => {
    //   axios.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/1.json')
    //     .then(res => {
    //       console.log(res)
    //     //   setQuote(res.data.content)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }

    // const [apiData, setApiData] = useState('');
    // const [missionName, setMissionName] = useState("Loading");
    // const [missionPatch, setMissionPatch] = useState("");
    // const [launchYear, setLaunchYear] = useState("");
    // const [launchSuccess, setLaunchSuccess] = useState("");


    // useEffect(()=>{
    //     axios.get('https://akabab.github.io/superhero-api/api/all.js')
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
        // })
        // .catch((error) => {
        //     console.log(error);
        // })
    // }, [])

    return (
        <div className="dash col-sm-10">
            <button onClick={getData}>Click me for data</button>
            <Carousel fade style={{ marginTop: '5%' }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Marvel}
                        alt="First slide"
                        style={{ marginLeft: 'auto', marginRight: 'auto' }}
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
                        style={{ marginLeft: 'auto', marginRight: 'auto' }}
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
                        style={{ marginLeft: 'auto', marginRight: 'auto' }}
                    />

                    <Carousel.Caption>
                        <h3>Outline of API</h3>
                        <p>
                            The data used can give you more information about a specific character.You will be able to see their <b>power stats</b>, <b>biography</b>, <b>appearance</b>, <b>work</b>, <b>connections</b> and an image.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Card style={{ width: '25%', marginLeft: '7.5%', marginTop: '5%', float: 'left' }}>
                <Card.Img variant="top" src={Marvel} style={{ height: '100px' }} />
                <Card.Body>
                    <Card.Title>About Creator</Card.Title>
                    <Card.Text>
                        Name: Christian Krahtz<br/>
                        Email: 221198@virtualwindow.co.za<br/>
                        Student Number: 221198
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '25%', marginLeft: '5%', marginTop: '5%', float: 'left' }}>
                <Card.Img variant="top" src={DC} style={{ height: '100px' }} />
                <Card.Body>
                    <Card.Title>Information Breakdown</Card.Title>
                    <Card.Text>
                        <b>Power Stats:</b>
                        (Intelligence, Strength, Speed, Durability, Power and Combat)<br />
                        <b>Biography:</b>
                        (Full Name, Alter Egos, Aliases, Place of Birth, First Appearance, Publisher, Alignment)<br />
                        <b>Appearence:</b>
                        (Gender, Race, Height, Weight, Eye Color, Hair Color)<br />
                        <b>Work:</b>
                        (Occupation, Base of operation)<br />
                        <b>Connections:</b>
                        (Group Affiliation, Relatives)
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '25%', marginLeft: '5%', marginTop: '5%', float: 'left' }}>
                <Card.Img variant="top" src={VS} style={{ height: '100px' }} />
                <Card.Body>
                    <Card.Title>More on the API</Card.Title>
                    <Card.Text>
                        There are about 700 plus characters you can look at nd compare with others. you can compare Yoda and The Hulk with eachother and see who has the more impressive character data.
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Landing;