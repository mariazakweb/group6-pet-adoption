// PetProfilePage
import { useState, useEffect, useRef} from "react";
import axios from "axios";

function PetProfilePage() {
    const [selectedPet, setSelectedPet] = useState([]);

    
    return (
        <h1>{"Pet Profile Page" && selectedPet.animal.name}</h1>
    )
}


export default PetProfilePage;