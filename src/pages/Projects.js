import React from 'react';
import './Pages.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

/* Components */
import Post from '../components/post/Post';

/*Post Content*/
import FCSImageUnmodded from '../resources/posts/FCS/FCS_Unmodded.png';
import FCSImageHalfModded from '../resources/posts/FCS/FCS_HalfModded.png';
import FCSImageModded from '../resources/posts/FCS/FCS_Modded.png';
import FCSImageShooting from '../resources/posts/FCS/FCS_Shooting.png';

import Inventory01 from '../resources/posts/IGS/Inventory01.png'
import Inventory02 from '../resources/posts/IGS/Inventory02.png'
import Inventory03 from '../resources/posts/IGS/Inventory03.png'

import Prototype01 from '../resources/posts/GD/Prototype01.png'
import GDGameplay01 from '../resources/posts/GD/Gameplay01.png'
import GDGameplay02 from '../resources/posts/GD/Gameplay02.png'
import Encyclopedia from '../resources/posts/GD/Encyclopedia.png'
import MainMenu from '../resources/posts/GD/MainMenu.png'

function Projects() {
    return(
        <div className="page">
            <Post title={"Grid Inventory System"} icon={"fa-brands fa-unity"} date={"16 December 2022"} github={"https://github.com/HitboxSoftware/grid-inventory-system"}>
                <div>
                    Grid inventory system inspired by games like Escape from Tarkov and DayZ, it was originally
                    created for a survival game I was working on, however I realised that this system would be far more useful
                    as a package that could be imported into new projects. The system is split into 2 parts, a kind
                    of backend / frontend arrangement where the backend handles storing and saving items as well as
                    utilities to help manage the grid like adding, removing and dealing with rotation. The
                    frontend manages player interaction, allowing for the player to move items around the inventory
                    and updating the backend with any changes made. This arrangement helps to make the system more
                    reusable and modular, allowing for different kinds of inventories to be made without needing to
                    change the back-end, it's also easier for serialisation since the grid is contained within a single
                    class not linked to any MonoBehaviour components.
                </div>
                <h3>Gallery</h3>
                <Swiper grabCursor={true} navigation={true} modules={[Navigation]} className="gallerySwiper">
                    <SwiperSlide><img src={Inventory01} alt={"Inventory 01"}/>Inventory</SwiperSlide>
                    <SwiperSlide><img src={Inventory02} alt={"Inventory 02"}/>Context Menu</SwiperSlide>
                    <SwiperSlide><img src={Inventory03} alt={"Inventory 03"}/>Opened Container</SwiperSlide>
                </Swiper>
            </Post>
            <Post title={"Firearm Component System"} icon={"fa-brands fa-unity"} date={"29 January 2023"}>
                <h3>Overview</h3>
                <div>
                    Firearm Modification System allowing for in-depth weapon customisation using a node-based approach.
                    this module allows for easy customisation and nested attachments along with the ability to
                    serialise a firearm to a single object, allowing it to be stored within my inventory system and be
                    saved to any kind of format such as JSON. I'm constantly working on this and hope to integrate it
                    as a part of the Inventory System once it's released to the Unity Asset Store.
                </div>
                <h3>Gallery</h3>
                <Swiper grabCursor={true} navigation={true} modules={[Navigation]} className="gallerySwiper">
                    <SwiperSlide><img src={FCSImageUnmodded} alt={"Incomplete Firearm"}/>Incomplete Firearm</SwiperSlide>
                    <SwiperSlide><img src={FCSImageHalfModded} alt={"Half-Complete"}/>Half-Complete</SwiperSlide>
                    <SwiperSlide><img src={FCSImageModded} alt={"Complete"}/>Complete</SwiperSlide>
                    <SwiperSlide><img src={FCSImageShooting} alt={"Shooting"}/>Shooting</SwiperSlide>
                    <SwiperSlide>
                        <iframe src="https://www.youtube.com/embed/yzxEPRkL7-E"
                                title="Firearm Modification Demonstration"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                        </iframe>
                    </SwiperSlide>
                </Swiper>
            </Post>
            <Post title={"Goblin Defense! [HackNJam 2023]"} icon={"fa-brands fa-unity"} date={"25 February 2023"}>
                <div>
                    Winner of the HackNJam 2023 Game Jam, I worked in a team of 3 as the gameplay developer, there were
                    a few different choices for the theme of the game, we chose to go with "Medieval Fantasy Tower
                    Defense".
                </div>
                <h3>Development</h3>
                <h4>Day One</h4>
                <div>
                    After planning out the major features for the game, I began work on the core gameplay loop starting
                    with enemy movement, in order to implement this, I chose to go with a basic waypoint
                    system where enemies have an array of objects to move towards and after reaching each waypoint
                    the path index would be incremented. Whilst this worked, it resulted in enemies all following
                    the exact same path, to fix this, I made an invisible object follow the path which had predefined
                    formations of enemies attached and then animated their position at runtime using perlin noise
                    leading to far more natural movement.
                </div>
                <h4>Day Two</h4>
                <div>
                    Now that enemies were spawning and pathing correctly, I started working on a grid placement system for
                    the towers, I took inspiration from my inventory system in order to get multi-cell placement
                    working as I wanted support for towers to be different sizes. This feature didn't take too long to
                    implement since I had already made a similar system so it was at a usable state relatively quickly.
                    Once Tower placement and enemies were implemented I started working on a health system for the enemies,
                    I wanted the health system to be easily reusable as we had discussed the idea of having your own units
                    on the path that would fight the enemies, due to this requirement, I chose to go with an interface
                    that could be implemented on existing scripts allowing for a unified system to be created very quickly.
                    Once enemies had health, I could start working on the tower attacks, for proximity detection I used
                    raycasts to look for objects with a specific tag or layer, and then attempted to get the
                    IHealth component from every result. Once I confirmed the target had a health system implemented,
                    the closest result was found and a projectile was spawned, either with the result as it's target,
                    or a force applied in the target's direction, based on the type of projectile being fired.
                </div>
                <h4>Final Day</h4>
                <div>
                    Feature wise, the final day was mostly spent implementing the player's health and gold systems, as well as
                    a proper build menu and UI. The rest of the day was spent fixing bugs, cleaning code and merging
                    our projects to build the final game. After merging the project without to many issues, we built the game
                    and uploaded it to <a href={"https://immoralkoala.itch.io/jhacknjam"}>Itch.io</a> so that it could
                    be judged.
                </div>
                <h4>Reflection</h4>
                <div>
                    This was our first game jam so we were all really happy with the final result, however it
                    wasn't perfect and I feel we could have definitely done better in some aspects. Time management and scope creep
                    especially are areas we needed to improve many of our planned features had to be scrapped due to time constraints.
                    Not being able to implement these resulted in a much more bare bones , in order to resolve this issue
                    for future projects, making sure to properly consider the complexity of ideas would definitely help
                    to avoid these problems.
                </div>
                <h3>Gallery</h3>
                <Swiper grabCursor={true} navigation={true} modules={[Navigation]} className="gallerySwiper">
                    <SwiperSlide><img src={MainMenu} alt={"Main Menu"}/>Main Menu</SwiperSlide>
                    <SwiperSlide><img src={Prototype01} alt={"Prototype"}/>Prototype</SwiperSlide>
                    <SwiperSlide><img src={GDGameplay01} alt={"Gameplay"}/>Gameplay</SwiperSlide>
                    <SwiperSlide><img src={GDGameplay02} alt={"Tower Placement"}/>Tower Placement</SwiperSlide>
                    <SwiperSlide><img src={Encyclopedia} alt={"Encyclopedia"}/>Encyclopedia</SwiperSlide>
                </Swiper>
            </Post>
        </div>
    )
}

export default Projects;