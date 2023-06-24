// PetProfilePage
import { useState, useEffect, useRef} from "react";
import axios from "axios";

function PetProfilePage(props) {
    // const [selectedPet, setSelectedPet] = useState([]);


    return (

        <div>
            <h1>Pet Name</h1>
            <ul>
                <li>Pet Pictures Carousel</li>
                <li>Pet Description</li>
                <li>General Info</li>
                <li>Pet Bio</li>
                <li>Adopt Now Button</li>
            </ul>
        </div>
    )
}


export default PetProfilePage;
