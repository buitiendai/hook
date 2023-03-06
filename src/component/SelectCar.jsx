import { useState, useEffect } from "react";

function SelectCar() {
    let [selectedCar, setSelectedCar] = useState("Volvo")
    let [selectedColor, setSelectedColor] = useState("White")

    const choiceCar = (e) => {
        setSelectedCar(e.target.value);
    };

    const choiceColor = (e) => {
        setSelectedColor(e.target.value);
    }

    useEffect(() => {
        switch (selectedCar) {
            case "0":
                setSelectedCar("Volvo");
                break;
            case "1":
                setSelectedCar("Mercedes S600");
                break;
            case "2":
                setSelectedCar("Ford Everest");
                break;
            case "3":
                setSelectedCar("Hyundai SantaFe");
                break
            default:
        }
        switch (selectedColor) {
            case "0":
                setSelectedColor("White");
                break;
            case "1":
                setSelectedColor("Orange");
                break;
            case "2":
                setSelectedColor("Gray");
                break;
            case "3":
                setSelectedColor("Black");
                break
            default:
        }
    }, [selectedCar,selectedColor]);

    return (
        <>
            <h1>Select your car</h1>
            <div>
                <label>Select a car</label>
                <select onChange={(e) => choiceCar(e)}>
                    <option value={0}>Volvo C90</option>
                    <option value={1}>Mercedes S600</option>
                    <option value={2}>Ford Everest</option>
                    <option value={3}>Hyundai SantaFe</option>
                </select>
            </div>
            <div>
                <label>Select a color</label>
                <select onChange={(e) => choiceColor(e)}>
                    <option value={0}>White</option>
                    <option value={1}>Oragne</option>
                    <option value={2}>Gray</option>
                    <option value={3}>Black</option>
                </select>
            </div>
            <p>You selected a {selectedColor} - {selectedCar}</p>
        </>
    )
}

export default SelectCar;