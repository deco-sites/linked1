import { useState } from "preact/hooks";
import Dropdown from "../../../components/ui/Content/Dropdown/index.tsx";
import LogoGroupComponent from "../../../components/ui/Content/LogoGroup/index.tsx";

function ParentComponent({ title, dropdownText, arrowIcon, button, logos }) {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (category: string) => {
        console.log(`Categoria selecionada: ${category}`);
        setSelectedCategory(category);
    };

    return (
        <>
            <Dropdown
                dropdownText={dropdownText}
                arrowIcon={arrowIcon}
                button={button}
                onCategoryChange={handleCategoryChange}
            />
            <LogoGroupComponent
                title={title}
                logos={logos}
                selectedCategory={selectedCategory}
            />
        </>
    );
}

export default ParentComponent;