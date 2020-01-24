import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

import '../styling/projects.css';

class Projects extends Component {
    render() {
        return(
            <div className="projects-section" id="projects">
                <section className="projectCards">
                    <article class="card">
                        <a href="#">
                            <picture class="thumbnail">
                                <img src={require('../images/FishLand.png')} alt="fishland"></img>
                                <div class="card-content">
                                    <h2>FishLand</h2>
                                    <p>FishLand is an application that takes information about fishing and allows users to discover fish species along with good information about the fish and how to go fishing for it.</p>
                                    <p>Javascript, React, Redux, Ruby on Rails, Mechanize, CSS</p>
                                    <Icon name="github" />
                                    <a href="https://github.com/VadimS4/Fishland-frontend" target="_blank" rel="noopener noreferrer" >Frontend / </a>
                                    <a href="https://github.com/VadimS4/Fishland-backend" target="_blank" rel="noopener noreferrer" > Backend</a>
                                    <Icon name="computer" />
                                    <a href="https://fishland-application.herokuapp.com" target="_blank" rel="noopener noreferrer" >Live Demo</a>
                                </div>
                            </picture>
                        </a>
                    </article>
                    <article class="card">
                        <a href="#">
                            <picture class="thumbnail">
                                <img src={require('../images/CarFinder.png')} alt="fishland"></img>
                                <div class="card-content">
                                    <h2>CarFinder</h2>
                                    <p>CarFinder is an application for anyone who is interested in listing a vehicle and receiving feedback from other users.</p>
                                    <p>Ruby on Rails, CSS, BCrypt</p>
                                    <Icon name="github" />
                                    <a href="https://github.com/calebwatters/Carfinder" target="_blank" rel="noopener noreferrer" >GitHub</a>
                                    <Icon name="computer" />
                                    <a href="https://still-plateau-78887.herokuapp.com" target="_blank" rel="noopener noreferrer" >Live Demo</a>
                                    <Icon name="youtube" />
                                    <a href="https://www.youtube.com/watch?v=sSO9WuqW_FM&t=2s" target="_blank" rel="noopener noreferrer" >Video Demo</a>
                                </div>
                            </picture>
                        </a>
                    </article>
                    <article class="card">
                        <a href="#">
                            <picture class="thumbnail">
                                <img src={require("../images/NoteMinder.png")} alt="fishland"></img>
                                <div class="card-content">
                                    <h2>NoteMinder</h2>
                                    <p>NoteMinder is an application that takes Apple's "Notes" and "Reminder" applications and combines the utility of both applications.</p>
                                    <p>Javascript, CSS</p>
                                    <Icon name="github" />
                                    <a href="https://github.com/dtFocuS/noteminder-front-end" target="_blank" rel="noopener noreferrer" >GitHub</a>
                                    <Icon name="youtube" />
                                    <a href="https://www.youtube.com/watch?v=CUi3I-lQxiE&feature=youtu.be" target="_blank" rel="noopener noreferrer" >Video Demo</a>
                                </div>
                            </picture>
                        </a>
                    </article>
                    <article class="card">
                        <a href="#">
                            <picture class="thumbnail">
                                <img src={require('../images/NewYorkTimes.png')} alt="fishland"></img>
                                <div class="card-content">
                                    <h2>NYTimes Bookmarking Tool</h2>
                                    <p>The NYTimes Bookmark Tool is a CLI application written in Ruby that allows users to interact with the New York Times Top Stories API.</p>
                                    <p>Ruby, NYT API</p>
                                    <Icon name="github" />
                                    <a href="https://github.com/milandhar/guided-module-one-project-assessment-seattle-web-career-042219" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <Icon name="youtube" />
                                    <a href="https://www.youtube.com/watch?v=3lnWob63pY4" target="_blank" rel="noopener noreferrer">Video Demo</a>
                                </div>
                            </picture>
                        </a>
                    </article>
                    {/* <Card.Group >
                        <Card className="Card">
                            <Image src={require('../images/FishLand.png')} wrapped-ui={false} />
                            <Card.Content>
                                <Card.Header textAlign="center">FishLand</Card.Header>
                                <Card.Description textAlign="center">
                                    FishLand is an application that takes information about fishing and allows users to discover fish species along with good information about the fish and how to go fishing for it.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <p>Javascript, React, Redux, Ruby on Rails, Mechanize, CSS</p>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="github"/>
                                <a href="https://github.com/VadimS4/Fishland-frontend" target="_blank" rel="noopener noreferrer" >Frontend / </a>
                                <a href="https://github.com/VadimS4/Fishland-backend" target="_blank" rel="noopener noreferrer" > Backend</a>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="computer" />
                                <a href="https://fishland-application.herokuapp.com" target="_blank" rel="noopener noreferrer" >Live Demo</a>
                            </Card.Content>
                        </Card>
                        <Card className="Card">
                            <Image src={require('../images/CarFinder.png')} wrapped-ui={false} />
                            <Card.Content>
                                <Card.Header textAlign="center">CarFinder</Card.Header>
                                <Card.Description textAlign="center">
                                    CarFinder is an application for anyone who is interested in listing a vehicle and receiving feedback from other users.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <p>Ruby on Rails, CSS, BCrypt</p>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="github" />
                                <a href="https://github.com/calebwatters/Carfinder" target="_blank" rel="noopener noreferrer" >GitHub</a>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="computer" />
                                <a href="https://still-plateau-78887.herokuapp.com" target="_blank" rel="noopener noreferrer" >Live Demo</a>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="youtube" />
                                <a href="https://www.youtube.com/watch?v=sSO9WuqW_FM&t=2s" target="_blank" rel="noopener noreferrer" >Video Demo</a>
                            </Card.Content>
                        </Card>
                        <Card className="Card">
                            <Image src={require("../images/NoteMinder.png")}/>
                            <Card.Content>
                                <Card.Header textAlign="center">NoteMinder</Card.Header>
                                <Card.Description textAlign="center">
                                    NoteMinder is an application that takes Apple's "Notes" and "Reminder" applications and combines the utility of both applications.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <p>Javascript, CSS</p>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="github" />
                                <a href="https://github.com/dtFocuS/noteminder-front-end" target="_blank" rel="noopener noreferrer" >GitHub</a>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="youtube" />
                                <a href="https://www.youtube.com/watch?v=CUi3I-lQxiE&feature=youtu.be" target="_blank" rel="noopener noreferrer" >Video Demo</a>
                            </Card.Content>
                        </Card>
                        <Card className="Card">
                            <Image src={require('../images/NewYorkTimes.png')}/>
                            <Card.Content>
                                <Card.Header textAlign="center">NYTimes Bookmarking Tool</Card.Header>
                                <Card.Description textAlign="center">
                                    The NYTimes Bookmark Tool is a CLI application written in Ruby that allows users to interact with the New York Times Top Stories API.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <p>Ruby, NYT API</p>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="github" />
                                <a href="https://github.com/milandhar/guided-module-one-project-assessment-seattle-web-career-042219" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="youtube" />
                                <a href="https://www.youtube.com/watch?v=3lnWob63pY4" target="_blank" rel="noopener noreferrer">Video Demo</a>
                            </Card.Content>
                        </Card>
                    </Card.Group> */}
                </section>
                <div className="heroku_warning">
                    <p>Website's are hosted using Heroku and may take a few minutes to spin up! Thanks for being Patient.</p>
                </div>
            </div>
        )
    }
}

export default Projects;